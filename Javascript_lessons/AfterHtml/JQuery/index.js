/*

var ButtonCount = document.querySelectorAll("button").length;
for (var i = 0; i < ButtonCount; i++ ){
    document.querySelectorAll("button")[i].style.color = "red";
}

// Üstteki kod Javascript ama alttaki JQuery ve aynı işi yapıyorlar

$("button").css("color", "blue");

*/

$(document).ready(function () {
  $("button").css("color", "red");
});

document.querySelectorAll("button")[0].addEventListener("click", function () {
  document.querySelector("a").setAttribute("href", "https://www.google.com");
  document.querySelector("a").textContent = "Google";
});

document.querySelectorAll("button")[1].addEventListener("click", function () {
  document.querySelector("a").setAttribute("href", "https://www.bing.com");
  document.querySelector("a").textContent = "Bing";
});

$("button").click(function () {
  $("h1").css("color", "red");
  $("h1").text("Google");
});

// $("a").attr("href", "https://www.bing.com");
// $("a").text("Bing");

/*

document.querySelector("a").setAttribute("href", "https://www.bing.com");
document.querySelector("a").textContent = "Bing";

*/

/*

// CSS düzenleme
$("h1").css("font-size", "100px");

// Class ekleme Silme
$("h1").addClass("bigTitle");
$("h1").removeClass("bigTitle");
$("h1").addClass("smallTitle");

// içerik değiştirme
$("h1").text("Bye Bye");
$("h1").html("<em>Bye Bye</em>");

// bir elementin içindeki bir özelliği seçmek
console.log($("img").attr("src"));

*/

document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "100px";
var AllBtn = document.querySelectorAll("button").length;
for (var i = 0; i < AllBtn; i++) {
  document.querySelectorAll("button")[i].classList.add("btn");
  document.querySelectorAll("button")[i].setAttribute("class", "drum");
  document.querySelectorAll("button")[i].style.color = "Red";
  document.querySelectorAll("button")[2].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
    setTimeout(function () {
      document.querySelector("h1").style.color = "blue";
    }, 300);
  });
}

// Keylogger

var keylogger = "";
document.addEventListener("keydown", function (event) {
  var newKey = event.key;
  keylogger = keylogger + newKey;
  console.log(keylogger);
});

$(document).keydown(function (event) {
  $("h1").text(event.key);
});

// mouseover mouseout

$("h1").on("mouseover", function () {
  $("h1").css("color", "red");
});
$("h1").on("mouseout", function () {
  $("h1").css("color", "blue");
});



// $("button").remove();


var buton4 = $("button:nth-of-type(4)");
$(buton4).click(function () {
  $("h1:nth-of-type(1)").toggle();
});

// $("button:nth-of-type(6)").toggle(); => hide(); veya show(); komutu yerine kullanılabilir.
// bu işlem yavaşça olsun istersek de fadeOut();

// $("p:nth-of-type(2)")	All <button> elements that are the 2nd <button> element of their parent => buton elementinin tüm 2. cı elemanları, kendi aileleri içinde, bu sayfadakiler.

// h1:eq(1) => sıfırdan başlayarak sayfadaki 1. ci indexteki h1 i seçer. css gibi arka arkaya boşluk bırakılabilir. 
// $("ul li:eq(4)").css("background-color","yellow"); => örneği gibi

$("h1").on("click", function(){
    $("h1").fadeOut(); // fadeToggle / fadeOut != fadeIn
});


/*
$("h1").before("<button>Merhaba</button>");
$("h1").after("<button>Merhaba</button>");

// içeriğin başına ve sonuna html verisi eklemek

$("h1").prepend("<button>Merhaba</button>");
$("h1").append("<button>Merhaba</button>");
*/

// slide her türlü içeriği sanki aşağı doğru açılan menü çubuğu gibi kapatıp açar
// $("h1").slideDown();
// $("h1").slideUp();
// $("h1").slideToggle();

// $("h1").animate({opacity: 0.5}); saydamlığı arttırır, değer kısmı sadece rakam olan değerleri anime eder. color: "red" yazmak kodu çalıştırmaz
// margin: 20 / margin: "20%"

// bu tarz komutlar ile birden fazla şey aynı anda yaptırılabilir
// $("h1").slideUp().slideDown().animate({opacity: 0.8});
