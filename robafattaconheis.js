// QUESTIONS

const questions = [
  {
    "question": "What do you do after class?",
    "answer1": "Chill at home or outside and recover from the lecture.",
    "answer1Total": "A",
    "answer2": "Study all the new things I just learned.",
    "answer2Total": "B",
    "answer3": "Rush off to a 'borrel' and worry about my next class when the time comes.",
    "answer3Total": "C",
	"answer4": "Meditate to unburden my mind.",
	"answer4Total": "D"
  },
  {
    "question": "What is your biggest fear?",
    "answer1": "That I’ll get lost and will never be able to get home again.",
    "answer1Total": "A",
    "answer2": "That I’ll be oppressed and won’t be allowed to do and say what I want.",
    "answer2Total": "B",
    "answer3": "That climate change will make earth uninhabitable and destroy my future.",
    "answer3Total": "C",
	"answer4": "That I’ll break a mirror and have bad luck for seven years.",
	"answer4Total": "D"
  },
    {
    "question": "Which famous person would you like to be able to talk to for a day?",
    "answer1": "Albert Einstein, one of the most influential scientists of the 20th.",
    "answer1Total": "A",
    "answer2": "Anna Maria van Schurman, the first female student at UU.",
    "answer2Total": "B",
    "answer3": "Confucius, to understand his teachings of spiritual fulfillment and social harmony.",
    "answer3Total": "C",
	"answer4": "Greta Thunberg, the environmental activist who inspired millions.",
	"answer4Total": "D"
  },

]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

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
	option4.setAttribute('data-total', `${option4Total}`);
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
    const answerScore = selectedOption.nextElementSibling.getAttribute('data-total');

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    
	const totalScore = score;

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
		console.log(totalScore);
		var count = {};
		count.A = 0;
for(var i = 0; i < totalScore.length; ++i){
    if(totalScore[i] == "A")
        count.A++;
}

count.B = 0;
for(var i = 0; i < totalScore.length; ++i){
    if(totalScore[i] == "B")
        count.B++;
}

count.C = 0;
for(var i = 0; i < totalScore.length; ++i){
    if(totalScore[i] == "C")
        count.C++;
}

count.D = 0;
for(var i = 0; i < totalScore.length; ++i){
    if(totalScore[i] == "D")
        count.D++;
}
		console.log(count.A);
	container.style.display = 'none'; 
var bestKey = 0;
var bestValue = 0;
for (const [key, value] of Object.entries(count)) {
  console.log(key, value);
  if  (value > bestValue) {
	  bestKey = key;
	  bestValue = value;
  }
}

console.log(bestKey);
console.log(bestValue);

	if (bestKey = "A") {
		
		result.innerHTML = 
		`
		<div> HELLO </div>
		`;
		
	}
	
	else if (bestKey = "B") {
        result.innerHTML =
         `         <div class="container h-100 ">
		 <div class="row h-100 align-items-center justify-content-center text-center quiz-container">
			<div class="col-lg-6 align-self-end">
		 
				<h2 class="final-score text-uppercase text-white font-weight-bold title">You are the "Busy Bee" student!</h2>
				<hr class="divider my-4" />
		 
				<div class="summary align-self-baseline mb-4">
					<p class="text-white font-weight-light">You have a positive attitude and you like to explore the many different opportunities that student life has to offer. You always make sure that you have several things going on and are not afraid to take on a few extracurriculars. You like to dream big and are determined to be involved in as many things as possible. Your schedule might be packed, but at least you are never bored!
					</p>
				</div>
			</div>
				
			<div class="col-lg-6 align-self-end">
				<p class="text-white  font-weight-light">
				The perfect match for you is the <a href="all.html#id1" style="text-decoration:underline;"><mark style="background-color: #f4623a; color: white;"> <b>Academy Building</b> </mark></a>!
				</p>
			
				<p class="text-white font-weight-light">
				<a href="all.html#id1">
					<img class="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" style="height:300px" alt="" />
				</a>
				</p>
			</div>       
		</div>
					<div class="mt-4">
			<button class="restart btn btn-primary btn-xl js-scroll-trigger mr-5">Restart Quiz</button>
			
			</div> 
		</div>
         `;
        return;
    } 
	
	
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