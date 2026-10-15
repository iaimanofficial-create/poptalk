// ============================================================================
// POPTALK APPLICATION ENGINE (Timers, Speech Recognition, Streaks, Audio FX)
// ============================================================================

let currentAge = 'junior';
let currentMode = 'picture';
let currentLevel = 'easy';

let timerState = 'idle';
let timerInterval = null;
let timeRemaining = 30;
let targetTime = 30;
let overtimeSeconds = 0;
let bufferUsed = false;
let twistTriggered = false;
let activePrompt = null;
let categoryDecks = {}; // Anti-Repeat Shuffle Engine

// Web Speech API Engine with Android Multi-Sentence Fix
let recognition = null;
let finalTranscript = '';
let accumulatedTranscript = '';
let isSpeakingActive = false;
let speechStartTime = 0;

// ============================================================================
// WEB AUDIO SYNTHESIZER SOUND ENGINE (Zero MP3s, Instant 0ms Playback)
// ============================================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// 1. Thinking Bell: Calm, gentle resonant bell
function playThinkingChime() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(440, now); // A4 note
  osc.frequency.exponentialRampToValueAtTime(330, now + 0.8);

  gain.gain.setValueAtTime(0.3, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.9);
}

// 2. Launch Tone: Energetic rising two-note chime
function playLaunchTone() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  // First Tone
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = 'triangle';
  osc1.frequency.setValueAtTime(392, now); // G4
  gain1.gain.setValueAtTime(0.25, now);
  gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  osc1.start(now);
  osc1.stop(now + 0.2);

  // Second Higher Tone
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(587.33, now + 0.15); // D5
  gain2.gain.setValueAtTime(0.3, now + 0.15);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.start(now + 0.15);
  osc2.stop(now + 0.45);
}

// 3. Curveball / Twist Alert: Playful frequency drop
function playCurveballAlert() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(650, now);
  osc.frequency.exponentialRampToValueAtTime(220, now + 0.35);

  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.35);
}

// 4. Goal Reached Chime: Cheerful sparkle chime
function playGoalChime() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const noteStart = now + (idx * 0.08);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, noteStart);

    gain.gain.setValueAtTime(0.2, noteStart);
    gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(noteStart);
    osc.stop(noteStart + 0.4);
  });
}

// 5. Celebration Fanfare: Major chord celebratory flourish
function playFanfare() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  const chord = [392, 493.88, 587.33, 783.99]; // G Major
  chord.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const startTime = now + (idx * 0.07);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.25, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.7);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.7);
  });
}

// Daily Practice Streak Engine
function initStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const lastPractice = localStorage.getItem('poptalk_last_date');
  let count = parseInt(localStorage.getItem('poptalk_streak_count') || '0', 10);

  if (lastPractice) {
    const lastDate = new Date(lastPractice);
    const currDate = new Date(today);
    const diffDays = Math.floor((currDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      count = 0;
      localStorage.setItem('poptalk_streak_count', '0');
    }
  }
  const badge = document.getElementById('streakCount');
  if (badge) badge.innerText = count;
}

function recordStreakCompletion() {
  const today = new Date().toISOString().slice(0, 10);
  const lastPractice = localStorage.getItem('poptalk_last_date');
  let count = parseInt(localStorage.getItem('poptalk_streak_count') || '0', 10);

  if (lastPractice !== today) {
    if (!lastPractice) {
      count = 1;
    } else {
      const lastDate = new Date(lastPractice);
      const currDate = new Date(today);
      const diffDays = Math.floor((currDate - lastDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        count += 1;
      } else {
        count = 1;
      }
    }
    localStorage.setItem('poptalk_last_date', today);
    localStorage.setItem('poptalk_streak_count', count.toString());
    const badge = document.getElementById('streakCount');
    if (badge) badge.innerText = count;
  }
  return count;
}

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const piece = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          accumulatedTranscript += ' ' + piece;
        } else {
          interim += piece;
        }
      }
      finalTranscript = (accumulatedTranscript + ' ' + interim).trim();
    };

    recognition.onend = () => {
      if (isSpeakingActive) {
        try { recognition.start(); } catch(e) {}
      }
    };

    recognition.onerror = (event) => {
      console.log('Speech recognition notice:', event.error);
    };
  }
}

