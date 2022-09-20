// 1. Select the input with id firstName

const firstName = document.querySelector("#firstName");
const errorContainerMessage = document.querySelector(".error__message");
const errorContainerSVG = document.getElementById("error-icon");

// 2. Add an event to the input >>> keyup onkeyup
firstName.addEventListener("keyup", logLengthMsg);

// 3. get the length of the input

function logLengthMsg(event) {
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;
    if (valueLength > 0) {
        errorContainerMessage.innerHTML = "The input has a value";
        errorContainerSVG.style.display = "block";
    } else {
        errorContainerMessage.innerHTML = "The input doesn't have a value";
        errorContainerSVG.style.display = "block";
    }
}

// 4. make a condition
// if the length is > 0
// show a message "the input has a value"
// else
// show a message "the input doesn't have a value"