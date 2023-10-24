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

var buttonColours=["red","blue","green","yellow"],gamePattern=[],userClickedPattern=[],started=!1,level=0;function checkAnswer(e){gamePattern[e]===userClickedPattern[e]?userClickedPattern.length===gamePattern.length&&setTimeout(function(){nextSequence()},1e3):(playSound("wrong"),$("body").addClass("game-over"),$("#level-title").text("Game Over, Press Any Key to Restart"),setTimeout(function(){$("body").removeClass("game-over")},200),startOver())}function nextSequence(){userClickedPattern=[],level++,$("#level-title").text("Level "+level);var e=buttonColours[Math.floor(4*Math.random())];gamePattern.push(e),$("#"+e).fadeIn(100).fadeOut(100).fadeIn(100),playSound(e)}function animatePress(e){$("#"+e).addClass("pressed"),setTimeout(function(){$("#"+e).removeClass("pressed")},100)}function playSound(e){new Audio("sounds/"+e+".mp3").play()}function startOver(){level=0,gamePattern=[],started=!1}$(document).keypress(function(){started||($("#level-title").text("Level "+level),nextSequence(),started=!0)}),$(".btn").click(function(){var e=$(this).attr("id");userClickedPattern.push(e),playSound(e),animatePress(e),checkAnswer(userClickedPattern.length-1)});