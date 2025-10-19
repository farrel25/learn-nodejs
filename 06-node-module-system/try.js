console.log("Hello from try.js");

// const printName = (name) => {
//     return `Hello, my name is ${name}`;
// }

const printName = (name) => `Hello, my name is ${name}`;

const PI = 3.14159;

const student = {
    name: "John",
    age: 25,
    printStudentInfoV1: function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    printStudentInfoV2: () => {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    printStudentInfoV3: () => `Name: ${this.name}, Age: ${this.age}`,
    printStudentInfoV4() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Person {
    constructor() {
        console.log("Person object created");
    }
}

// module.exports = printName;

// module.exports.printName = printName;
// module.exports.PI = PI;
// module.exports.student = student;
// module.exports.Person = Person;

// module.exports = {
//     printName: printName,
//     PI: PI,
//     student: student,
//     Person: Person
// };

module.exports = { printName, PI, student, Person };