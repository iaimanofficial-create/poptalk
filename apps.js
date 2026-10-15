// ============================================================================
// POPTALK APPLICATION ENGINE (Fixed & Bulletproof)
// ============================================================================

var currentAge = 'junior';
var currentMode = 'picture';
var currentLevel = 'easy';

var timerState = 'idle';
var timerInterval = null;
var timeRemaining = 30;
var targetTime = 30;
var overtimeSeconds = 0;
var bufferUsed = false;
var twistTriggered = false;
var activePrompt = null;
var categoryDecks = {};

// Web Speech API Variables
var recognition = null;
var finalTranscript = '';
var accumulatedTranscript = '';
var isSpeakingActive = false;
var speechStartTime = 0;

// Sound Synthesizer Engine
var audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    var AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playThinkingChime() {
  try {
    var ctx = getAudioContext();
    if (!ctx) return;
    var now = ctx.currentTime;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(330, now + 0.8);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.9);
  } catch(e) {}
}

function playLaunchTone() {
  try {
    var ctx = getAudioContext();
    if (!ctx) return;
    var now = ctx.currentTime;
    var osc1 = ctx.createOscillator();
    var gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(392, now);
    gain1.gain.setValueAtTime(0.25, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.2);

    var osc2 = ctx.createOscillator();
    var gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(587.33, now + 0.15);
    gain2.gain.setValueAtTime(0.3, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.45);
  } catch(e) {}
}

function playCurveballAlert() {
  try {
    var ctx = getAudioContext();
    if (!ctx) return;
    var now = ctx.currentTime;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.35);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  } catch(e) {}
}

function playGoalChime() {
  try {
    var ctx = getAudioContext();
    if (!ctx) return;
    var now = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach(function(freq, idx) {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      var noteStart = now + (idx * 0.08);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteStart);
      gain.gain.setValueAtTime(0.2, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(noteStart);
      osc.stop(noteStart + 0.4);
    });
  } catch(e) {}
}

function playFanfare() {
  try {
    var ctx = getAudioContext();
    if (!ctx) return;
    var now = ctx.currentTime;
    [392, 493.88, 587.33, 783.99].forEach(function(freq, idx) {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      var startTime = now + (idx * 0.07);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.7);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.7);
    });
  } catch(e) {}
}

// Daily Streak Engine
function initStreak() {
  try {
    var today = new Date().toISOString().slice(0, 10);
    var lastPractice = localStorage.getItem('poptalk_last_date');
    var count = parseInt(localStorage.getItem('poptalk_streak_count') || '0', 10);

    if (lastPractice) {
      var lastDate = new Date(lastPractice);
      var currDate = new Date(today);
      var diffDays = Math.floor((currDate - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays > 1) {
        count = 0;
        localStorage.setItem('poptalk_streak_count', '0');
      }
    }

    var badge = document.getElementById('streakCount');
    if (badge) badge.innerText = count;

    var reminder = document.getElementById('dailyReminder');
    if (reminder) {
      if (lastPractice === today) {
        reminder.classList.add('done');
        reminder.innerHTML = '🌟 <strong>Great job!</strong> You completed today\'s practice session.';
      } else {
        reminder.classList.remove('done');
        reminder.innerHTML = '⚡ <strong>Practice Reminder:</strong> You haven\'t practiced your speaking today! Pick a track below.';
      }
    }
  } catch(e) {}
}

function recordStreakCompletion() {
  var count = 1;
  try {
    var today = new Date().toISOString().slice(0, 10);
    var lastPractice = localStorage.getItem('poptalk_last_date');
    count = parseInt(localStorage.getItem('poptalk_streak_count') || '0', 10);

    if (lastPractice !== today) {
      if (!lastPractice) {
        count = 1;
      } else {
        var lastDate = new Date(lastPractice);
        var currDate = new Date(today);
        var diffDays = Math.floor((currDate - lastDate) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          count += 1;
        } else {
          count = 1;
        }
      }
      localStorage.setItem('poptalk_last_date', today);
      localStorage.setItem('poptalk_streak_count', count.toString());
      var badge = document.getElementById('streakCount');
      if (badge) badge.innerText = count;
    }

    var reminder = document.getElementById('dailyReminder');
    if (reminder) {
      reminder.classList.add('done');
      reminder.innerHTML = '🌟 <strong>Great job!</strong> You completed today\'s practice session.';
    }
  } catch(e) {}
  return count;
}

function initSpeechRecognition() {
  try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = function(event) {
        var interim = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          var piece = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            accumulatedTranscript += ' ' + piece;
          } else {
            interim += piece;
          }
        }
        finalTranscript = (accumulatedTranscript + ' ' + interim).trim();
      };

      recognition.onend = function() {
        if (isSpeakingActive) {
          try { recognition.start(); } catch(e) {}
        }
      };
    }
  } catch(e) {}
}

