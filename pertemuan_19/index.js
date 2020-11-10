console.log("Javascript Class dan OOP");

//Class dan Constructor

// const Person = {
//     firstName: "Stenly",
//     lastName: "Adam",
//     displayFullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
// };
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// const Person1 = new Person("Stenly", "Adam");
// console.log(typeof.Person); //tipe data person
// Person1.displayFullName();
// const Person2 = new Person("John", "Doe");
// Person2.displayFullName();

//Inheritance
class Student extends Person{
    constructor(firstName, lastName, NIM, age){
        super(firstName, lastName);
        this.NIM = NIM;
        this.age = age;
    }

    //Static member
    static sayHello(){
        console.log(`Hello World`);
    }

    displayNIM(){
        console.log(`Your name is ${this.NIM}`);
    }

    //Setter
    set studentScore(score){
        this.score = score;
    }

    //Getter
    get studentScore(){
        return this.score;
    }
}
const John = new Student('John', "Doe", "112233", 28);
John.displayNIM();
Student.sayHello(); //contoh static function, tidak bisa menggunakan properti dalam function

John.studentScore = 90;
console.log(John.studentScore);