function getTargetDuration(level) {
  if (level === 'easy') return 30;
  if (level === 'medium') return 45;
  if (level === 'hard') return 60;
  return 30;
}

function selectTrack(ageKey, displayLabel) {
  getAudioContext(); // Pre-warm audio on user touch
  currentAge = ageKey;
  document.getElementById('currentTrackLabel').innerText = displayLabel;
  document.getElementById('landingScreen').style.display = 'none';
  document.getElementById('arenaScreen').style.display = 'block';
  spinPrompt();
}

function returnToLanding() {
  resetAllTimers();
  document.getElementById('arenaScreen').style.display = 'none';
  document.getElementById('landingScreen').style.display = 'block';
}

function setLevel(lvl) {
  currentLevel = lvl;
  document.querySelectorAll('#levelGroup .pill').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  
  resetAllTimers();
  renderScaffold();
  
  targetTime = getTargetDuration(currentLevel);
  timeRemaining = targetTime;
  updateTimerDisplay('00:' + (targetTime < 10 ? '0' : '') + targetTime, 'Ready to begin', 100);
}

function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll('#modeGroup .pill:not(.locked)').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  
  const labels = { 
    picture: 'PICTURE TALK', 
    wyr: 'PICK A SIDE', 
    opinions: 'HOT TAKES',
    vocab: 'VOCAB YAP'
  };
  document.getElementById('categoryBadge').innerText = labels[mode] || 'PRACTICE';
  spinPrompt();
}

function toggleIdeas() {
  const box = document.getElementById('scaffoldBox');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}

// Anti-Repeat Card Deck Engine
function getNextPrompt(pool, key) {
  if (!categoryDecks[key] || categoryDecks[key].length === 0) {
    categoryDecks[key] = [...pool].sort(() => Math.random() - 0.5);
    if (categoryDecks[key].length > 1 && categoryDecks[key][0] === activePrompt) {
      categoryDecks[key].push(categoryDecks[key].shift());
    }
  }
  return categoryDecks[key].shift();
}

function spinPrompt() {
  resetAllTimers();
  document.getElementById('scaffoldBox').style.display = 'none';

  const pool = promptBank.filter(p => p.age === currentAge && p.mode === currentMode);
  if (pool.length === 0) return;

  const deckKey = `${currentAge}_${currentMode}`;
  activePrompt = getNextPrompt(pool, deckKey);

  // Picture display for Junior
  const picFrame = document.getElementById('pictureFrame');
  const picImg = document.getElementById('pictureImg');
  if (currentMode === 'picture' && activePrompt.image) {
    picImg.src = activePrompt.image;
    picFrame.style.display = 'block';
  } else {
    picFrame.style.display = 'none';
    picImg.src = '';
  }

  // Vocab card display
  const vocabCard = document.getElementById('vocabCard');
  if (currentMode === 'vocab' && activePrompt.vocab) {
    document.getElementById('vocabWord').innerText = activePrompt.vocab.word;
    document.getElementById('vocabPos').innerText = activePrompt.vocab.pos;
    document.getElementById('vocabMeaning').innerText = activePrompt.vocab.meaning;
    document.getElementById('vocabExample').innerText = `"${activePrompt.vocab.example}"`;
    vocabCard.style.display = 'block';
  } else {
    vocabCard.style.display = 'none';
  }

  targetTime = getTargetDuration(currentLevel);
  timeRemaining = targetTime;
  updateTimerDisplay('00:' + (targetTime < 10 ? '0' : '') + targetTime, 'Ready to begin', 100);

  document.getElementById('promptDisplay').innerText = activePrompt.text;
  renderScaffold();
}

