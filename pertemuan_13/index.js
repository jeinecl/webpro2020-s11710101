//Rest & Spread Operator

//program dibawah dapat disederhanakan dengan rest operator
// const hitung = (a, b, c, d, e, f, g) => {
//     const angka = [a, b, c, d, e];
//     let total = 0;
//     for(let i=0;i<5;i++){
//         total = total + angka[1];
//     }
//     return total;
//     //return a + b + c + d + e;
// }

//Rest Operator; menggabungkan input dari fungsi menjadi sebuah array
// console.log(hitung(1, 2, 3, 4, 5));

// const hitung = (param1, param2, ...params) => {
//     let total = 0;
//     params.forEach(el => {
//         total = total + el;
//     });
//     return total;
// };
// console.log(hitung(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Spread Operator; memecahkan array menjadi sebuah elemen (kebalikan rest operator)
//1. Menduplikasi Array
// const angka = [1,2,3,4,5];
// const angka2 = [... angka];
// angka[0] = 10;
// console.log(angka);
// console.log(angka2);

// console.log(angka);
// console.log(... angka);

//2. Menggabungkan Array; menggantikan fungsi concat
// const angka1 = [1,2,3,4,5];
// const angka2 = [6,7,8,9,10];
// const angka3 = [12,13];
// const gabung5 = angka1.concat(angka2, angka3);
// console.log(gabung5);

// const gabung6 = [...angka1, ...angka2, ...angka3];
// console.log(gabung6);

//Menambah Properti dalam Objek
let orang = {
    nama: 'John',
    umur: 33,
};
orang = {...orang, pekerjaan: 'Guru', pendidikan: 'S2'}; 
console.log(orang);
//menggabungkan objek
const obj1 = {a: 1, b: 2 };
const obj2 = { c: 3, d:4 };
const objGabung = {...obj1, ...obj2};
console.log(objGabung);