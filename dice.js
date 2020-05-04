//Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = `Dices/dice${randomNumber1}.png`;

$("#img1").attr("src",randomImage1);

//Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = `Dices/dice${randomNumber2}.png`;

 $("#img2").attr("src",randomImage2);

//Outcome
if (randomNumber1 > randomNumber2) {
	 $("#result").text(" 🚩 Player 1 Wins !");
}
else if (randomNumber2 > randomNumber1) {
	$("#result").text(" 🚩 Player 2 Wins !");
}
else {
	$("#result").text("Draw...");
}





