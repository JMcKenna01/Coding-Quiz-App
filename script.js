// Quiz questions and answers
var questions = [
    {
        question: "What does 'HTML' stand for?",
        choices: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "Highly Typed Multi Language", "Hyperlinking and Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        choices: ["String", "Boolean", "Function", "Integer"],
        correctAnswer: "Integer"
    },
    {
        question: "What is the result of the expression '2 + '2' in JavaScript?",
        choices: ["4", "22", "Error", "Undefined"],
        correctAnswer: "22"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: ["var", "let", "const", "varlet"],
        correctAnswer: "var"
    },
    {
        question: "What is the purpose of the 'if' statement in JavaScript?",
        choices: ["To create a loop", "To declare a function", "To conditionally execute code", "To define a class"],
        correctAnswer: "To conditionally execute code"
    }
];

var currentQuestionIndex = 0;
var timer;
var timeRemaining = 60;
var score = 0;

var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("question-counter");
var questionContainer = document.getElementById("question-container");
var questionText = document.getElementById("question-text");
var choicesList = document.getElementById("choices");
var resultContainer = document.getElementById("result-container");
var resultMessage = document.getElementById("result-message");
var nextButton = document.getElementById("next-button");
var initialsForm = document.getElementById("initials-form");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit-button");

// Function to start the quiz
function startQuiz() {
    startButton.style.display = "none";
    timerElement.textContent = "Time: " + timeRemaining + "s";
    timer = setInterval(countdown, 1000);
    displayQuestion();
}

// Function to display a question
function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    choicesList.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice-btn");
        choiceButton.addEventListener("click", checkAnswer);
        choicesList.appendChild(choiceButton);
    }
}

// Function to check if an answer is correct
function checkAnswer(event) {
    var selectedChoice = event.target.textContent;
    var currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.correctAnswer) {
        resultMessage.textContent = "Correct!";
        score++;
    } else {
        resultMessage.textContent = "Wrong!";
        timeRemaining -= 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        timerElement.textContent = "Time: " + timeRemaining + "s";
        displayQuestion();
        resultMessage.textContent = "";
        nextButton.style.display = "none";
        var choiceButtons = document.querySelectorAll(".choice-btn");
        choiceButtons.forEach(function (button) {
            button.addEventListener("click", checkAnswer);
        });
    } else {
        endQuiz();
    }
}

// Function to handle the countdown timer
function countdown() {
    timeRemaining--;

    if (timeRemaining <= 0) {
        endQuiz();
    } else {
        timerElement.textContent = "Time: " + timeRemaining + "s";
    }
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timer);
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultMessage.textContent = "Quiz Over! Your Score: " + score;
}

// Event listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        resultMessage.textContent = "";
        nextButton.style.display = "none";
        var choiceButtons = document.querySelectorAll(".choice-btn");
        choiceButtons.forEach(function (button) {
            button.addEventListener("click", checkAnswer);
        });
    } else {
        endQuiz();
    }
});
initialsForm.addEventListener("submit", saveHighScore);

// Function to save high score
function saveHighScore(event) {
    event.preventDefault();
    var initials = initialsInput.value;
    // Add code to save the high score to local storage or a server
    alert("High Score Saved: " + initials + " - " + score);
}
