// The setTimeout method is used to execute a
// function after a specified period of time.

setTimeout(function () {
    console.log("hello i am Hesham");
}, 5000);


// 1. select the class .loader

const loading = document.querySelector(".loader");
// 2. use setTimeout
setTimeout(function (){
    loading.innerHTML = "Finished downloading!";
}, 5000);
// 3. Change the inner html of the loading