// What I did

var output = [];
var sayi = 1;
function fizzBuzz(){
    while (sayi <= 100){
    output.push(sayi);
    if (output[sayi-1] % 3 === 0){
        if(output[sayi-1] % 5 === 0){
            output[sayi-1] = "FizzBuzz";
        } 
        else{
            output[sayi-1] = "Fizz";
        }
    }
    if (output[sayi-1] % 5 === 0 && output[sayi-1] % 3 !== 0){
        output[sayi-1] = "Buzz";
    }
    sayi++;
    }
    console.log(output);
}
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

/*

Formül her çalıştığında sayı yalnıca 3 bölünebiliyorsa fizz
yalnuzca 5 e bölünebiliyorsa bizz
her ikisine de bölünebiliyorsa array list e FizzBizz değerini 3, 5 ve ikisinin ortak bölünebildiği sayılara bu ifadeleri giriyor.

=alınan çıktı:

fizzBuzz();
index.js:16 (15) [1, 2, 'Fizz', 4, 'Bizz', 'Fizz', 7, 8, 'Fizz', 'Bizz', 11, 'Fizz', 13, 14, 'FizzBizz']

*/

// What teacher did

var output = [];
var sayi = 1;
function fizzBuzz(){
    while (sayi <=100){
    if (sayi % 5 === 0 && sayi % 3 === 0){
        output.push("FizzBuzz");
    }
    else if (sayi % 3 === 0){
        output.push("Fizz");
    }
    else if(sayi % 5 === 0){
        output.push("Buzz");
    } 
    else{
        output.push(sayi);
    }
    sayi++;
    }
    console.log(output);
}
fizzBuzz();

