//  I want a function which takes some message/
// and it returns an html tag with this message in it.

function displayError(message = "some error happened :(") {
    return `<div class="error">${message}</div>`;
}