function getTargetDuration(level) {
  if (level === 'easy') return 30;
  if (level === 'medium') return 45;
  if (level === 'hard') return 60;
  return 30;
}

// Global functions attached cleanly to window so buttons never freeze
window.selectTrack = function(ageKey, displayLabel) {
  getAudioContext();
  currentAge = ageKey;
  
  var label = document.getElementById('currentTrackLabel');
  if (label) label.innerText = displayLabel;
  
  var landing = document.getElementById('landingScreen');
  var arena = document.getElementById('arenaScreen');
  if (landing) landing.style.display = 'none';
  if (arena) arena.style.display = 'block';
  
  spinPrompt();
};

window.returnToLanding = function() {
  resetAllTimers();
  var landing = document.getElementById('landingScreen');
  var arena = document.getElementById('arenaScreen');
  if (arena) arena.style.display = 'none';
  if (landing) landing.style.display = 'block';
};

window.setLevel = function(lvl) {
  currentLevel = lvl;
  document.querySelectorAll('#levelGroup .pill').forEach(function(btn) {
    btn.classList.remove('active');
  });
  if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }
  
  resetAllTimers();
  renderScaffold();
  
  targetTime = getTargetDuration(currentLevel);
  timeRemaining = targetTime;
  updateTimerDisplay('00:' + (targetTime < 10 ? '0' : '') + targetTime, 'Ready to begin', 100);
};

window.setMode = function(mode) {
  currentMode = mode;
  document.querySelectorAll('#modeGroup .pill:not(.locked)').forEach(function(btn) {
    btn.classList.remove('active');
  });
  if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }
  
  var labels = { 
    picture: 'PICTURE TALK', 
    wyr: 'PICK A SIDE', 
    opinions: 'HOT TAKES',
    vocab: 'VOCAB YAP'
  };
  var badge = document.getElementById('categoryBadge');
  if (badge) badge.innerText = labels[mode] || 'PRACTICE';
  spinPrompt();
};

window.toggleIdeas = function() {
  var box = document.getElementById('scaffoldBox');
  if (box) {
    box.style.display = (box.style.display === 'block') ? 'none' : 'block';
  }
};

function getNextPrompt(pool, key) {
  if (!categoryDecks[key] || categoryDecks[key].length === 0) {
    categoryDecks[key] = pool.slice().sort(function() { return Math.random() - 0.5; });
    if (categoryDecks[key].length > 1 && categoryDecks[key][0] === activePrompt) {
      categoryDecks[key].push(categoryDecks[key].shift());
    }
  }
  return categoryDecks[key].shift();
}

