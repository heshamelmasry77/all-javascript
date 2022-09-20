// 1. select the input and the BTN

const input = document.querySelector("input");
const button = document.querySelector("button");

// 2. track if the BTN is clicked

console.log(button);

button.onclick = function (e) { // Anonymous function
    e.preventDefault();

    console.log("BTN clicked");
    // Get the value if the input
    const age = input.value;
    console.log(age, "age");
    const isAgeOk = isOldEnough(age);
    console.log(isAgeOk);
    if (isAgeOk) {
        console.log("you are old enough to enter our website 😃");
        // redirect the uer to a success page or a welcome page.
        document.location.href = "welcome-page.html";
    } else {
        const errorBox = document.querySelector(".error-message");
        errorBox.innerHTML = "you are not old enough to enter our website 😛";
        console.log("you are not old enough to enter our website 😛");
    }
}

function isOldEnough(ageToCheck) {
    if (ageToCheck >= 13) {
        return true;
    }
    return false;
}