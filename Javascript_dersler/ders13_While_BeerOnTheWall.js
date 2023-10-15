function bottles (beerQuantity){
    var bottleNumber = beerQuantity;
    while (bottleNumber > 0){
        console.log(bottleNumber + " bottles of beer on the wall, " + bottleNumber + " bottles of beer.\nTake one down and pass it around, " + bottleNumber + " bottles of beer on the wall.");
        bottleNumber--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, " + bottleNumber + " bottles of beer on the wall.\n");
}
var count = bottles(10);