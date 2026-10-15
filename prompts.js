// ============================================================================
// POPTALK MASTER PROMPT BANK
// (This is the ONLY file you need to edit to add or change prompts!)
// ============================================================================

const promptBank = [
  // ==========================================
  // JUNIOR (5-8) - PICTURE TALK (Uploaded Images)
  // ==========================================
  {
    age: 'junior', mode: 'picture',
    text: 'A fluffy cat wearing a chef hat making pizza.',
    image: 'cat.jpg',
    easy: '<strong>1. Who:</strong> A cat wearing a tall white chef hat.<br><strong>2. Doing:</strong> Rolling out pizza dough with flour.<br><strong>3. Ending:</strong> Adding funny toppings for his friends!',
    medium: 'Start with the cat rolling the dough... then tell what happens when flour puffs into his face!',
    hardTwist: 'A little brown mouse runs across the table to grab the cheese!',
    starter: 'In the kitchen, the chef cat is...',
    words: ['Giant', 'Messy', 'Yummy'],
    tip: 'Tell what toppings are sitting in bowls on the counter.'
  },
  {
    age: 'junior', mode: 'picture',
    text: 'A giant rainbow treehouse with tire swings and a long slide.',
    image: 'treehouse.jpg',
    easy: '<strong>1. Who:</strong> Tell who climbs the tall ladder.<br><strong>2. Inside:</strong> The games or snacks hidden in the treehouse.<br><strong>3. Slide:</strong> Zooming down the spiral slide to the grass!',
    medium: 'Tell a story about spotting a friendly squirrel peeking through the window!',
    hardTwist: 'A bird lands on the roof and drops a shiny golden key!',
    starter: 'When I climb to the top of the treehouse, I see...',
    words: ['High', 'Secret', 'Fast'],
    tip: 'Describe what games you would play inside.'
  },
  {
    age: 'junior', mode: 'picture',
    text: 'A friendly elephant trying to balance on roller skates in the park.',
    image: 'elephant.jpg',
    easy: '<strong>1. Who:</strong> An elephant with giant red roller skates.<br><strong>2. Action:</strong> Wobbling down the path as animals watch.<br><strong>3. Ending:</strong> Trying to stop before rolling into the pond!',
    medium: 'Tell a story about the elephant shouting "Whoa!" as he tries to turn a corner!',
    hardTwist: 'He almost bumps right into a shiny ice cream cart!',
    starter: 'On the park path, the big elephant is...',
    words: ['Wobbly', 'Heavy', 'Happy'],
    tip: 'Tell if his skates make a loud rumbling sound or a quiet sound.'
  },
  {
    age: 'junior', mode: 'picture',
    text: 'A tiny magical door hidden behind teddy bears on a shelf.',
    image: 'door.jpg',
    easy: '<strong>1. Who:</strong> Tell who spots the tiny glowing door.<br><strong>2. Action:</strong> Turning the shiny golden key in the lock.<br><strong>3. Ending:</strong> What secret room is on the other side!',
    medium: 'Tell a story about knocking on the door: "Knock knock! Anyone inside?"',
    hardTwist: 'The tiny door slowly begins to close all by itself!',
    starter: 'Tucked behind the bears on the shelf, I see...',
    words: ['Tiny', 'Shiny', 'Secret'],
    tip: 'Tell what color the magical glow looks like.'
  },
  {
    age: 'junior', mode: 'picture',
    text: 'A baby dinosaur having juice and cookies in the garden.',
    image: 'dino.jpg',
    easy: '<strong>1. Who:</strong> A baby dinosaur at a tiny garden table.<br><strong>2. Action:</strong> Sipping sweet juice through a curly straw.<br><strong>3. Ending:</strong> Who shares the plate of cookies with him!',
    medium: 'Tell a story about his giant, happy slurps: "Gulp, gulp!"',
    hardTwist: 'His long tail accidentally knocks over the cookie plate!',
    starter: 'Out in the sunny garden, the little dinosaur is...',
    words: ['Green', 'Sweet', 'Friendly'],
    tip: 'Tell what flavor of juice he is drinking.'
  },

  // ==========================================
  // JUNIOR (5-8) - PICK A SIDE
  // ==========================================
  {
    age: 'junior', mode: 'wyr',
    text: 'Would you rather have a pet penguin that eats ice cream or a monkey that cleans your room?',
    easy: '<strong>1. Pick:</strong> Choose your pet and give it a fun name.<br><strong>2. Trick:</strong> Describe the funniest trick they do in your house.<br><strong>3. Rule:</strong> What is one house rule your new pet must obey?',
    medium: 'Pick your pet and explain why they make your home much more fun than a normal pet!',
    hardTwist: 'Explain why the other pet makes a giant mess in the kitchen!',
    starter: 'I would definitely choose the... because...',
    words: ['Silly', 'Clean', 'Cute'],
    tip: 'Tell where your new pet would sleep at night.'
  },
  {
    age: 'junior', mode: 'wyr',
    text: 'Would you rather have shoes that jump over houses or a jacket that makes you invisible?',
    easy: '<strong>1. Pick:</strong> Choose the jump shoes or the invisibility jacket.<br><strong>2. Adventure:</strong> Where is the very first place you travel using your power?<br><strong>3. Surprise:</strong> Who do you surprise first, and what do they say?',
    medium: 'Tell how your special power helps you go on an adventure or help a friend in trouble!',
    hardTwist: 'Your special item suddenly stops working for 10 seconds!',
    starter: 'Between the two, I choose the... because...',
    words: ['Magic', 'Sneaky', 'Super'],
    tip: 'Tell what color your shoes or jacket would be.'
  },
  {
    age: 'junior', mode: 'wyr',
    text: 'Would you rather have it rain warm chocolate milk or shiny rainbow glitter from the sky?',
    easy: '<strong>1. Pick:</strong> Choose which magical rain falls outside your window.<br><strong>2. Getting Ready:</strong> What boots or clothes do you put on before running outside?<br><strong>3. Street View:</strong> What do the trees and streets look like when the storm stops?',
    medium: 'Describe what you and your friends do when you look out the window and see the sky!',
    hardTwist: 'Tell how everyone works together to wash the cars and sidewalks afterward!',
    starter: 'If it could rain anything outside today, I want...',
    words: ['Sweet', 'Sparkly', 'Messy'],
    tip: 'Tell if you catch it in a cup or jump in the puddles.'
  },
  {
    age: 'junior', mode: 'wyr',
    text: 'Would you rather be able to talk to all animals or be able to fly anywhere like a bird?',
    easy: '<strong>1. Pick:</strong> Choose animal talk or soaring in the sky.<br><strong>2. Mission:</strong> Who is the first creature you chat with, or where do you fly first?<br><strong>3. Secret:</strong> What cool secret do you discover using your gift?',
    medium: 'Explain why having your chosen power makes every single day an adventure!',
    hardTwist: 'Tell the funniest reason why a friend would pick the opposite superpower!',
    starter: 'I would much rather... because...',
    words: ['Brave', 'High', 'Fun'],
    tip: 'Name your favorite animal or a landmark you would look down on.'
  },
  {
    age: 'junior', mode: 'wyr',
    text: 'Would you rather eat cake for dinner every night or play at recess all day at school?',
    easy: '<strong>1. Pick:</strong> Choose cake for dinner or endless recess.<br><strong>2. Best Part:</strong> What favorite dessert or playground game fills your day?<br><strong>3. The Catch:</strong> What is one small problem that might happen after a whole week?',
    medium: 'Give 1 reason why your choice sounds amazing and 1 reason it might be tricky!',
    hardTwist: 'Tell what one healthy food or boring chore you still have to do!',
    starter: 'My top choice is definitely... because...',
    words: ['Sweet', 'Tired', 'Excited'],
    tip: 'Name your favorite dessert flavor or favorite tag game.'
  },

  // ==========================================
  // JUNIOR (5-8) - HOT TAKES
  // ==========================================
  {
    age: 'junior', mode: 'opinions',
    text: 'Ice cream should be allowed as a normal breakfast food every single day.',
    easy: '<strong>1. Stance:</strong> Say clearly "I agree" or "I disagree".<br><strong>2. Why:</strong> Tell how your stomach feels after eating cold scoops in the morning.<br><strong>3. Better Food:</strong> What morning food gives you the best energy to run and play?',
    medium: 'Give your answer and explain whether breakfast should be warm and healthy or sweet and cold!',
    hardTwist: 'Explain what your parent would say if you asked for ice cream at 7:00 AM!',
    starter: 'I think this idea is... because...',
    words: ['Yummy', 'Healthy'],
    tip: 'Tell what you ate for breakfast this morning.'
  },
  {
    age: 'junior', mode: 'opinions',
    text: 'Dogs are much better pets to have at home than cats.',
    easy: '<strong>1. Pick:</strong> Choose whether dogs or cats make a better pet.<br><strong>2. Best Thing:</strong> Describe the most fun thing your chosen pet does with you.<br><strong>3. The Other Side:</strong> What is one tricky thing about the other animal?',
    medium: 'Pick your side and explain why your pet is the best buddy to hang out with at home!',
    hardTwist: 'Give one nice compliment to the other pet you did not pick!',
    starter: 'In my opinion, I believe...',
    words: ['Playful', 'Quiet'],
    tip: 'Tell if you like running outside or sitting quietly indoors.'
  },
  {
    age: 'junior', mode: 'opinions',
    text: 'Kids should stay up one hour later on the night before a school holiday.',
    easy: '<strong>1. Stance:</strong> Say "I agree" or "I disagree".<br><strong>2. Why:</strong> Explain why there is no rush to wake up early the next morning.<br><strong>3. The Plan:</strong> What special game, movie, or book would you enjoy with that hour?',
    medium: 'Give your answer and explain why sleeping late does not hurt when you have a day off tomorrow!',
    hardTwist: 'Explain what would happen if a friend tried calling you at midnight!',
    starter: 'On the night before a holiday, I think...',
    words: ['Relaxing', 'No School'],
    tip: 'Tell what bedtime routine you usually follow.'
  },
  {
    age: 'junior', mode: 'opinions',
    text: 'Rainy days indoors are more fun than sunny days outside.',
    easy: '<strong>1. Stance:</strong> Pick whether you prefer rainy days inside or sunny days outside.<br><strong>2. Best Activity:</strong> Describe what you love doing most in that weather.<br><strong>3. Downside:</strong> Tell what gets annoying or boring about the other weather!',
    medium: 'Choose your side and compare running in the fresh air versus staying cozy indoors!',
    hardTwist: 'Tell what you would do if the rain suddenly stopped after just 2 minutes!',
    starter: 'Between rain and sunshine, I prefer... because...',
    words: ['Cozy', 'Outdoor'],
    tip: 'Tell what you wear when you go out in your favorite weather.'
  },
  {
    age: 'junior', mode: 'opinions',
    text: 'Kids should be allowed to watch cartoons in the morning before school.',
    easy: '<strong>1. Stance:</strong> Say "Yes, allowed" or "No, not allowed".<br><strong>2. Why:</strong> Does watching a show help you wake up happy, or does it make you late?<br><strong>3. The Rule:</strong> If yes, when should you turn it off? If no, what should you do instead?',
    medium: 'Share your opinion and balance having a cheerful morning with getting ready on time!',
    hardTwist: 'Tell what you would say to someone who thinks morning cartoons are a waste of time!',
    starter: 'In the morning before school, I think...',
    words: ['Ready', 'Distracted'],
    tip: 'Tell what is the first thing you do right after getting out of bed.'
  },

  // ==========================================
  // JUNIOR (5-8) - VOCAB YAP
  // ==========================================
  {
    age: 'junior', mode: 'vocab',
    vocab: { word: 'CURIOUS', pos: 'adjective', meaning: 'Wanting to know or learn about something new.', example: 'The curious kitten peeked inside the open box.' },
    text: 'Tell a story about a very curious puppy or person who went exploring somewhere new!',
    easy: '<strong>1. Who:</strong> Tell who was feeling very curious today.<br><strong>2. Explore:</strong> What strange door, box, or sound did they find?<br><strong>3. Surprise:</strong> Use the word CURIOUS as you tell what they discovered!',
    medium: 'Tell a story using the word CURIOUS to describe someone finding a secret treasure!',
    hardTwist: 'Someone taps their shoulder and asks what they are doing!',
    starter: 'One morning, a very curious little...',
    words: ['Curious', 'Explore', 'Secret'],
    tip: 'Make sure to say the word CURIOUS out loud in your story!'
  },
  {
    age: 'junior', mode: 'vocab',
    vocab: { word: 'GIGANTIC', pos: 'adjective', meaning: 'Incredibly huge, much bigger than normal.', example: 'We baked a gigantic chocolate chip cookie.' },
    text: 'Tell a story about finding a gigantic object in your backyard or living room!',
    easy: '<strong>1. What:</strong> What gigantic thing did you wake up and see?<br><strong>2. Reaction:</strong> How did you climb it or look at it?<br><strong>3. Ending:</strong> Use the word GIGANTIC to tell who helped you move it!',
    medium: 'Describe trying to hide a gigantic watermelon or stuffed bear from your family!',
    hardTwist: 'The gigantic object suddenly begins to wobble!',
    starter: 'When I looked outside the window, I saw a gigantic...',
    words: ['Gigantic', 'Huge', 'Heavy'],
    tip: 'Say GIGANTIC in a loud, expressive voice!'
  },
  {
    age: 'junior', mode: 'vocab',
    vocab: { word: 'COURAGEOUS', pos: 'adjective', meaning: 'Brave; not afraid to try something difficult.', example: 'The courageous girl climbed to the top of the tall ladder.' },
    text: 'Tell a story about someone who was courageous and tried something scary!',
    easy: '<strong>1. The Fear:</strong> What was hard or scary to do (like swimming or a dark room)?<br><strong>2. The Brave Step:</strong> How did they take a deep breath and do it anyway?<br><strong>3. Celebration:</strong> Use COURAGEOUS to describe how proud they felt!',
    medium: 'Tell a story about a courageous little bird learning to fly from a high branch!',
    hardTwist: 'A sudden gust of wind blows past them!',
    starter: 'Even though my hands were shaking, I decided to be courageous and...',
    words: ['Courageous', 'Brave', 'Strong'],
    tip: 'Describe what it feels like right before you do something brave.'
  },

  // ==========================================
  // TEEN (9-17) - PICTURE TALK / SITUATIONS
  // ==========================================
  {
    age: 'teen', mode: 'picture',
    text: 'You find an unlocked phone buzzing on an empty cafeteria table after school.',
    easy: '<strong>1. Pick-up:</strong> You pick it up and see 5 missed calls from "MOM".<br><strong>2. Choice:</strong> Do you answer it, search contacts, or hand it to lost-and-found?<br><strong>3. The Twist:</strong> A new text pops up: "Please don\'t move it."',
    medium: 'Tell what you do in the next 30 seconds before anyone walks into the room!',
    hardTwist: 'Footsteps are coming fast down the hallway!',
    starter: 'The cafeteria was completely quiet when I spotted the phone buzzing...',
    words: ['Panic', 'Suspicious'],
    tip: 'Describe the buzzing vibration on the empty plastic table.'
  },
  {
    age: 'teen', mode: 'picture',
    text: 'It is 8:00 PM before a major presentation, and your project partner has not replied.',
    easy: '<strong>1. Problem:</strong> You open the shared document and see only 1 blank slide.<br><strong>2. Choice:</strong> Do you stay up late finishing it alone, or report it tomorrow?<br><strong>3. The Talk:</strong> What do you say when they walk into class smiling?',
    medium: 'Tell what text message you send them right now to get an answer!',
    hardTwist: 'Your laptop battery drops to 2% and your charger is missing!',
    starter: 'Looking at the clock at 8:00 PM, I had two clear choices...',
    words: ['Deadline', 'Frustrated'],
    tip: 'Tell how many slides were supposed to be done.'
  },
  {
    age: 'teen', mode: 'picture',
    text: 'You accidentally knock over and shatter an expensive glass display shelf in a busy store.',
    easy: '<strong>1. Accident:</strong> What did your elbow or backpack bump into?<br><strong>2. Reaction:</strong> Do you freeze, or look around for an employee immediately?<br><strong>3. Conversation:</strong> What do you say to the manager when they walk over?',
    medium: 'Explain how you stay calm, admit the mistake, and offer to help clean up!',
    hardTwist: 'Another customer points at you and calls loudly for security!',
    starter: 'The sound of glass breaking was loud enough that everyone stopped talking...',
    words: ['Accident', 'Responsible'],
    tip: 'Describe the broken items scattered on the floor.'
  },
  {
    age: 'teen', mode: 'picture',
    text: 'You type an honest complaint about a rule, but send it to the official group chat by accident.',
    easy: '<strong>1. Mistake:</strong> The second you hit Send and notice the group name.<br><strong>2. Reaction:</strong> Do you try to delete it for everyone, or type an apology?<br><strong>3. Facing Class:</strong> How do you handle things the next morning?',
    medium: 'Tell how you handle the first two minutes when you see "3 people are typing..."!',
    hardTwist: 'The group admin replies: "Please see me first thing tomorrow."',
    starter: 'My stomach dropped the second I saw the message go through...',
    words: ['Instant', 'Apology'],
    tip: 'Tell what the complaint was about.'
  },
  {
    age: 'teen', mode: 'picture',
    text: 'You were listening to music on the bus and realize you stayed on way past your stop.',
    easy: '<strong>1. Realization:</strong> You look out the window and see streets you do not recognize.<br><strong>2. Plan:</strong> Do you get off at the next stop, or talk to the driver?<br><strong>3. Heading Back:</strong> How do you navigate back home before dark?',
    medium: 'Tell what you check on your phone map to figure out where you are!',
    hardTwist: 'Your phone screen flickers and shuts down with 0% battery!',
    starter: 'I took off my headphones and realized this was definitely not my neighborhood...',
    words: ['Unfamiliar', 'Route'],
    tip: 'Describe what unfamiliar buildings or signs you see.'
  },
  {
    age: 'teen', mode: 'picture',
    text: 'An underground subway platform that local kids turned into a secret DIY skatepark.',
    easy: '<strong>1. The Space:</strong> Describe the smooth concrete platform and ramps between the tracks.<br><strong>2. The Crew:</strong> Who hangs out here after school and what music is playing?<br><strong>3. The Catch:</strong> What do people do when someone unfamiliar walks down the stairs?',
    medium: 'Describe the sound of wheels rolling on concrete and the one rule everyone follows!',
    hardTwist: 'Someone spots a security flashlight turning the corner at the stairs!',
    starter: 'Walking down the old station stairs, the first thing you hear is...',
    words: ['Underground', 'Echo'],
    tip: 'Describe the colorful graffiti art on the brick walls.'
  },
  {
    age: 'teen', mode: 'picture',
    text: 'An empty school hallway at 6:00 PM with one locker showing a bright light through its vents.',
    easy: '<strong>1. The Setting:</strong> Why are you still in the building after hours?<br><strong>2. The Locker:</strong> What color is the light, and whose locker is it?<br><strong>3. Opening It:</strong> What normal item was left inside that was making the glow?',
    medium: 'Explain whether you walk over to check it or just head straight for the exit!',
    hardTwist: 'The locker door suddenly pops open all by itself!',
    starter: 'The hallway was completely empty, but as I passed locker 42...',
    words: ['Quiet', 'Curious'],
    tip: 'Mention the squeak of your shoes on the polished floor.'
  },
  {
    age: 'teen', mode: 'picture',
    text: 'An unexpected garden with lush plants and benches on top of an ordinary office building.',
    easy: '<strong>1. Finding It:</strong> How did you discover the door leading to this quiet rooftop?<br><strong>2. The View:</strong> Contrast looking down at traffic while standing in quiet greenery.<br><strong>3. Your Routine:</strong> Why is this your favorite place to study or think?',
    medium: 'Describe sitting on the bench watching the sunset over the city buildings!',
    hardTwist: 'The heavy rooftop door clicks shut and locks from the inside!',
    starter: 'Most people take the elevator down to the lobby, but if you go up to the roof...',
    words: ['Peaceful', 'Skyline'],
    tip: 'Describe the cool breeze or the view of cars below.'
  },
  {
    age: 'teen', mode: 'picture',
    text: 'A package left on your porch with a label that says: "Do Not Open Until Next Year".',
    easy: '<strong>1. The Box:</strong> What size is the box, and is there a return address?<br><strong>2. The Curiosity:</strong> Do you keep it hidden in your room, or ask your family?<br><strong>3. The Guess:</strong> What harmless thing do you think is actually inside?',
    medium: 'Explain how hard it is to walk past that box every day without tearing off the tape!',
    hardTwist: 'You hear a faint ticking or buzzing sound coming from inside the box!',
    starter: 'Sitting right by the door was a box with no return address...',
    words: ['Curious', 'Patience'],
    tip: 'Describe the thick packing tape or the heavy cardboard.'
  },
  {
    age: 'teen', mode: 'picture',
    text: 'An old, forgotten table on the top floor of a library with books stacked high.',
    easy: '<strong>1. The Spot:</strong> Describe finding a hidden desk between tall wooden shelves.<br><strong>2. The Stack:</strong> What interesting topic or old map is in the book you pick up?<br><strong>3. Time Flying:</strong> Why is it so easy to sit there for hours without checking your phone?',
    medium: 'Explain why old paper books and quiet rooms feel so rare compared to scrolling online!',
    hardTwist: 'The overhead lights flicker off as the intercom announces closing time in 5 minutes!',
    starter: 'Tucked in the back corner of the third floor, there is a desk where...',
    words: ['Quiet', 'Focus'],
    tip: 'Describe the smell of old paper or the dust floating in the window light.'
  },

  // ==========================================
  // TEEN (9-17) - PICK A SIDE
  // ==========================================
  {
    age: 'teen', mode: 'wyr',
    text: 'Would you rather have your phone taken away every night at 8:00 PM, or keep it 24/7 with a location tracking app installed by your parents?',
    easy: '<strong>1. Position:</strong> State clearly which option you pick.<br><strong>2. Primary Reason:</strong> Why does your choice feel easier to live with?<br><strong>3. Trade-off:</strong> What is the one thing that will annoy you about your choice?',
    medium: 'Pick your side and explain which one gives you more peace of mind!',
    hardTwist: 'Address a parent who claims having a smartphone in your bedroom ruins sleep quality!',
    starter: 'Between the two options, I would choose... because...',
    words: ['Privacy', 'Freedom'],
    tip: 'Think about what time you usually turn off your screen at night.'
  },
  {
    age: 'teen', mode: 'wyr',
    text: 'Would you rather lead a 4-person group project where everyone shares the same grade, or do the entire assignment completely by yourself?',
    easy: '<strong>1. Position:</strong> Pick leading the team or working completely solo.<br><strong>2. Benefit:</strong> What headache do you avoid by making this choice?<br><strong>3. Downside:</strong> What is the hardest part about your choice when the deadline gets close?',
    medium: 'Pick your side and weigh dividing the work against having total control yourself!',
    hardTwist: 'Explain how you would handle an unfair situation if someone complains about your decision!',
    starter: 'When it comes to school projects, I prefer to... because...',
    words: ['Teamwork', 'Control'],
    tip: 'Think about whether you prefer sharing work or working at your own speed.'
  },
  {
    age: 'teen', mode: 'wyr',
    text: 'Would you rather have a 2-month summer break with zero responsibilities, or attend a demanding summer program that helps your future career?',
    easy: '<strong>1. Position:</strong> Pick complete relaxation or the productive summer program.<br><strong>2. Benefit:</strong> Why is your choice the best way to spend those two months?<br><strong>3. The Catch:</strong> What will you miss most about the other option?',
    medium: 'Pick your side and balance taking a break to recharge against getting ahead for the future!',
    hardTwist: 'Defend your choice to a critic who says you are either being lazy or taking life too seriously!',
    starter: 'If I had to plan my summer right now, I would choose...',
    words: ['Recharge', 'Future'],
    tip: 'Think about whether you get bored easily during long holidays.'
  },
  {
    age: 'teen', mode: 'wyr',
    text: 'Would you rather have friends who always tell you the brutal truth, or friends who tell polite white lies to protect your feelings?',
    easy: '<strong>1. Position:</strong> Pick brutal honesty or polite white lies.<br><strong>2. Why:</strong> How does your choice help protect the friendship in the long run?<br><strong>3. The Limit:</strong> In what situation could your choice cause a misunderstanding?',
    medium: 'Pick your side and explain what kind of communication makes you trust a friend more!',
    hardTwist: 'Explain how your choice actually preserves trust when things get difficult!',
    starter: 'In my friendships, I value... because...',
    words: ['Honest', 'Feelings'],
    tip: 'Think about a time a friend feedback either helped you or hurt your feelings.'
  },
  {
    age: 'teen', mode: 'wyr',
    text: 'Would you rather finish high school ranked at the very top of your class with zero close friends, or be an average student surrounded by great friends?',
    easy: '<strong>1. Position:</strong> Pick the top academic rank or the great group of friends.<br><strong>2. Value:</strong> Why does your choice matter more for your happiness and success?<br><strong>3. Sacrifice:</strong> How do you deal with missing out on the other side?',
    medium: 'Pick your side and compare achieving high marks against having people you can rely on!',
    hardTwist: 'Refute the argument that your chosen path leaves you completely unprepared for adulthood!',
    starter: 'Looking at high school life, I would rather have... because...',
    words: ['Grades', 'Friends'],
    tip: 'Think about whether memories or marks matter more to you five years from now.'
  },

  // ==========================================
  // TEEN (9-17) - HOT TAKES
  // ==========================================
  {
    age: 'teen', mode: 'opinions',
    text: 'Traditional daily homework does more harm to students than good.',
    easy: '<strong>1. Stance:</strong> State clearly whether you agree or disagree.<br><strong>2. Main Reason:</strong> Does homework reinforce lessons, or take away from rest and family time?<br><strong>3. Counterpoint:</strong> If you agree, how should practice work? If you disagree, what is a fair limit?',
    medium: 'Pick your side and explain what a healthy school-life balance should look like!',
    hardTwist: 'Answer an objection from a teacher who says homework is the only way students pass exams!',
    starter: 'When it comes to daily homework, I believe... because...',
    words: ['Practice', 'Balance'],
    tip: 'Mention how much time you usually spend studying after school.'
  },
  {
    age: 'teen', mode: 'opinions',
    text: 'Nobody under the age of 16 should be allowed to have personal social media accounts.',
    easy: '<strong>1. Stance:</strong> State whether you agree or disagree with setting the age at 16.<br><strong>2. Key Point:</strong> Does early access cause stress, or help teens stay connected and learn?<br><strong>3. Counterpoint:</strong> Is an age limit realistic to enforce, or should parents set the rules?',
    medium: 'Pick your side and balance online safety against letting teens express themselves!',
    hardTwist: 'Address the counter-argument that restricting teens from social media leaves them socially isolated!',
    starter: 'On the topic of social media age limits, I think...',
    words: ['Safety', 'Connected'],
    tip: 'Think about how you or people you know communicate with friends online.'
  },
  {
    age: 'teen', mode: 'opinions',
    text: 'School uniforms are better than letting students wear whatever they want.',
    easy: '<strong>1. Stance:</strong> Say clearly whether you agree or disagree.<br><strong>2. Main Point:</strong> Does a uniform keep everyone equal and save time, or stop personal expression?<br><strong>3. Counterpoint:</strong> What is the biggest advantage of the side you chose?',
    medium: 'Pick your side and compare morning convenience against personal style!',
    hardTwist: 'Address a principal who argues that your stance creates unnecessary discipline problems!',
    starter: 'When looking at school uniforms, I agree/disagree because...',
    words: ['Uniform', 'Style'],
    tip: 'Think about how long it takes to choose an outfit in the morning.'
  },
  {
    age: 'teen', mode: 'opinions',
    text: 'Using AI tools to help with schoolwork is smart studying, not cheating.',
    easy: '<strong>1. Stance:</strong> State whether you agree or disagree with using AI for assignments.<br><strong>2. The Line:</strong> Where does smart assistance cross into cheating and copying answers?<br><strong>3. Counterpoint:</strong> Does using AI prepare students for modern jobs, or weaken problem-solving?',
    medium: 'Pick your side and explain how technology should be used responsibly in learning!',
    hardTwist: 'Address the serious risk that overusing AI tools might weaken human problem-solving skills!',
    starter: 'Regarding AI in the classroom, I think...',
    words: ['Tool', 'Honesty'],
    tip: 'Think about how a calculator is used in math class compared to an AI tool.'
  },
  {
    age: 'teen', mode: 'opinions',
    text: 'Timed exams only test how much you can memorize, not how smart you are.',
    easy: '<strong>1. Stance:</strong> Say whether you agree or disagree with this statement.<br><strong>2. Why:</strong> Do exams reward revision and discipline, or put too much pressure on memory?<br><strong>3. Counterpoint:</strong> What other abilities (teamwork, speaking, projects) should be graded alongside tests?',
    medium: 'Pick your side and discuss what makes an evaluation system truly fair for all students!',
    hardTwist: 'Explain how universities could evaluate thousands of applicants fairly without standardized scores!',
    starter: 'Looking at how students are tested, I believe...',
    words: ['Memory', 'Skills'],
    tip: 'Think about whether you perform better on written tests or hands-on projects.'
  },

  // ==========================================
  // TEEN (9-17) - VOCAB YAP
  // ==========================================
  {
    age: 'teen', mode: 'vocab',
    vocab: { word: 'RELUCTANT', pos: 'adjective', meaning: 'Hesitant, unwilling, or holding back from doing something.', example: 'He was reluctant to lend his favorite jacket to his younger brother.' },
    text: 'Weave the word RELUCTANT into a story about someone hesitating to make a big decision!',
    easy: '<strong>1. The Situation:</strong> What was someone invited or asked to do?<br><strong>2. The Hesitation:</strong> Why were they so reluctant to say yes?<br><strong>3. What Happened:</strong> Did they finally do it, and was it worth it?',
    medium: 'Use RELUCTANT to describe a person who refused to join a competition or try something new!',
    hardTwist: 'Their best friend tries to peer-pressure them into changing their mind!',
    starter: 'At first, everyone was excited, but Mark was extremely reluctant because...',
    words: ['Reluctant', 'Hesitant', 'Choice'],
    tip: 'Use the word RELUCTANT at least once in your first two sentences.'
  },
  {
    age: 'teen', mode: 'vocab',
    vocab: { word: 'SKEPTICAL', pos: 'adjective', meaning: 'Doubtful; not easily convinced having reservations.', example: 'The class was skeptical when the teacher promised zero homework for a month.' },
    text: 'Weave the word SKEPTICAL into an argument or story about a rumor or wild promise!',
    easy: '<strong>1. The Claim:</strong> What crazy story, rumor, or deal did someone pitch?<br><strong>2. The Doubt:</strong> Why were you immediately skeptical of their words?<br><strong>3. The Proof:</strong> How did the truth finally come out in the end?',
    medium: 'Use SKEPTICAL to explain why you should never trust viral life hacks online!',
    hardTwist: 'The person claiming the story shows you a photoshopped image as proof!',
    starter: 'When I first heard the announcement, I was deeply skeptical because...',
    words: ['Skeptical', 'Doubt', 'Evidence'],
    tip: 'Contrast what sounded believable against what sounded fake.'
  },
  {
    age: 'teen', mode: 'vocab',
    vocab: { word: 'AUTHENTIC', pos: 'adjective', meaning: 'Genuine, real, and true to one\'s own personality rather than copied.', example: 'People respected her because she was always authentic on camera.' },
    text: 'Weave the word AUTHENTIC into a speech about online trends vs. staying true to yourself!',
    easy: '<strong>1. The Trend:</strong> What popular style or trend did everyone suddenly start copying?<br><strong>2. The Contrast:</strong> Why does being authentic stand out so much more?<br><strong>3. The Conclusion:</strong> Why is keeping an authentic voice harder than copying others?',
    medium: 'Use AUTHENTIC to defend why honest flaws are better than fake perfection online!',
    hardTwist: 'Someone accuses an influencer of being completely staged!',
    starter: 'In a world where everyone copies viral trends, being truly authentic means...',
    words: ['Authentic', 'Genuine', 'Original'],
    tip: 'Emphasize the word AUTHENTIC when you reach your main conclusion.'
  },

  // ==========================================
  // ADULT (18+) - PICTURE TALK
  // ==========================================
  {
    age: 'adult', mode: 'picture',
    text: 'The night before a trip, your suitcase will not zip shut and is bursting open with clothes.',
    easy: '<strong>1. The Problem:</strong> What clothes and shoes are spilling over the sides?<br><strong>2. Hard Choice:</strong> What is the one item you refuse to leave behind?<br><strong>3. The Fix:</strong> Do you sit on the bag to zip it, or take half the clothes out?',
    medium: 'Tell why packing for a trip is always more stressful than the trip itself!',
    hardTwist: 'You suddenly realize your passport is not in your bag!',
    starter: 'Every time I pack for a trip, I make the exact same mistake...',
    words: ['Overpacked', 'Essentials'],
    tip: 'Describe the messy clothes and jackets sitting on the bed.'
  },
  {
    age: 'adult', mode: 'picture',
    text: 'The waiter brings a plate with food you did not order, but they look very busy and tired.',
    easy: '<strong>1. The Surprise:</strong> What did you order vs. what is actually on the plate?<br><strong>2. The Dilemma:</strong> Do you just eat it quietly, or wave the waiter over?<br><strong>3. What You Say:</strong> How do you politely explain the mistake without sounding rude?',
    medium: 'Explain why sending food back at a restaurant feels so awkward and uncomfortable!',
    hardTwist: 'Your friend takes a bite and says: "Wait, this is actually delicious!"',
    starter: 'When the waiter set the plate down, I looked at it and thought...',
    words: ['Polite', 'Mistake'],
    tip: 'Describe what dish is sitting on the table in front of you.'
  },
  {
    age: 'adult', mode: 'picture',
    text: 'You wake up, look at the sunlight through the window, and realize your phone alarm never went off.',
    easy: '<strong>1. The Shock:</strong> You look at the clock and see it is already 8:30 AM.<br><strong>2. The Rush:</strong> What is the very first thing you grab as you jump out of bed?<br><strong>3. The Excuse:</strong> What text message do you type to explain why you are running late?',
    medium: 'Describe the crazy 5-minute rush to get dressed and run out the front door!',
    hardTwist: 'You check your calendar and realize... today is actually a public holiday!',
    starter: 'The second I opened my eyes and saw the sun, I knew something was wrong...',
    words: ['Overslept', 'Panicked'],
    tip: 'Describe frantically looking for your shoes or keys.'
  },
  {
    age: 'adult', mode: 'picture',
    text: 'You went to the supermarket for only milk and bread, but your shopping cart is completely full.',
    easy: '<strong>1. The Plan:</strong> What was the one thing you actually walked into the store to buy?<br><strong>2. The Temptation:</strong> What snacks or items did you end up tossing in the cart?<br><strong>3. The Register:</strong> How much did you expect to spend vs. the final bill?',
    medium: 'Explain why you should never walk into a grocery store when you are hungry!',
    hardTwist: 'You reach the cashier and realize you left your wallet at home!',
    starter: 'I only walked in for two minutes to grab one thing, but then...',
    words: ['Tempting', 'Budget'],
    tip: 'Name two of your favorite snacks sitting in the cart.'
  },
  {
    age: 'adult', mode: 'picture',
    text: 'You are walking down the street and suddenly see someone you have not spoken to in 5 years.',
    easy: '<strong>1. The Spot:</strong> Do you recognize them immediately or squint to make sure?<br><strong>2. The Catch-Up:</strong> What is the very first question you ask each other?<br><strong>3. The Promise:</strong> Do you make real plans to meet, or just say "Let\'s catch up soon!"?',
    medium: 'Describe how awkward or exciting those first 30 seconds of small talk feel!',
    hardTwist: 'You completely blank on their name while talking to them!',
    starter: 'Out of nowhere, someone tapped my shoulder and called out my name...',
    words: ['Surprise', 'Familiar'],
    tip: 'Describe what street, café, or shop you are standing outside of.'
  },

  // ==========================================
  // ADULT (18+) - PICK A SIDE
  // ==========================================
  {
    age: 'adult', mode: 'wyr',
    text: 'Would you rather be an early settler on Mars, or explore the deepest uncharted oceans on Earth?',
    easy: '<strong>1. Position:</strong> State your choice clearly.<br><strong>2. Primary Reason:</strong> What makes your choice more worthwhile?<br><strong>3. The Trade-off:</strong> What is the biggest drawback of your choice?',
    medium: 'Pick your side and compare the challenges of living in space versus surviving underwater.',
    hardTwist: 'Address a skeptic who says exploring either one is an irresponsible waste of tax money!',
    starter: 'Between space and the deep sea, I choose...',
    words: ['Exploration', 'Isolation'],
    tip: 'Focus on the physical environment of your choice.'
  },
  {
    age: 'adult', mode: 'wyr',
    text: 'Would you rather remember every single detail of your life, or be able to erase memories at will?',
    easy: '<strong>1. Position:</strong> State your choice clearly.<br><strong>2. Primary Reason:</strong> How does this choice benefit your life?<br><strong>3. The Trade-off:</strong> What problem could this ability create over time?',
    medium: 'Pick your side and evaluate the impact of memory control on personal growth.',
    hardTwist: 'Explain how your choice could actually cause serious friction in your personal relationships!',
    starter: 'Looking at how memory affects us, I would rather...',
    words: ['Recall', 'Perspective'],
    tip: 'Think about whether having total control over memory is genuinely useful.'
  },
  {
    age: 'adult', mode: 'wyr',
    text: 'Would you rather upload your consciousness into a computer to exist indefinitely, or live a natural 80-year lifespan?',
    easy: '<strong>1. Position:</strong> State your choice clearly.<br><strong>2. Primary Reason:</strong> What makes your choice the better way to exist?<br><strong>3. The Trade-off:</strong> What do you give up by making this choice?',
    medium: 'Pick your side and compare digital continuity against biological life.',
    hardTwist: 'Convince someone who completely disagrees with you that your choice is the truly human one!',
    starter: 'When considering the nature of life, I choose...',
    words: ['Continuity', 'Existence'],
    tip: 'Consider how time limits shape daily priorities.'
  },
  {
    age: 'adult', mode: 'wyr',
    text: 'Would you rather see a clear snapshot of your life 10 years from now, or re-live one full day from your past?',
    easy: '<strong>1. Position:</strong> State your choice clearly.<br><strong>2. Primary Reason:</strong> Why is that information or experience more valuable to you?<br><strong>3. The Trade-off:</strong> How might this knowledge affect how you live today?',
    medium: 'Pick your side and contrast knowing what lies ahead with revisiting what has already happened.',
    hardTwist: 'Explain why the option you rejected is far more dangerous than people realize!',
    starter: 'Given this choice, I would decide to...',
    words: ['Foresight', 'Reflection'],
    tip: 'Think about how certainty affects motivation.'
  },
  {
    age: 'adult', mode: 'wyr',
    text: 'Would you rather live in a society where work happens from 4:00 AM to 12:00 PM, or one that runs from 8:00 PM to 4:00 AM?',
    easy: '<strong>1. Position:</strong> State your choice clearly.<br><strong>2. Primary Reason:</strong> Why does this schedule suit human activity better?<br><strong>3. The Trade-off:</strong> What is the biggest friction of living on this schedule?',
    medium: 'Pick your side and compare daylight routines against nighttime operations.',
    hardTwist: 'Refute the argument that your chosen schedule would ruin a person physical health!',
    starter: 'In terms of schedule preference, I lean toward...',
    words: ['Productivity', 'Routine'],
    tip: 'Think about your typical energy levels during different parts of the day.'
  },

  // ==========================================
  // ADULT (18+) - HOT TAKES
  // ==========================================
  {
    age: 'adult', mode: 'opinions',
    text: 'Recommendation algorithms on digital platforms limit independent thinking.',
    easy: '<strong>1. Position:</strong> State whether you agree or disagree.<br><strong>2. Primary Reason:</strong> What evidence supports your view on algorithmic feeds?<br><strong>3. Counterpoint:</strong> In what situation is the opposing argument valid?',
    medium: 'Take a stance and evaluate how automated curation influences how people form viewpoints.',
    hardTwist: 'Weave in a real example of an algorithm showing someone something truly life-changing!',
    starter: 'On the question of content algorithms, I argue that...',
    words: ['Curation', 'Influence'],
    tip: 'Consider how feeds determine what information reaches users.'
  },
  {
    age: 'adult', mode: 'opinions',
    text: 'A cautious, defensive outlook produces better life outcomes than a strictly positive one.',
    easy: '<strong>1. Position:</strong> State whether you agree or disagree.<br><strong>2. Primary Reason:</strong> Why does your chosen mindset lead to better outcomes?<br><strong>3. Counterpoint:</strong> Where does your chosen mindset fall short?',
    medium: 'Take a stance and compare risk management against positive expectation.',
    hardTwist: 'Answer an objection that your chosen mindset makes a person either cowardly or reckless!',
    starter: 'Regarding personal outlook and decision-making, I believe...',
    words: ['Risk', 'Expectation'],
    tip: 'Think about how planning for worst-case scenarios compares to aiming for best-case ones.'
  },
  {
    age: 'adult', mode: 'opinions',
    text: 'Genetic enhancements for health and cognitive performance should be legally accessible to the public.',
    easy: '<strong>1. Position:</strong> State whether you agree or disagree.<br><strong>2. Primary Reason:</strong> What is the strongest justification for your position?<br><strong>3. Counterpoint:</strong> What valid concern does the opposing side raise?',
    medium: 'Take a stance and weigh technological capability against regulatory limits.',
    hardTwist: 'Address the ethical dilemma of who actually gets to afford this technology first!',
    starter: 'When it comes to genetic enhancement policy, I hold that...',
    words: ['Regulation', 'Capability'],
    tip: 'Think about how previous medical innovations were regulated.'
  },
  {
    age: 'adult', mode: 'opinions',
    text: 'Regular periods of boredom and non-stimulation are necessary for healthy cognitive function.',
    easy: '<strong>1. Position:</strong> State whether you agree or disagree.<br><strong>2. Primary Reason:</strong> What happens to the mind with or without constant stimulation?<br><strong>3. Counterpoint:</strong> What is the benefit of keeping the mind continuously engaged?',
    medium: 'Take a stance and evaluate the role of idle downtime versus active mental engagement.',
    hardTwist: 'Argue against someone who claims that calling boredom useful is just an excuse for laziness!',
    starter: 'On the subject of mental downtime, my position is...',
    words: ['Stimulation', 'Downtime'],
    tip: 'Consider how mental rest compares to active problem-solving.'
  },
  {
    age: 'adult', mode: 'opinions',
    text: 'Creative works generated by artificial intelligence lack authentic artistic value.',
    easy: '<strong>1. Position:</strong> State whether you agree or disagree.<br><strong>2. Primary Reason:</strong> Does artistic value depend on human origin or on audience reception?<br><strong>3. Counterpoint:</strong> Under what circumstances could the opposite view hold merit?',
    medium: 'Take a stance and define what determines value in a creative work.',
    hardTwist: 'Explain what you would do if a computer-generated song genuinely brought you to tears!',
    starter: 'In assessing AI-generated creative work, I consider that...',
    words: ['Intent', 'Interpretation'],
    tip: 'Think about whether art is defined by the process or by the end product.'
  },

  // ==========================================
  // ADULT (18+) - VOCAB YAP
  // ==========================================
  {
    age: 'adult', mode: 'vocab',
    vocab: { word: 'NUANCED', pos: 'adjective', meaning: 'Characterized by subtle distinctions or complexity, not simple black-and-white.', example: 'The debate around remote work requires a nuanced perspective.' },
    text: 'Weave the word NUANCED into a speech explaining why modern dilemmas cannot be solved with simple answers!',
    easy: '<strong>1. The Issue:</strong> Pick a topic people argue about in black-and-white terms.<br><strong>2. The Layers:</strong> Explain why the reality is actually much more nuanced.<br><strong>3. The Balance:</strong> Conclude by stating what compromise works best.',
    medium: 'Use NUANCED to challenge someone who gives an oversimplified opinion on a complex topic!',
    hardTwist: 'A listener demands a simple YES or NO answer from you!',
    starter: 'People love simple slogans, but the truth is far more nuanced because...',
    words: ['Nuanced', 'Complexity', 'Balance'],
    tip: 'Use NUANCED when pointing out the grey areas between extremes.'
  },
  {
    age: 'adult', mode: 'vocab',
    vocab: { word: 'PRAGMATIC', pos: 'adjective', meaning: 'Dealing with things sensibly and realistically based on practical results.', example: 'She took a pragmatic approach by prioritizing budget over perfection.' },
    text: 'Weave the word PRAGMATIC into a story or reflection about choosing what works over an impossible ideal!',
    easy: '<strong>1. The Goal:</strong> What project or plan was getting too complicated or idealistic?<br><strong>2. The Shift:</strong> Why was taking a pragmatic approach the only way forward?<br><strong>3. The Outcome:</strong> How did focusing on practical results save time or money?',
    medium: 'Use PRAGMATIC to defend why an imperfect solution delivered on time beats a perfect dream!',
    hardTwist: 'Someone accuses you of settling for less and abandoning the original dream!',
    starter: 'While others argued about perfection, we had to be pragmatic and...',
    words: ['Pragmatic', 'Realistic', 'Execution'],
    tip: 'Contrast theoretical ideals with pragmatic reality.'
  },
  {
    age: 'adult', mode: 'vocab',
    vocab: { word: 'BOTTLENECK', pos: 'noun', meaning: 'A point of congestion that slows down an entire process or workflow.', example: 'Slow approval times created a massive bottleneck in the project.' },
    text: 'Weave the word BOTTLENECK into an analysis of what slows down productivity in daily routines!',
    easy: '<strong>1. The Process:</strong> What daily routine or workflow always takes too long?<br><strong>2. The Bottleneck:</strong> What is the single bottleneck slowing everything down?<br><strong>3. The Fix:</strong> What simple change would instantly clear the delay?',
    medium: 'Use BOTTLENECK to explain why working longer hours does not fix a broken system!',
    hardTwist: 'A colleague argues that hiring more people is the only solution!',
    starter: 'The problem was never the team effort; the real bottleneck was...',
    words: ['Bottleneck', 'Delay', 'Efficiency'],
    tip: 'Identify the exact pinch-point that causes the backlog.'
  }
];
