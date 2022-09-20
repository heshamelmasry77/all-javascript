// get the name from the URL and then use it in the API URL
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("name")); // get me the value of the search query param
const pokemonName = params.get("name");
// MY END POINT
const APIUrl = `/wp-json/wc/store/products/${pokemonName}`;


// Select the Pokémon class container
const pokemonDetails = document.querySelector(".pokemon-details"); // ul with class pokemons
//
// async function kitchen(){
//
//     try{
// // Let's create a fake problem
//         await abc;
//     }
//
//     catch(error){
//         console.log("abc does not exist", error)
//     }
// }
//
// kitchen();  // run the code
//

async function getPokemonDetails() {
    try {
        const response = await fetch(APIUrl);
        // console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        console.log(responseJSON);
        const pokemonData = responseJSON;
        console.log('pokemonData: ', pokemonData);

    } catch (error) {
        console.log("Some error happened :(", error);
        pokemonDetails.innerHTML = `<li><span>sorry some error happened :(</span></li>`

    }
}

getPokemonDetails();

// advanced function

// query string: ?foo=lorem&bar=&baz
// var foo = getParameterByName('foo'); // "lorem"
// var bar = getParameterByName('bar'); // "" (present with empty value)
// var baz = getParameterByName('baz'); // "" (present with no value)
// var qux = getParameterByName('qux'); // null (absent)

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var foo = getParameterByName('name'); // "lorem"
console.log(foo);