const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn'); 
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainbtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

startBtn.onclick = () => {
	popupInfo.classList.add('active');
	main.classList.add('active');
}

exitBtn.onclick = () => {
	popupInfo.classList.remove('active');
	main.classList.remove('active');
}

continueBtn.onclick = () => {
	quizSection.classList.add('active');
	popupInfo.classList.remove('active');
	main.classList.remove('active');
	quizBox.classList.add('active');

	showQuestions(0);
	questionCounter(1);
	headerScore();
}


tryAgainbtn.onclick = () => {
	quizBox.classList.add('active');
	nextBtn.classList.remove('active');
	resultBox.classList.remove('active');

	questionCount = 0; 
	questionNumb = 1;
	userScore = 0;

	showQuestions(questionCount);
	questionCounter(questionNumb);

	headerScore();
}

goHomeBtn.onclick = () => {
	quizSection.classList.remove('active');
	nextBtn.classList.remove('active');
	resultBox.classList.remove('active');

	questionCount = 0; 
	questionNumb = 1;
	userScore = 0;

	showQuestions(questionCount);
	questionCounter(questionNumb);

	headerScore();
}

let questionCount = 0; 
let questionNumb = 1; 
let userScore = 0;


const nextBtn = document.querySelector('.next-btn');
nextBtn.onclick = () => {
	if(questionCount < questions2.length - 1) {
	questionCount++;
	showQuestions(questionCount);

	questionNumb++;
	questionCounter(questionNumb);

	nextBtn.classList.remove('active');
	}
	else {
		showResultBox();
	}
}

const optionList = document.querySelector('.option-list');


//kuha sa questions ug options sa array 
function showQuestions(index) {
	const questionText = document.querySelector('.question-text');
	questionText.textContent = `${questions2[index].numb}. ${questions2[index].question}`;

	let optionTag = `<div class="option"><span>${questions2[index].options[0]}</span></div>
	<div class="option"><span>${questions2[index].options[1]}</span></div>
	<div class="option"><span>${questions2[index].options[2]}</span></div>
	<div class="option"><span>${questions2[index].options[3]}</span></div>`;

	optionList.innerHTML = optionTag;

	const option = document.querySelectorAll('.option');
	for (let i = 0; i < option.length; i++) {
		option[i].setAttribute('onclick', 'optionSelected(this)');
	}
}

function optionSelected(answer) {
	let userAnswer = answer.textContent;
	let correctAnswer = questions2[questionCount].answer;
    let allOptions = optionList.children.length;

	
	if (userAnswer == correctAnswer) {
		answer.classList.add('correct');
		userScore += 1;
		headerScore();
	}
	else {
		answer.classList.add('incorrect');

      //kung sayop ang answer sa user, mo automatic siya select sa sakto nga answer
		for (let i = 0; i < allOptions; i++) {
			if (optionList.children[i].textContent == correctAnswer) {
				optionList.children[i].setAttribute('class', 'option correct');
			}
		}
	}

	//Kung  ang user mana ug select, ma disable tanan option
    for (let i = 0; i < allOptions; i++) {
		optionList.children[i].classList.add('disabled'); 
	}

	nextBtn.classList.add('active');
}

function questionCounter(index) {
	const questionTotal = document.querySelector('.question-total');
	questionTotal.textContent = `${index} of ${questions2.length} Questions`;
}

function headerScore() {
	const headerScoreText = document.querySelector('.header-score');
	headerScoreText.textContent = `Score : ${userScore} / ${questions2.length}`;
}

function showResultBox() {
	quizBox.classList.remove('active');
	resultBox.classList.add('active');  
    
	const scoreText = document.querySelector('.score-text');
	scoreText.textContent = `Your Score ${userScore} out of ${questions2.length}`;

	const circularProgress = document.querySelector('.circular-progress');
	const progressValue = document.querySelector('.progress-value');
	let progressStartValue = -1;
	let progressEndValue = (userScore / questions2.length) * 100;
	let speed = 20;

	let progress = setInterval(() => {
		progressStartValue++;

		progressValue.textContent = `${progressStartValue}%`;
		circularProgress.style.background = `conic-gradient(#1512d8 ${progressStartValue * 3.6}deg, rgba(5, 40, 196, 0.733) 0deg)`;
		console.log(progressStartValue);
		if (progressStartValue == progressEndValue) {
			clearInterval(progress);
		}
	}, speed);

}