function renderScaffold() {
  if (!activePrompt) return;
  const content = document.getElementById('scaffoldContent');
  const starter = document.getElementById('lifeboatStarter');
  const words = document.getElementById('lifeboatWords');
  const tip = document.getElementById('lifeboatTip');

  document.getElementById('twistBanner').style.display = 'none';
  document.getElementById('twistBanner').innerText = '';

  if (currentLevel === 'easy') {
    content.innerHTML = activePrompt.easy;
  } else if (currentLevel === 'medium') {
    content.innerHTML = '<strong>The Spark Hook:</strong> ' + activePrompt.medium;
  } else {
    const challengeType = (currentMode === 'picture') ? 'Plot Twist' : 'Debate Challenge';
    content.innerHTML = `<strong>Hard Challenge:</strong> Zero handrails! Speak for 60 seconds. A surprise ${challengeType.toLowerCase()} will unlock halfway through!`;
  }

  starter.innerText = activePrompt.starter || 'Start with your choice...';
  words.innerHTML = (activePrompt.words || []).map(w => `<span class="power-pill">${w}</span>`).join('');
  tip.innerText = activePrompt.tip || 'Take a breath and describe what you see.';
}

// Timer Controls with Sound FX Integration
function startThinking() {
  playThinkingChime(); // Sound FX: Thinking Bell
  resetAllTimers();
  timerState = 'thinking';
  timeRemaining = 30;
  bufferUsed = false;
  document.getElementById('bufferBtn').style.display = 'block';
  document.getElementById('thinkBtn').style.display = 'none';
  document.getElementById('speakBtn').innerText = '🚀 I\'m Ready! Speak Now';

  updateTimerDisplay('00:30', '🧠 Thinking Time', 100);

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay('00:' + (timeRemaining < 10 ? '0' : '') + timeRemaining, '🧠 Thinking Time', (timeRemaining / 30) * 100);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      startSpeaking();
    }
  }, 1000);
}

function addBufferTime() {
  if (bufferUsed) return;
  bufferUsed = true;
  timeRemaining += 15;
  document.getElementById('bufferBtn').style.display = 'none';
  updateTimerDisplay('00:' + (timeRemaining < 10 ? '0' : '') + timeRemaining, '🧠 Thinking Time (+15s)', 100);
}

function startSpeaking() {
  playLaunchTone(); // Sound FX: Launch Tone
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

  document.getElementById('bufferBtn').style.display = 'none';
  document.getElementById('thinkBtn').style.display = 'none';
  document.getElementById('speakBtn').style.display = 'block';
  document.getElementById('speakBtn').innerText = '✅ Finish Story';
  document.getElementById('overtimeBadge').style.display = 'none';
  document.getElementById('twistBanner').style.display = 'none';

  updateTimerDisplay('00:' + (timeRemaining < 10 ? '0' : '') + timeRemaining, '🎙️ Speaking Time (' + targetTime + 's Goal)', 100);

  timerInterval = setInterval(() => {
    if (timerState === 'speaking') {
      timeRemaining--;

      // Halfway Curveball Trigger with Audio Alert
      if (currentLevel === 'hard' && !twistTriggered && timeRemaining <= (targetTime / 2)) {
        twistTriggered = true;
        playCurveballAlert(); // Sound FX: Curveball Alert
        const banner = document.getElementById('twistBanner');
        
        const isStoryMode = (currentMode === 'picture');
        const prefix = isStoryMode ? '⚡ PLOT TWIST:' : '⚡ DEBATE CHALLENGE:';
        const instruction = isStoryMode ? 'Fit this into your story now without stopping' : 'Answer this objection now without breaking your flow';

        banner.innerHTML = `${prefix} ${activePrompt.hardTwist}<br><span style="font-size:12.5px;font-weight:500;">(${instruction})</span>`;
        banner.style.display = 'block';
      }

      if (timeRemaining > 0) {
        const pct = (timeRemaining / targetTime) * 100;
        updateTimerDisplay('00:' + (timeRemaining < 10 ? '0' : '') + timeRemaining, '🎙️ Speaking Time (' + targetTime + 's Goal)', pct);
      } else {
        // Goal Reached: Trigger Chime & Shift to Overtime
        timerState = 'overtime';
        playGoalChime(); // Sound FX: Goal Reached Chime
        updateTimerDisplay('00:00', '🌟 Goal Reached! Wrap up your thought', 0);
        document.getElementById('overtimeBadge').style.display = 'inline-block';
      }
    } else if (timerState === 'overtime') {
      overtimeSeconds++;
      document.getElementById('overtimeBadge').innerText = `Overtime: +0:${overtimeSeconds < 10 ? '0' : ''}${overtimeSeconds} bonus`;
    }
  }, 1000);

  document.getElementById('speakBtn').onclick = finishSpeech;
}

