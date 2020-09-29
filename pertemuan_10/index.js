//CHAPTER 2
//Var, Let, Const

// let nama = "Stenly";
// let nama = "adam";
// console.log(nama);
//Scope dalam javascript:
//1. Function Scope (var)
//2. Block scope

// function tes(){
//     for (var i=0; i<10; i++){
//         console.log(i);
//     }
// }//i hanya bisa diakses di dalam function
// tes();

//bentuk IFE
// (function tes(){
//     for (var i=0; i<10; i++){
//         console.log(i);
//     }
// })();//i hanya bisa diakses di dalam function
// {
//     let i;
//     for (let i=0; i<10; i++){
//         console.log(i);
//     }
// }
// console.log(i);

//Template Literal
const person = {
    firstName: "Stenly",
    lastName: "Adam",
    age: 33.
};
console.log(`Halo nama saya  ${person.firstName} ${person.lastName}. Umur saya adalah ${person.age} tahun.`)
