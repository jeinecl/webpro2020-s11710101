//Object

//const mahasiswa1 = ["John", "Doe", 31, true];
//Deklarasi Object (objek literal)
// const mhs1 = {
//     namaDepan: "John",
//     namaBelakang: "Doe",
//     umur: 31,
//     sudahLulus: true,
//     alamat: {
//         jalan: 'Jln. Arnold Mononutu',
//         kecamatan: 'Airmadidi',
//         kabupaten: 'Minahasa Utara'
//     },
//     IPSemester: [3.85, 3.25, 3.8, 3.4],
//     hitungIPK: function () {
//         let total = 0;
//         this.IPSemester.forEach(function (el){
//             total = total + el;
//         });
//         //return total / 4;
//         this.IPKumulatif = total / 4;
//     },
// };

// delete mhs1.namaBelakang;
// console.log(mhs1);

//Deklarasi Object (Kata kunci - new)
// const mhs2 = new Object();
// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = "Smith";

//Mengakses properti objek:
//1. Dot notation
// console.log(mhs1.umur);
// //2. Bracket notation
// console.log(mhs1['namaBelakang']);

// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPSemester[2]);
// mhs1.hitungIPK();
// console.log(mhs1);

//Array Object
const mahasiswa = [
    {
        nim: "201",
        namaDepan: "John",
        namaBelakang: "Doe"
    },
    {
        nim: "202",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },
    {
        nim: "203",
        namaDepan: "Stenly",
        namaBelakang: "Adam",
    },
];

mahasiswa.forEach(function (el){
    console.log(el);
});