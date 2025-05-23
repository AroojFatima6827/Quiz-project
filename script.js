 const StartButton = document.querySelector(".start-btn");
 const questionBox = document.querySelector(".show-question");
 const optionBox = document.querySelector(".show-option");
 const nextButton = document.querySelector(".next-btn"); 
 const messageBox = document.querySelector(".message"); 
 const restartbutton = document.querySelector(".start-again")

 const questions = [

  {
    question: "Which city is known as the City of Lights?",
     options: ["New York", "Paris", "London", "Tokyo"],
     correctAnswer: "Paris"
   },
   {
     question: "How many legs does a spider have?",
     options: ["6", "8", "10", "4"],
     correctAnswer: "8"
   },
   {
     question: "What do bees make?",
     options: ["Silk", "Wax", "Milk", "Honey"],
     correctAnswer: "Honey"
   },
  {
     question: "Which planet is closest to the Sun?",
    options: ["Earth", "Venus", "Mercury", "Mars"],
     correctAnswer: "Mercury"
  },
   {
     question: "What is the color of an emerald?",
     options: ["Blue", "Red", "Green", "Yellow"],
     correctAnswer: "Green"
   }
 ];

let currentQuestion = 0;
let score = 0;


StartButton.addEventListener("click", function () {
  StartButton.style.display = "none";
  showQuestion();
  nextButton.style.display = "none"; 
});

function showQuestion() {
  messageBox.textContent = "";
  nextButton.style.display = "none";
  optionBox.innerHTML = "";
  questionBox.textContent = questions[currentQuestion].question;
  questions[currentQuestion].options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("options-design");
    btn.addEventListener("click", function () {
      checkAnswer(option, btn);
    });
    optionBox.appendChild(btn);
  });
}

function checkAnswer(selected, button) {
  const correct = questions[currentQuestion].correctAnswer;

  
  Array.from(optionBox.children).forEach(btn => btn.disabled = true);

  if (selected === correct) {
    button.classList.add("correct");
    messageBox.textContent = "Correct!";
    score++;
  } else {
    button.classList.add("wrong");
    messageBox.textContent = `Wrong! Correct answer is "${correct}".`;
  }

  nextButton.style.display = "inline-block"; 
}

nextButton.addEventListener("click", function () {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionBox.textContent = `Quiz Finished! Your score is ${score} / ${questions.length}`;
    optionBox.innerHTML = "";
    messageBox.textContent = "";
    nextButton.style.display = "none";
    restartbutton.style.display = "block";
  }
});

 restartbutton.addEventListener("click", function () {
  currentQuestion = 0;
  score = 0;
  questionBox.textContent = "";
  optionBox.innerHTML = "";
  messageBox.textContent = "";
  nextButton.style.display = "none";
  restartbutton.style.display = "none";
  showQuestion(); 
 })