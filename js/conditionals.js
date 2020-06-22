// "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// let analyzeColor = function (colorString){
//
//
//     if (colorString === 'red') {
//         console.log("Red is the color of a fire truck.")
//     } else if (colorString === 'orange') {
//         console.log("Orange is the color of an orange.")
//     } else if (colorString === 'yellow') {
//         console.log("Yellow is the color of a banana.")
//     } else if (colorString === 'green') {
//         console.log("Green is the color of the grass.")
//     } else if (colorString === 'blue') {
//         console.log("Blue is the color of the sky.")
//     } else if (colorString === 'indigo') {
//         console.log("Indigo, is the color of a few logos?")
//     } else if (colorString === 'violet') {
//         console.log("Violet is the color of the flower, violet.")
//     } else {
//         console.log("I do not know that color.")
//     }
//
// }
// analyzeColor("violet");
//
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
// analyzeColor(randomColor);
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
// analyzeColor = function (colorString){
//
//     switch (colorString) {
//         case 'red':
//             console.log("Red is the color of a fire truck.")
//             break;
//         case 'orange':
//             console.log("Orange is the color of an orange.")
//             break;
//         case 'yellow':
//             console.log("Yellow is the color of a banana.")
//             break;
//         case 'green':
//             console.log("Green is the color of the grass.")
//             break;
//         case 'blue':
//             console.log("Blue is the color of the sky.")
//             break;
//         case 'indigo':
//             console.log("Indigo, is the color of a few logos?")
//             break;
//         case 'violet':
//             console.log("Violet is the color of the flower, violet.")
//             break;
//         default:
//             console.log("I do not know that color.")
//     }
// }
// analyzeColor('green');
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// let userInput = prompt("Enter your favorite color: ");
//
// analyzeColor(userInput);
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// // let luckyNumber = Math.floor(Math.random() * 6);
//
//
// let numbers = [0, 1, 2, 3, 4, 5];
// let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
// // debugging
// console.log(randomNumber);
//
// let calculateTotal = function (luckyNum, discount) {
//
//     let userBill = parseFloat(prompt("What was your total bill?"));
//
//     // finalOwed will be percent owed at the end of the random number selection
//
//     if (luckyNum === 0) {
//         console.log("You do not receive a discount.")
//         discount = 100;
//     }
//
//     else if (luckyNum === 1) {
//         console.log("You get a 10% discount.")
//         discount = 90;
//     }
//
//     else if (luckyNum === 2) {
//         console.log("You get a 25% discount.")
//         discount = 75;
//     }
//
//     else if (luckyNum === 3) {
//         console.log("You get a 35% discount.")
//         discount = 65;
//     }
//
//     else if (luckyNum === 4) {
//         console.log("You get 50% discount.")
//         discount = 50;
//     }
//
//     else if (luckyNum === 5) {
//         console.log("You get the item for free!")
//         discount = 0;
//     }
//
//     else {
//         console.log("Something went wrong.")
//     }
//
//     let totalBill = (userBill * (discount / 100));
//
//     totalBill = totalBill.toFixed(2);
//     console.log("You owe $" + totalBill + " after your discount.");
// }
//
// calculateTotal(randomNumber)



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let userOk = confirm("Would you like to enter a number? OK for yes - Cancel for no");

if (userOk) {

    let userPrompt = parseInt(prompt("Enter a number"))

    // Checking to see if the userPrompt is even
    if (userPrompt % 2 === 0) {
        alert("This number is even.")
    } else {
        alert("This number is odd.")
    }

    // Adding the userPrompt to 100
    if (userPrompt) {
        alert("100 + " + userPrompt + " = " + (userPrompt + 100))
    }

    // Checking to see if the userPrompt is positive or negative
    if (userPrompt < 0) {
        alert("This number is negative.")
    }
    else if (userPrompt > 0) {
        alert("This number is positive.")
    }
    else if (userPrompt === 0) {
        alert("This number is neither negative or positive.")
    }

}