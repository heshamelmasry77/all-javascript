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
        document.write("Hello, my name is " + this.fullName + "<br/>");
    }
};


var user1 = new Person('Василий', 'Иванов', 12);
user1.sayHi();


var user2 = new Person();
user2.sayHi();