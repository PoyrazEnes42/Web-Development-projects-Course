var x = Math.random();
x = x * 100;
x = Math.floor(x) + 1;
prompt("Birinci Kişinin adını girin: ");
prompt("İkinci Kişinin adını girin: ");
console.log("Your love score: " + x + "%");
// kişillerin love seviyesini tamamen ignore la ve random bir değer gir :)

if(x===100){
    console.log("You guys love eachother more than everyone");
}
if(x > 50){
    console.log("You guys love eachother enough");
}
else{
    console.log("You don't love eachother enough");
}

// === Is equal to (check for data type also, string, int etc.)
// == Is equal to (checks only data, even if they are different data types)
// !== Is not equal to
// > Is greater than
// < Is lesser than
// >= Is greater or equal to
// <= Is lesser or equal to

// typeof(x); => bize x değişkeninin türünü söyler (string, int, boolean etc.)

/* 

&& = And
|| = Or
! = Not

*/