window.spinPrompt = function() {
  resetAllTimers();
  var scaffoldBox = document.getElementById('scaffoldBox');
  if (scaffoldBox) scaffoldBox.style.display = 'none';

  if (typeof promptBank === 'undefined') return;

  var pool = promptBank.filter(function(p) {
    return p.age === currentAge && p.mode === currentMode;
  });
  if (pool.length === 0) return;

  var deckKey = currentAge + '_' + currentMode;
  activePrompt = getNextPrompt(pool, deckKey);

  var picFrame = document.getElementById('pictureFrame');
  var picImg = document.getElementById('pictureImg');
  if (picFrame && picImg) {
    if (currentMode === 'picture' && activePrompt.image) {
      picImg.src = activePrompt.image;
      picFrame.style.display = 'block';
    } else {
      picFrame.style.display = 'none';
      picImg.src = '';
    }
  }

  var vocabCard = document.getElementById('vocabCard');
  if (vocabCard) {
    if (currentMode === 'vocab' && activePrompt.vocab) {
      document.getElementById('vocabWord').innerText = activePrompt.vocab.word;
      document.getElementById('vocabPos').innerText = activePrompt.vocab.pos;
      document.getElementById('vocabMeaning').innerText = activePrompt.vocab.meaning;
      document.getElementById('vocabExample').innerText = '"' + activePrompt.vocab.example + '"';
      vocabCard.style.display = 'block';
    } else {
      vocabCard.style.display = 'none';
    }
  }

  targetTime = getTargetDuration(currentLevel);
  timeRemaining = targetTime;
  updateTimerDisplay('00:' + (targetTime < 10 ? '0' : '') + targetTime, 'Ready to begin', 100);

  var display = document.getElementById('promptDisplay');
  if (display) display.innerText = activePrompt.text;
  
  renderScaffold();
};

function renderScaffold() {
  if (!activePrompt) return;
  var content = document.getElementById('scaffoldContent');
  var starter = document.getElementById('lifeboatStarter');
  var words = document.getElementById('lifeboatWords');
  var tip = document.getElementById('lifeboatTip');

  var banner = document.getElementById('twistBanner');
  if (banner) {
    banner.style.display = 'none';
    banner.innerText = '';
  }

  if (content) {
    if (currentLevel === 'easy') {
      content.innerHTML = activePrompt.easy;
    } else if (currentLevel === 'medium') {
      content.innerHTML = '<strong>The Spark Hook:</strong> ' + activePrompt.medium;
    } else {
      var challengeType = (currentMode === 'picture') ? 'Plot Twist' : 'Debate Challenge';
      content.innerHTML = '<strong>Hard Challenge:</strong> Zero handrails! Speak for 60 seconds. A surprise ' + challengeType.toLowerCase() + ' will unlock halfway through!';
    }
  }

  if (starter) starter.innerText = activePrompt.starter || 'Start with your choice...';
  if (words) {
    words.innerHTML = (activePrompt.words || []).map(function(w) {
      return '<span class="power-pill">' + w + '</span>';
    }).join('');
  }
  if (tip) tip.innerText = activePrompt.tip || 'Take a breath and describe what you see.';
}

window.startThinking = function() {
  playThinkingChime();
  resetAllTimers();
  timerState = 'thinking';
  timeRemaining = 30;
  bufferUsed = false;
  
  var bufferBtn = document.getElementById('bufferBtn');
  var thinkBtn = document.getElementById('thinkBtn');
  var speakBtn = document.getElementById('speakBtn');
  
  if (bufferBtn) bufferBtn.style.display = 'block';
  if (thinkBtn) thinkBtn.style.display = 'none';
  if (speakBtn) speakBtn.innerText = "🚀 I'm Ready! Speak Now";

  updateTimerDisplay('00:30', '🧠 Thinking Time', 100);

  timerInterval = setInterval(function() {
    timeRemaining--;
    updateTimerDisplay('00:' + (timeRemaining < 10 ? '0' : '') + timeRemaining, '🧠 Thinking Time', (timeRemaining / 30) * 100);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      window.startSpeaking();
    }
  }, 1000);
};

