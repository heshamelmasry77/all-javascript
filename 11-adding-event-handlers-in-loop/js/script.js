// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
//
// one.onclick = function () {
//     console.log("i clicked one");
// }
// two.onclick = function () {
//     console.log("i clicked two");
// }
// three.onclick = function () {
//     console.log("i clicked three");
// }

const myDivs = document.querySelectorAll(".container > div");
// console.log(myDivs);

for (let i = 0; i < myDivs.length; i++) {
    // console.log(myDivs[i].dataset.price);
    // onclick
    myDivs[i].onclick = function (event) {
        console.log("Price: " + event.target.dataset.price);
        console.log(this.dataset.price);
    }
}




