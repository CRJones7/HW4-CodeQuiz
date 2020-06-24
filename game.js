

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


//time variables
var timeCount = document.getElementById("timer");
var secondsLeft = 50;

//create questions
var myQuestions = ["How many times have the Celtics played the Lakers in the NBA finals?", "Which player was not apart of the BIG 3 treo?", "When was the last Celtics championship won?", "Who was the first African American drafted to the celtics (And the NBA)?", "Which team has won the most NBA championships?"];
var answersA = ["10", "Paul Pierce","2002", "Chuck Cooper", "Lakers"];
var answersB = ["8", "Rajan Rondo","1995", "Kyrie Irving", "Nuggets"];
var answersC = ["15", "Ray Allen","2012", "Jonas Neil", "Celtics"];
var answersD = ["12", "Kevin Garnet","2008", "Ryan Stephens", "Cavs"];
var correct = ["12", "Rajan Rondo","2008", "Chuck Cooper", "Celtics"];


var playersScore =[];
var scoreInput = document.getElementById("score-field");
var saveBtn = document.getElementById("save-score");
var scoreBoard = document.getElementById("player-score");

var highscoreEl = document.getElementById("highscores");
var clearBtn = document.getElementById("clear");
var goBackBtn = document.getElementById("go-back");

saveBtn.addEventListener("click", function(){
  playersScore.push({initals: scoreInput.value, score:finalScore});
  
})



//questions index
var i = -1;

//Start the timer and end the timer calls for question function
function startQuiz() {
  startingTextEl.style.display = "none";
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeCount.textContent = secondsLeft;
    


    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // stop showing questions
    questionAnswerEl.style.display = "none";
    // show score entry
    endSection.style.display = "block";
      //show form and score
    
    }

  }, 1000);
  questionAnswerEl.style.display = "block";
  displayQuestion();

}

//listen for click event
function handleAnswerClick() {
  console.log(event.target.innerHTML);
  if (event.target.innerHTML == correct[i]) {
    console.log(correct[i]);
    correctAnswer++;
    console.log(correctAnswer);
    finalScore = correctAnswer * 10 + "/50";
    console.log(finalScore);
    endScore.textContent = finalScore;

  } else if (event.target.innerHTML != correct[i]) {
    secondsLeft -= 10;
  }
  displayQuestion();
}



function displayQuestion() {
  i++;
  document.getElementById("questions").innerText = myQuestions[i];
  document.getElementById("a").innerText = answersA[i];
  document.getElementById("b").innerText = answersB[i];
  document.getElementById("c").innerText = answersC[i];
  document.getElementById("d").innerText = answersD[i];

  if (i === myQuestions.length) {
    // stop showing questions
    questionAnswerEl.style.display = "none";
    // show score entry
    endSection.style.display = "block";
    handleAnswerClick();

    clearInterval(timeCount);
  }
  return i;
}


//add event listeners
startEl.addEventListener("click", startQuiz);
questionAnswerEl.addEventListener("click", function () {
  handleAnswerClick();
});










//Correct or incorrect notification 
//if incorrect subtract 10 sec move to next question
//if correct move to next question
//record score
//once time = 0 clear questions 
    //show score 
    //allow user to input their initials with their score filled into the field
 //add score and initials to highscore table
