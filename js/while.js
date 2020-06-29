// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

let num = 2;

while (num <= 65536) {
    console.log(num);
    num *= 2;
}


//An ice cream seller can't go home until she sells all of her cones.
//  First write enough code that generates a random number between 50 and
//  100 representing the amount of cones to sell before you start your loop.
//  Inside of the loop your code should generate another random number between
//  1 and 5, simulating the amount of cones being bought by her clients. Use a
//  do-while loop to log to the console the amount of cones sold to each person.


let allCones = Math.floor(Math.random() * 50) + 50;
console.log("We have " + allCones + " cones to sell.")

let beingBought = 0;

do {
    beingBought = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - beingBought;
    console.log(beingBought + " cones sold.");
    console.log(allCones + " cones are left.");

    if (beingBought > allCones) {
        console.log("I cannot sell you " + beingBought + " cones. I only have " + allCones + " cones left.");
    }

} while (allCones >= beingBought);
