// QUESTIONS

const questions = [
  {
    "question": "What do you do after class?",
    "answer1": "Chill at home or outside and recover from the lecture.",
    "answer1Total": "B",
    "answer2": "Study all the new things I just learned.",
    "answer2Total": "A",
    "answer3": "Rush off to a 'borrel' and worry about my next class when the time comes.",
    "answer3Total": "F",
	"answer4": "Meditate to unburden my mind.",
	"answer4Total": "C"
  },
  {
    "question": "What is your biggest fear?",
    "answer1": "That I’ll get lost and will never be able to get home again.",
    "answer1Total": "H",
    "answer2": "That I’ll be oppressed and won’t be allowed to do and say what I want.",
    "answer2Total": "E",
    "answer3": "That climate change will make earth uninhabitable and destroy my future.",
    "answer3Total": "G",
	"answer4": "That I’ll break a mirror and have bad luck for seven years.",
	"answer4Total": "D"
  }
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
    const answerScore = selectedOption.nextElementSibling.getAttribute('data-total');
    score.push(answerScore);
    selectedAnswersData.push()
    const totalScore = score;


    currentQuestion++;
        selectedOption.checked = false;
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
	
    if(currentQuestion == totalQuestions) {
	container.style.display = 'none'; 
	if (totalScore < 90) {
	return;
	}
	
	else {
        result.innerHTML =
         `<div class="container h-100">
		 <div class="row h-100 align-items-center justify-content-center text-center quiz-container">
			<div class="col-lg-10 align-self-end">
		 
				<h2 class="final-score text-uppercase text-white font-weight-bold title">You are a potato</h2>
				<hr class="divider my-4" />
			</div>
		 
			<div class="summary col-lg-8 align-self-baseline mb-4">
				<p text-white-75 font-weight-light>Paragraph</p>
				<p text-white-75 font-weight-light>Your score: ${totalScore}</p>
				<p text-white-75 font-weight-light>Paragraph</p>
				<p text-white-75 font-weight-light>Paragraph</p>
				<p text-white-75 font-weight-light>Paragraph</p>
			</div>
			<div>
			<button class="restart btn btn-primary btn-xl js-scroll-trigger mr-5">Restart Quiz</button>
			<button class="restart btn btn-primary btn-xl js-scroll-trigger">Read more</button>
			</div>        
		</div>
         `;
        return;
    } 
	
	
	}
    generateQuestions(currentQuestion);
}










var letters = ["A", "B", "C", "A", "A", "B", "B", "B", "D", "D"];

var countA = 0;
for(var i = 0; i < letters.length; ++i){
    if(letters[i] == "A")
        countA++;
}

var countB = 0;
for(var i = 0; i < letters.length; ++i){
    if(letters[i] == "B")
        countB++;
}

var countC = 0;
for(var i = 0; i < letters.length; ++i){
    if(letters[i] == "C")
        countC++;
}

var countD = 0;
for(var i = 0; i < letters.length; ++i){
    if(letters[i] == "D")
        countD++;
}

document.write(countA);
document.write(countB);
document.write(countC);
document.write(countD);


if (countA > countB && countA > countC && countA > countD) { 
document.write("A");
}
else if (countB > countA && countB > countC && countB > countD) {
document.write("B");
}



https://js.do/






1.
b a f c

2.
h e g d

3.
a g h b 

4.
c e f d

5.
b h d a

6.
c e f g

7.
h d g b



generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);