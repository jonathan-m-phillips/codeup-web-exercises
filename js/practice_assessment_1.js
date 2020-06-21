/**

1)
Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.

 isTrue(true)             // true
 isTrue(false)            // false
 isTrue(0)                // false
 isTrue(null)             // false
 isTrue("true")           // false
 isTrue("Banana")         // false
 isTrue([1, 2])           // false

*/

// let isTrue = function (value) {
//
//     if (value === true) {
//         console.log("true")
//         return true;
//     }
//
//     else {
//         console.log("false")
//         return false;
//     }
//
// }
//
// isTrue("banana");

/**

 2)
 Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.

 isFalse(false)             // true
 isFalse(true)              // false
 isFalse(0)                 // false
 isFalse(null)              // false
 isFalse("")                // false
 isFalse("Banana")          // false
 isFalse([1, 2])            // false

 */

// let isFalse = function (value) {
//
//     if (value === false) {
//         console.log("true")
//         return true;
//     }
//     else {
//         console.log("false")
//         return false;
//     }
//
// }
//
// isFalse(0);

/**

 3)
 Define a function named not that takes in any input and returns the boolean opposite of the provided input.

 not(false)                  // true
 not(0)                      // true
 not("")                     // true
 not(null)                   // true
 not(NaN)                    // true
 not(undefined)              // true
 not(true)                   // false
 not("something")            // false
 not(Infinity)               // false
 not(123)                    // false

 */

// let not = function (value) {
//
//     if (value === true) {
//         console.log("true")
//         return true;
//     }
//     else {
//         console.log("false")
//         return false;
//     }
//
// }
//
// not(0);


/**

 4)
 Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.

 addOne(0)                    // 1
 addOne(2)                    // 3
 addOne(-5)                   // -4
 addOne(5.789)                // 6.789
 addOne(Infinity)             // Infinity
 addOne("2")                  // 3
 addOne("0")                  // 1
 addOne("banana")             // NaN
 addOne(true)                 // NaN
 addOne(NaN)                  // NaN

 */

// let addOne = function (value) {
//
//     if (value === Number(value)) {
//         value += 1;
//         console.log(value);
//         return value;
//     }
//     else {
//         value = NaN;
//         console.log(value);
//         return value;
//     }
//
// }
//
// addOne("banana");


/**

 5)
 Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.

 isEven(2)                   // true
 isEven(-8)                  // true
 isEven(0)                   // true
 isEven("42")                // true
 isEven(1)                   // false
 isEven("-3")                // false
 isEven(false)               // false
 isEven("banana")            // false

 */

// let isEven = function (value) {
//
//     if (value % 2 === 0 && value !== false) {
//         console.log("true");
//         return true;
//     }
//     else {
//         console.log("false");
//         return  false;
//     }
//
// }
//
// isEven("banana");


/**

 6)
 Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.

 isIdentical(3, 3)                     // true
 isIdentical(false, false)             // true
 isIdentical("hello", "hello")         // true
 isIdentical(3, 3.0)                   // true
 isIdentical(undefined, undefined)     // true
 isIdentical(2, "2")                   // false
 isIdentical("javascript", "java")     // false

 */

let isIdentical = function (arg1, arg2) {

    if (arg1 === arg2) {
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }

}

isIdentical(1, "1");