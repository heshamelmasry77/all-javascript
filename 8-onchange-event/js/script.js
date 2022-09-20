// onchange event

// detect the selection of the select option input

const dropdown = document.querySelector("select");
const circlesContainer = document.querySelector("ul");
//select the div with circle class

// 2. use onchange

dropdown.onchange = function (event) {
    console.log("here");
    console.log(event);
    console.log("using event target value", event.target.value);
    console.log("using this ", this.value);
    // circleContainer.innerHTML = this.value;
    // circleContainer.innerHTML = event.target.value; // 5// 10
    circlesContainer.innerHTML = "";
    for(let i = 1; i <= event.target.value; i++){
        console.log(i);
        circlesContainer.innerHTML += `<li>${i}</li>`;
    }
}
//
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }










