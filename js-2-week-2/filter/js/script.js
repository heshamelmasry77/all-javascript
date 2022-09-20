// example 1

//
// const filteredNumbers = numbers.filter((number) => {
//     // return to me in the new array all the numbers which is greater than or equal 4
//     if (number >= 4) {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(filteredNumbers);
// [4, 55, 66]
const numbers = [2, 4, 55, 66];


const filteredNumbers = numbers.filter((number) => number >= 4);

console.log(filteredNumbers);


const values = [0, 23, 55, 66, 777, 100, 500, 250];
// write a function which filters for me the valeus which is greater than or equal 100
// please use the filter method

function filtergreaterEqual100(arr) {
    const filteredValues = arr.filter((item) => item >= 100)
    return filteredValues;
}

const myFilteredValues = filtergreaterEqual100(values);

console.log(myFilteredValues);


// example 3

const people = [
    {name: 'Kari', age: 28},
    {name: 'Astrid', age: 32},
    {name: 'Hans', age: 22},
    {name: 'Inger', age: 19},
    {name: 'Liv', age: 42},
    {name: 'Kristoffer', age: 12},
    {name: 'Anne', age: 12},
    {name: 'Martin', age: 17},
    {name: 'Joakim', age: 45},
    {name: 'Ellen', age: 7},
]
// please filter for me this array to ages >= 22
// please use the filter method
// const adults = people.filter((person) => {
//     if (person.age >= 22) {
//         return true;
//     }
// });

const adults = people.filter(({age}) => age >= 22);

console.log("adults: ", adults);


//
// In this example we have a list of games.
// We want to filter the games that have
// multiplayer and a rating of 8 or higher.

const games = [
    {title: 'Mayhem Fighter', isMultiplayer: true, rating: 8},
    {title: 'Build-a-farm', isMultiplayer: true, rating: 9},
    {title: 'Ghost Story', isMultiplayer: false, rating: 8},
    {title: 'Fast Car Racer', isMultiplayer: true, rating: 7},
    {title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8},
];

// isMultiplayer === true && rating >= 8
//
const filteredGames = games.filter(({isMultiplayer, rating}) => {
    // if ((isMultiplayer === true) && (rating >= 8)) {
    //     return true;
    // }
    return (isMultiplayer === true) && (rating >= 8);
});

// const filteredGames = games.filter(({isMultiplayer, rating}) => ((isMultiplayer === true) && (rating >= 8)));

console.log("filteredGames: ", filteredGames);






