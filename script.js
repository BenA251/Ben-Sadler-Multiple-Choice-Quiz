/* Arrays for 20 Questions and Answers with Science and Inventions Theme*/

var questionsArr = [
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
]

var correctAnswerArr = [
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
]

var wrongAnswerAArr = [
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
]

var wrongAnswerBArr = [
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
]

/*var randomcorrectAnswerArr = [];
var randomwrongAnswerAArr = [];
var randomwrongAnswerBArr = []; */



/*  
A function which takes all the Q&A arrays and creates new arrays 10 entries which randomise order of questions so when the game is played the questions are in random order, this needs to also apply to arrays so correct answer and wrong answers display which correspond to question. It also ensures the same question is
*/


/* 
pick random number within length of array
check if in existing new array do not add i.
add to new array if not existing add plus one

*/




function generateQA (QuestionArr) {
  var randomQArr = [];
  var i = 0
  while (i < 10) {
    var Rand1 = Math.floor(Math.random() * QuestionArr.length);
    if (!randomQArr.includes(Rand1)) {
      randomQArr.push(Rand1);
      i++
    }
  }
  return randomQArr
}


var randomQuestionsArr = generateQA (questionsArr);
console.log (randomQuestionsArr);










/*

console.log (document);
var time = document.querySelector("#time");
console.log(time.textContent)
time.textContent = "45"

var startButton = document.querySelector("#start");
startButton.click();

*/
