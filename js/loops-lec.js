// let times = 0;
// while (times < 10) {
//     times ++;
//     console.log("We have done this " + times + " times.");
// }
//
// console.log("done.")
//
//
// let bottles = 99;
// while (bottles > 0) {
//     console.log(bottles + " bottles of beer on the wall");
//     console.log(bottles + " bottles of beer");
//     console.log("Take 1 down");
//     console.log("Pass it around");
//     bottles--;
//     console.log(bottles + " bottles of beer on the wall");
//     console.log("")
// }

// let x = Math.floor((Math.random() * 10) + 1);
// console.log(x);
// alert("Let's play a guessing game");
// let guess = prompt("I chose a number between 1 and 10. Guess what it is.");
//
// while (guess != x) {
//     alert("No, that wasn't it.");
//     guess = prompt("I chose a number between 1 and 10. Guess what it is.");
// }
// alert("You guessed right!");

let x = Math.floor((Math.random() * 10) + 1);
console.log(x);
alert("Let's play a guessing game");
let guess;

do {
    guess = prompt("I chose a number between 1 and 10. Guess the number.");
    if (guess != x) {
        alert("No, that wasn't it.")
        continue;
    }
    else {
        alert("You guessed the number!");
        break;
    }
} while (true);


