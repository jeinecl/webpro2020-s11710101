console.log("Hello World from external files");

//Variabel dan Tipe Data
const firstName = "John"
let age = 20
age = 21
const isMarried = true;

console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isMarried)
console.log(age + " " + isMarried)

const info = "My name is " + firstName + ", i am " + age + " years old" + isMarried
console.log(typeof info);

function helloWorld(){
    var hello = "Hello World";
    console.log(hello);
}

helloWorld();

//Operator
let bilangan = 10;
console.log(bilangan == "10");
console.log(bilangan === "10");