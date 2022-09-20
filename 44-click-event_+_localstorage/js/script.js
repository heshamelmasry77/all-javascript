const circle = document.querySelector(".circle");
const circleActionBtn = document.querySelector("#circleBTN");
const bgColor = localStorage.getItem("bgColor");

circle.style.backgroundColor = bgColor;

circleActionBtn.addEventListener("click", function () {
    localStorage.setItem("bgColor", "#f2c381");
    circle.style.backgroundColor = "#f2c381";
});