// Gets the button elements
let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')
let submitButton = document.getElementById('submit-btn')

// Gets question & answer elements
let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let resultContainerElement = document.getElementById('result-container')
let resultElement = document.getElementById('result')
let answerButtonsElement = document.getElementById('answer')
let scoreElement = document.getElementById('score')

let scoreCounter = 0;
let shuffledQuestions = [];
let currentQuestionIndex = 0;

// Add event listeners to the start, next and submit buttons
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
submitButton.addEventListener('click', showResult)

/**
 * Called when start button is clicked on
 * Sets the next question
 * Randomly shuffles the questions
 * Displays the score for the user
 */
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
// Shows next question after you click the next button
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

/**
 * Shows the score after submit button is clicked
 * Gives feedback depending of score
 */
function showResult() {
    resultContainerElement.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    submitButton.classList.add('hide')

    if (scoreCounter === 6) {
        resultElement.innerText = "Congrats you got maximum points!\n\nYour final is score: "+scoreCounter
    } else if (scoreCounter > 3) {
        resultElement.innerText = "Great job your final score is: "+ scoreCounter; + "/6"
    } else {
        resultElement.innerText = 'Your final score is: '+ scoreCounter + "/6" + '\n\nTry again and see if you can beat it.'
    }
}

/**
 * Adds a question to the questionElement
 * Adds the matching answers to buttons
 * Saves dataset to the correct button
 */
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
// Resets everything back to default
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
/**
 * Checks if answer is correct
 * Adds the correct class to each button
 * Adds score if answer is correct
 * If there are no questions left the submit button will show up
 */
function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
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

// Removes the classes when called then adds them back
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
// Removes the classes when called
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

