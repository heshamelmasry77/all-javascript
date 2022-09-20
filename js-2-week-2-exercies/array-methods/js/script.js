// Array Methods

//
// Introduction

// Array methods are a very important part of JavaScript.
// They are built-in methods usable only on Arrays,
// meaning that these methods will not work on any
// other data types unless we convert them to an array.
// Array methods allow us to significantly reduce the complexity of our code.


// There are some important things to
// be aware of when it comes to array methods:

// A new array is returned



// Original array
const arrayValues = [5, 7, 9, 14];

// New array called 'newArray' that contains the result from the `.map` method
const newArray = arrayValues.map(/* code here */);


// Callback functions
//
// Each time our Array Methods loop, it runs a callback function.
//
// This callback function can either be:
//
// 1.An anonymous function (more commonly used);
// 2.A separate named function.


// We usually use an anonymous function (point 1 above) however in
// some cases you might want to have a separate callback function. Such cases might be
//

// 1. Anonymous function (more commonly used)



// function keyword:


const values = [100, 200, 300, 400, 500];

const newArray = values.map(function (element, index, array) {
    // Modify and return element here
});


// Arrow function:

const values = [100, 200, 300, 400, 500];

const newArray = values.map((element, index, array) => {
    // Modify and return element here
});



// 2. Separate callback function
//
// This is a separate callback function (callbackFn).
// Note how logic for the Array Method is handled in its own function.


const values = [100, 200, 300, 400, 500];

function callbackFn(element, index, array) {
    // Modify and return element here
}

const newArray = values.map(callbackFn);