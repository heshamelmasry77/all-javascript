// 1. create a folder and call it CORS
// 2. create another folder inside and call it JS
// 3. create a script file .js empty file
// 4. create an empty Handler's folder
// 5. add alert.js script empty file.
// 6. create your index.html
// 7. make sure you have the scripts linked in your index.html


// Example
// Select my container
const resultsContainer = document.querySelector(".results");

const URL = "https://elephant-api.herokuapp.com/elephants";
// My Proxy server
const proxy = "https://noroffcors.herokuapp.com/";

const corsFixUrl = proxy + URL;

async function makeApiCall() {
    try {
        const response = await fetch(corsFixUrl);
        // convert the response to be JSON data
        const elephantsData = await response.json();
        console.log(elephantsData);
        resultsContainer.innerHTML = alert("success", "Hey your API call i successful");

    } catch (e) {
        console.log(e);
        resultsContainer.innerHTML = alert("error", e);
    }
}

makeApiCall().then();
