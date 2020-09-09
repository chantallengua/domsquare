// QUESTIONS

const questions = [
  {
    "question": "What do you do after class?",
    "answer1": "Chill at home or outside and recover from the lecture.",
    "answer1Total": "2",
    "answer2": "Study all the new things I just learned.",
    "answer2Total": "1",
    "answer3": "Rush off to a 'borrel' and worry about my next class when the time comes.",
    "answer3Total": "6",
	"answer4": "Meditate to unburden my mind.",
	"answer4Total": "3"
  },
  {
    "question": "What is your biggest fear?",
    "answer1": "That I’ll get lost and will never be able to get home again.",
    "answer1Total": "8",
    "answer2": "That I’ll be oppressed and won’t be allowed to do and say what I want.",
    "answer2Total": "5",
    "answer3": "That climate change will make earth uninhabitable and destroy my future.",
    "answer3Total": "7",
	"answer4": "That I’ll break a mirror and have bad luck for seven years.",
	"answer4Total": "4"
  },
  {
    "question": "What frustrates you the most?",
    "answer1": "When I cannot find the answer to a difficult question.",
    "answer1Total": "1",
    "answer2": "When people just throw their waste on the ground.",
    "answer2Total": "7",
    "answer3": "When I wake up after a party and I don’t know where I am.",
    "answer3Total": "8",
	"answer4": "I never really get frustrated, I am always relaxed.",
	"answer4Total": "2"
  },
  {
    "question": "According to you, what is most important in life?",
    "answer1": "Inner peace.",
    "answer1Total": "3",
    "answer2": "Social equality and justice.",
    "answer2Total": "5",
    "answer3": "Living life to the fullest every day.",
    "answer3Total": "6",
	"answer4": "Avoiding misfortune.",
	"answer4Total": "4"
  },
  {
    "question": "What’s a bad habit you have?",
    "answer1": "Procrastinating on everything.",
    "answer1Total": "2",
    "answer2": "Forgetting what I need to do.",
    "answer2Total": "8",
    "answer3": "Taking too long to do things because I have to do it in a specific way.",
    "answer3Total": "4",
	"answer4": "Trying to do too much at the same time.",
	"answer4Total": "1"
  },
  {
    "question": "What kind of people do you admire most?",
    "answer1": "People who are able to achieve inner peace.",
    "answer1Total": "3",
    "answer2": "People who brought revolutionary changes to the world.",
    "answer2Total": "5",
    "answer3": "People who have a social life but don't slack off on academics or sleep.",
    "answer3Total": "6",
	"answer4": "People who make an effort to stop climate change.",
	"answer4Total": "7"
  },
  {
    "question": "What would you never do?",
    "answer1": "Blame people for being late or not knowing their way around.",
    "answer1Total": "8",
    "answer2": "Walk under a ladder.",
    "answer2Total": "4",
    "answer3": "Throw perfectly good food in the trash can.",
    "answer3Total": "7",
	"answer4": "Make a fuss over something minor.",
	"answer4Total": "2"
  }
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
	const option4Total = questions[index].answer4Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
	option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Hello! If you want to go on, please select your answer.');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
	container.style.display = 'none'; 
	if (totalScore < 90) {
        result.innerHTML =
         `<div class="col-lg-10 align-self-end">
		 <h2 class="final-score text-uppercase text-white font-weight-bold title">Your score: ${totalScore}</2>
		 <hr class="divider my-4" />
		 </div>
         <div class="summary col-lg-8 align-self-baseline mb-5">
            <h1 text-white-75 font-weight-light>Insert here the name of the Building</h1>
            <p text-white-75 font-weight-light>Paragraph</p>
            <p text-white-75 font-weight-light>Paragraph</p>
            <p text-white-75 font-weight-light>Paragraph</p>
            <p text-white-75 font-weight-light>Paragraph</p>
            <p text-white-75 font-weight-light>Paragraph</p>
        </div>
        <button class="restart btn btn-primary btn-xl js-scroll-trigger">Restart Quiz</button>
         `;
        return;
    } 
	else { result.innerHTML =
	         `<div class="col-lg-10 align-self-end">
			 <h2 class="final-score text-uppercase text-white font-weight-bold title">ciao</h2>
			 </div>`;
			 return;}
		
	
	}
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);