window.addBufferTime = function() {
  if (bufferUsed) return;
  bufferUsed = true;
  timeRemaining += 15;
  var bufferBtn = document.getElementById('bufferBtn');
  if (bufferBtn) bufferBtn.style.display = 'none';
  updateTimerDisplay('00:' + (timeRemaining < 10 ? '0' : '') + timeRemaining, '🧠 Thinking Time (+15s)', 100);
};

window.startSpeaking = function() {
  playLaunchTone();
  clearInterval(timerInterval);
  timerState = 'speaking';
  twistTriggered = false;
  targetTime = getTargetDuration(currentLevel);
  timeRemaining = targetTime;
  overtimeSeconds = 0;

  finalTranscript = '';
  accumulatedTranscript = '';
  speechStartTime = Date.now();
  isSpeakingActive = true;
  
  if ((currentAge === 'teen' || currentAge === 'adult') && recognition) {
    try { recognition.start(); } catch(e) {}
  }

  var bufferBtn = document.getElementById('bufferBtn');
  var thinkBtn = document.getElementById('thinkBtn');
  var speakBtn = document.getElementById('speakBtn');
  var overtimeBadge = document.getElementById('overtimeBadge');
  var twistBanner = document.getElementById('twistBanner');

  if (bufferBtn) bufferBtn.style.display = 'none';
  if (thinkBtn) thinkBtn.style.display = 'none';
  if (speakBtn) {
    speakBtn.style.display = 'block';
    speakBtn.innerText = '✅ Finish Story';
    speakBtn.onclick = window.finishSpeech;
  }
  if (overtimeBadge) overtimeBadge.style.display = 'none';
  if (twistBanner) twistBanner.style.display = 'none';

  updateTimerDisplay('00:' + (timeRemaining < 10 ? '0' : '') + timeRemaining, '🎙️ Speaking Time (' + targetTime + 's Goal)', 100);

  timerInterval = setInterval(function() {
    if (timerState === 'speaking') {
      timeRemaining--;

      if (currentLevel === 'hard' && !twistTriggered && timeRemaining <= (targetTime / 2)) {
        twistTriggered = true;
        playCurveballAlert();
        var banner = document.getElementById('twistBanner');
        if (banner && activePrompt) {
          var isStoryMode = (currentMode === 'picture');
          var prefix = isStoryMode ? '⚡ PLOT TWIST:' : '⚡ DEBATE CHALLENGE:';
          var instruction = isStoryMode ? 'Fit this into your story now without stopping' : 'Answer this objection now without breaking your flow';
          banner.innerHTML = prefix + ' ' + activePrompt.hardTwist + '<br><span style="font-size:12.5px;font-weight:500;">(' + instruction + ')</span>';
          banner.style.display = 'block';
        }
      }

      if (timeRemaining > 0) {
        var pct = (timeRemaining / targetTime) * 100;
        updateTimerDisplay('00:' + (timeRemaining < 10 ? '0' : '') + timeRemaining, '🎙️ Speaking Time (' + targetTime + 's Goal)', pct);
      } else {
        timerState = 'overtime';
        playGoalChime();
        updateTimerDisplay('00:00', '🌟 Goal Reached! Wrap up your thought', 0);
        var badge = document.getElementById('overtimeBadge');
        if (badge) badge.style.display = 'inline-block';
      }
    } else if (timerState === 'overtime') {
      overtimeSeconds++;
      var badge = document.getElementById('overtimeBadge');
      if (badge) badge.innerText = 'Overtime: +0:' + (overtimeSeconds < 10 ? '0' : '') + overtimeSeconds + ' bonus';
    }
  }, 1000);
};

window.finishSpeech = function() {
  playFanfare();
  clearInterval(timerInterval);
  isSpeakingActive = false;
  if (recognition) {
    try { recognition.stop(); } catch(e) {}
  }

  var totalSpoken = (targetTime - Math.max(0, timeRemaining)) + overtimeSeconds;
  var streak = recordStreakCompletion();

  setTimeout(function() {
    openCelebrationModal(totalSpoken, finalTranscript.trim(), streak);
    resetAllTimers();
  }, 350);
};

