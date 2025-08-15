const jokeBox = document.getElementById("joke");
const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const quizBox = document.getElementById("quiz-box");
const scoreSection = document.getElementById("score-section");
const scoreDisplay = document.getElementById("score");

const quiz = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup", "High Transfer Machine Language"],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "Which CSS property sets text color?",
    options: ["font-color", "color", "text-style", "background"],
    correct: "color"
  },
  {
    question: "How do you embed JavaScript in HTML?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    correct: "<script>"
  },
  {
    question: "Which HTML tag is used to link a CSS file?",
    options: ["<css>", "<style>", "<link>", "<script>"],
    correct: "<link>"
  },
  {
    question: "What method logs output in JS?",
    options: ["write()", "print()", "console.log()", "output()"],
    correct: "console.log()"
  }
];

let currentQuestion = 0;
let score = 0;

function loadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      jokeBox.innerText = `"${data.joke}"`;
    })
    .catch(() => {
      jokeBox.innerText = "Oops! Couldn't load a joke right now.";
    });
}

function loadQuestion() {
  const current = quiz[currentQuestion];
  questionText.innerText = current.question;
  optionsBox.innerHTML = "";
  current.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(btn, current.correct);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selectedBtn, correctAnswer) {
  const allBtns = document.querySelectorAll(".option");
  allBtns.forEach(btn => btn.disabled = true);
  if (selectedBtn.innerText === correctAnswer) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    allBtns.forEach(btn => {
      if (btn.innerText === correctAnswer) btn.classList.add("correct");
    });
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= quiz.length) {
    quizBox.style.display = "none";
    scoreSection.style.display = "block";
    scoreDisplay.innerText = `Your score is ${score}/${quiz.length}`;
  } else {
    loadQuestion();
  }
}

function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  scoreSection.style.display = "none";
  quizBox.style.display = "block";
  loadQuestion();
  loadJoke();
}

// Init
loadQuestion();
loadJoke();
