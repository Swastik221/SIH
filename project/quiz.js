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
    { question: "Which organ of the Constitution makes laws?", options: ["Legislature", "Executive", "Judiciary"], answer: "Legislature" },
{ question: "Which organ interprets the law?", options: ["Legislature", "Executive", "Judiciary"], answer: "Judiciary" },
{ question: "Which organ implements laws?", options: ["Legislature", "Executive", "Judiciary"], answer: "Executive" },
{ question: "Which part of the Constitution of India is dedicated to Fundamental Rights?", options: ["Part III", "Part IV", "Part VI"], answer: "Part III" },
{ question: "How many articles does the Indian Constitution have?", options: ["395", "448", "370"], answer: "448" },
{ question: "Who is known as the Father of the Indian Constitution?", options: ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Jawaharlal Nehru"], answer: "Dr. B. R. Ambedkar" },
{ question: "What does Article 14 of the Constitution guarantee?", options: ["Right to Equality", "Freedom of Speech", "Right to Property"], answer: "Right to Equality" },
{ question: "What is the minimum age for the President of India?", options: ["30 years", "35 years", "40 years"], answer: "35 years" },
{ question: "Which article deals with the Emergency Provisions?", options: ["Article 352", "Article 370", "Article 356"], answer: "Article 352" },
{ question: "Which is the longest written constitution in the world?", options: ["Indian Constitution", "US Constitution", "UK Constitution"], answer: "Indian Constitution" },
{ question: "Which part of the Constitution deals with the Union and its territory?", options: ["Part I", "Part II", "Part III"], answer: "Part I" },
{ question: "Which Article provides for the establishment of a Supreme Court?", options: ["Article 124", "Article 112", "Article 256"], answer: "Article 124" },
{ question: "Which article is known as the ‘heart and soul’ of the Constitution according to Dr. Ambedkar?", options: ["Article 32", "Article 21", "Article 19"], answer: "Article 32" },
{ question: "Which article abolishes untouchability?", options: ["Article 17", "Article 15", "Article 19"], answer: "Article 17" },
{ question: "Which is the highest law-making body in India?", options: ["Parliament", "Supreme Court", "President"], answer: "Parliament" },
{ question: "How many parts does the Indian Constitution have?", options: ["22", "25", "12"], answer: "25" },
{ question: "Who appoints the Prime Minister of India?", options: ["President", "Vice-President", "Chief Justice"], answer: "President" },
{ question: "What is the term length of the President of India?", options: ["5 years", "4 years", "6 years"], answer: "5 years" },
{ question: "Which article deals with the Fundamental Duties?", options: ["Article 51A", "Article 21", "Article 17"], answer: "Article 51A" },
{ question: "Which amendment is known as the ‘mini-constitution’?", options: ["42nd Amendment", "44th Amendment", "24th Amendment"], answer: "42nd Amendment" },
{ question: "Who has the power to declare a national emergency?", options: ["President", "Prime Minister", "Supreme Court"], answer: "President" },
{ question: "Which part of the Constitution deals with the Directive Principles of State Policy?", options: ["Part IV", "Part II", "Part III"], answer: "Part IV" },
{ question: "Which article guarantees freedom of speech?", options: ["Article 19", "Article 20", "Article 21"], answer: "Article 19" },
{ question: "How many fundamental rights are provided by the Indian Constitution?", options: ["6", "7", "5"], answer: "6" },
{ question: "Which is the guardian of the Indian Constitution?", options: ["Supreme Court", "Parliament", "President"], answer: "Supreme Court" },
{ question: "Which article provides for the amendment of the Constitution?", options: ["Article 368", "Article 356", "Article 370"], answer: "Article 368" },
{ question: "What is the official language of the Indian Union?", options: ["Hindi", "English", "Both"], answer: "Both" },
{ question: "Who can impose a financial emergency in India?", options: ["President", "Prime Minister", "Parliament"], answer: "President" },
{ question: "Which article provides for the abolition of titles?", options: ["Article 18", "Article 19", "Article 20"], answer: "Article 18" },
{ question: "Who is the first citizen of India?", options: ["President", "Prime Minister", "Chief Justice"], answer: "President" },
{ question: "Which part of the Constitution deals with Panchayati Raj?", options: ["Part IX", "Part VIII", "Part X"], answer: "Part IX" },
{ question: "How many types of emergencies are mentioned in the Constitution?", options: ["Three", "Two", "One"], answer: "Three" },
{ question: "Which article gives special status to Jammu & Kashmir?", options: ["Article 370", "Article 371", "Article 368"], answer: "Article 370" },
{ question: "Which amendment introduced the Goods and Services Tax (GST)?", options: ["101st Amendment", "99th Amendment", "103rd Amendment"], answer: "101st Amendment" },
{ question: "Who is the head of the executive branch in India?", options: ["President", "Prime Minister", "Chief Justice"], answer: "President" },
{ question: "Which article guarantees protection of life and personal liberty?", options: ["Article 21", "Article 19", "Article 25"], answer: "Article 21" },
{ question: "Which part of the Constitution deals with elections?", options: ["Part XV", "Part XIV", "Part XVI"], answer: "Part XV" },
{ question: "Who appoints the judges of the Supreme Court?", options: ["President", "Prime Minister", "Chief Justice"], answer: "President" },
{ question: "How many schedules are there in the Indian Constitution?", options: ["12", "10", "11"], answer: "12" },
{ question: "Which part of the Constitution deals with the State Legislature?", options: ["Part VI", "Part V", "Part III"], answer: "Part VI" },
{ question: "Which part of the Constitution deals with the Union Executive?", options: ["Part V", "Part IV", "Part III"], answer: "Part V" },
{ question: "Who can dissolve the Lok Sabha?", options: ["President", "Prime Minister", "Speaker"], answer: "President" },
{ question: "Who is the Supreme Commander of the Armed Forces in India?", options: ["President", "Prime Minister", "Defense Minister"], answer: "President" },
{ question: "Which article deals with the right to constitutional remedies?", options: ["Article 32", "Article 21", "Article 19"], answer: "Article 32" },
{ question: "Which article deals with religious freedom?", options: ["Article 25", "Article 29", "Article 30"], answer: "Article 25" },
{ question: "What is the minimum age to become a member of the Rajya Sabha?", options: ["30 years", "35 years", "25 years"], answer: "30 years" },
{ question: "Who is responsible for the protection of fundamental rights?", options: ["Supreme Court", "Parliament", "President"], answer: "Supreme Court" },
{ question: "Which article deals with equality before the law?", options: ["Article 14", "Article 19", "Article 21"], answer: "Article 14" },
{ question: "What is the maximum term of a Lok Sabha?", options: ["5 years", "6 years", "4 years"], answer: "5 years" },
{ question: "Who has the power to pardon a death sentence?", options: ["President", "Governor", "Prime Minister"], answer: "President" },
{ question: "Which part of the Constitution deals with citizenship?", options: ["Part II", "Part I", "Part III"], answer: "Part II" },
{ question: "Which body is responsible for the election of the President?", options: ["Electoral College", "Supreme Court", "Prime Minister"], answer: "Electoral College" }
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