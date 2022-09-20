console.log("hello i am linked");

// Example 1.

/**
 * Add two numbers together
 *  */

function addNumbers(a, b) {
    return a + b;
}

addNumbers();

// Example 2.

/**
 * Display a greeting message to the user
 **/

function greetingUsers() {
    return `<span>Hello my friendly user</span>`;
}

greetingUsers();

// Example 3. @param

/**
 * Add Three numbers together
 * @param {number} a First Value
 * @param {number} b Second Value
 * @param {number} c Third Value
 * **/

function addThreeNumbers(a, b, c) {
    return a + b + c;
}

addThreeNumbers(10, 20, 90);

// Example 4. @return

// /**
//  * @return {dataType} returnDescription **/

/**
 * Display cats names
 * @param {string} cat1 First Value
 * @param {string} cat2 Second Value
 * @param {string} cat3 Third Value
 * @param {string} cat4 Fourth Value
 * @return {string} List of cat names
 * **/

function addFourCats(cat1, cat2, cat3, cat4) {
    return `<ul>
                <li>${cat1}</li>
                <li>${cat2}</li>
                <li>${cat3}</li>
                <li>${cat4}</li>
            </ul>`
}

addFourCats("milo", "andy", "shown", "lira");

// Example 5.

// @example



/**
 * Add Four numbers together
 * @param {number} a First Value
 * @param {number} b Second Value
 * @param {number} c Third Value
 * @param {number} d Fourth Value
 * @return {number} Sum of Numbers
 * @example
 * const a = 20;
 * const b = 80;
 * const c = 1;
 * const d = 9;
 * const sum = addFourNumbers(a, b, c, d);
 * Expect sum to be 110
 * **/

function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

addFourNumbers(10, 20, 90, 100);

// Optional Parameters
//

// /**
//  * @param {dataType} [optionalParamName] optionalParamNameDescription
//  */

// Example 6.

/**
 * Multiply two numbers together
 * @param {number} a First Value
 * @param {number} [b] Second Value
 * @return {number} Multiplication of numbers
 * */

function multiplyNumbers(a, b = 10) {
    return a * b;
}

multiplyNumbers(1);

// Example 7.

/**
 * Adds two numbers
 * @typedef {(number|string)} NumberLike
 **/

function addTwoDigits(a, b) {
    return a + b;
}

addTwoDigits();


// Complex objects

// Example 8.

/**
 * @param {Object} userObject blaablaablaa
 * @param {string} userObject.name blaablaablaa
 * @param {string} userObject.role blaablaablaa
 * **/


function handleUserLogin({name, role}) {
    loginUserWithToken();
}

function loginUserWithToken() {

}

handleUserLogin({
    name: "hesham",
    role: "to be teacher"
})


const userLoginData = {
    name: "hesham",
    role: "to be teacher"
}
console.log(userLoginData)
console.log(userLoginData.name)

// node_modules/jsdoc/jsdoc.js js/script.js
