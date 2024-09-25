const quizData = {
    science: [
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            correct: 0
        },
        {
            question: "What planet is known as the Red Planet?",
            options: ["Mars", "Jupiter", "Saturn", "Venus"],
            correct: 0
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
            correct: 0
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
            correct: 0
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Diamond", "Gold", "Iron", "Quartz"],
            correct: 0
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Mercury", "Venus", "Earth", "Mars"],
            correct: 0
        },
        {
            question: "What force pulls objects toward Earth?",
            options: ["Gravity", "Magnetism", "Inertia", "Friction"],
            correct: 0
        },
        {
            question: "What is the speed of light?",
            options: ["299,792 km/s", "150,000 km/s", "300,000 km/h", "400,000 km/s"],
            correct: 0
        },
        {
            question: "What part of the atom has a positive charge?",
            options: ["Proton", "Electron", "Neutron", "Nucleus"],
            correct: 0
        },
        {
            question: "How many bones are in the human body?",
            options: ["206", "208", "212", "220"],
            correct: 0
        }
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
            correct: 0
        },
        {
            question: "In which year did World War II end?",
            options: ["1945", "1939", "1918", "1950"],
            correct: 0
        },
        {
            question: "Which country gifted the Statue of Liberty to the USA?",
            options: ["France", "Germany", "Italy", "Spain"],
            correct: 0
        },
        {
            question: "Who discovered America?",
            options: ["Christopher Columbus", "Leif Erikson", "Vasco da Gama", "Ferdinand Magellan"],
            correct: 0
        },
        {
            question: "What was the name of the ship that brought the Pilgrims to America?",
            options: ["Mayflower", "Santa Maria", "Beagle", "Endeavour"],
            correct: 0
        },
        {
            question: "Which empire was Julius Caesar a part of?",
            options: ["Roman Empire", "Greek Empire", "Ottoman Empire", "Byzantine Empire"],
            correct: 0
        },
        {
            question: "What was the main cause of the Cold War?",
            options: ["Ideological conflict between capitalism and communism", "World War II", "Nuclear race", "Colonialism"],
            correct: 0
        },
        {
            question: "Which Egyptian queen had a relationship with Julius Caesar?",
            options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Ankhesenamun"],
            correct: 0
        },
        {
            question: "In which year did the Berlin Wall fall?",
            options: ["1989", "1990", "1985", "1979"],
            correct: 0
        },
        {
            question: "Who was the first man to walk on the moon?",
            options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
            correct: 0
        }
    ],
    general: [
        {
            question: "What is the capital city of France?",
            options: ["Paris", "London", "Rome", "Berlin"],
            correct: 0
        },
        {
            question: "How many continents are there?",
            options: ["7", "5", "6", "8"],
            correct: 0
        },
        {
            question: "Which ocean is the largest?",
            options: ["Pacific", "Atlantic", "Indian", "Arctic"],
            correct: 0
        },
        {
            question: "Who wrote 'Hamlet'?",
            options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
            correct: 0
        },
        {
            question: "Which country has the largest population?",
            options: ["China", "India", "USA", "Russia"],
            correct: 0
        },
        {
            question: "What is the largest mammal?",
            options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
            correct: 0
        },
        {
            question: "Which country hosted the 2016 Summer Olympics?",
            options: ["Brazil", "China", "UK", "Russia"],
            correct: 0
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Hg"],
            correct: 0
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            correct: 0
        },
        {
            question: "Which planet is known as the Earth's twin?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 0
        }
    ]
};

// DOM Elements
const categorySelect = document.getElementById('category');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizSection = document.getElementById('quiz-section');
const categorySelectDiv = document.getElementById('category-select');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const progressElement = document.getElementById('progress');
const timerElement = document.getElementById('timer');
const feedbackElement = document.getElementById('feedback');
const endScreen = document.getElementById('end-screen');
const finalScoreElement = document.getElementById('final-score');
const totalQuestionsElement = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');
const nextBtn = document.getElementById('next-btn');
let selectedCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let shuffledQuestions = [];

// Start Quiz
startQuizBtn.addEventListener('click', () => {
    selectedCategory = categorySelect.value;
    shuffledQuestions = shuffleArray(quizData[selectedCategory]);
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;
    showQuestion();
    categorySelectDiv.style.display = 'none';
    quizSection.style.display = 'block';
    startTimer();
});

// Shuffle questions
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Show Question
function showQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
    feedbackElement.textContent = '';
    nextBtn.style.display = 'none';
}

// Check Answer
function checkAnswer(selectedIndex) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('correct');
        feedbackElement.classList.remove('incorrect');
    } else {
        feedbackElement.textContent = `Incorrect! The correct answer was ${currentQuestion.options[currentQuestion.correct]}.`;
        feedbackElement.classList.add('incorrect');
        feedbackElement.classList.remove('correct');
    }
    nextBtn.style.display = 'block';
}

// Move to next question
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
        resetTimer();
    } else {
        endQuiz();
    }
});

// End Quiz
function endQuiz() {
    quizSection.style.display = 'none';
    endScreen.style.display = 'block';
    finalScoreElement.textContent = score;
    totalQuestionsElement.textContent = shuffledQuestions.length;
    clearInterval(timer);
}

// Timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft === 0) {
            checkAnswer(-1); // Automatically move to the next question if time runs out
        }
    }, 1000);
}

// Reset Timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    startTimer();
}

// Restart Quiz
restartBtn.addEventListener('click', () => {
    endScreen.style.display = 'none';
    categorySelectDiv.style.display = 'block';
});

// Shuffle utility function
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
