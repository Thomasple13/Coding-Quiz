let timerEl = document.querySelector('.countdown')
let startEl = document.querySelector('.start-button')
let startScreenEl = document.querySelector('.start-screen')

function countdown() {
    let timeLeft = 60
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000);
}

startEl.addEventListener("click",()=>{
    countdown()
    startScreenEl.style.display = 'none'
})

const questions = [
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
    correctAnswer: "D"
  },
  {
    question: "",
    answers: [
    'a: ',
    b: "",
    c: "",
    d: ""
  ],
    correctAnswer: 0
  }
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: ""
  }
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: ""
  }
]
