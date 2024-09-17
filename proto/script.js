const questions = [
  {
      question: "Which organ of the Constitution makes laws?",
      options: ["Legislature", "Executive", "Judiciary"],
      answer: "Legislature"
  },
  {
      question: "Which organ interprets the law?",
      options: ["Legislature", "Executive", "Judiciary"],
      answer: "Judiciary"
  },
  {
      question: "Which organ implements laws?",
      options: ["Legislature", "Executive", "Judiciary"],
      answer: "Executive"
  },
  {
      question: "Which part of the Constitution of India is dedicated to Fundamental Rights?",
      options: ["Part III", "Part IV", "Part VI"],
      answer: "Part III"
  },
  {
      question: "How many articles does the Indian Constitution have?",
      options: ["395", "448", "370"],
      answer: "448"
  },
  {
      question: "Who is known as the Father of the Indian Constitution?",
      options: ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Jawaharlal Nehru"],
      answer: "Dr. B. R. Ambedkar"
  }
  // Add more questions as needed
];

let shuffledQuestions = []; // This will store the shuffled question set
let currentQuestion = 0;
let score = 0;
const totalQuestions = 3; // Define how many questions you want in each quiz attempt

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  // Shuffle the questions and pick the top 'totalQuestions' number of them
  shuffledQuestions = shuffleArray(questions).slice(0, totalQuestions);
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  document.getElementById('quiz-container').innerHTML = `
      <div id="question">${shuffledQuestions[currentQuestion].question}</div>
      <div id="options"></div>
      <button id="next-btn" disabled>Next</button>
  `;
  displayOptions();
}

function displayOptions() {
  let optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = ''; // Clear previous options

  // Create buttons for each option
  shuffledQuestions[currentQuestion].options.forEach(option => {
      let button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  if (selectedOption === shuffledQuestions[currentQuestion].answer) {
      score++;
  }

  // Enable the Next button after an option is selected
  const nextButton = document.getElementById('next-btn');
  nextButton.disabled = false;

  // Attach event listener to move to the next question
  nextButton.onclick = nextQuestion;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < shuffledQuestions.length) {
      showQuestion(); // Load the next question
  } else {
      document.getElementById('quiz-container').innerHTML = `Quiz completed! Your score is: ${score}/${shuffledQuestions.length}`;
  }
}

// Start the quiz
startQuiz();