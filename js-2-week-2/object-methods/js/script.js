// Object

const person = {
    name: "Hesham",
    lastName: "El Masry",
    age: 30
}
// 1. Dot Notation
console.log(person.age);
console.log(person.lastName);

// Bracket Notation

console.log("Bracket Notation:", person["name"]);
console.log("Bracket Notation: ", person["lastName"]);
console.log("Bracket Notation", person["age"]);

//
const recipe = {
    "ingredient_0": "Egg",
    "ingredient_1": "Milk",
    "ingredient_2": "Flour",
}

for (let i = 0; i <= 2; i++) {
    console.log(recipe["ingredient_" + i]);
    // i = 0
    // recipe["ingredient_" + 0]
    // Egg

    // i = 1
    // recipe["ingredient_" + 1]
    // Milk

    // i = 2
    // recipe["ingredient_" + 2]
    // Flour
}


//
// const ingredient0 = recipe["ingredient_0"];
// console.log(ingredient0);
// const ingredient1 = recipe["ingredient_" + i];
// const ingredient2 = recipe.ingredient_.i;

// for...in loop

// Syntax

// for (const myKey in myObject) {
//     // We are looping through the keys of the object. To get the value you
//     //    need to use the key (myKey) as a way to reference the key/value pair.
//     console.log(myObject[myKey]);
// }

const user = {
    // key: name  // Value: Hesham
    name: "Hesham",
    lastName: "El Masry",
    age: 30
}

for (const theKey in user) {
    console.log(user[theKey]);
}

const carProfile = {
    make: "bmw",
    year: 2015,
    vinNumber: 343434
}

// use for in loop
// console log for me "key:" key and the "value"

// the make is bmw
// the year is 2015
// the vinNumber is 213123

for (const myKey in carProfile) {
    // console.log(myKey);
    // console.log(carProfile[myKey]);
    console.log("the " + myKey + " is " + carProfile[myKey])
}

// object methods

// Object.keys()

// syntax

const userProfile = {
    name: "mats",
    age: 26
}

const userProfileKeys = Object.keys(userProfile);
// ["name", "age"]
console.log(userProfileKeys);

// Object.values()

console.log(Object.values(userProfile));
// ["mats", 26]


// ["name", "mats"]
// [ "age", 26]

// Object.entries()

const userProfileEntriesArr = Object.entries(userProfile);


console.log("userProfileEntriesArr", userProfileEntriesArr);

