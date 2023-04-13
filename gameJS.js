const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  //******Viet code o day*********************
setNextQuestion()
  //****************************************
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
 //******Viet code o day*********************
currentQuestionIndex=0
  //****************************************
  questionContainerElement.classList.remove('hide')
   //******Viet code o day*********************
setNextQuestion()
  //****************************************
}

function setNextQuestion() {
   //******Viet code o day*********************
resetState()
  //****************************************
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 //******HOAN THIEN CAC CAU HOI*********************
const questions = [
  {
    question: '2 + 2 = ?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Hội nghị hiệp thương chính trị giữa đoàn đại biểu hai miền Bắc - Nam Việt Nam (tháng 11/1975) đã họp ở đâu?',
    answers: [
      { text: 'Hà Nội', correct:false  },
      { text: 'Sài Gòn', correct: true },
      { text: 'Đà Nẵng', correct:false  },
      { text: 'Huế', correct: false }
    ]
  },
  {
    question: 'Từ năm 1946 đến năm 1980, Quốc hội đã ba lần thông qua Hiến pháp, đó là những Hiến pháp nào?',
    answers: [
      { text: 'Hiến pháp năm 1946; Hiến pháp năm 1959; Hiến pháp năm 1980', correct: true },
      { text: 'Hiến pháp năm 1946; Hiến pháp năm 1960; Hiến pháp 1980', correct: false },
      { text: 'Hiến pháp năm 1946; Hiến pháp năm 1976; Hiến pháp 1980', correct: false },
      { text: 'Hiến pháp năm 1946; Hiến pháp năm 1976; Hiến pháp 1980', correct: false }
    ]
  },
  {
    question: 'Ngày 20-9-1977, Việt Nam là thành viên thứ mấy của Liên hợp quốc?',
    answers: [
      { text: 'Thàng viên thứ 110', correct: false},
      { text: 'Thành viên thứ 149', correct:true }
    ]
  }
]