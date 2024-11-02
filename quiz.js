const questions = [
  {
      question: "Qual é a principal causa das queimadas na caatinga?",
      options: ["Desmatamento", "Agricultura", "Lixo", "Incêndios naturais"],
      answer: "Agricultura"
  },
  {
      question: "Qual estação do ano é mais propensa a queimadas na caatinga?",
      options: ["Verão", "Outono", "Primavera", "Inverno"],
      answer: "Verão"
  },
  {
      question: "Qual animal é frequentemente afetado pelas queimadas na caatinga?",
      options: ["Cervo", "Tatu", "Jacaré", "Arara"],
      answer: "Tatu"
  },
  {
      question: "O que pode ser feito para prevenir queimadas na caatinga?",
      options: ["Aumentar a área agrícola", "Educação ambiental", "Queimar lixo", "Ignorar o problema"],
      answer: "Educação ambiental"
  },
  {
      question: "Quais plantas são mais vulneráveis às queimadas na caatinga?",
      options: ["Cactos", "Arbustos", "Árvores de grande porte", "Gramíneas"],
      answer: "Árvores de grande porte"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const quizScreen = document.getElementById('quiz-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const finalScoreElement = document.getElementById('final-score');

startButton.addEventListener('click', startQuiz);
resetButton.addEventListener('click', resetQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  startScreen.style.display = 'none';
  quizScreen.style.display = 'block';
  resetButton.style.display = 'none';
  displayQuestion();
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = '';

  currentQuestion.options.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.className = 'btn'; // Mantendo a classe padrão
      button.addEventListener('click', () => checkAnswer(option));
      optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
      score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
      displayQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  quizScreen.style.display = 'none'; // Esconde a tela do quiz
  resultScreen.style.display = 'block'; // Mostra a tela de resultado
  finalScoreElement.textContent = `Sua Pontuação: ${score} / ${questions.length}`; // Mostra a pontuação
}

function resetQuiz() {
  resultScreen.style.display = 'none'; // Esconde a tela de resultado
  startScreen.style.display = 'block'; // Mostra a tela inicial
  scoreElement.textContent = ''; // Reseta a pontuação
}
