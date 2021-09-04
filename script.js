var timeEl = document.querySelector(".half");
// var sendMesssage =
// Selects element by id
var mainEl = document.getElementById(".half");

var secondsLeft = 30;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
     // sendMessage();
    }

  }, 1000);
}

setTime();

var myQuestions = [ { question: "The condition in an if / else is enclosed within ___.", possibleAnswers: 
{1: "Button1", 2: "Button2", 3: "Button3", 4: "Button4"}, correctAnswer: "Button2"}, //end of question 1
{ question: "String values must be enclosed within ___.", possibleAnswers: 
{1: "Button5", 2: "Button6", 3: "Button7", 4: "Button8"}, correctAnswer: "Button7"}, //end of question 2
{ question: "Arrays in JavaScript can be used to store", possibleAnswers: 
{1: "Button9", 2: "Button10", 3: "Button11", 4: "Button12"}, correctAnswer: "Button9"}, //end of question 3
{ question: "A very useful tool used for development and debugging", possibleAnswers: 
{1: "Button13", 2: "Button14", 3: "Button15", 4: "Button16"}, correctAnswer: "Button16"}, //end of question 4
{ question: "Commonly used data types do not include:", possibleAnswers: 
{1: "Button17", 2: "Button18", 3: "Button19", 4: "Button20"}, correctAnswer: "Button19"}, //end of question 5
]

//var myQuestions  = myQuestions;
// arrayOfQuestions.slice(1,1)

var numberOfQuestions = 4; // does not work
 var numberOfAnswers = myQuestions.length;
console.log(numberOfAnswers + ", " + numberOfQuestions)

//var correctAnswer = document.querySelector(".button-correct");
//var incorrectAnswer = document.querySelector(".button-incorrect");
// correctAnswer.addEventListener("click", function() {document.getElementById("answer").innerHTML = "Correct!"})
// incorrectAnswer.addEventListener("click", function() {document.getElementById("answer").innerHTML = "Wrong!"})
// document.getElementsById("submit").submit();
// function selectAnswer (event){
 //   console.log(event.currentTarget);
 
 for (i = 0; i < 5; i++) // function createQuestion (question, possibleAnswers, correctAnswer, message) // 
 {    var answers = [];
      var output
    console.log(myQuestions[i]);
    //  console.log(arrayOfQuestions[i]);
     for (j = 0; j < numberOfAnswers; j++)
     console.log(i + '.' + myQuestions[i,j])
     var output = myQuestions[i,j];
     answers.push(output);
     // var temp = String(myQuestions[i,j])
   //  console.log(temp)
  //  answers.push(temp) 
   console.log(answers)
  //  output.push()
}

// submitAnswer.addEventListener("click",selectAnswer);
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
submitEl.addEventListener("click", showResponse);
