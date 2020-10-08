//1. Destrukturisasi Array
let  subject = ['Comnet2', 'Web Programming', 'Mobile Programming'];
// let subject1 = subject[0];
// let subject2 = subject[1];
// let subject3 = subject[2];
//console.log(subject1, subject2, subject3);

//menjadi:
let [subject1, subject2, subject3] = subject;
console.log(subject1, subject2, subject3);

//koma kosong
let [firstName, lastName, dateOfBirth, , sex] = ['Jason', 'Chen', '1 August 1999', '08674545324', 'Male'];
console.log(firstName, dateOfBirth);

//menukar nilai dua variabel:
// let currentPassword = '898901';
// let newPassword = '767654';
// let oldPassword = 0;

// let temp = currentPassword;
// currentPassword = oldPassword;
// oldPassword = temp;

let currentPassword = '898901';
let newPassword = '767654';
let oldPassword = 0;
[currentPassword, oldPassword] = [oldPassword, currentPassword];

//2. Destrukturisasi Objek
let menuDiet = {
    sarapan: 'pancake pisang',
    makanSiang: 'soto ayam rendah kalori',
    makanMalam: 'salad sayur',
};
// let { sarapan, makanSiang, makanMalam } = menuDiet;
// console.log(sarapan, makanSiang, makanMalam);

let { sarapan: breakfast, makanSiang: lunch} = menuDiet;
console.log(breakfast);
console.log(lunch);

//3. Destrukturisasi Objek Bertingkat
let fakultas = {
    fakultas: 'Fakultass Ilmu Komputer',
    jurusan: {
        jurusan1: 'Sistem Informasi',
        jurusan2: 'Informatika',
    }
};

let {
    jurusan: { jurusan2 }
} = fakultas;

console.log(jurusan2);