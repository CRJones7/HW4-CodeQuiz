var quizEl = document.getElementById("quiz");
var startEl = document.getElementById("startBtn");
var startingTextEl = document.getElementById("startingText");
var questionAnswerEl = document.getElementById("question-section");
var answersEl = document.getElementsByClassName("answers");
var endSection = document.getElementById("end-game");



//answer outcome variables
var correctAnswer = 0;
var incorrectAnswer = 0;
var endScore = document.getElementById("end-score");
endScore = 0;

//time variables
var timeCount = document.getElementById("timer");
var secondsLeft = 10;

//create questions
var myQuestions = ["Commonly used data types DO NOT include:","Which of the following is most commonly used to style a webpage?"];
var answersA = ["strings", "javascript"];
var answersB = ["booleans", "CSS"];
var answersC = ["alerts", "HTML"];
var answersD = ["numbers", "C++"];
var correct = ["alerts", "CSS"];


//Start the timer and end the timer calls for question function
function startQuiz() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeCount.textContent = secondsLeft;
    startingTextEl.style.display = "none";


    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //show form and score
    }

  }, 1000);
  questionAnswerEl.style.display = "block";
  displayQuestion(timerInterval);
 
}

//listen for click event
function handleAnswerClick() {
  console.log("Event target");
  console.log(event.target.innerText);

  if (event.target.innerText == correct[i]) {
    console.log(correct)
    correctAnswer +1,
      console.log(correctAnswer);

  }
  
}

var i = -1;

function displayQuestion() {
  i++;
  // document.getElementById("questions") = "Q. " + myQuestions[i];
  document.getElementById("a").innerText = "1. " + answersA[i];
  document.getElementById("b").innerText = "2. " + answersB[i];
  document.getElementById("c").innerText = "3. " + answersC[i];
  document.getElementById("d").innerText = "4. " + answersD[i];
  if (i === myQuestions.length) {
    questionAnswerEl.style.display = "none";
    endSection.style.display = "block";
    // clearInterval(time);
  }
return i;
}


//add event listeners
startEl.addEventListener("click", startQuiz);
questionAnswerEl.addEventListener("click", function(){
  console.log("click");
  displayQuestion();
});

// answersEl.addEventListener("click", handleAnswerClick);
//listen to the question element for clicks,
// use innerText to see the value of the button (might have to use the children() method)








//Correct or incorrect notification 
//if incorrect subtract 10 sec move to next question
//if correct move to next question
//record score
//once time = 0 clear questions 
    //show score 
    //allow user to input their initials with their score filled into the field
 //add score and initials to highscore table
