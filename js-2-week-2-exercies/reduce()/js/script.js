// reduce()
//
// Reduce
//     [The .reduce() array method works a bit
// differently to the other array methods.

//     It is a bit more complex than the other methods,
//     however with some imagination it allows
// one to perform very complex operations with very little code.

//
// Usually the array methods return a
// new array, however in the reduce array method
// there is only a single variable that is returned.
//
//


// In short, the reduce array method has a variable
// that we have the option of modifying each loop.

//  You are reducing your values from the original
// array down to a single value, hence the name reduce.


// Let’s have a look at a basic
//
// example before diving in a bit deeper:


// Numbers that we will loop through
const values = [2, 3, 5, 10, 20];


const sum = values.reduce((total, value) => {
    // Add our current element from the array to our 'total' accumulator
    total += value;
    // We have to return our 'total' accumulator
    return total;

    // You can see we are setting an initial value of 0 after the callback function
}, 0);

console.log(sum);

//
// Syntax

// Note: The reduce array
// method does not modify the original array.
// It returns a single value, however
//
// this value can be an array or an object.
//

//
// The Callback Function
// This is the function that runs each time the array method loops, and gives you access to the following arguments:
//
//     previousValue: This is the value that is passed from the previous loop, allowing you to build onto it each iteration of the loop
//
// currentElement: This is the current element from the array that you are working with
//
//     index: (Optional) The current index of where we are in the array
//
// array: (Optional) The original array reduce was called on
//


const someNumbers = [100, 200, 300, 400, 500];

const endResult = someNumbers.reduce(
    (previousValue, currentElement, index, array) => {
        return previousValue;
    },
);


// Adding these values together should give us a result of 40
const valuesTwo = [
    { nestedValue: 10 },
    { nestedValue: 10 },
    { nestedValue: 10 },
    { nestedValue: 10 },
];

const sumOfValues = valuesTwo.reduce((total, currentObject) => {
    // Add the 'nestedValue' property from the current object in the array
    total += currentObject.nestedValue;
    return total;
}, 0);

// We do not get our expected answer of 40
console.log(sumOfValues);
// returns:
// [object Object]101010


// Sum of these values is 25 (5 + 5 + 5 + 10)
const values = [5, 5, 5, 10];

const sumOfValues = values.reduce((total, value) => {
    // Add the current value to our total
    total += value;
    // Return the total
    return total;
});

console.log(sumOfValues);
// Returns:
// 25


// Practical Example 2: Get the total cost of all products
//

// In this example we have a list of product objects
// which each contain a title and a price.
// We add all of the product prices
// so that we can get a total for all of our products.


const products = [
    { title: 'Cheese', price: 15.0 },
    { title: 'Milk', price: 8.99 },
    { title: 'Bread', price: 22.0 },
    { title: 'Egg', price: 5 },
];

const totalCost = products.reduce((total, currentProduct) => {
    total += currentProduct.price;
    return total;
    // Setting the initial 'total' to 0
}, 0);

console.log(totalCost);
// Returns:
// 50.99

//
// Practical Example 3: Get the total cost of in-stock products
// In this example we add the
// prices of a list of products like the previous example,
// however this time we need to check that the product is in stock.
// We also have a quantity for each product being purchased
// so we need to calculate this as well.


// All of the in-stock products added together equals 170.95
const products = [
    { title: 'Cheese', inStock: false, quantity: 2, price: 15.0 },
    { title: 'Milk', inStock: true, quantity: 5, price: 8.99 },
    { title: 'Bread', inStock: true, quantity: 3, price: 22.0 },
    { title: 'Egg', inStock: true, quantity: 12, price: 5 },
];

const totalCost = products.reduce((total, currentProduct) => {
    if (currentProduct.inStock === true) {
        total += currentProduct.price * currentProduct.quantity;
    }
    return total;
}, 0);

console.log(totalCost);
// Returns:
// 170.95

// Refactored

// All of the in-stock products added together equals 170.95
const products = [
    { title: 'Cheese', inStock: false, quantity: 2, price: 15.0 },
    { title: 'Milk', inStock: true, quantity: 5, price: 8.99 },
    { title: 'Bread', inStock: true, quantity: 3, price: 22.0 },
    { title: 'Egg', inStock: true, quantity: 12, price: 5 },
];

const totalCost = products.reduce(
    (total, currentProduct) =>
        inStock ? (total += currentProduct.price * currentProduct.quantity) : total,
    0,
);

console.log(totalCost);
// Returns:
// 170.95