// What I did

function bottles (beerQuantity){
    var bottleNumber = beerQuantity;
    while (bottleNumber > 0){
        if (bottleNumber === 1){
            console.log(bottleNumber + " bottles of beer on the wall, " + bottleNumber + " bottles of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
            bottleNumber--;
        }else{
        console.log(bottleNumber + " bottles of beer on the wall, " + bottleNumber + " bottles of beer.\nTake one down and pass it around, " + (bottleNumber-1) + " bottles of beer on the wall.");
        bottleNumber--;
        }
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, " + beerQuantity + " bottles of beer on the wall.\n");
}
var count = bottles(10);
console.log(count);



// What Teacher Did

var numberOfBottles = 99;
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
