function isLeap(year) {
    
    var leapOrNot;
    if (year % 4 !== 0){
        leapOrNot = "Not leap year.";
        return leapOrNot;
    }
    if (year % 4 === 0 && year % 100 !== 0){
        leapOrNot = "Leap year.";
        return leapOrNot;
    }
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
        leapOrNot = "Leap Year.";
        return leapOrNot;
    }
    else {
        leapOrNot = "Not leap year.";
        return leapOrNot;
    }
    
    }
    
    isLeap(2400);
    isLeap(1989);