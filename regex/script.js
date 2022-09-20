// we want to write a function which checks if the input email is valid or not
// we need to use regular expression for that.

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}
// The match() method retrieves the result of matching a string against a regular expression

const validate = () => {
    // 1. select the result
    const result = $(".result");
    // 2. select the email and get the value of this email
    const email = $("#email").val();
    console.log(email);
    // 3. check if the email is valid
    // I want to add a text in the
    // select result and add a message inside "is valid email"
    if (validateEmail(email)) {
        console.log("here")
        result.text(email + " is valid");
        result.css("color", "green");
    } else {
        // if my email is not valid
        // I want to add a message it is not valid
        result.text(email + " is not valid");
        result.css("color", "red");
    }
    return false;
}

$("#email").on("input", validate);
