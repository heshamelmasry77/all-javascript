const randomUserUrl = "https://randomuser.me/api/";
const wrapperDiv = document.querySelector(".wrapper");

fetch(randomUserUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        const results = jsonData.results;
        for (let i = 0; i < results.length; i++) {
            const firstName = results[i].name.first;
            const lastName = results[i].name.last;
            const personImg = results[i].picture.large;
            wrapperDiv.innerHTML += `
            <h1>${firstName} ${lastName}</h1>
            <img
             src="${personImg}"
             title="the name of the peson is ${firstName}"
             alt="the name of the peson is ${firstName}"
             />
            `
        }
    })
    .catch(function (error) {
        console.log(error)
    })