//Array
//deklarasi Array
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(angka);
// let buah = ["Mangga", "Apel", "Jeruk"];
// console.log(buah);

// let arr = ['text', 1, true];
// console.log(arr)

// let myFunc = function () {
//     return 'Hello Array';
// };

// let arr2 = ['text', 1, true, myFunc(), [1, 2, 3, 4, 5]];
// //mengakses elemen dalam array
// console.log(arr2[2]);
// //akses array dalam array
// console.log(arr2[4][2]);
// //tipe data  array = objek:
// console.log(typeof arr2);
// //berapa panjang array
// console.log(arr2.length);

// //Deklarasi array menggunakan kata kunci new
// let buah2 = ["Salak", "Jambu", "Melon"];
// console.log(buah2);

//Manipulasi Array
//1. Menambah isi Array
// let mhs = [];
// mhs[0] = "John";
// mhs[1] = "Bob";
// mhs[2] = "Jane";
// mhs[3] = "Peter";
// console.log(mhs);

// //2. Mengubah isi array
// mhs[1] = "Donny";
// console.log(mhs);

// //3. Menghapus isi array
// mhs[2] = undefined;
// console.log(mhs);

//4. Menampilkan isi array
// let mhs = ["John", "Bob", "Jane", "Peter", "Mayrra"];
// for (let i=0;i<mhs.length;i++){
//     console.log("Mahasiswa ke " + i + " adalah " + mhs[i]);
// }

//Method dalam Array
//1. Length
//2. toString = ubah array ke string
let mhs = ["John", "Bob", "Jane", "Peter", "Mayrra"];
// console.log(mhs.toString());
//3. Join = hampir sama dengan toString namun menggunakan pembatas/separator (koma, spasi, dsb)
// console.log(mhs.join(" - "));//separator bisa dipilih sendiri
//4. Push, Pop, unshift, shift
// mhs.push("Mayrra");
// mhs.push("Stenly");
// console.log(mhs.join(" - "));
// mhs.pop();
// console.log(mhs.join(" - "));
//Shift dan unshift dimulai dari depan
// mhs.unshift("Stenly");
// mhs.unshift("Mayrra");
// console.log(mhs.join(" - "));
// mhs.shift();
// console.log(mhs.join(" - "));

//5. Concat: menggabungkan array
// let buah = ["Mangga", "Apel", "Anggur"];
// let sayur = ["Kangkung", "Bayam", "Buncis"];
// let makanan = buah.concat(sayur);
// console.log(makanan);

//6. Splice dan Slice
//Splice: menambahkan diantaranya
// let buah = ["Pisang", "Mangga", "Apel", "Jeruk"];
// buah.splice(2, 1, "Melon", "Semangka");
// console.log(buah.join(" - "));

// //Slice: mengambil beberapa elemen pada array dan menaruhnya pada aray yg baru
// let buah2 = buah.slice(0, 3);
// console.log(buah2.join(" - "));

// //7. forEach dan map
// //forEach; tidak mengembalikan array
// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let tampilAngka = function(el){
//     console.log(el);
// };
// angka.forEach(tampilAngka);

// //Map; returnnya adalah array
// let angka2 = angka.map(function (el){
//     return el;
// });

// console.log(angka2);

//8. Sorting
// let angka = [1, 2, 3, 6, 11, 7, 8];
// angka.sort(function(a, b){
//     return a - b;//metode sort perbandingan dari yang terkecil
// });
// console.log(angka);

//9. Filter; mengambil array dalam kondisi tertentu
let angka = [1, 2, 3, 6, 11, 7, 8];
let angka2 = angka.filter(function(el){
    return el > 5;//filter angka2 yang lebih besar dari 5
})
console.log(angka2);