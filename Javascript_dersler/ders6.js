function getMilk(cost) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Buy "+cost+" bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    var bottles = Math.floor(cost/1.5);
    alert("It cost " + bottles + " Euros")
  }
getMilk(18);

// Math.floor() = küsüratı kaldırma, yuvarlama komutu, kalanı yuvarlama
