var timeEl = document.querySelector(".half");
var mainEl = document.getElementById(".half");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
     // sendMessage();
    }

  }, 1000);
}

setTime();

// I tried really hard to create an array of objects but something did not work. 
// array.umshift and array.push and array.splice will add object to this array. 
// Do not understand why Jon can run planet.neighboringPlanets[0] but I cannot run myQuestions.possibleAnswers[0]

// var myQuestions = [ { question: "The condition in an if / else is enclosed within ___.", possibleAnswers: 
// ["Button1", "Button2", "Button3", "Button4"], correctAnswer: "Button2"}, //end of question 1
// { question: "String values must be enclosed within ___.", possibleAnswers: 
//["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"], correctAnswer: ""}, //end of question 2
// { question: "Arrays in JavaScript can be used to store", possibleAnswers: 
// ["Button9", "Button10", "Button11", "Button12"], correctAnswer: "Button9"}, //end of question 3
// { question: "A very useful tool used for development and debugging", possibleAnswers: 
// ["Button13", "Button14", "Button15", "Button16"], correctAnswer: "Button16"}, //end of question 4
// { question: "Commonly used data types do not include:", possibleAnswers: 
// ["Button17", "Button18", "Button19", "Button20"], correctAnswer: "Button19"}, //end of question 5
// ]

questions1 = ["The condition in an if / else is enclosed within ___.", "String values must be enclosed within ___.", 
"Arrays in JavaScript can be used to store", "A very useful tool used for development and debugging", 
"Commonly used data types do not include:"]
possibleAnswers1 = [["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"], ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"], 
["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"], ["1. JavaScript", "2. Bash", "3. For loop", "4. Console.log"], 
["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"]]
correctAnswers1 = [2, 3, 3, 3, 2]

var numberOfQuestions = questions1.length;
var numberOfAnswers = possibleAnswers1[0].length; 
 console.log(numberOfAnswers + ", " + numberOfQuestions + ", " + correctAnswers1)
 var currentQuestion = 0;

function callQuestion (currentQuestion){
  document.getElementById("headline").textContent = questions1[currentQuestion];
  document.getElementsByClassName("button1").textContent = possibleAnswers1[currentQuestion][0];
  document.getElementsByClassName("button2").textContent = possibleAnswers1[currentQuestion][1];
  document.getElementsByClassName("button3").textContent = possibleAnswers1[currentQuestion][2];
  document.getElementsByClassName("button4").textContent = possibleAnswers1[currentQuestion][3];

} //end function callQuestion
callQuestion(currentQuestion)

var firstButton = document.querySelector(".button1");
var secondButton = document.querySelector(".button2");
var thirdButton = document.querySelector(".button3");
var forthButton = document.querySelector(".button4");
// I am sure there is way not to define four different functions here. But it seems faster for me

firstButton.addEventListener("click",enterAnswer);
secondButton.addEventListener("click",enterAnswer);
thirdButton.addEventListener("click",clickThree);
forthButton.addEventListener("click",clickFour);

console.log(currentQuestion + " " + correctAnswers1);

function enterAnswer (event) {console.log(event.currentTarget.value);}
enterAnswer()

function clickOne() {value1 = 0;
  if (correctAnswers1[currentQuestion] === value1) {
  document.getElementById("answer").textContent = "Correct!"}
  else {document.getElementById("answer").textContent = "Wrong!"
secondsLeft = secondsLeft - 5}
console.log(currentQuestion + " " + " " + correctAnswers1[currentQuestion] + " " + correctAnswers1 );
callQuestion(currentQuestion)
currentQuestion++;
if (currentQuestion === 5) {currentQuestion = 4};
// console.log(currentQuestion + " " + correctAnswers1);
}; // end function ClickOne

function clickTwo() {value1 = 1;
  if (correctAnswers1[currentQuestion] === value1) {
  document.getElementById("answer").textContent = "Correct!"}
  else {document.getElementById("answer").textContent = "Wrong!"
  secondsLeft = secondsLeft - 5}
  console.log(currentQuestion + " " + " " + correctAnswers1[currentQuestion] + " " + correctAnswers1 );
   callQuestion(currentQuestion)
   currentQuestion++;
   if (currentQuestion === 5) {currentQuestion = 4};
  //  console.log(currentQuestion + " " + correctAnswers1);
}; // end function ClickTwo

function clickThree() {value1 = 2;
  if (correctAnswers1[currentQuestion] === value1) {
  document.getElementById("answer").textContent = "Correct!"}
  else {document.getElementById("answer").textContent = "Wrong!"
  secondsLeft = secondsLeft - 5}
  console.log(currentQuestion + " " + " " + correctAnswers1[currentQuestion] + " " + correctAnswers1 );
  callQuestion(currentQuestion)
  currentQuestion++;
  if (currentQuestion === 5) {currentQuestion = 4};
}; // end function ClickThree

function clickFour() {value1 = 3;
  if (correctAnswers1[currentQuestion] === value1) {
//  console.log(correctAnswers1 + " x " + " y ");
  document.getElementById("answer").textContent = "Correct!"}
  else {document.getElementById("answer").textContent = "Wrong!"
  secondsLeft = secondsLeft - 5}
  console.log(currentQuestion + " " + " " + correctAnswers1[currentQuestion] + " " + correctAnswers1 );
  callQuestion(currentQuestion);
  currentQuestion++;
  if (currentQuestion === 5) {currentQuestion = 4};
  // console.log(currentQuestion + " " + correctAnswers1);
}; // end function ClickFour

if  (correctAnswers1[currentQuestion] === 0){clickOne()}
else if (correctAnswers1[currentQuestion] === 1){clickTwo()}
else if (correctAnswers1[currentQuestion] === 2){clickThree()}
else if (correctAnswers1[currentQuestion] === 3){clickFour()}
else {document.getElementById("answer").textContent = "Something went rong!"}

var submitInitialsButton = document.querySelector("#initialsButton");
// submitInitialsButton.addEventListener("click", function() {allDone();});

function allDone (){document.getElementById("headline").textContent = "All done!";
document.getElementById("list1").textContent = "Your final score is"
document.getElementById("list2").textContent = "<button>Submit</button>"
}
// allDone()

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
// submitEl.addEventListener("click", showResponse);