function finishSpeech() {
  playFanfare(); // Sound FX: Celebration Fanfare
  clearInterval(timerInterval);
  isSpeakingActive = false;
  if (recognition) {
    try { recognition.stop(); } catch(e) {}
  }

  const totalSpoken = (targetTime - Math.max(0, timeRemaining)) + overtimeSeconds;
  const streak = recordStreakCompletion();

  setTimeout(() => {
    openCelebrationModal(totalSpoken, finalTranscript.trim(), streak);
    resetAllTimers();
  }, 350);
}

function resetAllTimers() {
  clearInterval(timerInterval);
  timerState = 'idle';
  targetTime = getTargetDuration(currentLevel);
  
  document.getElementById('thinkBtn').style.display = 'block';
  document.getElementById('thinkBtn').innerText = '🧠 Start Thinking (30s)';
  document.getElementById('speakBtn').style.display = 'block';
  document.getElementById('speakBtn').innerText = '🎙️ Start Speaking';
  document.getElementById('speakBtn').onclick = startSpeaking;
  
  document.getElementById('bufferBtn').style.display = 'none';
  document.getElementById('overtimeBadge').style.display = 'none';
  document.getElementById('twistBanner').style.display = 'none';
  document.getElementById('progressBar').style.width = '100%';
}

function updateTimerDisplay(timeStr, label, pct) {
  document.getElementById('timerText').innerText = timeStr;
  document.getElementById('timerPhaseLabel').innerText = label;
  document.getElementById('progressBar').style.width = pct + '%';
}

