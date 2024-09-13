// scripts.js

// Function to show different sections based on user navigation
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
      activeSection.classList.add('active');
  }
}

// Function to simulate game start
function startGame(gameType) {
  if (gameType === 'spin') {
      alert('Starting Spin the Wheel Game...');
      // Implement game logic here
  } else if (gameType === 'card') {
      alert('Starting Card Game...');
      // Implement game logic here
  }
}

// Function to change language (simulated)
function changeLanguage(lang) {
  if (lang === 'en') {
      alert('Language changed to English');
      // Implement language change logic here
  } else if (lang === 'hi') {
      alert('भाषा हिंदी में बदल गई है');
      // Implement language change logic here
  }
}

// Show the home section by default
showSection('home');


// scripts.js

const API_URL = 'http://localhost:5000'; // Backend URL

// Quiz Questions
const quizQuestions = [
  {
    question: 'What does Article 21 of the Indian Constitution deal with?',
    options: ['Right to Equality', 'Right to Freedom of Speech', 'Right to Life and Personal Liberty', 'Right Against Exploitation'],
    answer: 'Right to Life and Personal Liberty'
  },
  {
    question: 'Which part of the Indian Constitution deals with the Union Legislature?',
    options: ['Part IV', 'Part V', 'Part VI', 'Part III'],
    answer: 'Part V'
  },
  {
    question: 'Who appoints the Chief Justice of India?',
    options: ['President of India', 'Prime Minister of India', 'Lok Sabha Speaker', 'Governor of States'],
    answer: 'President of India'
  }
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

// Function to start the selected game
function startGame(gameType) {
  if (gameType === 'spin') {
    alert('Starting Spin the Wheel Game...');
    // Implement game logic here
  } else if (gameType === 'card') {
    alert('Starting Card Game...');
    // Implement game logic here
  } else if (gameType === 'quiz') {
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion();
  }
}

// Function to display the current quiz question and options
function showQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  document.getElementById('quiz-question').textContent = question.question;
  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';

  question.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.textContent = option;
    optionButton.className = 'quiz-option';
    optionButton.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(optionButton);
  });
}

// Function to check if the selected answer is correct
function checkAnswer(selectedOption) {
  const question = quizQuestions[currentQuestionIndex];
  if (selectedOption === question.answer) {
    score++;
    alert('Correct!');
  } else {
    alert('Wrong answer.');
  }
  document.getElementById('next-button').style.display = 'block';
}

// Function to handle the next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
    document.getElementById('next-button').style.display = 'none';
  } else {
    showResult();
  }
}

// Function to display the quiz result
function showResult() {
  document.getElementById('quiz-question').style.display = 'none';
  document.getElementById('quiz-options').style.display = 'none';
  document.getElementById('next-button').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';
  document.getElementById('score').textContent = score;
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-question').style.display = 'block';
  document.getElementById('quiz-options').style.display = 'block';
  showQuestion();
}

// Function to fetch articles from the backend (unchanged)
async function fetchArticles() {
  try {
    const response = await fetch(`${API_URL}/api/articles`);
    const articles = await response.json();
    displayArticles(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
}

// Function to display fetched articles on the frontend (unchanged)
function displayArticles(articles) {
  const learnSection = document.getElementById('learn');
  learnSection.innerHTML = '<h2>Learn about the Constitution</h2>';
  articles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
    learnSection.appendChild(articleDiv);
  });
}

// Function to change language (unchanged)
function changeLanguage(lang) {
  if (lang === 'en') {
    alert('Language changed to English');
  } else if (lang === 'hi') {
    alert('भाषा हिंदी में बदल गई है');
  }
}

// Show the home section by default
showSection('home');