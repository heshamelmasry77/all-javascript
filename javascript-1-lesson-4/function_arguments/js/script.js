// 1. create a function which console log a message for us.

//
// function showMessage() {
//     console.log("Hello Here");
// }
//
// // Call the function showMessage
//
// showMessage();


// 2. Accept variables or (argument or parameters)
//

function showMessage(message, messageTwo, anotherParam) {
    console.log(message);
    console.log(messageTwo);
    console.log(anotherParam)
}

showMessage("Hello World", "Hello Linda", "Hello Emil");

// create a function which calculate for us the sum of two numbers

function sum(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    console.log(result);
}

const myFirstNumber = 10;
const mySecondNumber = 20;
sum(myFirstNumber, mySecondNumber);
