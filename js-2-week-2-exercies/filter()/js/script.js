// The .filter array method loops through the array and
// filters out items which are then returned as a new array.


// If you return true for an element, it is kept in the
// new array, otherwise returning
// false will remove it from that new array.
//

// The filter array method being able to exclude
// items from the returning array makes it ideal for
// removing items from a list,
//
// however this is
// not the only use case.

//
// Syntax

// Note: The .filter array method does not
// modify the original array and instead returns a new array.

const values = [100, 200, 300, 400, 500]; // array of numbers

const newArray = values.filter((element, index, array) => {
    // Return true if you want to keep the item in the array being returned

    // Return false if you don't want the item to be included in the array being returned
});
//
// Parameters

// element: The current element in
// the array that we are working with


// index: (Optional) The current index of where we are in the array
//


// array: (Optional) The original array filter was called on
//

//
// Implicit false return

// The filter method has an implicit false return
// meaning that it will always be returning false
// if you haven’t returned a value.
// This means that in most cases you usually
// only have to check for true conditions.
//


// Example 2:

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((number) => {
    if (number >= 3) {
        return true;
    } else {
        return false;
    }
});
console.log(filteredNumbers);

// Returns:
// [3, 4, 5]

// This always evaluates to either true or false
// if (number >= 3) {


// Our .filter method relies on the value being
// a boolean (either true or false),

// Example 3:

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((number) => number >= 3);
console.log(filteredNumbers);
// Returns:
// [3, 4, 5]

//
// Example 1: Filter numbers above 100
//
// In this example, we have a list of numbers.
// If a number is equal to or above 100 then we keep it
// in our new array that gets returned.


const numbers = [0, 25, 50, 75, 100, 125, 150, 175, 200];
const filteredNumbers = numbers.filter((number) => {
    if (number >= 100) {
        // If the number is equal to or above 100 then we return true
        // This will keep this element in the new array
        return true;
    } else {
        // If we return false then the item will not be included in the new array
        return false;
    }
});
console.log(filteredNumbers);
// Returns:
// [100, 125, 150, 175, 200]



// refactor

const numbers = [0, 25, 50, 75, 100, 125, 150, 175, 200];
const filteredNumbers = numbers.filter((number) => number >= 100);
console.log(filteredNumbers);
// Returns:
// [100, 125, 150, 175, 200]


// Example 2: Filter ages >= 18


const people = [
    { name: 'Kari', age: 28 },
    { name: 'Astrid', age: 32 },
    { name: 'Hans', age: 22 },
    { name: 'Inger', age: 19 },
    { name: 'Liv', age: 42 },
    { name: 'Kristoffer', age: 12 },
    { name: 'Anne', age: 12 },
    { name: 'Martin', age: 17 },
    { name: 'Joakim', age: 45 },
    { name: 'Ellen', age: 7 },
];

const adults = people.filter((person) => {
    if (person.age >= 18) {
        return true;
    }
});

console.log(adults);
// Returns:
// [
//   {name: 'Kari', age: 28},
//   {name: 'Astrid', age: 32},
//   {name: 'Hans', age: 22},
//   {name: 'Inger', age: 19},
//   {name: 'Liv', age: 42},
//   {name: 'Joakim', age: 45}
// ]

// refactor

const people = [
    { name: 'Kari', age: 28 },
    { name: 'Astrid', age: 32 },
    { name: 'Hans', age: 22 },
    { name: 'Inger', age: 19 },
    { name: 'Liv', age: 42 },
    { name: 'Kristoffer', age: 12 },
    { name: 'Anne', age: 12 },
    { name: 'Martin', age: 17 },
    { name: 'Joakim', age: 45 },
    { name: 'Ellen', age: 7 },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults);
// Returns:
// [
//   {name: 'Kari', age: 28},
//   {name: 'Astrid', age: 32},
//   {name: 'Hans', age: 22},
//   {name: 'Inger', age: 19},
//   {name: 'Liv', age: 42},
//   {name: 'Joakim', age: 45}
// ]

//
// In this example we have a list of games.
//     We want to filter the games that have
// multiplayer and a rating of 8 or higher.


const games = [
    { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
    { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
    { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
    { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
    { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

const filteredGames = games.filter((game) => {
    if (game.isMultiplayer === true && game.rating >= 8) {
        return true;
    }
});

console.log(filteredGames);
// Returns:
// [
//   {
//     name: 'Mayhem Fighter',
//     isMultiplayer: true,
//     rating: 8,
//   },
//   {
//     name: 'Build-a-farm',
//     isMultiplayer: true,
//     rating: 9,
//   },
// ];

// refactor


const games = [
    { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
    { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
    { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
    { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
    { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

const filteredGames = games.filter(
    (game) => game.isMultiplayer && game.rating >= 8,
);

console.log(filteredGames);
// Returns:
// [
//   {
//     name: 'Mayhem Fighter',
//     isMultiplayer: true,
//     rating: 8,
//   },
//   {
//     name: 'Build-a-farm',
//     isMultiplayer: true,
//     rating: 9,
//   },
// ];


