let timerEl = document.querySelector('.countdown')
let startEl = document.querySelector('.start-button')
let startScreenEl = document.querySelector('.start-screen')
let quizScreenEl = document.querySelector('.quiz-screen')
let resultScreenEl = document.querySelector('.result-screen')
let questionEl = document.querySelector('.question')
let choiceA = document.querySelector('#answer-button-a')
let choiceB = document.querySelector('#answer-button-b')
let choiceC = document.querySelector('#answer-button-c')
let choiceD = document.querySelector('#answer-button-d')
let choiceOutcome = document.querySelector(".choice-outcome")

let score = 0
let timeLeft = 60
let choice = ''
let currentQuestion = 0

function reset(){
  score = 0
  timeLeft = 60
  choice = ''
  currentQuestion = 0
}

const quiz = [
  {
    question: "How does a FOR loop start?",
    a: "for (i <= 5; i++)",
    b: "for (i = 0; i <= 5)",
    c:"for i = 1 to 5",
    d: "for (i = 0; i <= 5; i++)",
    correctAnswer: "d"
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
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timeLeft--;
      timerEl.textContent = timeLeft + ' seconds remaining';
    } else if (timeLeft === 1) {
      timeLeft--;
      timerEl.textContent = timeLeft + ' second remaining';
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      quizDone();
    }
  }, 1000);
}

startEl.addEventListener("click",()=>{
    reset()
    timerEl.textContent = timeLeft + ' seconds remaining';
    countdown()
    startScreenEl.style.display = 'none'
    quizScreenEl.style.display = 'block'
    displayQuiz()
})

function displayQuiz (){
    questionEl.textContent = quiz[currentQuestion].question
    choiceA.textContent = quiz[currentQuestion].a
    choiceB.textContent = quiz[currentQuestion].b
    choiceC.textContent = quiz[currentQuestion].c
    choiceD.textContent = quiz[currentQuestion].d
}

function checkAnswer(choice){
  if(quiz[currentQuestion].correctAnswer === choice){
    choiceOutcome.textContent = "Correct!"
    score++
    console.log('this is working')
  } else{
    choiceOutcome.textContent = "Incorrect!"
    timeLeft -= 5
    timerEl.textContent = timeLeft + ' seconds remaining';
    score --
  }
  currentQuestion ++
  if(currentQuestion < quiz.length){
    displayQuiz()
  }else{
    quizDone()
  }
}

function quizDone() {
  console.log('quiz done')
  quizScreenEl.style.display = 'none'
  resultS
}


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
