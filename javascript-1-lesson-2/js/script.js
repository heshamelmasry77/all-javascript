// We code it together

// 1. Select heading h2
// querySelector
// querySelectorAll
// getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2")
console.log(headingByClass);

// 3. Select element with id #list using querySelector

const list = document.querySelector("#list");
console.dir(list);


// 4. Select element with id #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);

// 5. Select single li
const listItem = document.querySelector("li");
console.log(listItem);


// 6.
//  a. Select Multiple li's

const listItems = document.querySelectorAll("li");
console.log(listItems);
//  b. Loop on the list items

for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].innerText);
}

// 7.
// a. select h1 element

const heading1 = document.querySelector("h1");
console.log(heading1);

// b. Change the color of that h1 to be purple
heading1.style.color = "red";
// c. Change the border to be 1px solid green

heading1.style.border = "5px solid green";
// d. Change background colour to be light gray

heading1.style.backgroundColor = "lightGray";

// e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )
heading1.style.padding = "1em";


// 1. I want to select a div element
const myDiv = document.querySelector("div");
// 2. See if it has any class name
console.dir(myDiv);
// 3. Add a class to this div element
myDiv.classList.add("container");
console.dir(myDiv);
// myDiv.className = "hesham";
console.log(myDiv.className);
// 4. See if it has a class name now
// 5. Add another class to the div
myDiv.classList.add("second-class");
// myDiv.className = "second-class";
console.dir(myDiv);
// So in total I have two class names on the div


// 1. select the h1 and change the innerText

const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Hesham";

// 2.loop through all the li element and change the innerText value to be changed

const allTheListItems = document.querySelectorAll("li");
for (let i = 0; i < allTheListItems.length; i++) {
    allTheListItems[i].innerText = "Changed " + allTheListItems[i].innerText;
}

// 3.change the innerHTML of the h1 to be updated using innerHTML

const pageHeading2 = document.querySelector("h1");
pageHeading2.innerHTML = "updated Hesham"

// 4. add some html to the div >> add <p><b>Bold text</b> not bold text</p>

const someContainer = document.querySelector("div");

someContainer.innerHTML = `<p>
                                <b>Bold text </b>not bold text
                           </p>`;


// 5. select the ul
const list3 = document.querySelector("ul");
//  b. get the existing HTML inside the ul element and assign it to a variable
const existingHTML = list3.innerHTML;
//  c. create the new li HTML
const newHTMLli = `<li>Hello I am a new item hamster</li>`
//  b. set the uls new HTML to the existing HTML plus the new HTML
list3.innerHTML = existingHTML + newHTMLli;
// list3.innerHTML += newHTMLli;



