console.log("Hello from external JavaScript.");



alert("Welcome to my Website!");



let color = prompt("What is your favoriote color?");
alert("Great, " + color + " is my favorite color too!");


/*
    You have rented some movies for your kids: The little mermaid (for 3 days),
    Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know
    yet if they're going to like it). If price for a movie per day is $3, how much
    will you have to pay?
 */

// Days rented per movie
let littleMermaid = prompt("How many days did you rent the Little Mermaid for?");
let brotherBear = prompt("How many days did you rent Brother Bear for?");
let hercules = prompt("How many days did you rent Hercules for?");

// Price per day rented
let price = 3;

// Amount owed for rental
let owed = ((Number(littleMermaid) + Number(brotherBear) + Number(hercules)) * price);

alert("You owe $" + owed + ".");




/*
    Suppose you're working as a contractor for 3 companies: Google, Amazon and
    Facebook, they pay you a different rate per hour. Google pays $400, Amazon
    $380, and Facebook $350. How much will you receive in payment for this week?
    You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */

// Rate per company
let google = prompt("How much money does Google pay you per hour?");
let amazon = prompt("How much money does Amazon pay you per hour?");
let facebook = prompt("How much money does Facebook pay you per hour?");

// Hours per company
let googleHours = prompt("How many hours did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon?");
let facebookHours = prompt("How many hours did you work for Facebook?");

// Amount earned
let earned = ((Number(google) * Number(googleHours)) + (Number(amazon) * Number(amazonHours)) + (Number(facebook) * Number(facebookHours)));

alert("You have earned $" + earned + ".");




/*
    A student can be enrolled in a class only if the class is not full and the
    class schedule does not conflict with her current schedule.
 */

let classOpen = confirm("Is the class full?");
let scheduleOpen = confirm("does this class work with your schedule?");

if (classOpen == true && scheduleOpen == true) {
    alert("You may register.")
} else {
    alert("You may not register.")
}




/*
    A product offer can be applied only if a person buys more than 2 items,
    and the offer has not expired. Premium members do not need to buy a
    specific amount of products.
 */

let numberItemsPurchased = parseInt(prompt("How many items did you purchase?"));
let offerExpiration = confirm("Has the offer expired?");
let premiumMember = confirm("Are you a premium member?");

if (offerExpiration && (premiumMember || numberItemsPurchased > 2)) {
    alert("The product offer applies.")
} else {
    alert("The product offer does not apply.")
}
