import './style.css'

const toggleBTN = document.querySelector("#toggleBTN");
const twToggleBTN = document.querySelector("#twToggleBTN");
const twToggleBTNSpan1 = document.querySelector("#twToggleBTN__span-1");
const twToggleBTNSpan2 = document.querySelector("#twToggleBTN__span-2");
const themeLocalStorageVariable = localStorage.getItem("theme");

window.onload = function () {
    if (themeLocalStorageVariable && (themeLocalStorageVariable === "dark")) {
        document.querySelector("body").classList.add("bg-black")
        document.querySelector("body").classList.remove("bg-gray-400");

        // remove classes
        twToggleBTN.classList.remove("bg-gray-200");
        twToggleBTNSpan1.classList.remove("translate-x-0");
        let twToggleBTNSpan2ClassesNotEnabled = [
            "opacity-0",
            "ease-out",
            "duration-100",
        ];

        for (let i = 0; i < twToggleBTNSpan2ClassesNotEnabled.length; i++) {
            twToggleBTNSpan2.classList.toggle(twToggleBTNSpan2ClassesNotEnabled[i])
        }

        // adding classes

        twToggleBTN.classList.add("bg-indigo-600");
        twToggleBTNSpan1.classList.add("translate-x-5");
        let twToggleBTNSpan2ClassesEnabled = [
            "opacity-100",
            "ease-in",
            "duration-100",
        ]

        for (let i = 0; i < twToggleBTNSpan2ClassesEnabled.length; i++) {
            twToggleBTNSpan2.classList.toggle(twToggleBTNSpan2ClassesEnabled[i])
        }
    }
}


toggleBTN.onclick = function () {
    handleToggleBTN();
}

function handleToggleBTN() {
    if (themeLocalStorageVariable && (themeLocalStorageVariable === "dark")) {
        document.querySelector("body").classList.remove("bg-black");
        localStorage.removeItem("theme");
    } else {
        document.querySelector("body").classList.add("bg-black");
        localStorage.setItem("theme", "dark");
    }
}


twToggleBTN.onclick = function () {
    handleTwToggleBTN();
}

function handleTwToggleBTN() {
    twToggleBTN.classList.toggle("bg-gray-200");
    twToggleBTN.classList.toggle("bg-indigo-600");
    twToggleBTNSpan1.classList.toggle("translate-x-0");
    twToggleBTNSpan1.classList.toggle("translate-x-5");
    twToggleBTNSpan2.classList.toggle("translate-x-0");
    let twToggleBTNSpan2ClassesEnabled = [
        "opacity-0",
        "ease-out",
        "duration-100",
    ]

    let twToggleBTNSpan2ClassesNotEnabled = [
        "opacity-100",
        "ease-in",
        "duration-100",
    ]

    for (let i = 0; i < twToggleBTNSpan2ClassesEnabled.length; i++) {
        twToggleBTNSpan2.classList.toggle(twToggleBTNSpan2ClassesEnabled[i])
    }

    for (let i = 0; i < twToggleBTNSpan2ClassesNotEnabled.length; i++) {
        twToggleBTNSpan2.classList.toggle(twToggleBTNSpan2ClassesNotEnabled[i])
    }


    if (localStorage.getItem("theme") && (localStorage.getItem("theme") === "dark")) {
        document.querySelector("body").classList.remove("bg-black");
        document.querySelector("body").classList.add("bg-gray-400");
        localStorage.removeItem("theme");
    } else {
        document.querySelector("body").classList.add("bg-black");
        document.querySelector("body").classList.remove("bg-gray-400");
        localStorage.setItem("theme", "dark");
    }
}
