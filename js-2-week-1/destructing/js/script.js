// destructing
// example 1
//
// // destruct from objects
// //
// // const { } = objectName;
//
//
// // example 2
//
// // dot notation
//
// const person = {
//     firstName: "Uzo",
//     lastName: "Uzo last name",
//     country: "NG"
// }
//
//
// // here use of destructing
//
//
// const {firstName, lastName, country} = person;
// const greeting = `Hello i am ${firstName} ${lastName} and i am from ${country}`;
// console.log(greeting);
//
// // const firstName = person.firstName;
// // const lastName = person.lastName;
// // const country = person.country;
// //
// //
// // const greeting = `Hello i am
// //     ${firstName}
// //     ${lastName}
// //     and i am from
// //     ${country}`;
// //
// // console.log(greeting);
// //
// //
//
//
// const user = {
//     firstName: "Hesh",
//     country: "Egypt",
//     age: "31",
//     email: "heshamSSS@ss.com",
//     "job": "developer"
// }
//
// function greetUsers(userObject) {
//     const {firstName, country} = userObject;
//     console.log(`Hello ${firstName} from ${country} welcome.`);
// }
//
// // Log: Hello Hesham from Egypt welcome.
//
// greetUsers(user);
//
// function greetUsersTwo({firstName, country}) {
//     console.log(`Hello ${firstName} from ${country} welcome.`);
// }
//
// // Log: Hello Hesham from Egypt welcome.
// greetUsersTwo(user);
//
//
// // destructing in arrays
//
//
// const people = [
//     {
//         name: "hesh",
//         age: "31",
//         score: 13
//     },
//     {
//         name: "carl",
//         age: "31",
//         score: 3
//     }, {
//         name: "Uzo",
//         age: "26",
//         score: 20
//     }, {
//         name: "Emil",
//         age: "31",
//         score: 10
//     }
// ]
// // rule condition score >= 5
//
// // const winners = people.filter((currentItem) => {
// //     if (currentItem.score >= 5) {
// //         return true;
// //     }
// // });
//
// const winners = people.filter(({score}) => {
//     if (score >= 5) {
//         return true;
//     }
// });
//
// console.log(winners);
//
//
//
//
//
// // destructing from array
//
// // const [
// //     // values here
// // ] = arrayName;
// //
// // const [value1, value2]= arrayName;
//
//
//
// // example destructing arrays
// //                     0   1    2   3  4   5  indexes
// const streetNumbers = [12, 30, 40, 50, 1, 54];
//
// // 'x' will be the index of 0
// // 'y' will be the index of 1
//
// const [x, y] = streetNumbers;
//
// console.log(x, y);
// // Logs:
// // 12 30
//
//
// // Create a string array of names which contains 4 names
// // and then destruct the first three names
//
// const names = ["Hesh", "Linda", "Alex", "Fariad", "Yasmin", "Aladdin", "jenny"];
//
// const [name1, name2, name3, ...others] = names;
//
// console.log(name1, name2, name3 );
// console.log(others)
// // Logs:
// // Hesh Linda Alex
//
//                //0  1   2   3  4
// const values = [3, 4 , 56, 7, 2];
//
// const [first, , third, , fifth ] = values;
//
// console.log(first, third, fifth);
//
// // Log: 3 4 56


const myCat = {
    name: "handsome",
    age: "10",
    typerrr: "Egyptian Mau"
}
const {name, age, typerrr:breed} = myCat
console.log(`my cat name is ${name} and the age of my cat is ${age} and type is ${breed}`);









