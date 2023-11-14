<<<<<<< HEAD
# Coding-Quiz-App
=======
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coding Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Coding Quiz</h1>
        <p>Time: <span id="timer">60</span> seconds</p>
    </header>
    <main>
        <div id="question-container">
            <h2>Question 1:</h2>
            <p id="question-text">What is the capital of France?</p>
            <ul id="choices">
                <li><button class="choice-btn">Option A</button></li>
                <li><button class="choice-btn">Option B</button></li>
                <li><button class="choice-btn">Option C</button></li>
                <li><button class="choice-btn">Option D</button></li>
            </ul>
        </div>
        <div id="result-container">
            <p id="result-message"></p>
            <button id="next-button">Next</button>
        </div>
    </main>
    <footer>
        <button id="start-button">Start Quiz</button>
        <form id="initials-form">
            <label for="initials">Enter Initials:</label>
            <input type="text" id="initials" maxlength="3" required>
            <button type="submit" id="submit-button">Submit</button>
        </form>
    </footer>
    <script src="script.js"></script>
</body>
</html>
>>>>>>> 650fdf6 (committing untracked files)
