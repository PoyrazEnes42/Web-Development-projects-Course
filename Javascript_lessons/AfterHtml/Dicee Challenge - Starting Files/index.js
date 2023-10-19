var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
img1.setAttribute("src", randomDiceImage1);
img2.setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "<i class='fa-solid fa-flag'></i> Player 1 Wins";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins <i class='fa-solid fa-flag'></i>"; 
}
else {
    document.querySelector("h1").innerHTML = "draw";
}