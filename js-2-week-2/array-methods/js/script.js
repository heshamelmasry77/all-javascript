
// Original array
// const arrayValues = [5, 7, 9, 14];

// New array called 'newArray' that contains the
// result from the `.map` method
// const newArray = arrayValues.map(/* code here */);


// callback functions

// 1. anonymous function (mostly used one)
// 2.separate named function.



// 1. anonymous function (mostly used one)

// function keyword


const values = [100, 200, 400, 600];

const newValues = values.map(function (element, index, array){
    // modify and return element
    return array
});

console.log(newValues);

// arrow function

const newValues = values.map((element, index, array) => {
    // modify and return element
    return array
});

// 2. separate callback function


const values = [100, 200, 400, 600];

function callbackFn(element, index, array){
    // modify and return element here
}

const newValues = values.map(callbackFn);



