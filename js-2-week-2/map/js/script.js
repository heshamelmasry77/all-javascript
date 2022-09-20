// map()

const names = [
    {firstName: 'Ola', lastName: 'Nordmann'},
    {firstName: 'John', lastName: 'Doe'},
    {firstName: 'Mario', lastName: 'Rossi'},
    {firstName: 'Jan', lastName: 'Jansen'},
];

console.log("before map", names);

// Return:
// ["Ola Nordmann", "John Doe"]

const newCombinedNames = names.map(({firstName, lastName}) => {
    // modify and return element
    console.log(`${firstName} ${lastName}`);
    return `${firstName} ${lastName}`;
});

console.log("after map", newCombinedNames);


const triangles = [
    {base: 100, height: 200},
    {base: 50, height: 100},
    {base: 600, height: 700},
]

// Please calculate the area of the triangles inside the given
// triangles array
// please use the map function to return an array
// Return : [10000, 2500, 2.1×105]


// to calculate the area of the triangle please use the given
// formula  A = 1/2 × b × h .
// A stands for Area
// b stands for base
// h stands for height

const areas = triangles.map(({base, height}) => {
    // modify and return element
    return 1 / 2 * base * height;
});

console.log(areas);





