let Person = class User {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    sayHi() {
        alert("Hello, my name is " + this.fullName);
    }
};

class User extends Person {
    constructor(firstName, lastName, age, gender, signUpDate = 0, id) {
        super(firstName, lastName, age, gender);

        this.signUpDate = signUpDate;
        this.id = id;
    }
}


let users = [];

let user1 = new User('Василий', 'Иванов', undefined, undefined, "12/09", 1);
let user2 = new User('Алексей', 'Смирнов', 19, undefined, "08/09", 2);
let user3 = new User('Ирина', 'Волкова', 21, "Female", "27/08", 3);
let user4 = new User('Дмитрий', 'Соколов', 24, undefined, undefined, 4);

users.push(user1, user2, user3, user4);

console.log(users);