/*

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


*/

var butonRenkler = ["red", "green", "blue", "yellow"];
var level = 0;
var kullaniciSecilen = [];
var oyunSecmesiGereken = [];
var Basladi = false;

$(document).keydown(function(){
  if(!Basladi){
    $("#level-title").text("level"+level);
    yeniSeans();
    Basladi = true;
  }
});

$(".btn").click(function(){
  var kullaniciSecilenBtn = $(this).attr("id");
  kullaniciSecilen.push(kullaniciSecilenBtn);
  sesOynat(kullaniciSecilenBtn);
  animation(kullaniciSecilenBtn);
  cevapKontrol(kullaniciSecilen.length-1);
});

function cevapKontrol(suankiLevel){
  if (kullaniciSecilen[suankiLevel] === oyunSecmesiGereken[suankiLevel]){
    if(kullaniciSecilen.length === oyunSecmesiGereken.length){
      setTimeout(function(){
        yeniSeans();
      },1000);
    }
  }else{
    sesOynat("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },100);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    bastanBasla();
  }
}

function bastanBasla(){
  level = 0;
  oyunSecmesiGereken =[];
  Basladi = false;
}

function yeniSeans() {
  kullaniciSecilen = [];
  level++;
  var randomSayi = Math.floor(Math.random() * 4);
  var randomSecilenRenk = butonRenkler[randomSayi];
  oyunSecmesiGereken.push(randomSecilenRenk);
  $("#"+randomSecilenRenk).fadeIn(100).fadeOut(100).fadeIn(100);
  sesOynat(randomSecilenRenk);
  animation(randomSecilenRenk);
}

function sesOynat(renk) {
  var ses = new Audio("./sounds/" + renk + ".mp3");
  ses.play();
}
function animation(renk) {
  $(".btn").addClass("pressed");
  setTimeout(function () {
    $(".btn").removeClass("pressed");
  }, 100);
}
