// Reduce

const values = [2, 3, 4, 6, 7];

// we want to use reduce array method to calculate the sum
// of the items in the array values


const sum = values.reduce((total, item) => {

    //0 = 0 + 2
    // total is 2

    // total  = 2  + 3
    // total is 5

    // total = 5 + 4
    // 9
    /// total is 9

    // total = 9 + 6

    total += item;
    return total
}, 10);
console.log("sum: ", sum);


const garages = [
    {make: "bmw", cars: 10},
    {make: "tesla", cars: 20},
    {make: "opel", cars: 40},
    {make: "volkswagen", cars: 1},
];

// calculate the total number of cars in all the garages
// please use reduce array method to get the total number of cars
// Please bear in mind that I have 50 cars away in maintenance right now


const totalNumberOfCars = garages.reduce((total, {cars}) => {
    total += cars;
    return total;
}, 50);

console.log("totalNumberOfCars", totalNumberOfCars);


const products = [
    {
        title: "pudding",
        isInStock: true,
        quantity: 10,
        price: 20,
        currency: "NOK"
    }, {
        title: "cheese",
        isInStock: false,
        quantity: 0,
        price: 200,
        currency: "NOK"
    }, {
        title: "milk",
        isInStock: true,
        quantity: 20,
        price: 100,
        currency: "NOK"
    }, {
        title: "eggs",
        isInStock: true,
        quantity: 1000,
        price: 10,
        currency: "NOK"
    }
];

// get the total cost of in-stock products
// to calculate the total cost you need to multiply
// price * quantity
// please use reduce array method


// product.isInStock === true
const totalCost = products.reduce((total, product) => {
    // if(product.isInStock === true){
    //     total += product.price * product.quantity;
    // }
    return product.isInStock === true ? total += product.price * product.quantity : total
}, 0);

console.log("totalCost: ", totalCost);

// condition ? true : false
