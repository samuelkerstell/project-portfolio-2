let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')
let submitButton = document.getElementById('submit-btn')

let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let resultContainerElement = document.getElementById('result-container')
let resultElement = document.getElementById('result')
let answerButtonsElement = document.getElementById('answer')

let scoreCounter = 0;
let scoreElement = document.getElementById('score')
let shuffledQuestions = [];
let currentQuestionIndex = 0;

let newh1 = document.createElement("h1");

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

submitButton.addEventListener('click', showResult)


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = QUESTIONS.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    scoreCounter = 0
    scoreElement.innerText = "Score: " + scoreCounter
    resultContainerElement.classList.add('hide')
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showResult() {
    resultContainerElement.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    submitButton.classList.add('hide')

    if (scoreCounter === 3) {
        resultElement.innerText = "Congrats you got maximum points!\n\nYour total score: "+scoreCounter
    } else if (scoreCounter > 2) {
        resultElement.innerText = "Great job your final score is: "+ scoreCounter; + "/3"
    } else {
        resultElement.innerText = 'Your final score is: '+ scoreCounter + "/3" + '\n\nTry again and see if you can beat it.'
    }
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
        submitButton.classList.remove('hide')
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

