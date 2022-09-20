// // These are often called callbacks. It is very common
// // to pass functions as arguments to other ***
// // functions and have the receiving function execute them.
//
//
// // Normal way of creating a function
//
//
// // 1. create two functions one is normal function
// // and the other is a
// // function which calls itself
// function showMeMessage() {
//     console.log("Hello one");
// }
//
// showMeMessage(); // this will work
//
//
// //
// (function doSomething() {
//     console.log("hello two")
// })();
//
//
//
//
// // 2. HOISTING
//
// // a. Call a function then create it
// //
// showMeMessage(); // this will work
//
// function showMeMessage() {
//     console.log("Hello one");
// }
//
//
//
// // b. call an Anonymous function then you create it
//
// doSomething();  // Error this doesn't work
//
// const doSomething = function() {
//     // do some stuff
//     console.log("hello i am Anonymous function")
// }
//
//
//
//
// function logTheArgument(someFunction) {
//     console.log(someFunction);
// }
//
// logTheArgument(function () {
//     console.log("hesham");
// })
//
//
// function logTheType(someArgument) { // has one parameter
//     console.log(typeof someArgument);
// }
//
// logTheType("Hesham");// String
// logTheType(989898); // Number
//
//
// const obj = {};
//
// logTheType(obj); // object
//
//
// const someArray = [];
//
// logTheType(someArray); // Object
//
//
// function justSomeFunction() {
//     console.log("Hello i am a happy function");
// }
//
// logTheType(justSomeFunction); // function
//
//
// const justAHappyFunction = function (){
//     console.log("Hello i am a happy function 2")
// }
//
// logTheType(justAHappyFunction); // function
//
//
//
//
//
//
//
//
//
//
//
//
//
//
