// Filter method Example

// Example 1 Filter Method with Static Data

// 1. I want to import the data array to use it

import teams from "./data/teams.js";

console.log(teams);

// 2. select the team-container class
// 3. select the search class

const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");
// 4. assign the teams to data to a variable

let teamsToRender = teams;

// 5. loop on the teams array and inject data to the DOM teamContainer

function renderTeams(someArr) {
    // clear the teamContainer
    teamContainer.innerHTML = "";
    for (let j = 0; j < someArr.length; j++) {
        console.log(someArr[j]);
        teamContainer.innerHTML += `<div class="team"><h3>${someArr[j].full_name}</h3></div>`
    }
}

renderTeams(teamsToRender);


// 6. wrap this for loop in a function, then we use it.

// 7. I want to detect that I wrote something ( text ) inside the input

search.onkeyup = function (event) {
    console.log(event);
    // 8. get the search value or the search keyword the user entered
    console.log(event.target.value);
    const searchValue = event.target.value.trim().toLowerCase();
    console.log('searchValue', searchValue);
    // {
    //     id: 1,
    //     abbreviation: "ATL",
    //     city: "Atlanta",
    //     conference: "East",
    //     division: "Southeast",
    //     full_name: "Atlanta Hawks",
    //     name: "Hawks"
    // },
    //

    const filteredTeams = teamsToRender.filter(function (team) {
        // check if any of the full_name property starts with the searchValue input
        if (team.full_name.toLowerCase().startsWith(searchValue)) {
            return true;
        }
    });
    console.log(filteredTeams);
    // assign the new filtered array to the old array
    // teamsToRender = filteredTeams;
    console.log('teamsToRender', filteredTeams);
    renderTeams(filteredTeams);
}