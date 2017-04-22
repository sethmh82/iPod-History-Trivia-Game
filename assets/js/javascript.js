$(document).ready(function() {
function loadGame() {
	gameStart = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>START</a></p>";
	$(".gameArea").html(gameStart);
}
loadGame();
musicSound.play();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	buttonSound.play();
	loadQuestions();
	timerWrapper();
});

$("body").on("click", ".answer", function(event){
	buttonSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctA[questionNumber]) {
		clearInterval(timeClock);
		youWin();
	}
	else {
		clearInterval(timeClock);
		youLose();
	}
});

$("body").on("click", ".reset-button", function(event){
	buttonSound.play();
	resetGame();
});

});

function timeUp() {
	numberUnanswered++;
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctA[questionNumber] + "</p>"; // + "<img class='center-block img-wrong' src='img/x.png'>"
	$(".gameArea").html(gameText);
	setTimeout(wait, 4000);
}

function youWin() {
	rightSound.play();
	numberRight++;
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'><img class='center-block img-right' src='assets/img/applelogo.jpg'> The answer is: " + correctA[questionNumber] + "</p>"; // + iArray[questionNumber]
	$(".gameArea").html(gameText);
	setTimeout(wait, 4000);
}

function youLose() {
	wrongSound.play();
	numberWrong++;
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'><img class='center-block img-right' src='assets/img/applelogo2.jpg'> The correct answer is: "+ correctA[questionNumber] + "</p>"; // + "<img class='center-block img-wrong' src='img/x.png'>"
	$(".gameArea").html(gameText);
	setTimeout(wait, 4000);
}

function loadQuestions() {
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + qArray[questionNumber] + "</p><p class='first-answer answer'>A. " + aArray[questionNumber][0] + "</p><p class='answer'>B. "+aArray[questionNumber][1]+"</p><p class='answer'>C. "+aArray[questionNumber][2]+"</p><p class='answer'>D. "+aArray[questionNumber][3]+"</p>";
	$(".gameArea").html(gameText);
}

function wait() {
	if (questionNumber < 8) {
	questionNumber++;
	loadQuestions();
	counter = 30;
	timerWrapper();
	}
	else {
		gameEnding();
	}
}

function timerWrapper() {
	timeClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(timeClock);
			timeUp();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function gameEnding() {
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='end-stats'>Correct Answers: " + numberRight + "</p>" + "<p>Wrong Answers: " + numberWrong + "</p>" + "<p>Unanswered: " + numberUnanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".gameArea").html(gameText);
}

function resetGame() {
	questionNumber = 0;
	numberRight = 0;
	numberWrong = 0;
	numberUnanswered = 0;
	counter = 30;
	loadQuestions();
	timerWrapper();
}

var questionNumber = 0;
var numberRight = 0;
var numberWrong = 0;
var gameStart;
var gameText;
var counter = 30;

var qArray = ["What year was the first iPod released?<br><img class='center-block img-right' style='width:18%;' src='assets/img/ipod1gen.jpg'>", "What band endorsed this special edition iPod?<br><img class='center-block img-right' style='width:18%;' src='assets/img/ipodu2.jpg'>", "What is the main difference between these two iPods<br><img class='center-block img-right' style='width:26%;' src='assets/img/ipod1and2.jpg'>", "What is this iPod called?<br><img style='width:18%;' src='assets/img/ipodmini.jpg'>", "How many iPods have been sold to date (2017)?", "What is this iPod called?<br><img src='assets/img/ipodnano.jpg'>", "What is the maximum capicty of the latest (6th generation) iPod?", "What is unique about this iPod from that of all previous iPods?<br><img class='center-block img-right' src='assets/img/ipodtouch1.jpg'>", "What was the retail price of the very first iPod?"];
var aArray = [["1998", "2001", "2004", "1996"], ["Green Day","John Mayer","U2","Coldplay"], ["The 1st Generation has a click wheel and the 2nd a touch wheel", "The 2nd Generation plays mp3 files and the 1st only plays wav", "They were both prototypes but never released", "The 2nd Generation has a color screen"], ["iPod Nano","iPod C","iPod Dash","iPod Mini"], ["115 Million","190 Million","215 Million","370 Million"], ["iPod Nano","iPod Micro","iPod Pocket","iPod Mini"], ["64 GB","128 GB","245 GB","1 TB"], ["It is the first iPod available in black and white colors","It is the first iPod that connects via USB","It is the first iPod to display pictures.","It is the first iPod with a touchscreen"], ["$199", "$250", "$399", "$499"]];
//var iArray = ["<img class='center-block img-right' src='assets/img/applelogo.jpg'>", "<img class='center-block img-right' src='assets/img/applelogo.jpg'>", "<img class='center-block img-right' src='assets/img/applelogo.jpg'>", "<img class='center-block img-right' src='assets/img/applelogo.jpg'>", "<img class='center-block img-right' src='assets/img/applelogo.jpg'>", "<img class='center-block img-right' src='assets/img/applelogo.jpg'>", "<img class='center-block img-right' src='assets/img/applelogo.jpg'>", "<img class='center-block img-right' src='assets/img/applelogo.jpg'>", "<img class='center-block img-right' src='assets/img/applelogo.jpg'>"];
var correctA = ["B. 2001", "C. U2", "A. The 1st Generation has a click wheel and the 2nd a touch wheel", "D. iPod Mini", "D. 370,000,000", "A. iPod Nano", "B. 128 GB", "D. It is the first iPod with a touchscreen", "C. $399"];

var selecterAnswer;
var timeClock;
var numberUnanswered = 0;
var musicSound = new Audio("assets/sound/music.mp3");
var buttonSound = new Audio("assets/sound/button.mp3");
var wrongSound = new Audio("assets/sound/wrong.mp3");
var rightSound = new Audio("assets/sound/right.mp3");
