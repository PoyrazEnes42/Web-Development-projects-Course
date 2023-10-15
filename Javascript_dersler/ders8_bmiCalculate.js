//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(kilo,boy){
    var bmiHesap = kilo / (boy * boy);
    return bmiHesap;
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:



bmi should equal 20 when it's rounded to the nearest whole number.

*/
var bmi = bmiCalculator(73, 172); 
console.log(Math.round(bmi));

// Math.pow(boy,2); => boy * boy => sayının karesini veya üstünü bulma komutu


// var n = Math.random();
// n = n * 6;  // => 0 ile 5.99 arasında random bir sayı döndürür.
// n = Math.floor(n) + 1; // => sayıyı yuvarlayıp, bir ekleyince artık 1 ile 6 arası bir değer döndürür
// console.log(n);
