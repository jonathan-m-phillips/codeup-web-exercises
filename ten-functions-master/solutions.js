"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */


// 1 --------------------------
let isTrue = function (value) {

    if (value === true) {
        return true;
    }
    else {
        return false;
    }

}
isTrue();




// 2 ---------------------------
let isFalse = function (value) {

    if (value === false) {
        return true;
    }
    else {
        return false;
    }

}
isFalse();




// 3 -----------------------
let not = function (value) {

    if (value !== true && value !== Number(value) && value !== "hello" || value === 0) {
        return true;
    }
    else {
        return false;
    }

}
not();




// 4 --------------------------
let addOne = function (value) {

    if (value === Infinity) {
        return Infinity;
    }
    else {
        return parseInt(value) + 1;
    }

}
addOne();




// 5 --------------------------
let isEven = function (value) {

    if (value % 2 === 0 && value !== false) {
        return true;
    }
    else {
        return false;
    }

}
isEven();




// 6 ------------------------------------
let isIdentical = function (arg1, arg2) {

    if (arg1 === arg2) {
        return true;
    }
    else {
        return false;
    }

}
isIdentical();




// 7 --------------------------------
let isEqual = function (arg1, arg2) {

    if (arg1 == arg2) {
        return true;
    }
    else {
        return false;
    }

}
isEqual();




// 8----------------------------
let or = function (arg1, arg2) {

    if (arg1 === true || arg2 === true) {
        return true;
    }
    else if (arg1) {
        return arg1;
    }
    else {
        return false;
    }

}
or();




// 9 ----------------------------
let and = function (arg1, arg2) {

    if (arg1 === true && arg2 === true) {
        return true;
    }
    else if (arg1) {
        return arg2;
    }
    else {
        return false;
    }

}
and();




// 10 ------------------------------
let concat = function (arg1, arg2) {

    let value = "";

    if (arg1 && arg2) {
        value = (arg1 + "") + arg2;
        return value;
    }

}
concat();