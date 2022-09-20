// The setInterval method is similar to
// setTimeout but it executes a function at
// a certain interval until it is cleared.
//
// setInterval(function () {
//     console.log("Hello i am here at Noroff");
// }, 2000);


let count = 0;
const intervalId = setInterval(function () {
    console.log("here");
    count = count + 1; //increment
    console.log(count);
    if (count === 5) {
        console.log("Interval Finished!");
        clearInterval(intervalId);
    }

}, 1000);

// won't work


// Example Question

// I want to add li to the ul with class
// .container li with values from 1 to 10 every 2 seconds

const container = document.querySelector(".container");
let counter = 0;
const setIntervalId = setInterval(function () {
    counter = counter + 1;
    const listItem = document.createElement("li");
    listItem.innerHTML = "<span>hesham: </span>" + counter;
    container.append(listItem);

    container.innerHTML += `<li>${counter} <span>hesham ilona</span></li>`;

    if (counter === 10) {
        clearInterval(setIntervalId);
    }
}, 1000);


// 4. you need to put the time you want this interval to keep running
// 5. do the increment
// 6. Create the li
// 7. add to the innerHTML of this li the count.
// 8. use append  use apend to add the li to the ul

// OR >> container.innerHTML += `<li>${countSecond}</li>`;

// 9.  YOU NEED TO assign the setInterval to a variable
// 10.  you need to check if the count is > than 10 then you clear
// the interval

