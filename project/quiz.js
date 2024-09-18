document.addEventListener('DOMContentLoaded', () => {
  const allQuestions = [
    { question: "Who is the head of the Executive in India?", options: ["President", "Prime Minister", "Governor", "Chief Justice"], answer: 0 },
    { question: "Which article deals with the Legislature?", options: ["Article 79", "Article 74", "Article 123", "Article 368"], answer: 0 },
    { question: "Which part of the Constitution deals with the Judiciary?", options: ["Part V", "Part VI", "Part III", "Part IV"], answer: 0 },
    { question: "Which article gives the President the power to promulgate ordinances?", options: ["Article 123", "Article 245", "Article 368", "Article 370"], answer: 0 },
    { question: "How many fundamental duties are there?", options: ["10", "11", "12", "9"], answer: 1 },
    { question: "Which body is responsible for law-making?", options: ["Legislature", "Executive", "Judiciary", "President"], answer: 0 },
    { question: "Who appoints the judges of the Supreme Court?", options: ["President", "Prime Minister", "Governor", "Parliament"], answer: 0 },
    { question: "Which part of the Constitution deals with fundamental rights?", options: ["Part III", "Part IV", "Part V", "Part II"], answer: 0 },
    { question: "Which article of the Indian Constitution deals with the Election Commission?", options: ["Article 324", "Article 245", "Article 368", "Article 14"], answer: 0 },
    { question: "What is the minimum age for becoming the President of India?", options: ["35", "30", "25", "40"], answer: 0 },
    // Add more questions here to make a total of 300
  ];

  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');
  const resultsContainer = document.getElementById('results');

  function getRandomQuestions(allQuestions, count) {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  function loadQuiz() {
    const questions = getRandomQuestions(allQuestions, 5);
    quizContainer.innerHTML = '';

    questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question-container');

      const questionText = document.createElement('div');
      questionText.classList.add('question');
      questionText.textContent = `${index + 1}. ${q.question}`;

      const optionsList = document.createElement('ul');
      optionsList.classList.add('options');

      q.options.forEach((option, i) => {
        const optionItem = document.createElement('li');
        optionItem.innerHTML = `<input type="radio" name="q${index}" value="${i}"> ${option}`;
        optionsList.appendChild(optionItem);
      });

      questionDiv.appendChild(questionText);
      questionDiv.appendChild(optionsList);
      quizContainer.appendChild(questionDiv);
    });
  }

  function showResults() {
    let score = 0;
    const questions = getRandomQuestions(allQuestions, 5);

    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      if (selectedOption && parseInt(selectedOption.value) === q.answer) {
        score++;
      }
    });

    resultsContainer.classList.remove('hidden');
    resultsContainer.textContent = `You scored ${score} out of 5`;
  }

  loadQuiz();

  submitButton.addEventListener('click', showResults);
});