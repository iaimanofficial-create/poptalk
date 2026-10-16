// ==========================================
// POPTALK MASTER PROMPTS BANK (prompts.js)
// ==========================================

const allPrompts = [
  // ==========================================
  // 1. PICTURE TALK (mode: 'scene')
  // ==========================================
  // --- JUNIOR (Ages 5-8) ---
  {
    age: 'junior', mode: 'scene',
    text: 'A busy treehouse workshop full of chattering woodland creatures building miniature wooden toys.',
    easy: '<strong>1. Look:</strong> Name two animals you see in the workshop.<br><strong>2. Action:</strong> What kind of toy are they building right now?<br><strong>3. Imagine:</strong> What is the funniest sound coming from inside the treehouse?',
    medium: 'Describe what the animals are building and what happens if a toy accidentally rolls out the door!',
    hardTwist: 'One of the creatures accidentally glued their paws to a tabletop—how do they solve it?',
    starter: 'Looking into this busy treehouse, I can see...',
    words: ['Busy', 'Careful'],
    tip: 'Look closely at the table and describe the tools they are using.'
  },
  {
    age: 'junior', mode: 'scene',
    text: 'A colorful playground where the swings fly extra high into fluffy, cotton-candy clouds.',
    easy: '<strong>1. Look:</strong> What bright colors do you notice first?<br><strong>2. Action:</strong> How does it feel when the swing pushes into the cloud?<br><strong>3. Imagine:</strong> What flavor does the cloud taste like?',
    medium: 'Describe who is on the swings and what the whole park looks like from high above!',
    hardTwist: 'A friendly flying bird stops on your swing chain to ask for directions!',
    starter: 'As I swing higher and higher, the clouds look...',
    words: ['Fluffy', 'Soaring'],
    tip: 'Close your eyes for one second and imagine the breeze on your face.'
  },
  {
    age: 'junior', mode: 'scene',
    text: 'An underwater coral reef school where baby turtles and clownfish learn how to swim in formation.',
    easy: '<strong>1. Look:</strong> What sea creatures are sitting together in the coral classroom?<br><strong>2. Action:</strong> What skill is the teacher demonstrating right now?<br><strong>3. Imagine:</strong> What happens when a tickly bubble floats past?',
    medium: 'Describe the underwater school and explain the most important ocean rule they are learning.',
    hardTwist: 'A curious dolphin accidentally splashes through the classroom window during lesson time!',
    starter: 'Down beneath the blue waves, the turtle teacher is...',
    words: ['Sparkling', 'Gliding'],
    tip: 'Think about how fish move their fins smoothly together.'
  },
  {
    age: 'junior', mode: 'scene',
    text: 'A lively kitchen counter where breakfast ingredients have come to life and are organizing the morning meal.',
    easy: '<strong>1. Look:</strong> Which breakfast food is wearing the chef hat?<br><strong>2. Action:</strong> What job did the berries and toast get assigned?<br><strong>3. Imagine:</strong> Where is the orange juice hurrying to go?',
    medium: 'Tell the story of how the breakfast team gets everything plated before the family wakes up!',
    hardTwist: 'The honey jar spilled a sticky puddle right in the center of the walkway!',
    starter: 'On the kitchen counter, the morning food crew is...',
    words: ['Cheerful', 'Hustling'],
    tip: 'Imagine eggs, spoons, and fruit working together like little builders.'
  },
  {
    age: 'junior', mode: 'scene',
    text: 'A starry campsite where a group of young campers gather around a glowing lantern to read a map.',
    easy: '<strong>1. Look:</strong> What items are resting near the tent door?<br><strong>2. Action:</strong> What path are their fingers tracing on the map?<br><strong>3. Imagine:</strong> What nocturnal animal is peeking from the bushes?',
    medium: 'Describe the scene and explain what treasure or secret viewpoint the campers hope to reach tomorrow!',
    hardTwist: 'A sudden friendly breeze picks up the map and carries it into the branches above!',
    starter: 'Under the glow of the lantern, the campsite feels...',
    words: ['Quiet', 'Mysterious'],
    tip: 'Describe the contrast between the dark forest and the warm lantern glow.'
  },

  // --- TEEN (Ages 9-17) ---
  {
    age: 'teen', mode: 'scene',
    text: 'A frantic backstage dressing room two minutes before the opening curtain of the annual school theater production.',
    easy: '<strong>1. Focus:</strong> Describe the energy and noise in the room.<br><strong>2. Detail:</strong> Point out one missing prop someone is searching for.<br><strong>3. Outcome:</strong> How does the director calm everyone down before the buzzer?',
    medium: 'Paint a vivid picture of the backstage chaos and explain how the team recovers before lights up.',
    hardTwist: 'The main lead suddenly loses their voice thirty seconds before their opening line!',
    starter: 'Backstage was pure organized chaos, with people running in every direction...',
    words: ['Frantic', 'Preparation'],
    tip: 'Use sensory words: rustling costumes, bright stage lights, hushed whispers.'
  },
  {
    age: 'teen', mode: 'scene',
    text: 'A high school robotics laboratory late on a Friday evening, scattered with circuits, gears, and unfinished prototypes.',
    easy: '<strong>1. Focus:</strong> What part of the robot is being tested right now?<br><strong>2. Detail:</strong> Describe the whiteboard covered in equations in the corner.<br><strong>3. Outcome:</strong> What goal must the team reach before competition tomorrow?',
    medium: 'Describe the workspace atmosphere and explain why this project means so much to the students.',
    hardTwist: 'A motor suddenly burns out, leaving the team with only spare parts from a recycling bin!',
    starter: 'Walking into the robotics lab, the smell of soldering irons and focus hits you...',
    words: ['Prototype', 'Calibrate'],
    tip: 'Contrast the quiet clock ticking on the wall with the focused energy of the team.'
  },
  {
    age: 'teen', mode: 'scene',
    text: 'A crowded subway car during peak rush hour where an unexpected busker starts playing a captivating acoustic song.',
    easy: '<strong>1. Focus:</strong> Describe how people look before the music starts.<br><strong>2. Detail:</strong> Notice how one commuter slowly takes out an earphone to listen.<br><strong>3. Outcome:</strong> How does the atmosphere in the train change as doors close?',
    medium: 'Describe the contrast between tired, silent commuters and the sudden uplifting acoustic rhythm.',
    hardTwist: 'The train gets delayed in a tunnel just as the musician reaches the final chorus!',
    starter: 'At first, the subway car was filled with tired, silent stares until...',
    words: ['Commute', 'Resonance'],
    tip: 'Pay attention to how body language shifts when unexpected art enters an ordinary place.'
  },
  {
    age: 'teen', mode: 'scene',
    text: 'A community farmers market early on a crisp Saturday morning, full of crates of fresh produce and artisan bakeries.',
    easy: '<strong>1. Focus:</strong> Describe the sounds, smells, and colors of the stalls.<br><strong>2. Detail:</strong> Point out a vendor explaining how their family recipe is made.<br><strong>3. Outcome:</strong> What makes this market feel different from a typical grocery store?',
    medium: 'Describe the lively morning market and explain how community connections make it special.',
    hardTwist: 'A family’s golden retriever gets loose and weaves through the fruit displays without breaking anything!',
    starter: 'The morning air at the market was crisp and filled with the scent of fresh bread...',
    words: ['Vibrant', 'Handcrafted'],
    tip: 'Incorporate sounds: crates clattering, friendly bargaining, steam from coffee carts.'
  },

  // --- ADULT (Ages 18+) ---
  {
    age: 'adult', mode: 'scene',
    text: 'A bustling co-working lounge at 3 PM on a Tuesday, filled with remote workers, espresso machines, and quiet negotiations.',
    easy: '<strong>1. Anchor:</strong> Describe the visual layout and ambient noise.<br><strong>2. Observation:</strong> Highlight the contrast between someone on a high-stakes call and someone quietly reading.<br><strong>3. Reflection:</strong> What does this space reveal about modern work culture?',
    medium: 'Describe the environment and analyze how modern professional spaces balance collaboration with individual isolation.',
    hardTwist: 'The building’s high-speed Wi-Fi cuts out completely during the middle of everyone’s afternoon calls!',
    starter: 'Stepping into the shared workspace, the hum of laptop fans and low chatter creates...',
    words: ['Atmospheric', 'Autonomous'],
    tip: 'Focus on small behavioral cues: body language on video calls, coffee cup arrangements.'
  },
  {
    age: 'adult', mode: 'scene',
    text: 'An international airport transit gate during an unexpected four-hour flight delay at 1:00 AM.',
    easy: '<strong>1. Anchor:</strong> Describe the tired passengers, charging stations, and closed duty-free shops.<br><strong>2. Observation:</strong> How are two strangers passing the time together?<br><strong>3. Reflection:</strong> How does shared waiting break down barriers between people?',
    medium: 'Describe the nocturnal transit lounge and reflect on how unexpected travel delays bring out different human behaviors.',
    hardTwist: 'A gate agent announces that luggage must be re-checked due to a system switch!',
    starter: 'Under the dim fluorescent lights of Gate 42 at 1 AM, the room was suspended in time...',
    words: ['Liminal', 'Resilience'],
    tip: 'Describe the stillness of a transit terminal late at night.'
  },
  {
    age: 'adult', mode: 'scene',
    text: 'A quiet, long-standing neighborhood bookstore holding an intimate evening reading for a newly published local author.',
    easy: '<strong>1. Anchor:</strong> Describe the smell of old paper, wooden folding chairs, and rain on the window.<br><strong>2. Observation:</strong> Describe the author’s hands turning the manuscript page.<br><strong>3. Reflection:</strong> Why do independent spaces like this hold enduring cultural value?',
    medium: 'Paint the intimate scene and discuss the lasting emotional appeal of tangible books and neighborhood community.',
    hardTwist: 'An audience member asks a surprisingly sharp question that challenges the core thesis of the book!',
    starter: 'The bookstore was packed wall-to-wall with folding chairs and attentive faces...',
    words: ['Intimate', 'Preservation'],
    tip: 'Notice the physical textures: creaky wooden floorboards, soft lighting, quiet pages turning.'
  },
  {
    age: 'adult', mode: 'scene',
    text: 'An urban rooftop garden overlooking a glowing skyline at dusk as the city transitions from work to evening.',
    easy: '<strong>1. Anchor:</strong> Describe the fresh green planter boxes set against concrete and glass towers.<br><strong>2. Observation:</strong> How does the soundscape change as traffic below starts to hum with evening commuters?<br><strong>3. Reflection:</strong> What balance does green space provide inside dense urban centers?',
    medium: 'Describe the sensory contrast between rooftop greenery and the sprawling city lights below at twilight.',
    hardTwist: 'A sudden summer thunder shower forces everyone to scramble under the small glass gazebo canopy!',
    starter: 'Standing on the rooftop at twilight, the city below seemed to slow down for a brief moment...',
    words: ['Panoramic', 'Sanctuary'],
    tip: 'Contrast natural elements (damp soil, herbs) with industrial elements (steel, headlights).'
  },

  // ==========================================
  // 2. PICK A SIDE (mode: 'dilemma')
  // ==========================================
  // --- JUNIOR (Ages 5-8) ---
  {
    age: 'junior', mode: 'dilemma',
    text: 'Would you rather be able to fly like an eagle or breathe underwater like a friendly dolphin?',
    easy: '<strong>1. Choice:</strong> Pick flying or swimming.<br><strong>2. Reason:</strong> Why is that power cooler?<br><strong>3. Adventure:</strong> Where is the first place you would travel to explore?',
    medium: 'Choose your superpower and explain how your daily life would change with it!',
    hardTwist: 'You can only use your superpower for ten minutes each morning—how do you spend it?',
    starter: 'If I had to choose between the two, I would definitely pick...',
    words: ['Glide', 'Splash'],
    tip: 'Tell about what you would see looking down from the sky or down in the sea.'
  },
  {
    age: 'junior', mode: 'dilemma',
    text: 'Would you rather have a pet dragon the size of a kitten, or a pet kitten the size of an elephant?',
    easy: '<strong>1. Choice:</strong> Pick the tiny dragon or giant kitten.<br><strong>2. Reason:</strong> What makes that pet more fun to care for?<br><strong>3. Adventure:</strong> What games would you play together in your backyard?',
    medium: 'Pick your giant or tiny pet and describe what taking them for a walk would look like!',
    hardTwist: 'Your pet accidentally knocked over your favorite toy tower—how do you teach them to be gentle?',
    starter: 'I would definitely pick the... because taking care of it would be...',
    words: ['Gentle', 'Playful'],
    tip: 'Think about feeding time and where this pet would sleep at night.'
  },
  {
    age: 'junior', mode: 'dilemma',
    text: 'Would you rather always live in a snowy winter wonderland or in a sunny tropical beach town?',
    easy: '<strong>1. Choice:</strong> Pick snow or beach.<br><strong>2. Reason:</strong> Which weather makes you happiest?<br><strong>3. Activity:</strong> Name your favorite game to play outside in that weather.',
    medium: 'Choose your weather world and explain what clothes and snacks make that place awesome!',
    hardTwist: 'The temperature suddenly flips for one week only—how do you adapt?',
    starter: 'Given the choice between snow and sunshine, I would live in...',
    words: ['Breezy', 'Cozy'],
    tip: 'Compare building snow forts with making sandcastles.'
  },
  {
    age: 'junior', mode: 'dilemma',
    text: 'Would you rather speak every language in the world or be able to talk directly to all animals?',
    easy: '<strong>1. Choice:</strong> Human languages or animal talking.<br><strong>2. Reason:</strong> Who is the first creature or person you would talk to?<br><strong>3. Story:</strong> What question would you ask them first?',
    medium: 'Choose your communication superpower and describe the first conversation you would have!',
    hardTwist: 'The animals all talk at once and are very loud—how do you ask them to take turns?',
    starter: 'Between speaking all human languages and talking to animals, I choose...',
    words: ['Curious', 'Communicate'],
    tip: 'Imagine asking your neighborhood birds or pets what they do all day.'
  },
  {
    age: 'junior', mode: 'dilemma',
    text: 'Would you rather eat pizza for dinner every night or eat delicious dessert first before every meal?',
    easy: '<strong>1. Choice:</strong> Pizza forever or dessert first.<br><strong>2. Reason:</strong> What is your favorite topping or dessert?<br><strong>3. Balance:</strong> How would you keep your body feeling strong and energetic?',
    medium: 'Make your delicious choice and explain what your dream menu looks like for a full week!',
    hardTwist: 'Your favorite restaurant runs out of that food for three days—what is your backup meal?',
    starter: 'If I were in charge of the menu, I would choose...',
    words: ['Tasty', 'Crunchy'],
    tip: 'Think about whether you would ever get tired of eating the same thing.'
  },

  // --- TEEN (Ages 9-17) ---
  {
    age: 'teen', mode: 'dilemma',
    text: 'Would you rather excel in every sport without practicing, or master every musical instrument instantly?',
    easy: '<strong>1. Choice:</strong> Athletics or musical mastery.<br><strong>2. Reason:</strong> Why is that talent more valuable to your goals?<br><strong>3. Application:</strong> How would you use this skill to help a team or perform for others?',
    medium: 'Select your mastery and explain how it would change your school experience and future ambitions.',
    hardTwist: 'You can never teach your technique to anyone else—does that change your satisfaction?',
    starter: 'If I had to choose between peak athletics and musical mastery, I would select...',
    words: ['Discipline', 'Rhythm'],
    tip: 'Think about whether you enjoy team competition or creative artistic expression more.'
  },
  {
    age: 'teen', mode: 'dilemma',
    text: 'Would you rather travel 200 years into the future or 200 years into the past?',
    easy: '<strong>1. Choice:</strong> The year 2226 or the year 1826.<br><strong>2. Reason:</strong> What curiosity pulls you there first?<br><strong>3. Discovery:</strong> What single artifact or answer would you bring back with you?',
    medium: 'Pick your era and explain how you would navigate daily life and communication with the people there.',
    hardTwist: 'You can only stay for 48 hours and cannot bring any electronic device—how do you record your journey?',
    starter: 'If given a one-way ticket through time, I would choose to go...',
    words: ['Historical', 'Innovation'],
    tip: 'Weigh curiosity about technological marvels against witnessing real history firsthand.'
  },
  {
    age: 'teen', mode: 'dilemma',
    text: 'Would you rather have unlimited free concert and event tickets for life, or free airline flights anywhere in the world?',
    easy: '<strong>1. Choice:</strong> Live entertainment or global flights.<br><strong>2. Reason:</strong> Which experience gives you richer memories?<br><strong>3. Itinerary:</strong> What is your first destination or concert?',
    medium: 'Make your choice and outline the dream year of experiences you would plan with this privilege.',
    hardTwist: 'You can only invite one friend to come along—how do you choose who joins you?',
    starter: 'Between unlimited live events and unlimited air travel, I would take...',
    words: ['Wanderlust', 'Performance'],
    tip: 'Compare seeing your favorite performers live with exploring cultures worldwide.'
  },
  {
    age: 'teen', mode: 'dilemma',
    text: 'Would you rather attend a school that has no grades (only detailed feedback) or no homework (only exams)?',
    easy: '<strong>1. Choice:</strong> No grades (feedback only) or no homework (exams only).<br><strong>2. Reason:</strong> Which system helps you truly learn better without burning out?<br><strong>3. Reality:</strong> How would students stay motivated day-to-day?',
    medium: 'Defend your educational model and explain how it shapes student mental health and academic rigor.',
    hardTwist: 'Universities demand a standardized score from your school—how do you prove your readiness?',
    starter: 'Looking at school pressure, I believe an educational system with... is far superior because...',
    words: ['Accountability', 'Evaluation'],
    tip: 'Think about what causes you more stress: daily assignments or high-stakes final tests.'
  },

  // --- ADULT (Ages 18+) ---
  {
    age: 'adult', mode: 'dilemma',
    text: 'Would you rather work a 4-day work week with 10-hour days, or a 5-day work week with 6-hour days?',
    easy: '<strong>1. Choice:</strong> 4x10 or 5x6.<br><strong>2. Rationale:</strong> Which model better protects your focus, energy, and work-life balance?<br><strong>3. Practicality:</strong> How would you spend the recovered free time?',
    medium: 'Evaluate the two working models and defend which one creates higher sustainable productivity over decades.',
    hardTwist: 'Your client base refuses to adjust to your off-days—how do you handle client boundaries?',
    starter: 'From a sustainable productivity standpoint, I would strongly prefer...',
    words: ['Equilibrium', 'Exhaustion'],
    tip: 'Weigh a full extra day of recovery against having shorter, more energized evenings every weekday.'
  },
  {
    age: 'adult', mode: 'dilemma',
    text: 'Would you rather earn an executive salary in a high-stress role or a comfortable, modest salary doing work you love?',
    easy: '<strong>1. Choice:</strong> High-stress executive compensation or modest, purpose-aligned work.<br><strong>2. Rationale:</strong> How do you define financial security versus personal well-being?<br><strong>3. Trade-off:</strong> What compromises are you willing to accept in either path?',
    medium: 'Examine the trade-offs between wealth accumulation and emotional well-being across different stages of life.',
    hardTwist: 'The modest-salary organization is undergoing budget restructuring—how do you protect your peace of mind?',
    starter: 'When balancing career compensation against daily quality of life, I choose...',
    words: ['Compensation', 'Fulfillment'],
    tip: 'Consider how stress affects health, relationships, and identity over long horizons.'
  },
  {
    age: 'adult', mode: 'dilemma',
    text: 'Would you rather live in a vibrant, dense metropolis with a compact apartment or in a quiet rural setting with an acre of land?',
    easy: '<strong>1. Choice:</strong> City density or rural acreage.<br><strong>2. Rationale:</strong> Which environment feeds your daily energy and clarity?<br><strong>3. Lifestyle:</strong> Describe what a typical Sunday morning looks like in that choice.',
    medium: 'Analyze how physical surroundings influence mindset, social interaction, and daily habits.',
    hardTwist: 'Your primary professional industry only operates in the environment you chose not to pick—how do you adapt?',
    starter: 'For long-term health and personal energy, I would choose to live in...',
    words: ['Proximity', 'Seclusion'],
    tip: 'Compare the friction of commutes and crowds against the friction of isolation and distance from services.'
  },
  {
    age: 'adult', mode: 'dilemma',
    text: 'Would you rather always know the blunt, unfiltered truth of what others think of you, or live in comfortable social polite ambiguity?',
    easy: '<strong>1. Choice:</strong> Total radical transparency or standard social politeness.<br><strong>2. Rationale:</strong> Which dynamic builds deeper, more durable human relationships?<br><strong>3. Consequence:</strong> How would you handle hearing harsh criticism from someone you admire?',
    medium: 'Examine the psychological cost of absolute transparency versus social harmony in professional and personal spheres.',
    hardTwist: 'A close colleague’s unfiltered feedback reveals they question your core competence—how do you respond?',
    starter: 'While honesty is widely praised, I believe that...',
    words: ['Candor', 'Diplomacy'],
    tip: 'Think about whether constructive relationships require some degree of protective social cushioning.'
  },

  // ==========================================
  // 3. HOT TAKES / OPINIONS (mode: 'opinions')
  // ==========================================
  // --- JUNIOR (Ages 5-8) ---
  {
    age: 'junior', mode: 'opinions',
    text: 'Ice cream should be allowed as a normal breakfast food every single day. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly "I agree" or "I disagree".<br><strong>2. Why:</strong> Tell your main reason.<br><strong>3. Example:</strong> Tell what you usually eat in the morning to start your day.',
    medium: 'Give your answer and explain whether you like cold treats or warm food in the morning!',
    hardTwist: 'Tell what a parent or doctor would say about this idea!',
    starter: 'I think this idea is... because...',
    words: ['Yummy', 'Healthy'],
    tip: 'Tell what you ate for breakfast this morning.'
  },
  {
    age: 'junior', mode: 'opinions',
    text: 'Dogs make better pets at home than cats. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly "I agree" or "I disagree".<br><strong>2. Why:</strong> Tell your main reason.<br><strong>3. Example:</strong> Share a fun memory of playing with or seeing a pet.',
    medium: 'Pick your side and explain what makes a great pet to have at home!',
    hardTwist: 'Give one nice compliment to the other animal!',
    starter: 'In my opinion, I believe...',
    words: ['Playful', 'Quiet'],
    tip: 'Tell if you prefer energetic pets or calm pets.'
  },
  {
    age: 'junior', mode: 'opinions',
    text: 'Kids should stay up one hour later on the night before a school holiday. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly "I agree" or "I disagree".<br><strong>2. Why:</strong> Tell your main reason.<br><strong>3. Example:</strong> Tell what game, movie, or book you would enjoy with that extra hour.',
    medium: 'Give your answer and explain how you like to spend the night before a day off!',
    hardTwist: 'Tell what a tired parent would say to this idea!',
    starter: 'On the night before a holiday, I think...',
    words: ['Relaxing', 'No School'],
    tip: 'Think about what time you usually turn off your light.'
  },
  {
    age: 'junior', mode: 'opinions',
    text: 'Rainy days indoors are more fun than sunny days outside. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly "I agree" or "I disagree".<br><strong>2. Why:</strong> Tell your main reason.<br><strong>3. Example:</strong> Describe your favorite thing to do on that kind of day.',
    medium: 'Choose your side and describe how you spend your favorite weather!',
    hardTwist: 'Tell what you do if the weather suddenly changes in the middle of your game!',
    starter: 'Between rain and sunshine, I prefer... because...',
    words: ['Cozy', 'Outdoor'],
    tip: 'Think about whether you like running in fresh air or staying inside.'
  },
  {
    age: 'junior', mode: 'opinions',
    text: 'Kids should be allowed to watch cartoons in the morning before school. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly "I agree" or "I disagree".<br><strong>2. Why:</strong> Tell your main reason.<br><strong>3. Example:</strong> Tell what your morning routine looks like before you leave for school.',
    medium: 'Share your opinion on how you like to get ready in the morning!',
    hardTwist: 'Tell what you would say to someone who thinks morning shows cause delays!',
    starter: 'In the morning before school, I think...',
    words: ['Ready', 'Distracted'],
    tip: 'Tell what is the first thing you do after getting out of bed.'
  },

  // --- TEEN (Ages 9-17) ---
  {
    age: 'teen', mode: 'opinions',
    text: 'Traditional daily homework does more harm to students than good. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly whether you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Share how homework affects your evenings and schedule.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Answer an objection from a teacher who says homework is necessary to pass exams!',
    starter: 'When it comes to daily homework, I believe... because...',
    words: ['Practice', 'Balance'],
    tip: 'Think about how much time you spend studying after class ends.'
  },
  {
    age: 'teen', mode: 'opinions',
    text: 'Nobody under the age of 16 should be allowed to have personal social media accounts. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly whether you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Describe how people your age use these platforms in daily life.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Address the argument that restricting teens leaves them socially isolated!',
    starter: 'On the topic of social media age limits, I think...',
    words: ['Safety', 'Connected'],
    tip: 'Think about how you and your peers stay in touch outside of school.'
  },
  {
    age: 'teen', mode: 'opinions',
    text: 'School uniforms are better than letting students wear whatever they want. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly whether you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Describe what getting ready for school looks like under both systems.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Address an administrator who argues that your stance creates discipline or equality issues!',
    starter: 'When looking at school uniforms, I believe...',
    words: ['Uniform', 'Style'],
    tip: 'Think about how clothing affects focus and peer dynamics at school.'
  },
  {
    age: 'teen', mode: 'opinions',
    text: 'Using AI tools to help with schoolwork is smart studying, not cheating. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly whether you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Share a practical example of how AI can be used for learning.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Address the concern that relying on AI tools weakens independent problem-solving skills!',
    starter: 'Regarding AI in the classroom, I think...',
    words: ['Tool', 'Honesty'],
    tip: 'Compare using AI tools to using calculators in math.'
  },
  {
    age: 'teen', mode: 'opinions',
    text: 'Timed exams only test how much you can memorize, not how smart you are. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly whether you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Share which assessment format best reflects your true capabilities.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Explain how schools or universities could evaluate applicants fairly without standardized scores!',
    starter: 'Looking at how students are tested, I believe...',
    words: ['Memory', 'Skills'],
    tip: 'Think about whether you perform better on written tests or practical projects.'
  },

  // --- ADULT (Ages 18+) ---
  {
    age: 'adult', mode: 'opinions',
    text: 'Renting a home gives you much more freedom in life than buying one. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly if you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Share an observation from your own living situation or friends.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Respond to someone who strongly disagrees with your perspective!',
    starter: 'On this topic, I agree / disagree because...',
    words: ['Flexibility', 'Investment'],
    tip: 'Consider how flexibility compares to long-term ownership for you.'
  },
  {
    age: 'adult', mode: 'opinions',
    text: 'Large family or community group chats create more stress than real connection. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly if you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Describe how you manage your notifications and messages day-to-day.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Respond to someone who strongly disagrees with your perspective!',
    starter: 'Looking at large group chats, I think...',
    words: ['Messages', 'Connection'],
    tip: 'Think about how you react when group threads get very active.'
  },
  {
    age: 'adult', mode: 'opinions',
    text: 'Cooking meals at home every day is not worth the time and effort for busy adults. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly if you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Share how you typically handle meals after a tiring day.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Respond to someone who strongly disagrees with your perspective!',
    starter: 'When it comes to cooking daily, I agree / disagree because...',
    words: ['Effort', 'Routine'],
    tip: 'Consider how you balance time preparation with food choices.'
  },
  {
    age: 'adult', mode: 'opinions',
    text: 'Calling someone on the phone without sending a text first has become rude. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly if you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Describe how you react when an unscheduled call rings your phone.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Respond to someone who strongly disagrees with your perspective!',
    starter: 'Regarding unexpected phone calls, I believe...',
    words: ['Habit', 'Communication'],
    tip: 'Think about whether you prefer answering live or replying via message.'
  },
  {
    age: 'adult', mode: 'opinions',
    text: 'A completely cashless society does more harm than good. Agree or disagree?',
    easy: '<strong>1. Stance:</strong> Say clearly if you agree or disagree.<br><strong>2. Why:</strong> State your primary reason.<br><strong>3. Example:</strong> Give a quick example of how you pay for items day-to-day.',
    medium: 'State your view clearly and explain why you feel that way.',
    hardTwist: 'Respond to someone who strongly disagrees with your perspective!',
    starter: 'On the question of going cashless, I agree / disagree because...',
    words: ['Payment', 'Daily life'],
    tip: 'Think about how you handle routine transactions.'
  },

  // ==========================================
  // 4. VOCAB YAP (mode: 'vocab')
  // ==========================================
  // --- JUNIOR (Ages 5-8) ---
  {
    age: 'junior', mode: 'vocab',
    text: 'Talk about a time you tried something totally new, and naturally use the word: <strong>Curious</strong>.',
    vocab: { word: 'Curious', meaning: 'Eager to learn or know about something.' },
    easy: '<strong>1. Define:</strong> What does feeling curious feel like in your brain?<br><strong>2. Story:</strong> Tell what new thing you wanted to learn about.<br><strong>3. Reveal:</strong> Use the word "Curious" clearly in your sentence!',
    medium: 'Tell the story of an exciting discovery you made when you were curious.',
    hardTwist: 'Your friend was too shy to look—how did your curious energy help them join in?',
    starter: 'I felt so curious the day I decided to...',
    words: ['Explore', 'Wonder'],
    tip: 'Think about asking lots of questions when you see something interesting.'
  },
  {
    age: 'junior', mode: 'vocab',
    text: 'Tell a story about making a big messy art project, and naturally use the word: <strong>Splendid</strong>.',
    vocab: { word: 'Splendid', meaning: 'Magnificent, wonderful, or very impressive.' },
    easy: '<strong>1. Setup:</strong> What colors of paint or paper did you use?<br><strong>2. Action:</strong> What did you create on the table or floor?<br><strong>3. Reveal:</strong> Say why your final artwork looked splendid!',
    medium: 'Describe your colorful art project and explain why the result was splendid.',
    hardTwist: 'A bowl of glitter spilled everywhere—how did that make it even more splendid?',
    starter: 'When I finished painting, my picture looked absolutely splendid because...',
    words: ['Bright', 'Artwork'],
    tip: 'Use splendid when something turns out even better than you planned.'
  },
  {
    age: 'junior', mode: 'vocab',
    text: 'Talk about a day you had to wait patiently for a surprise, and naturally use the word: <strong>Eager</strong>.',
    vocab: { word: 'Eager', meaning: 'Wanting to do or have something very much.' },
    easy: '<strong>1. Setup:</strong> What special surprise were you waiting for?<br><strong>2. Feeling:</strong> How did your feet tap while you waited?<br><strong>3. Reveal:</strong> Explain how eager you were to open the door or gift!',
    medium: 'Tell about a day you felt super eager and how you handled the wait.',
    hardTwist: 'The surprise got delayed by thirty minutes—how did you distract yourself while eager?',
    starter: 'I was so eager to see what was inside the box that...',
    words: ['Excited', 'Waiting'],
    tip: 'Eager describes feeling full of bubbly excitement before something happens.'
  },
  {
    age: 'junior', mode: 'vocab',
    text: 'Describe helping a friend or family member clean up, and naturally use the word: <strong>Teamwork</strong>.',
    vocab: { word: 'Teamwork', meaning: 'Working together with others to get a job done.' },
    easy: '<strong>1. Setup:</strong> What needed to be cleaned or organized?<br><strong>2. Action:</strong> Who did which job to help?<br><strong>3. Reveal:</strong> Explain how teamwork made the job fast and fun!',
    medium: 'Describe the messy job and explain how good teamwork solved it in half the time.',
    hardTwist: 'You and your partner wanted to do the same task—how did you share it fairly?',
    starter: 'We realized that with good teamwork, cleaning up was...',
    words: ['Together', 'Helpful'],
    tip: 'Teamwork means nobody has to do all the hard work alone.'
  },
  {
    age: 'junior', mode: 'vocab',
    text: 'Talk about a hike, nature walk, or park visit, and naturally use the word: <strong>Enormous</strong>.',
    vocab: { word: 'Enormous', meaning: 'Extremely large in size or scale.' },
    easy: '<strong>1. Setup:</strong> Where were you walking?<br><strong>2. Sighting:</strong> What giant tree, rock, or building did you spot?<br><strong>3. Reveal:</strong> Describe how enormous it looked standing next to you!',
    medium: 'Describe your nature walk and bring the enormous object to life with words.',
    hardTwist: 'A tiny insect was sitting right on the enormous object—compare their sizes!',
    starter: 'As we walked around the trail corner, we saw an enormous...',
    words: ['Giant', 'Nature'],
    tip: 'Enormous means way bigger than an ordinary big thing.'
  },

  // --- TEEN (Ages 9-17) ---
  {
    age: 'teen', mode: 'vocab',
    text: 'Discuss a time when an unexpected change forced you to adjust plans, and naturally use the word: <strong>Adapt</strong>.',
    vocab: { word: 'Adapt', meaning: 'To adjust or modify oneself to new conditions.' },
    easy: '<strong>1. Incident:</strong> What plan went off the rails?<br><strong>2. Pivot:</strong> How did you adapt your mindset in the moment?<br><strong>3. Outcome:</strong> What was the ultimate result of adapting quickly?',
    medium: 'Narrate a story of having to adapt quickly when things went sideways.',
    hardTwist: 'Someone in your group refused to adapt—how did you bring them on board?',
    starter: 'When our original plan fell through, we had to adapt immediately by...',
    words: ['Flexible', 'Strategy'],
    tip: 'Highlight the difference between panicking and actively adapting.'
  },
  {
    age: 'teen', mode: 'vocab',
    text: 'Speak about why doing regular small habits beats cramming, and naturally use the word: <strong>Consistent</strong>.',
    vocab: { word: 'Consistent', meaning: 'Acting or done in another way with regularity and reliability.' },
    easy: '<strong>1. Premise:</strong> Name a skill (sports, instruments, study) where small effort pays off.<br><strong>2. Comparison:</strong> Contrast cramming with being consistent.<br><strong>3. Result:</strong> What long-term payoff does consistent effort deliver?',
    medium: 'Deliver a persuasive talk on the power of remaining consistent over months.',
    hardTwist: 'Address the temptation to skip days when motivation is completely gone!',
    starter: 'The real secret to mastering any skill is being consistent, because...',
    words: ['Habit', 'Progress'],
    tip: 'Use concrete examples like pushups, scales on a guitar, or vocabulary cards.'
  },
  {
    age: 'teen', mode: 'vocab',
    text: 'Discuss a difficult moral or practical decision you or a character had to make, and naturally use the word: <strong>Dilemma</strong>.',
    vocab: { word: 'Dilemma', meaning: 'A situation in which a difficult choice has to be made between two alternatives.' },
    easy: '<strong>1. Problem:</strong> What were the two conflicting choices?<br><strong>2. Struggle:</strong> Why was neither option easy or perfect?<br><strong>3. Resolution:</strong> How was this dilemma finally navigated?',
    medium: 'Analyze a tough dilemma and articulate the rationale behind the final decision.',
    hardTwist: 'Both options had serious negative consequences—how did you weigh the lesser evil?',
    starter: 'The situation presented a real dilemma because choosing one meant sacrificing...',
    words: ['Conflict', 'Principles'],
    tip: 'A true dilemma isn’t good vs. bad—it’s choosing between two competing priorities.'
  },
  {
    age: 'teen', mode: 'vocab',
    text: 'Explain why standing out from the crowd takes courage, and naturally use the word: <strong>Authentic</strong>.',
    vocab: { word: 'Authentic', meaning: 'Genuine, real, and true to one’s own personality or character.' },
    easy: '<strong>1. Pressure:</strong> Describe the social pressure to blend into the background.<br><strong>2. Courage:</strong> What does choosing to be authentic look like in school?<br><strong>3. Impact:</strong> How does staying authentic earn deeper, real respect?',
    medium: 'Give a passionate mini-speech on the power of remaining authentic despite peer pressure.',
    hardTwist: 'Someone criticizes your authentic choice—how do you stay grounded without attacking back?',
    starter: 'It takes real bravery to remain authentic when everyone around you is...',
    words: ['Identity', 'Integrity'],
    tip: 'Contrast wearing a social mask with speaking from your real beliefs.'
  },

  // --- ADULT (Ages 18+) ---
  {
    age: 'adult', mode: 'vocab',
    text: 'Discuss navigating professional setbacks or personal burnout, and naturally use the word: <strong>Resilience</strong>.',
    vocab: { word: 'Resilience', meaning: 'The capacity to withstand or recover quickly from difficulties.' },
    easy: '<strong>1. Adversity:</strong> Describe a challenging obstacle or season of high pressure.<br><strong>2. Internal Shift:</strong> What habits or perspectives built your resilience?<br><strong>3. Perspective:</strong> How has resilience redefined how you view future challenges?',
    medium: 'Deliver an articulate talk on how real-world resilience is cultivated through deliberate recovery, not just brute perseverance.',
    hardTwist: 'Distinguish between genuine resilience and toxic overwork that leads to total collapse!',
    starter: 'True resilience is not about never failing; it is about...',
    words: ['Fortitude', 'Equanimity'],
    tip: 'Emphasize that resilience includes knowing when to pause, pivot, and recharge.'
  },
  {
    age: 'adult', mode: 'vocab',
    text: 'Discuss managing competing priorities in leadership or daily life, and naturally use the word: <strong>Pragmatic</strong>.',
    vocab: { word: 'Pragmatic', meaning: 'Dealing with things sensibly and realistically based on practical considerations.' },
    easy: '<strong>1. Conflict:</strong> Set up a situation where idealistic theory collided with practical reality.<br><strong>2. Action:</strong> What pragmatic compromise or decision did you make?<br><strong>3. Takeaway:</strong> Why is a pragmatic approach essential for execution?',
    medium: 'Reflect on a high-stakes decision where adopting a pragmatic stance allowed a team to move forward.',
    hardTwist: 'A purist on your team accuses your pragmatic solution of compromising core values—how do you answer?',
    starter: 'When facing complex realities, being pragmatic often means accepting that...',
    words: ['Viable', 'Practicality'],
    tip: 'Pragmatism means focusing on what works in practice over what looks good on paper.'
  },
  {
    age: 'adult', mode: 'vocab',
    text: 'Discuss how misunderstandings escalate in communication, and naturally use the word: <strong>Nuance</strong>.',
    vocab: { word: 'Nuance', meaning: 'A subtle distinction or variation in meaning, tone, or expression.' },
    easy: '<strong>1. Breakdown:</strong> Where did an oversimplified message or email go wrong?<br><strong>2. Depth:</strong> What critical nuance was lost in the initial exchange?<br><strong>3. Resolution:</strong> How does listening for nuance elevate discussions?',
    medium: 'Deliver a thoughtful reflection on why modern digital discourse urgently requires an appreciation for nuance.',
    hardTwist: 'Explain why algorithms and social feeds are systematically designed to destroy conversational nuance!',
    starter: 'In today’s fast-paced communication, the very first thing we lose is nuance, because...',
    words: ['Subtlety', 'Complexity'],
    tip: 'Show how black-and-white thinking misses the subtle middle ground where truth usually sits.'
  },
  {
    age: 'adult', mode: 'vocab',
    text: 'Speak about navigating uncertain projects where outcomes are unpredictable, and naturally use the word: <strong>Ambiguity</strong>.',
    vocab: { word: 'Ambiguity', meaning: 'The quality of being open to more than one interpretation; inexactness.' },
    easy: '<strong>1. Unknowns:</strong> Describe a situation where instructions or future outcomes were unclear.<br><strong>2. Leadership:</strong> How did you keep moving forward despite high ambiguity?<br><strong>3. Principle:</strong> What rule of thumb helps you operate in ambiguous environments?',
    medium: 'Discuss why the ability to tolerate and navigate ambiguity is the single most critical leadership skill today.',
    hardTwist: 'Stakeholders demand certainty when none exists—how do you communicate honestly without inciting panic?',
    starter: 'Operating in high-stakes environments requires getting comfortable with ambiguity, because...',
    words: ['Uncertainty', 'Decisiveness'],
    tip: 'Focus on how making reversible decisions keeps momentum alive when information is incomplete.'
  }
];

// Attach to window for global browser availability
if (typeof window !== 'undefined') {
  window.allPrompts = allPrompts;
}

// Support ES/CommonJS modules if imported
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { allPrompts };
}
