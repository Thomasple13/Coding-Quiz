let timerEl = document.querySelector('.countdown')
let startEl = document.querySelector('.start-button')
let startScreenEl = document.querySelector('.start-screen')
let quizScreenEl = document.querySelector('.quiz-screen')
let resultScreenEl = document.querySelector('.result-screen')
let highScoreScreenEl = document.querySelector('.highscore-screen')
let timeoutSceen = document.querySelector('.time-up')
let questionEl = document.querySelector('.question')
let choiceA = document.querySelector('#answer-button-a')
let choiceB = document.querySelector('#answer-button-b')
let choiceC = document.querySelector('#answer-button-c')
let choiceD = document.querySelector('#answer-button-d')
let choiceOutcome = document.querySelector(".choice-outcome")
let initials = document.querySelector('.initials')
let initialSubmitBtn = document.querySelector("#initial-submit")
let highscoreList = document.querySelector('#highscore-list')
let scoreButton = document.querySelector('#display-score')
let scoreText = document.querySelector('.score-text')
let resetButtonEl = document.querySelector('.reset-button')

let score = 0
let timeLeft = 60
let choice = ''
let currentQuestion = 0
let pause = false
let timeInterval

function reset(){
  score = 0
  timeLeft = 60
  choice = ''
  currentQuestion = 0
  pause = false
}

const quiz = [
  {
    question: "How does a FOR loop start?",
    a: "for (i <= 5; i++)",
    b: "for (i = 0; i <= 5)",
    c:"for i = 1 to 5",
    d: "for (i = 0; i <= 5; i++)",
    correctAnswer: "a"
  },
  {
    question: "Which of the following is NOT a Javascript datatype?",
    a: "Function",
    b: "String",
    c: "Undefined",
    d: "NoneType",
    correctAnswer: "d"
  }
]
  //Function that starts timer countdown
function countdown() {
    var timeInterval = setInterval(function () {
    if (pause){
      return
    }
    if (timeLeft >= 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timeLeft--;
      timerEl.textContent = timeLeft + ' seconds remaining';
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      timeoutSceen.style.display = 'block'
      hideScreen()
    }
  }, 1000);
}


function displayQuiz (){
  questionEl.textContent = quiz[currentQuestion].question
  choiceA.textContent = quiz[currentQuestion].a
  choiceB.textContent = quiz[currentQuestion].b
  choiceC.textContent = quiz[currentQuestion].c
  choiceD.textContent = quiz[currentQuestion].d
}

function checkAnswer(choice){
  pause = true
  if(quiz[currentQuestion].correctAnswer === choice){
    choiceOutcome.textContent = "Correct!"
    score++
  } else{
    choiceOutcome.textContent = "Incorrect!"
    timeLeft -= 5
    timerEl.textContent = timeLeft + ' seconds remaining';
    score --
  }
  updateAnswerEl()
  currentQuestion ++
  if(currentQuestion < quiz.length){
    setTimeout(()=>{
      pause = false
      resetAnswerEl()
      displayQuiz()
    },2000)
  }else{
    setTimeout(()=>{
      pause = false
      quizDone()
    },2000)
  } 
}

function updateAnswerEl(){
  const correctAnswer = quiz[currentQuestion].correctAnswer
  choiceA.className = "answer-button wrong"
  choiceB.className = "answer-button wrong"
  choiceC.className = "answer-button wrong"
  choiceD.className = "answer-button wrong"
  document.getElementById(`answer-button-${correctAnswer}`).className ="answer-button right"
}

function resetAnswerEl(){
  choiceA.className = "answer-button"
  choiceB.className = "answer-button"
  choiceC.className = "answer-button"
  choiceD.className = "answer-button"
  choiceOutcome.textContent = ""
}

function quizDone() {
  clearInterval(timeInterval);
  quizScreenEl.style.display = 'none'
  resultScreenEl.style.display = 'block'
  scoreText.textContent = (`Your Score is: ${score}`)
}


function hideScreen(){
  startScreenEl.style.display = 'none'
  quizScreenEl.style.display = 'none'
  resultScreenEl.style.display = 'none'
}

// Event listeners for Buttons
startEl.addEventListener("click",()=>{
    reset()
    timerEl.textContent = timeLeft + ' seconds remaining';
    countdown()
    startScreenEl.style.display = 'none'
    quizScreenEl.style.display = 'block'
    displayQuiz()
})

initialSubmitBtn.addEventListener("click",()=>{
  resultScreenEl.style.display = 'none'
  highScoreScreenEl.style.display = 'block'
  let li = document.createElement("li")
  let name = (`${initials.value} Score:${score}`)
  li.append(name)
  highscoreList.append(li)
})

scoreButton.addEventListener('click',()=>{
  resultScreenEl.style.display = 'block'
  timeoutSceen.style.display = 'none'
})

resetButtonEl.addEventListener('click', ()=>{
  reset()
  startScreenEl.style.display = 'block'
  highScoreScreenEl.style.display = 'none'
})

// Event Listeners for Answer choices
choiceA.addEventListener("click", ()=>{
  choice = 'a'
  checkAnswer(choice)
})

choiceB.addEventListener("click", ()=>{
  choice = 'b'
  checkAnswer(choice)

})
choiceC.addEventListener("click", ()=>{
  choice = 'c'
  checkAnswer(choice)
})
choiceD.addEventListener("click", ()=>{
  choice = 'd'
  checkAnswer(choice)
})
