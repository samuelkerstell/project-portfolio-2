const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = QUESTIONS.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {
    
}

const QUESTIONS = [
    {
     question: "Which team has won the most Premier League titles?",
     answer: [
        { text: 'Arsenal', correct: false },
        { text: 'Liverpool', correct: false },
        { text: 'Manchester United', correct: true },
        { text: 'Manchester City', correct: false },
    ]
    }
]