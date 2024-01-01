/* Arrays for 20 Questions and Answers with Science and Inventions Theme*/

const questionsArr = [
"How many bones does an adult human have?",
"What is the smallest unit of matter?",
"What is the primary gas that makes up the Earth’s atmosphere?",
"Which of the following can’t an astronaut do in space?",
"What is the hardest natural substance on planet Earth?",
"Which planet has 145 moons?",
"How many bones do sharks have in their body?",
"Which part of the human body has the most sweat glands?",
"What color is the sunset on Mars?",
"How many humans have walked on the Moon?",
"In which country was the game of chess invented?",
"Which scientist invented penicillin?",
"Which hair product was invented in 1950?",
"When was the world’s first ATM introduced, in Enfield, UK?",
"Where were Venetian blinds invented?",
"In which ancient civilization were scissors invented?",
"When was the first ever SMS text message sent?",
"In which year was the first submarine built, by Dutch engineer Cornelis Jacobszoon Drebbel?",
"What was the world’s first postage stamp, issued in the United Kingdom in 1840 called?",
"What did Charles Babbage famously invent?"
];

const correctAnswerArr = [
"206",
"Atom",
"Nitrogen",
"Cry",
"Diamond",
"Saturn",
"Zero",
"Feet",
"Blue",
"12",
"India",
"Alexander Fleming",
"Hair Spray",
"1967",
"Persia",
"Ancient Egypt",
"1992",
"1620",
"Penny Black",
"The computer"
];

const wrongAnswerAArr = [
"200",
"Cell",
"Oxygen",
"Sleep",
"Gold",
"Mars",
"52",
"The armpit",
"Red",
"14",
"China",
"Alexander Graham Bell",
"Hair straighteners",
"1977",
"Italy",
"Ancient Rome",
"1987",
"1750",
"Penny Farthing",
"The microwave"
];

const wrongAnswerBArr = [
"216",
"Molecule",
"Carbon dioxide",
"Read",
"Platinum", 
"Mercury",
"152",
"Hands", 
"Pink",
"18",
"Greece",
"Thomas Edison", 
"Shampoo",
"1987", 
"Scotland", 
"Ancient Greece",
"1990",
"1850",
"Penny Red", 
"The television" 
];


function game (QuestionArr, correctAnsArr, wrongAnsAArr, wrongAnsBArr) {
  /*all function variables declared at top for easy access */

  var StartScreen = document.getElementById("start-screen")
  var Questions = document.getElementById("questions")
  var randomQArr = [];
  var randomAArr = [];
  var answerPositionArrInitial = [];
  var answerPositionArrFinal = [];
  var i = 0;
  var numberOfRounds = 10;
  var Question = document.getElementById("question-title")
  var ChoiceA = document.getElementById("ChoiceA")
  var ChoiceB = document.getElementById("ChoiceB")
  var ChoiceC = document.getElementById("ChoiceC")
  var correctAns;
  var Rand1;

  /*upon click event hides startscreen and shows questions */
  StartScreen.setAttribute("class", "hide");
  Questions.removeAttribute("class", "hide");

  /*while conditions ensures number of rounds does not exceed question Array length to avoid duplicate questions*/
  while (i < numberOfRounds || i < QuestionArr.length) {
    Rand1 = Math.floor(Math.random() * QuestionArr.length);
    /*below runs until next question*/
    if (!randomQArr.includes(Rand1)) {
      /*adds accepted number to array which keeps track of used questions throughout game*/
      randomQArr.push(Rand1);
      /*command for dynamically updating question with current question */
      Question.innerHTML = QuestionArr[randomQArr[i]]; 
      /*save correct Answer for later reference to check against user selection */
      correctAns = correctAnsArr[randomQArr[i]];
      /*commands to enable randomly placing possible answers including correct in 3 available slots to avoid correct answer always being in same slot (e.g. always top answer)*/
      answerPositionArrInitial = [correctAnsArr[randomQArr[i]], wrongAnsAArr[randomQArr[i]], wrongAnsBArr[randomQArr[i]]];
      /* function to create array with three numbers from 0 - 2 which will be used to assign answers to slots */
      randomAArr = RandArr();
      /* combines two arrays to make final answer array to achieve random placement of answers*/
      answerPositionArrFinal = [answerPositionArrInitial[randomAArr[0]],answerPositionArrInitial[randomAArr[1]],answerPositionArrInitial[randomAArr[2]]]
      /* updates HTML with answers for selection*/
      ChoiceA.innerHTML = answerPositionArrFinal[0]; 
      ChoiceB.innerHTML = answerPositionArrFinal[1]; 
      ChoiceC.innerHTML = answerPositionArrFinal[2]; 
      i++
    }
  }
  
}


function RandArr () {
  var randAArr = [];
  var Rand2;
  var i = 0;
  while (i < 3) {
  Rand2 = Math.floor(Math.random() * 3);
  /*below runs until next question*/
  if (!randAArr.includes(Rand2)) {
    randAArr.push(Rand2);
    i++
  }
  }
  return randAArr
  }
  
  
  
  





