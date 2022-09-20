// chaining
//
// const products = [
//     {name: 'dress', price: 600},
//     {name: 'cream', price: 60},
//     {name: 'book', price: 200},
//     {name: 'bottle', price: 50},
//     {name: 'bedsheet', price: 350}
// ];
// const productsOnSale = products
//     .filter(({price}) => price > 100)
//     .map(({name, price}) => {
//         return `the ${name} new price is now ${price / 2} NOK`;
//     });
//
// console.log(productsOnSale);
//
// // example 2
//
//
// const inventoryProducts = [
//     {name: 'Milk', price: 5.0, inStock: true},
//     {name: 'Cheese', price: 10.0, inStock: true},
//     {name: 'Bread', price: 8.0, inStock: false},
//     {name: 'Beans', price: 3.0, inStock: true},
//     {name: 'Eggs', price: 12.0, inStock: true},
//     {name: 'Rice', price: 4.0, inStock: false},
//     {name: 'Meat', price: 25, inStock: true},
//     {name: 'Coffee', price: 12.0, inStock: true},
//     {name: 'Tea', price: 8.0, inStock: false},
//     {name: 'Bottled Water', price: 4.0, inStock: false},
// ];
//
// // In this example, we have a list of products that
// // we want to apply a discount to it for a sale, but only products where:
//
// // 1. the price is 5 or higher (>= 5)
// // 2. the products are in stock (inStock === true)
//
// // use the map method to calculate a new property called discountedPrice
// // to calculate the discount = price * 0.8 example : 5 x 0.8 = 4
// // discount percentage will be 20
//
// // {name: 'Milk', price: 5, inStock: true, discountedPrice: 4}
//
//
// const discountedInventoryProducts = inventoryProducts
//     .filter(({price, inStock}) => price >= 5 && (inStock === true)) // true
//     .map((product) => {
//         // price * 0.8
//         product.discountedPrice = product.price * 0.8;
//         return product;
//     })
//
// console.log("discountedInventoryProducts", discountedInventoryProducts);
//

// example from moodle

const students = [
    {name: 'Victoria', age: 19, isOnline: true, results: [80, 61, 66, 50, 91]},
    {name: 'Theo', age: 32, isOnline: false, results: [57, 99, 96, 72, 96]},
    {name: 'Markus', age: 54, isOnline: true, results: [50, 92, 70, 66, 90]},
    {name: 'Aksel', age: 21, isOnline: true, results: [77, 86, 70, 71, 75]},
    {name: 'Felix', age: 29, isOnline: false, results: [99, 76, 59, 74, 68]},
    {name: 'Benjamin', age: 48, isOnline: true, results: [65, 85, 74, 83, 54]},
    {name: 'Ulrik', age: 39, isOnline: true, results: [92, 72, 55, 69, 58]},
    {name: 'Alma', age: 28, isOnline: false, results: [92, 91, 66, 77, 71]},
    {name: 'July', age: 37, isOnline: true, results: [78, 70, 59, 76, 95]},
    {name: 'Leo', age: 42, isOnline: true, results: [55, 64, 88, 88, 95]},
];

//
// They must be 30 years of age or older (>= 30)
// They must be an online student (isOnline === true)
//
// const filteredStudents = students.filter((student) => {
//     if (student.age >= 30 && (student.isOnline === true)) {
//         return true;
//     }
//     // Return true if you want to keep the item in the array being returned
//     // Return false if you don't want the item to be included in the array being returned
// });
//
// const totalClassAverage = filteredStudents.reduce((classAverage, student, index, studentArray) => {
//     // reduce all the students results to a single average
//     const studentsTotalMarks = student.results.reduce((studentAverage, result, index, resultsArray) => {
//         studentAverage += result / resultsArray.length;
//         return studentAverage;
//     }, 0)
//     return classAverage += studentsTotalMarks / studentArray.length
// }, 0);
//
//

const totalClassAverage = students
    .filter((student) => student.age >= 30 && (student.isOnline === true))
    .reduce((classAverage, student, index, studentArray) => {
    // reduce all the students results to a single average
    const studentsTotalMarks = student.results.reduce((studentAverage, result, index, resultsArray) => {
        studentAverage += result / resultsArray.length;
        return studentAverage;
    }, 0)
    return classAverage += studentsTotalMarks / studentArray.length
}, 0);

console.log(totalClassAverage);