function resetAllTimers() {
  clearInterval(timerInterval);
  timerState = 'idle';
  targetTime = getTargetDuration(currentLevel);
  
  var thinkBtn = document.getElementById('thinkBtn');
  var speakBtn = document.getElementById('speakBtn');
  var bufferBtn = document.getElementById('bufferBtn');
  var overtimeBadge = document.getElementById('overtimeBadge');
  var twistBanner = document.getElementById('twistBanner');
  var progressBar = document.getElementById('progressBar');

  if (thinkBtn) {
    thinkBtn.style.display = 'block';
    thinkBtn.innerText = '🧠 Start Thinking (30s)';
  }
  if (speakBtn) {
    speakBtn.style.display = 'block';
    speakBtn.innerText = '🎙️ Start Speaking';
    speakBtn.onclick = window.startSpeaking;
  }
  if (bufferBtn) bufferBtn.style.display = 'none';
  if (overtimeBadge) overtimeBadge.style.display = 'none';
  if (twistBanner) twistBanner.style.display = 'none';
  if (progressBar) progressBar.style.width = '100%';
}

function updateTimerDisplay(timeStr, label, pct) {
  var t = document.getElementById('timerText');
  var l = document.getElementById('timerPhaseLabel');
  var p = document.getElementById('progressBar');
  if (t) t.innerText = timeStr;
  if (l) l.innerText = label;
  if (p) p.style.width = pct + '%';
}

