var timeEl = document.querySelector(".half");
// var mainEl = document.getElementById(".half");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
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

questions1 = ["Coding Quiz Challenge", "The condition in an if / else is enclosed within ___.", "String values must be enclosed within ___.",
  "Arrays in JavaScript can be used to store", "A very useful tool used for development and debugging",
  "Commonly used data types do not include:", "All Done!", "High Scores"]
possibleAnswers1 = [["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"], ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"], ["1. JavaScript", "2. Bash", "3. For loop", "4. Console.log"],
["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"]]
correctAnswers1 = [0, 2, 3, 3, 3, 2, 0]

var startContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
var numberOfQuestions = questions1.length;
var numberOfAnswers = possibleAnswers1[0].length;
console.log(numberOfAnswers + ", " + numberOfQuestions + ", " + correctAnswers1)

// quizTheMorningAfter = ["All Done!", ];
listItems = ["Your final score is", "Enter Initials: "];

var currentQuestion = -1;

function callQuestion() {
  currentQuestion++;
  document.getElementById('question').innerHTML = "";
  var hTag = document.createElement("h1");
  hTag.textContent = questions1[currentQuestion];
  hTag.setAttribute("class", "headline")
  document.getElementById('question').appendChild(hTag);
  hTag.setAttribute("style", "width:80%")
  console.log(currentQuestion + " headline")
  
  if(currentQuestion === 0) { 
    hTag.setAttribute("style", "text-align: center");
    var pTag0 = document.createElement("p");
    pTag0.textContent = startContent; 
    pTag0.setAttribute("class", "list1");
    pTag0.setAttribute("style", "text-align: center");
    document.getElementById('question').appendChild(pTag0);
    var startButton = document.createElement("button");
    startButton.setAttribute("class", "button-style");
    startButton.setAttribute("id", "submit");
    startButton.setAttribute("style", "left: 50%");
    startButton.textContent = "Start Quiz";
    document.getElementById('question').appendChild(startButton);

    var startButton = document.querySelector(".button-style"); // for some reason querySelector("#submit") did not work
  startButton.addEventListener("click", startQuiz);

  function startQuiz (event) {
   // console.log(event.currentTarget + " " + currentQuestion);
    callQuestion();
  };
}; // end if

 if (currentQuestion < 6 && currentQuestion > 0) {
    // for (i = 0; i < 4; i++) {
    for (i = 0; i < possibleAnswers1[0].length; i++) {
    var divTag = document.createElement("div");
    var buttonId = "button".concat(i);
    // console.log(buttonId)
    var buttonTag = document.createElement("button");
    buttonTag.textContent = possibleAnswers1[currentQuestion-1][i];
    buttonTag.setAttribute("class", "button-style")
    buttonTag.setAttribute("id", buttonId)
    document.getElementById('question').appendChild(divTag);
    divTag.appendChild(buttonTag);
  }; // end for loop

  var firstButton = document.querySelector("#button0");
  var secondButton = document.querySelector("#button1");
  var thirdButton = document.querySelector("#button2");
  var forthButton = document.querySelector("#button3");

  firstButton.addEventListener("click", enterAnswer);
  secondButton.addEventListener("click", enterAnswer);
  thirdButton.addEventListener("click", enterAnswer);
  forthButton.addEventListener("click", enterAnswer);

  console.log(currentQuestion + " " + correctAnswers1 + " " + buttonId + "before enterAnswer");

  function enterAnswer(event) {
    console.log(event.currentTarget);
    tempArray = event.currentTarget.textContent.split(".");
    tempValue = tempArray[0] - 1;
    //console.log(tempValue + " " + currentQuestion + " " + );
    var lineBreak = document.createElement("HR");
    document.getElementById('question').appendChild(lineBreak);
    lineBreak.setAttribute("style", "background-color: grey; width: 75%; height: 2px; margin-left: 10%")
    var answerTag = document.createElement("p");
    answerTag.setAttribute("class", "answer");
    document.getElementById('question').appendChild(answerTag);
   // console.log("current inside loop" + currentQuestion + "tempValue " + tempValue + "correct Answer" + correctAnswers1[currentQuestion])
    if (correctAnswers1[currentQuestion] == tempValue) {
      answerTag.textContent = "Correct!"
    }
    else {
      answerTag.textContent = "Wrong!"
      secondsLeft = secondsLeft - 10;
    }
    
    setTimeout(callQuestion, 800)
  }; //end function enterAnswer
}; // end if currentQuestion < 5 statement
  if (currentQuestion === 6) {
  var pTag0 = document.createElement("p");
  pTag0.textContent = listItems[0]  + ' ' + secondsLeft;
  pTag0.setAttribute("class", "list1");
  document.getElementById('question').appendChild(pTag0);
  var pTag1 = document.createElement("p");
  pTag1.textContent = listItems[1];
  pTag1.setAttribute("class", "list1")
  pTag1.setAttribute("id", "parTag1")
  document.getElementById('question').appendChild(pTag1);
  var input1 = document.createElement("input");
  input1.setAttribute("id", "input")
  document.getElementById('parTag1').appendChild(input1);
  var submitButton = document.createElement("button");
  submitButton.setAttribute("class", "button-style");
  submitButton.setAttribute("id", "submit");
  submitButton.setAttribute("style", "left: 2%");
  submitButton.textContent = "Submit";
  document.getElementById('parTag1').appendChild(submitButton);
}; // end if currentQuestion === 6 

  var submitButton = document.querySelector(".button-style"); // for some reason querySelector("#submit") did not work
  submitButton.addEventListener("click", enterScore);

  function enterScore (event) {
   // console.log(event.currentTarget + " " + currentQuestion);
    currentQuestion--;
    callQuestion();
  };

var enterInitials = document.querySelector("#input");
localStorage.setItem("initials", initials);

var initials = localStorage.getItem("initials");
enterInitials.textContent = initials;
submitButton.addEventListener("click",initials);
// var enterInitials = localStorage.getItem("initials");
// callQuestion++;
 
} // end callQuestion

callQuestion();

// function lastSlide (current) {
 // currentQuestion === 7;
// if (currentQuestion === 7) {
 // var list2 = document.createElement("li");
//  list2.textContent = "Score";
//  document.getElementById('question').appendChild(list2);
 // }; // end if currentQuestion === 7
// }
// lastSlide() //

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}

