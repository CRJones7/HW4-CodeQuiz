var quizEl = document.querySelector(".quiz");
var titleEl = document.querySelector(".h2");
var instructionsEl = document.querySelector(".p1");
var startEl = document.querySelector(".startBtn");
var questionsEl = document.querySelector(".questions");
var changingQEl = document.querySelector(".question");
var choiceEl = document.querySelectorAll(".choices");

//time variables
var timeCount = document.querySelector(".timeCount");
var secondsLeft = 120;

//add event listener on start
startEl.addEventListener("click", startQuiz);

//Start the timer and end the timer calls for question 1 to appear
function startQuiz() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeCount.textContent = secondsLeft;

    

    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          
        }
    
      }, 1000);
console.log("dawgs")

}