function openCelebrationModal(seconds, transcript, streak) {
  var modalDesc = document.getElementById('modalDesc');
  var modalTitle = document.getElementById('modalTitle');
  var modalIcon = document.getElementById('modalIcon');
  var waBtn = document.getElementById('modalWaBtn');

  if (modalIcon) modalIcon.innerText = (seconds < 15) ? '🌱' : '🌟';
  if (modalTitle) modalTitle.innerText = (seconds < 15) ? 'Good Effort!' : 'Practice Complete!';
  
  var encouragement = (seconds < 15)
    ? 'You spoke for <strong>' + seconds + ' seconds</strong>. Keep practicing to build out your thoughts!' 
    : 'Great work speaking out loud for <strong>' + seconds + ' seconds</strong> today!';

  var streakBanner = '<div style="background:#FFF3E6; border:1.5px solid #FBD0A7; border-radius:12px; padding:10px; margin:12px 0 14px 0; color:#B45309; font-weight:700; font-family:\'Fredoka\',cursive; font-size:14px;">🔥 ' + streak + ' Day Practice Streak Kept!</div>';

  if (currentAge === 'junior') {
    if (modalDesc) {
      modalDesc.innerHTML = encouragement + streakBanner +
        '<div style="background:#EDF3EF; border-radius:14px; padding:16px; margin-top:14px; text-align:left; border:1px solid #E2E8E5;">' +
          '<strong style="font-family:\'Fredoka\',cursive; color:#0A3323; font-size:15px; display:block; margin-bottom:6px;">Finding it difficult to turn thoughts into words?</strong>' +
          '<span style="font-size:13.5px; color:#52635B; line-height:1.5; display:block; margin-bottom:10px;">If your child freezes or struggles to organize ideas under time pressure, our live <strong>Communication & Confidence Program</strong> teaches the exact techniques to overcome brain freeze, structure thoughts, and turn ideas into clear sentences.</span>' +
          '<div style="font-size:12.5px; font-weight:600; color:#105666; line-height:1.45;">• Small interactive batches (strictly 5–6 students)<br>• Classes run 2 days a week<br>• Pure practical techniques — zero grammar drills</div>' +
        '</div>';
    }
    if (waBtn) {
      waBtn.style.display = 'block';
      waBtn.innerText = '💬 Book a Free Demo on WhatsApp';
      waBtn.href = 'https://wa.me/?text=Hi!%20My%20child%20just%20practiced%20on%20PopTalk%20and%20I%20would%20like%20to%20learn%20more%20about%20your%20Communication%20and%20Confidence%20live%20batches.';
    }
  } else {
    var wordsArray = transcript ? transcript.split(/\s+/).filter(function(w) { return w.length > 0; }) : [];
    var wordCount = wordsArray.length;
    var wpm = (seconds > 0) ? Math.round((wordCount / seconds) * 60) : 0;

    var vocabCheck = '';
    if (currentMode === 'vocab' && activePrompt && activePrompt.vocab) {
      var target = activePrompt.vocab.word.toLowerCase();
      var spokenClean = transcript.toLowerCase();
      if (spokenClean.indexOf(target) !== -1) {
        vocabCheck = '<div style="background:#EAF0E1; color:var(--moss-green); padding:4px 10px; border-radius:8px; font-weight:700; margin-top:6px; font-size:12px;">✅ Target Word Used: \'' + activePrompt.vocab.word + '\'</div>';
      } else {
        vocabCheck = '<div style="background:#FFF1F0; color:#B91C1C; padding:4px 10px; border-radius:8px; font-weight:600; margin-top:6px; font-size:12px;">⚠️ Target word \'' + activePrompt.vocab.word + '\' wasn\'t spotted — try again!</div>';
      }
    }

    var fillerList = ['um', 'uh', 'er', 'ah', 'like', 'actually', 'basically'];
    var fillerCount = 0;
    wordsArray.forEach(function(w) {
      var cleanWord = w.toLowerCase().replace(/[^a-z]/g, '');
      if (fillerList.indexOf(cleanWord) !== -1) fillerCount++;
    });

    var paceLabel = 'Conversational & Balanced';
    var paceColor = 'var(--moss-green)';
    if (wpm < 110 && wpm > 0) {
      paceLabel = 'Thoughtful / Deliberate';
      paceColor = 'var(--midnight-green)';
    } else if (wpm > 165) {
      paceLabel = 'Energetic / Fast';
      paceColor = '#D97706';
    }

    var metricsCard = '';
    if (wordCount > 0) {
      metricsCard = '<div style="background:#FFFFFF; border:1.5px solid #E2E8E5; border-radius:14px; padding:14px; margin:12px 0; text-align:left;">' +
        '<strong style="font-family:\'Fredoka\',cursive; font-size:14px; color:#105666; display:block; margin-bottom:8px;">🎙️ Your Delivery Breakdown:</strong>' +
        '<div style="font-size:13px; color:#293830; line-height:1.6; margin-bottom:10px;">' +
          '• <strong>Pace:</strong> ' + wpm + ' WPM <span style="font-weight:600; color:' + paceColor + ';">(' + paceLabel + ')</span><br>' +
          '• <strong>Words Spoken:</strong> ' + wordCount + ' words in ' + seconds + 's<br>' +
          '• <strong>Filler Words Detected:</strong> ' + fillerCount +
          vocabCheck +
        '</div>' +
        '<strong style="font-family:\'Fredoka\',cursive; font-size:13px; color:#52635B; display:block; margin-bottom:4px;">💬 What did you speak:</strong>' +
        '<div style="font-size:12.5px; color:#52635B; font-style:italic; background:#F8FAF9; padding:8px 10px; border-radius:8px; border:1px solid #E2E8E5; max-height:80px; overflow-y:auto; line-height:1.45;">"' + transcript + '"</div>' +
      '</div>';
    } else {
      metricsCard = '<div style="background:#FFFFFF; border:1.5px solid #E2E8E5; border-radius:14px; padding:12px 14px; margin:12px 0; text-align:left;">' +
        '<strong style="font-family:\'Fredoka\',cursive; font-size:13px; color:#105666; display:block; margin-bottom:4px;">📊 Quick Self-Check:</strong>' +
        '<div style="font-size:12.5px; color:#293830; line-height:1.55;">• Did you complete your thought before time ran out?<br>• Did you structure your reason and example clearly?<br>• <em>(Allow microphone access in your browser to see pace & word metrics!)</em></div>' +
      '</div>';
    }

    if (currentAge === 'teen') {
      if (modalDesc) {
        modalDesc.innerHTML = encouragement + streakBanner + metricsCard +
          '<div style="background:#EDF3EF; border-radius:14px; padding:14px; text-align:left; border:1px solid #E2E8E5;">' +
            '<strong style="font-family:\'Fredoka\',cursive; color:#0A3323; font-size:14px; display:block; margin-bottom:4px;">Want to speak up with natural confidence?</strong>' +
            '<span style="font-size:12.5px; color:#52635B; line-height:1.45; display:block; margin-bottom:8px;">Our live <strong>Communication & Confidence Program</strong> trains tweens and teens how to structure spontaneous arguments, debate dilemmas, and eliminate hesitations.</span>' +
            '<div style="font-size:12px; font-weight:600; color:#105666;">• Strictly 5–6 students per batch • Classes run 2 days a week</div>' +
          '</div>';
      }
      if (waBtn) {
        waBtn.style.display = 'block';
        waBtn.innerText = '💬 Inquire About Teen Batches';
        waBtn.href = 'https://wa.me/?text=Hi!%20I%20practiced%20on%20PopTalk%20and%20would%20like%20to%20learn%20more%20about%20your%20teen%20speaking%20batches.';
      }
    } else {
      if (modalDesc) {
        modalDesc.innerHTML = encouragement + streakBanner + metricsCard +
          '<div style="background:#EDF3EF; border-radius:14px; padding:14px; text-align:left; border:1px solid #E2E8E5;">' +
            '<strong style="font-family:\'Fredoka\',cursive; color:#0A3323; font-size:14px; display:block; margin-bottom:4px;">💡 Spontaneous Fluency Tip:</strong>' +
            '<span style="font-size:13px; color:#52635B; line-height:1.5; font-style:italic; display:block;">"Natural fluency comes from trusting your structure rather than searching for perfect vocabulary. Keep practicing short, daily reps."</span>' +
          '</div>';
      }
      if (waBtn) waBtn.style.display = 'none';
    }
  }

  var modal = document.getElementById('generalModal');
  if (modal) modal.style.display = 'flex';
}

