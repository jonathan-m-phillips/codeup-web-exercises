(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Jon",
        lastName: "Phillips"
        // sayHello: function () {
        //     return "Hello from " + this.firstName + " " + this.lastName + "!"
        // }
    }

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!"
    }

    console.log(person.sayHello());

    console.log("");
    console.log("");


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {
            name: 'Cameron',
            amount: 180
        },
        {
            name: 'Ryan',
            amount: 250
        },
        {
            name: 'George',
            amount: 320
        }
    ];

    let discount = function () {

        for (let i=0; i<shoppers.length; i++) {

            if (shoppers[i].amount >= 200) {
                let discountPercent = shoppers[i].amount * .12
                console.log(shoppers[i].name + ", you owe $" + shoppers[i].amount + " before your discount. You get a 12% discount of $" + discountPercent.toFixed(2) + ".")

                let totalDiscount = shoppers[i].amount - discountPercent;
                console.log("Your total owed after your $" + discountPercent.toFixed(2) + " discount is $" + totalDiscount.toFixed(2) + ".");

                console.log("")
            }
            else if (shoppers[i].amount < 200 && shoppers[i].amount > 0) {
                let underSpent = 200 -shoppers[i].amount;
                console.log(shoppers[i].name + ", I am sorry but you only spent $" + shoppers[i].amount + ". If you were to spend $" + underSpent.toFixed(2) + " more, you would receive a 12% discount on your purchase today.");
                console.log("");
            }
            else if (shoppers[i].amount == 0) {
                console.log("You do not owe anything.");
                console.log("");
            }
            else if (shoppers[i].amount < 0) {
                console.log("Error: you can not spend negative amount of money here.");
                console.log("");
            }
        }
    }
    discount();

    // Using a forEach instead of a for loop

    // shoppers.forEach(function(shopper) {
    //     let saved = 0;
    //
    //     if (shopper.amount >= 200) {
    //         saved = shopper.amount * .12;
    //     }
    //         console.log(shopper.name + " spent " + shopper.amount + ". They saved " + saved + " for a total of " + (shopper.amount - saved))
    //
    // })

    console.log("");

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "The 10X Rule",
            author: {
                firstName: "Grant",
                lastName: "Cardone"
            }
        },
        {
            title: "Good to Great",
            author: {
                firstName: "Jim",
                lastName: "Collins"
            }
        },
        {
            title: "The Pragmatic Programmer",
            author: {
                firstName: "David",
                lastName: "Thomas"
            }
        },
        {
            title: "The Clean Coder",
            author: {
                firstName: "Robert",
                lastName: "Martin"
            }
        },
        {
            title: "You are a Badass",
            author: {
                firstName: "Jen",
                lastName: "Cencero"
            }
        },
        {
            title: "The Greatest You",
            author: {
                firstName: "Trent",
                lastName: "Shelton"
            }
        }
    ]

    console.log(books[0].title);
    console.log("By " + books[0].author.firstName + " " + books[0].author.lastName)

    console.log("");
    console.log("");

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    let booksLoop = function () {

        let count = 1;

        for (let i=0; i<books.length; i++) {
            if (i < books.length) {
                console.log("Book # " + count++);
                console.log("Title: " + books[i].title);
                console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
                console.log("---");
            }
        }
    }
    booksLoop();

    // Using forEach instead of for loop

    // books.forEach(function(book, index){
    //     console.log("Book # " + (index+1));
    //     console.log("Title " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("---");
    // })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // let createBook = function (title, author) {
    //     return {title: title, author: author};
    // }
    //
    // let books2 = [];
    //
    // books2.push ("To Kill a Mockingbird", "Harper Lee");
    // books2.push ("The 10X Rule", "Grant Cardone");
    //
    // let showBookInfo = function (book) {
    //     books2.forEach(function (value){
    //         console.log(value);
    //     });
    // };
    // showBookInfo();

    const createBook = function (title, firstName, lastName) {
        let book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = firstName;
        book.author.lastName = lastName;
        return book;
    }

    let showBookInfo = function(book, index) {
        console.log("Book # 1 " + (index+1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.firstName + " " + book.lastName);
        console.log("---")
    }

    let books2 = [];
    books.push(createBook("To Kill a MockingBird", "Someone", "Wrote"));

    books2.forEach(showBookInfo);


})();
