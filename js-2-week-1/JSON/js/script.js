// JSON

// 1. JavaScript to JSON

// JSON.stringify()

// Example 1.

const userDetails = {
    name: "Uzo",
    id: 1234,
    isStudent: true,
    section: "Front-End Development"
}
console.log("userDetails JS format ",userDetails);

const userDataJSON = JSON.stringify(userDetails);

console.log("userDetails JSON format",userDataJSON);

// JSON.parse() Convert JSON Data to JS format

const userDataBackToJS = JSON.parse(userDataJSON);

console.log("userDataBackToJS: ",userDataBackToJS);


// Create a JSON data object and convert it to JS

const myObjectJSON = '{"name":"Hesham", "id":2324, "isStudent":false}';

const myObjectJS = JSON.parse(myObjectJSON);
console.log("myObjectJS: ",myObjectJS);
