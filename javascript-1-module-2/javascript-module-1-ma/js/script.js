// Question 1:
//
// Create an object called cat.
//
// Give the object one property called complain.
// complain's value should be a method (a function)
// which logs the string "Meow!".

const cat = {
    complain: function () {
        console.log("Meow!");
    },
};

cat.complain();


//
// Question 2:
//
// Select the h3 from the HTML using the querySelector method and assign
// it to a variable called heading.
//
// Change its innerHTML value to "Updated heading".

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//
// Question 3:
//
// Use the style property on the heading variable from the
// question above to change its font size to "2em".
//

console.log(heading);
heading.style.fontSize = "2em";

//
// Question 4:
//
// Add a class to the heading variable called subheading.
//

heading.classList.add("subheading");

//
// Question 5:
//
// Write code that selects all the p elements on a page // querySelectorAll
// and assigns them to a variable called paragraphs.
//
// Loop through the p elements and change the colour of each to be "red".
//
//

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
//
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
    paragraphs[i].style.color = "red";
}


//
// Question 6:
//
// Select the div with a class of results, assign it to a
// variable called resultsContainer and set its inner HTML
// to be <p>New paragraph</p> and its background colour to be yellow.
//
//

const resultsContainer = document.querySelector(".results");

console.log(resultsContainer.style);

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";



//
// Question 7:

const cats = [
    {
        name: "Fariad",
        age: 10
    },
    {
        name: "Hesham",
    },
    {
        name: "Linda",
        age: 21
    }
];

//
// Create a function that has one parameter called list.
//
// Inside the function, loop through the list parameter and console log
// the name property in each object.
//
// Call the function and pass in the cats variable in the script.js file in the repo.

function getName(list) {
    for (let i = 0; i < list.length; i++) {  // 0 // 1 // 2
        console.log("The Cat Name is: " + list[i].name);
    }
}

getName(cats);


//
// Question 8:
//
// 1. Create a function called createCats. The function will have one parameter (argument) called cats.
//
// 2. Inside the function loop through the value passed in as cats DONE
// and
// 3. create HTML for each object in the array. DONE
//
// 4. Wrap each item in a div, DONE
// 5. each name property is in a h5 tag DONE
// and
// 6. each age property is in a p tag. DONE
//
// 7. If the age property is missing, it should display “Age unknown” instead. DONE
//
// 8. Return the HTML from the function. DONE
//
// 9. Call the function and pass in the cats array as the argument. Done
//
// 10. Assign the return value of the function to the
// innerHTML property of the element on the HTML page with
// a class of cat-container.


function createCats(cats) {
    let myCatItems = "";
    for (let i = 0; i < cats.length; i++) {
        myCatItems = myCatItems +
            `
        <div>
        <h5>${cats[i].name}</h5>
        <p>${cats[i].age ? cats[i].age : "Age unknown"}</p>
        </div>
        `;
    }
    return myCatItems
}

const myCats = createCats(cats);

console.log(myCats);

const myCatsContainer = document.querySelector(".cat-container");

myCatsContainer.innerHTML = myCats;
















