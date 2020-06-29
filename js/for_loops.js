
//Create a function named showMultiplicationTable that accepts a number and console.logs
//   the multiplication table for that number (just multiply by the numbers 1 through 10)
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
let x;
for (let i = 1; i <= 10; i++) {
    x = Math.floor((Math.random() * 180) + 21);
    console.log(x)
}

