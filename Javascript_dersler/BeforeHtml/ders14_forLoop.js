var output = [];

function fizzBuzz(){
    for (var sayi = 1; sayi <=30; sayi++){
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
    }
    console.log(output);
}
fizzBuzz();