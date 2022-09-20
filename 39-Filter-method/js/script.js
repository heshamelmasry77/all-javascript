// Filter method

// If you want to filter the data displayed to a user,
// you can use the filter method.
// The filter method is used to create a new array from an existing
// array that the filter method is called on.
//


// The filter method takes a function as an argument. This function receives each item in the array as an argument.
// If the function returns true, the item is added to the new array.


// Example 1

const numbers = [1, 3, 5, 7, 8, 10, 13];

console.log('before: ', numbers); // [1, 3, 5, 7, 8, 10, 13]
const filteredNumbers = numbers.filter(filterNumbers);

function filterNumbers(number) {
    if (number > 5) {
        return true;
    }
}

console.log('After: ', filteredNumbers); // [7, 8, 10, 13];


// Example 2
// get even numbers

const filteredNumbersTwo = numbers.filter((number) => {
    if (number % 2 === 0) {
        return true;
    }
});

//
// function filterNumbersTwo(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
// }

// 8 / 2 = 4 0
// 5 /2 = 2.5 / 2 .5 .5

console.log('filteredNumbersTwo: ', filteredNumbersTwo);