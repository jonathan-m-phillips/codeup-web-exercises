//Create a function named showMultiplicationTable that accepts a number and console.logs
//   the multiplication table for that number (just multiply by the numbers 1 through 10)

//*SOLUTION*
let showMultiplicationTable = function (num) {
    let answer = 0;
    for (let i = 1; i <= 10; i++) {
        answer = num * i;
        console.log(num + " x " + i + " = " + answer)
    }
}

showMultiplicationTable(7);


//Use a for loop and the code from the previous lessons to generate 10 random numbers
//  between 20 and 200 and output to the console whether each number is odd or even.

//*SOLUTION*
let x;
for (let i = 1; i <= 10; i++) {
    x = Math.floor((Math.random() * 181) + 20);
    if (x % 2 === 0) {
        console.log(x + " is even.")
    }
    else {
        console.log(x + " is odd.")
    }
}


//Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


//*SOLUTION*
for (let i = 1; i < 10; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    console.log(str);
}


//Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// *SOLUTION*
for (let i = 100; i > 0; i-=5) {
    console.log(i)
}