function openCelebrationModal(seconds, transcript, streak) {
  const modalDesc = document.getElementById('modalDesc');
  const modalTitle = document.getElementById('modalTitle');
  const modalIcon = document.getElementById('modalIcon');
  const waBtn = document.getElementById('modalWaBtn');

  modalIcon.innerText = seconds < 15 ? '🌱' : '🌟';
  modalTitle.innerText = seconds < 15 ? 'Good Effort!' : 'Practice Complete!';
  
  let encouragement = seconds < 15 
    ? `You spoke for <strong>${seconds} seconds</strong>. Keep practicing to build out your thoughts!` 
    : `Great work speaking out loud for <strong>${seconds} seconds</strong> today!`;

  const streakBanner = `
    <div style="background:#FFF3E6; border:1.5px solid #FBD0A7; border-radius:12px; padding:10px; margin:12px 0 14px 0; color:#B45309; font-weight:700; font-family:'Fredoka',cursive; font-size:14px;">
      🔥 ${streak} Day Practice Streak Kept!
    </div>
  `;

  if (currentAge === 'junior') {
    modalDesc.innerHTML = `
      ${encouragement}
      ${streakBanner}
      <div style="background:#EDF3EF; border-radius:14px; padding:16px; margin-top:14px; text-align:left; border:1px solid #E2E8E5;">
        <strong style="font-family:'Fredoka',cursive; color:#0A3323; font-size:15px; display:block; margin-bottom:6px;">
          Finding it difficult to turn thoughts into words?
        </strong>
        <span style="font-size:13.5px; color:#52635B; line-height:1.5; display:block; margin-bottom:10px;">
          If your child freezes or struggles to organize ideas under time pressure, our live <strong>Communication & Confidence Program</strong> teaches the exact techniques to overcome brain freeze, structure thoughts, and turn ideas into clear sentences.
        </span>
        <div style="font-size:12.5px; font-weight:600; color:#105666; line-height:1.45;">
          • Small interactive batches (strictly 5–6 students)<br>
          • Classes run 2 days a week<br>
          • Pure practical techniques — zero grammar drills
        </div>
      </div>
    `;
    waBtn.style.display = 'block';
    waBtn.innerText = '💬 Book a Free Demo on WhatsApp';
    waBtn.href = 'https://wa.me/?text=Hi!%20My%20child%20just%20practiced%20on%20PopTalk%20and%20I%20would%20like%20to%20learn%20more%20about%20your%20Communication%20and%20Confidence%20live%20batches.';
  } else {
    const wordsArray = transcript ? transcript.split(/\s+/).filter(w => w.length > 0) : [];
    const wordCount = wordsArray.length;
    const wpm = seconds > 0 ? Math.round((wordCount / seconds) * 60) : 0;

    let vocabCheck = '';
    if (currentMode === 'vocab' && activePrompt && activePrompt.vocab) {
      const target = activePrompt.vocab.word.toLowerCase();
      const spokenClean = transcript.toLowerCase();
      if (spokenClean.includes(target)) {
        vocabCheck = `<div style="background:#EAF0E1; color:var(--moss-green); padding:4px 10px; border-radius:8px; font-weight:700; margin-top:6px; font-size:12px;">✅ Target Word Used: '${activePrompt.vocab.word}'</div>`;
      } else {
        vocabCheck = `<div style="background:#FFF1F0; color:#B91C1C; padding:4px 10px; border-radius:8px; font-weight:600; margin-top:6px; font-size:12px;">⚠️ Target word '${activePrompt.vocab.word}' wasn't spotted — try again!</div>`;
      }
    }

    const fillerList = ['um', 'uh', 'er', 'ah', 'like', 'actually', 'basically'];
    let fillerCount = 0;
    wordsArray.forEach(w => {
      const cleanWord = w.toLowerCase().replace(/[^a-z]/g, '');
      if (fillerList.includes(cleanWord)) fillerCount++;
    });

    let paceLabel = 'Conversational & Balanced';
    let paceColor = 'var(--moss-green)';
    if (wpm < 110 && wpm > 0) {
      paceLabel = 'Thoughtful / Deliberate';
      paceColor = 'var(--midnight-green)';
    } else if (wpm > 165) {
      paceLabel = 'Energetic / Fast';
      paceColor = '#D97706';
    }

    const metricsCard = wordCount > 0 ? `
      <div style="background:#FFFFFF; border:1.5px solid #E2E8E5; border-radius:14px; padding:14px; margin:12px 0; text-align:left;">
        <strong style="font-family:'Fredoka',cursive; font-size:14px; color:#105666; display:block; margin-bottom:8px;">
          🎙️ Your Delivery Breakdown:
        </strong>
        <div style="font-size:13px; color:#293830; line-height:1.6; margin-bottom:10px;">
          • <strong>Pace:</strong> ${wpm} WPM <span style="font-weight:600; color:${paceColor};">(${paceLabel})</span><br>
          • <strong>Words Spoken:</strong> ${wordCount} words in ${seconds}s<br>
          • <strong>Filler Words Detected:</strong> ${fillerCount}
          ${vocabCheck}
        </div>
        <strong style="font-family:'Fredoka',cursive; font-size:13px; color:#52635B; display:block; margin-bottom:4px;">
          💬 What did you speak:
        </strong>
        <div style="font-size:12.5px; color:#52635B; font-style:italic; background:#F8FAF9; padding:8px 10px; border-radius:8px; border:1px solid #E2E8E5; max-height:80px; overflow-y:auto; line-height:1.45;">
          "${transcript}"
        </div>
      </div>
    ` : `
      <div style="background:#FFFFFF; border:1.5px solid #E2E8E5; border-radius:14px; padding:12px 14px; margin:12px 0; text-align:left;">
        <strong style="font-family:'Fredoka',cursive; font-size:13px; color:#105666; display:block; margin-bottom:4px;">
          📊 Quick Self-Check:
        </strong>
        <div style="font-size:12.5px; color:#293830; line-height:1.55;">
          • Did you complete your thought before time ran out?<br>
          • Did you structure your reason and example clearly?<br>
          • <em>(Allow microphone access in your browser to see pace & word metrics!)</em>
        </div>
      </div>
    `;

    if (currentAge === 'teen') {
      modalDesc.innerHTML = `
        ${encouragement}
        ${streakBanner}
        ${metricsCard}
        <div style="background:#EDF3EF; border-radius:14px; padding:14px; text-align:left; border:1px solid #E2E8E5;">
          <strong style="font-family:'Fredoka',cursive; color:#0A3323; font-size:14px; display:block; margin-bottom:4px;">
            Want to speak up with natural confidence?
          </strong>
          <span style="font-size:12.5px; color:#52635B; line-height:1.45; display:block; margin-bottom:8px;">
            Our live <strong>Communication & Confidence Program</strong> trains tweens and teens how to structure spontaneous arguments, debate dilemmas, and eliminate hesitations.
          </span>
          <div style="font-size:12px; font-weight:600; color:#105666;">
            • Strictly 5–6 students per batch • Classes run 2 days a week
          </div>
        </div>
      `;
      waBtn.style.display = 'block';
      waBtn.innerText = '💬 Inquire About Teen Batches';
      waBtn.href = 'https://wa.me/?text=Hi!%20I%20practiced%20on%20PopTalk%20and%20would%20like%20to%20learn%20more%20about%20your%20teen%20speaking%20batches.';
    } else {
      modalDesc.innerHTML = `
        ${encouragement}
        ${streakBanner}
        ${metricsCard}
        <div style="background:#EDF3EF; border-radius:14px; padding:14px; text-align:left; border:1px solid #E2E8E5;">
          <strong style="font-family:'Fredoka',cursive; color:#0A3323; font-size:14px; display:block; margin-bottom:4px;">
            💡 Spontaneous Fluency Tip:
          </strong>
          <span style="font-size:13px; color:#52635B; line-height:1.5; font-style:italic; display:block;">
            "Natural fluency comes from trusting your structure rather than searching for perfect vocabulary. Keep practicing short, daily reps."
          </span>
        </div>
      `;
      waBtn.style.display = 'none';
    }
  }
  
  document.getElementById('generalModal').style.display = 'flex';
}

function openLockedModal(categoryName) {
  document.getElementById('modalIcon').innerText = '🔒';
  document.getElementById('modalTitle').innerText = 'Unlock PopTalk Pro';
  document.getElementById('modalDesc').innerHTML = `
    <strong>${categoryName}</strong> is part of the PopTalk Pro Practice Pack.<br><br>
    Unlock all 7 exclusive modes including <strong>Finish It, Echo Story, Act It Out, and The Big Pitch</strong>, with 200+ prompt cards across all age tracks.<br><br>
    ✨ <em>New creative categories and weekly challenge packs are added regularly!</em>
  `;
  
  const waBtn = document.getElementById('modalWaBtn');
  waBtn.style.display = 'block';
  waBtn.innerText = '⚡ Get PopTalk Pro Access';
  waBtn.href = `https://wa.me/?text=Hi!%20I%20want%20to%20unlock%20PopTalk%20Pro%20access%20for%20all%20speaking%20categories.`;
  
  document.getElementById('generalModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('generalModal').style.display = 'none';
  spinPrompt();
}

window.addEventListener('DOMContentLoaded', () => {
  initStreak();
  initSpeechRecognition();
});
