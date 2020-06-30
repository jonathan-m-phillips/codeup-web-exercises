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



// let x = Math.floor((Math.random() * 10) + 1);
// console.log(x);
// alert("Let's play a guessing game");
// let guess;
//
// do {
//     guess = prompt("I chose a number between 1 and 10. Guess the number.");
//     if (guess != x) {
//         alert("No, that wasn't it.")
//         continue;
//     }
//     else {
//         alert("You guessed the number!");
//         break;
//     }
// } while (true);


/**
 These are the same thing
 just in different loop form!
 */

// console.log("While loop")
// let x = 1;
// while (x <= 10) {
//     console.log(x);
//     x++;
// }
//
// console.log("")
//
// console.log("For loop")
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

/**
These next two loops execute same thing
 */
// for (let i = 1; i <=20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
//
// for (let j = 2; j<=20; j+=2) {
//     console.log(j);
// }

/**
Another way of multiplying by adding the numbers in a loop

 Ex. 5*4 = 20
 5 + 5 + 5 + 5 = 20
 */
let multiply = function (a, b) {
    let answer = 0;
    for (let i = 0; i < b; i++) {
        answer += a;
    }
    return answer;
}

console.log(multiply(6, 7));


let addition = function (a, b) {
    let answer = a;
    for (let i=0; i<b; i++) {
        answer++;
    }
    return answer;
}

console.log(addition(2, 7));