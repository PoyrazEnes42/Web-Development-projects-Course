/*
var w = new Audio("./sounds/crash.mp3");
w.play();
*/

/*

document.querySelectorAll("button")[i].addEventListener("click", function (){

    alert("I got Clicked!");

});

*/

// console.log(this); gittiği elementi yazdırır
// console.log(this.innerHTML);
// this.style.color = "black";

/*

// Hesap Makinesi = Calculator

function add(num1, num2) {
    return num1 + num2;
  }
  function minus(num1, num2) {
    return num1 - num2;
  }
  function divide(num1, num2) {
    return num1 / num2;
  }
  function times(num1, num2) {
    return num1 * num2;
  }
  function calculate(num1, num2, calc) {
    return calc(num1, num2);
  }

calculate(10, 7, add);
calculate(12, 7, minus);
calculate(21, 7, divide);
calculate(3, 7, times);

*/

/*

    this.style.color = "black";

    function elemanEkle(experience,name,job){
    this.experience = experience;
    this.name = name;
    this.job = job;
}
    var houseKeeper1 = new elemanEkle(12, "Jane", ["Bathroom","Loby","Bedroom"]);
    console.log(houseKeeper1.name);


*/

/*

var houseKeeper1 = {
  experience: 12,
  name: "Name",
  job: ["Kitchen", " Livingroom"],
  clean: function(){
      alert(this.job[0]+" ve "+this.job[1]+" Temizleniyor...");
  }
}
function elemanEkle(experience,name,job){
  this.experience = experience;
  this.name = name;
  this.job = job;
  this.clean = function(){
      alert(this.job+" Temizleniyor...");
  }
}
var houseKeeper2 = new elemanEkle(12, "Jane", ["Bathroom"," Loby"," Bedroom"]);
var houseKeeper3 = new elemanEkle(2, "Jonas", ["Bathroom"," Kitchen"]);


*/

/*

function eventList(eventType, eventName, peopleNum, callback) {
  var eventler = {
    eventType: "keydown",
    eventName: eventName,
    peopleNum: peopleNum
  }
  if (eventler.eventType === eventType){
    callback(eventler.peopleNum);
  }
}
eventList("keydown", "Parti", 40, function(eventIsim){
  console.log(eventIsim);
});


*/


for(var AllDrum=document.querySelectorAll(".drum").length,i=0;i<AllDrum;i++)document.querySelectorAll("button")[i].addEventListener("click",function(){var e=this.innerHTML;makeSound(e),btnAnimation(e)});function makeSound(e){switch(e){case"w":new Audio("./sounds/tom-1.mp3").play();break;case"a":new Audio("./sounds/tom-2.mp3").play();break;case"s":new Audio("./sounds/tom-3.mp3").play();break;case"d":new Audio("./sounds/tom-4.mp3").play();break;case"j":new Audio("./sounds/snare.mp3").play();break;case"k":new Audio("./sounds/crash.mp3").play();break;case"l":new Audio("./sounds/kick-bass.mp3").play();break;default:console.log(event.key)}}function btnAnimation(e){var n=document.querySelector("."+e);n.classList.add("pressed"),setTimeout(function(){n.classList.remove("pressed")},200)}document.addEventListener("keydown",function(e){makeSound(e.key),btnAnimation(e.key)});



/*

Original code

var AllDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < AllDrum; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    btnAnimation(btnInnerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  btnAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(event.key);
  }
}

function btnAnimation(currentKey){
  var activeBtn = document.querySelector("."+currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function(){ activeBtn.classList.remove("pressed");},200)
}


*/