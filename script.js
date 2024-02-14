const quizData = [
    {
      question: 'What is 10 + 3?',
      answers: ['7', '10', '13', '17'],
      correctAnswer: '13'
    },
    {
      question: 'What is the capital of France?',
      answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      answers: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare'
    }
  ];
  
  
  let score = 0;
  let currentQuestion = 0;
  
  
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  const nextButton = document.getElementById('next');
  
  function showQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    answersElement.innerHTML = '';
    currentQuizData.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer;
      button.classList.add('btn');
      button.addEventListener('click', () => checkAnswer(answer));
      answersElement.appendChild(button);
    });
  }
  
  
  
  nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      alert(`Quiz Complete! Your Score: ${score}/${quizData.length}`);
    }
  });
  
  showQuestion();
  
  function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    const buttons = Array.from(answersElement.children);
    
    buttons.forEach(button => {
      if (button.innerText === answer) {
        if (answer === currentQuizData.correctAnswer) {
          button.style.backgroundColor = 'green'; // Change to green if correct
          score++;
        } else {
          button.style.backgroundColor = 'red'; // Change to red if incorrect
        }
      } else if (button.innerText === currentQuizData.correctAnswer) {
        button.style.backgroundColor = 'green'; // Change correct answer to green
      }
      button.disabled = true; // Disable buttons after selecting an answer
    });
  }
  
  
