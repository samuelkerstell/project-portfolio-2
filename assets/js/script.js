const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer')

let scoreCounter = 0;
let scoreElement = document.getElementById('score')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    scoreCounter = 0
    scoreElement.innerText = "Score: " + scoreCounter
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            scoreElement.innerText = "Score: " + scoreCounter
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (correct) {
        scoreCounter++
        console.log('CORRECT')
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        scoreElement.innerText = "Your final score is: "+ scoreCounter
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

const questions = [
    {
     question: "Which team has won the most Premier League titles?",
     answer: [
        { text: 'Arsenal', correct: false },
        { text: 'Liverpool', correct: false },
        { text: 'Manchester United', correct: true },
        { text: 'Manchester City', correct: false },
    ]
    },
    {
        question: "Who is the only team to win the Premier League without losing a single game?",
        answer: [
           { text: 'Manchester United', correct: false },
           { text: 'Arsenal', correct: true },
           { text: 'Liverpool', correct: false },
           { text: 'Chelsea', correct: false },
       ]
       },
]

