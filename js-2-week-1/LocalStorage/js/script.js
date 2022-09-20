//

console.log("here");

// How to set a local storage variable

localStorage.setItem("name","Hesh");

// how to get local storage data

// retrieve data

// getItem

const firstName = localStorage.getItem('name');

console.log(firstName);

// remove local storage item // removeItem

localStorage.removeItem('name');


// 3 item local storage

localStorage.setItem("name","Hesh");
localStorage.setItem("age","31");
localStorage.setItem("city","cairo");

const dataArr = '[{"name":"Hesham", "id":2324, "isStudent":false}, {"name":"salma", "id":232334, "isStudent":false}]'

localStorage.setItem("users",dataArr);
localStorage.clear();

let dataArrNew =  localStorage.getItem("users");

console.log("dataArrNew", dataArrNew);
console.log("dataArrNew", JSON.parse(dataArrNew));



// Create a project
// Add tailwindCSS
// Create a BTN which toggle between light and
// dark theme
// if you click on the btn it will make
// the bg of the body dark and if you click
// again it will make it light gray








