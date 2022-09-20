// select nav

const nav = document.querySelector("nav");

// yaaaay

function handleScroll() {
// console.log(window);
// want to add the class scrolled when i scroll 50px or
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

// console.log(window);
// window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);