window.openLockedModal = function(categoryName) {
  var modalTitle = document.getElementById('modalTitle');
  var modalDesc = document.getElementById('modalDesc');
  var waBtn = document.getElementById('modalWaBtn');
  var modal = document.getElementById('generalModal');

  if (modalTitle) modalTitle.innerText = 'Unlock PopTalk Pro';
  if (modalDesc) {
    modalDesc.innerHTML = '<strong>' + categoryName + '</strong> is part of the PopTalk Pro Practice Pack.<br><br>Unlock all 7 exclusive modes including <strong>Finish It, Echo Story, Act It Out, and The Big Pitch</strong>, with 200+ prompt cards across all age tracks.<br><br>✨ <em>New creative categories and weekly challenge packs are added regularly!</em>';
  }
  if (waBtn) {
    waBtn.style.display = 'block';
    waBtn.innerText = '⚡ Get PopTalk Pro Access';
    waBtn.href = 'https://wa.me/?text=Hi!%20I%20want%20to%20unlock%20PopTalk%20Pro%20access%20for%20all%20speaking%20categories.';
  }
  if (modal) modal.style.display = 'flex';
};

window.closeModal = function() {
  var modal = document.getElementById('generalModal');
  if (modal) modal.style.display = 'none';
  spinPrompt();
};

window.addEventListener('DOMContentLoaded', function() {
  initStreak();
  initSpeechRecognition();
});
