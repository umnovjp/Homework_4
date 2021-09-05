var timeEl = document.querySelector(".half");
// var sendMesssage =
// Selects element by id
var mainEl = document.getElementById(".half");

var secondsLeft = 30;

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
possibleAnswers1 = [["Button1", "Button2", "Button3", "Button4"], ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"], 
["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"], ["Button13", "Button14", "Button15", "Button16"], 
["Button17", "Button18", "Button19", "Button20"]]
correctAnswres1 = ["Button3", "Button6", "Button 9", "Button15", "Button17"]

//var myQuestions  = myQuestions;
// arrayOfQuestions.slice(1,1)

var numberOfQuestions = questions1.length;
 var numberOfAnswers = 4; 
 console.log(numberOfAnswers + ", " + numberOfQuestions)

//var correctAnswer = document.querySelector(".button-correct");
//var incorrectAnswer = document.querySelector(".button-incorrect");
// correctAnswer.addEventListener("click", function() {document.getElementById("answer").innerHTML = "Correct!"})
// incorrectAnswer.addEventListener("click", function() {document.getElementById("answer").innerHTML = "Wrong!"})
// document.getElementsById("submit").submit();
// function selectAnswer (event){
 //   console.log(event.currentTarget);
 
 for (i = 0; i < 5; i++) // function createQuestion (question, possibleAnswers, correctAnswer, message) // 
 {   //  var answers = [];
      var input = questions1[i];
    console.log(input);
    screenText = [];
    screenText.push(input);
    document.getElementById("headline").textContent = input;
    //  console.log(arrayOfQuestions[i]);
     for (j = 0; j < numberOfAnswers; j++) {
      console.log('i= ' + i + '. j= ' + j + ' ' + possibleAnswers1[i][j]); 
      var currentButton = possibleAnswers1[i][j];
      buttonText = [];
      buttonText.push(currentButton);
      document.getElementById("submit").textContent = buttonText;
      console.log(buttonText);   };
     //
     // answers.push(output);
     // var temp = String(myQuestions[i,j])
   //  console.log(temp)
  //  answers.push(temp) 
   // console.log(answers)
  //  output.push()
};

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
