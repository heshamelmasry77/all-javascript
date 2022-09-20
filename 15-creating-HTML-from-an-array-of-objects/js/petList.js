const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class

const container = document.querySelector(".pet-container");

// Create a html variable to hold our htm in it when we use the loop

let myHTML = "";
// Loop over the array
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
    let theType = "";

    // if(pets[i].type !== null){ // If I have it then assign it to my variable theType
    if (pets[i].type) {
        theType = pets[i].type;
    } else {
        theType = "Unknown Type"
    }

    myHTML = myHTML + `
     <div>
        <h4>The Type: ${theType}</h4>
        <p>The Age: ${pets[i].age}</p>
        <p>Is this pet friendly: ${pets[i].friendly ? "yes it is friendly" : "no it is not friendly"}</p>
    </div>
    `;
    console.log(myHTML);
}

container.innerHTML = myHTML;
// change the innerHTML
