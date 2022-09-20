// find()
//
// const newArray = arr.find((element, index, array) => {
//     // Return true if you find the element you want
//     // Return false if you haven't found the element you want
// });


// find the element with value of 5

const values = [1, 2, 4, 5, 6, 7, 88, 100, 3];

const foundValue = values.find((currentValue) => {
// condition
    if (currentValue === 5) {
        return true;
    }
});

console.log("foundValue", foundValue);


// example 2

// given an array of temperatures, find the first temperature above 120 fahrenheit

const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const foundTemperature = temperatures.find((temperature) => temperature > 120);
console.log("foundTemperature: ", foundTemperature);

const user = {
    name: "hesham",
    age: 30
};

console.log(user.name);
console.log(user.age);

const users = [
    { // 0
        name: "hesham",
        age: 30
    },
    { // 1
        name: "Uzo",
        age: 30
    },
    { // 2
        name: "mats",
        age: 30
    }
];
console.log(users);

console.log(users[1]);
console.log("original data", users[1].name);
console.log("refactored data", users[1].name.toLowerCase());
console.log(users[1].age);

const profiles = [
    {
        name: "Uzo",
        id: 234234
    },
    { // ["H","e","s","h"]
        name: "Hesh",
        id: 78787
    },
    {
        name: "Emil",
        id: 777763
    },
    {
        name: "Clark",
        id: 673254782365472
    }
];

// in the given array of profiles, Please find the first name that starts with the letter h

// const newArray = arr.find((element, index, array) => {
//     // Return true if you find the element you want
//     // Return false if you haven't found the element you want
// });

const foundProfile = profiles.find((profile) => {
// condition is : first name that starts with the letter h
    if (profile.name[0].toLowerCase() === "h") {
        return true
    }
});

console.log(foundProfile);


const books = [
    {title: 'Building a Spaceship', inStock: false},
    {title: 'Growing Orchids', inStock: false},
    {title: 'River Fisher', inStock: true}
]


const foundBook = books.find((book) => {
    if (book.inStock === true) {
        return true;
    }
});

// "foundBook" will be "undefined" there are books
// found by the find() array method

// console.log(foundBook);

if (foundBook === undefined) {
    console.log("no books in stock!");
} else {
    console.log("First book in stock:", foundBook.title);
}


// const newArray = arr.find((element, index, array) => {
//     // Return true if you find the element you want
//     // Return false if you haven't found the element you want
// });


