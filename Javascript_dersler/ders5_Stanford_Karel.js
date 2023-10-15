/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
// https://stanford.edu/~cpiech/karel/ide.html
function main(){
    //your code here
    goCorner();
    goCorner();
    goCorner();
    goCorner();
    goCorner();
    goCorner();
 }
 function goCorner(){
    move();move();move();move();turnLeft();move();move();move();move();
    turnLeft();
    }
 
// --------------------------------------------------

function main(){
   putBeeper();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
   oneStepCorner();
}
function oneStepCorner(){
   move();
   turnLeft();
   move();
   turnRight();
   putBeeper();
}

// --------------------------------------------------

// What I did Is 15x15

function main(){
   putBeeper();
   move();
   beeperPutter();
}
function beeperPutter(){
   doCircle();
   doCircle();
   doCircle();
   doCircle();
   doCircle();
   doCircle();
   doCircle();
   fillThePath();
   fillThePath();
   fillThePath();
   fillThePath();
   fillThePath();
   fillThePath();
   move();
   putBeeper();
}
function putAndMove(){
   move();
   putBeeper();
   move();
}
function putAndLeft(){
   move();
   putBeeper();
   turnLeft();
   move();
   turnLeft();
   }
function lineTurn(){
   putAndMove();
   putAndMove();
   putAndMove();
   putAndMove();
   putAndMove();
   putAndMove();
   putAndLeft();
   putAndMove();
   putAndMove();
   putAndMove();
   putAndMove();
   putAndMove();
   putAndMove();
   putAndMove();
}
function doCircle(){
   lineTurn();
   turnRight();
   move();
   turnRight();
   putBeeper();
   move();
}
function fillThePath(){
   move();
   putBeeper();
   move();
   }

// --------------------------------------------------

// What Teacher Did Is 5x5

function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}
 
function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}
 
function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}
 
function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}
 
function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}