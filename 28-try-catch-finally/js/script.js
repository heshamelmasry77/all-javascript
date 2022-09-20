// kitchen()  // run the code
//     .then()    // next step
//     .then()    // next step
//     .catch()   // error caught here
//     .finally() // end of the promise [optional]
//
//
// // Async / Await in JS -> try, catch
// // When we're using async/await, we use this format:
//
// //👇 Magical keyword
// async function kitchen() {
//
//     try {
// // Let's create a fake problem
//         await abc;
//     } catch (error) {
//         console.log("abc does not exist", error)
//     } finally {
//         console.log("Runs code anyways")
//     }
// }
//
// kitchen()  // run the code


function getSomething() {
    console.log('hello i am RESPONSE from the API');
}

const result = document.querySelector(".result");

try {
    getSomething();
    result.innerHTML = "SUCCESS!";
} catch (error) {
    console.log("abc does not exist", error);
    result.innerHTML = "Nah there is an Error!";
} finally {
    console.log("Runs code anyways");
}






