//Prompt the user for an odd number between 1 and 50. Use a loop and a
//   break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between
//   1 and 50, except for the number the user entered.


let userInput = prompt("Enter an odd number between 1 and 50");

while (userInput > 50 || userInput < 1 || userInput % 2 == 0) {
    userInput = prompt("That is not a valid input. Please enter an odd number between 1 and 50.")
    if (userInput <= 50 && userInput >= 1 && userInput % 2 != 0) {
        break;
    }
}

console.log("Number to skip is: " + userInput);


for (let i = 1; i <= 50; i +=2) {
    if (i % 2 == 0) {
        continue;
    }
    else if (i == userInput) {
        console.log("Skipping " + i);
    }
    else {
        console.log(i)
    }
}


