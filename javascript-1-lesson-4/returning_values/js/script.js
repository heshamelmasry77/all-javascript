// 1. return values from a function

function multi(number1, number2) {
    const result = number1 * number2;
    return result;
}

const myOutput = multi(5, 2);

console.log('myOutput: ', myOutput)


// Create a function and call it calculateTheCommission
// This function takes an argument called amount
// It takes a percentage of 40
// Return commission
// Use this function to calculate the amount 2000
// Use a variable to assign the function to it and console this result
// Note: commission = amount * (percentage/ 100);

function calculateTheCommission(amount) {
// start from here
    const percentage = 40;
    const commission = amount * (percentage / 100);
    return commission + " NOK"
}

const myCalculatedCommission = calculateTheCommission(2000);
console.log('myCalculatedCommission: ', myCalculatedCommission);


// 3. function to check the password
// create a function call it checkPassword
// this function takes a string password
// if this the string is less than 10 then return false
// else return true


function checkPassword(passwordToCheck) {
    const numberOfChars = passwordToCheck.length;
    if (numberOfChars >= 10) { // false
        return true;
    }
    return false;
}

const isPasswordValid = checkPassword("Hesham El Masry");

console.log("isPasswordValid: ",isPasswordValid)


