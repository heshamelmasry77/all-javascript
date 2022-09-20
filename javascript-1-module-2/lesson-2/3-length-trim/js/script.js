// play with the length and we will use trim() methods

const animal = ["dog", "cat", "hippo"];

console.log(animal.length);


for (let i = 0; i < animal.length; i++){
   // we can do whatever we want.
   console.log(animal[i]);
}


// trim()

const name = "   hello how are you     ";
console.log("before: ",name)
// trim()
const trimmedName = name.trim(); // will remove for you the spaces and show you a beautiful string

console.log("after:",trimmedName);




