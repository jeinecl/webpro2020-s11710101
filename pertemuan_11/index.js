// Arrow Function

//fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil = bilangan1 + bilangan2;
    return hasil;
};
console.log(operasiPenjumlahan(3,4));

const unklabAddress = (jalan, kecamatan, kabupaten) => {
    return `Alamat Universitas Klabat: Jl. ${jalan}, Kec. ${kecamatan}, Kab. ${kabupaten}`;
};
console.log(unklabAddress('Arnold Mononutu', 'Airmadidi', 'Minahasa Utara'));

//fungsi tanpa parameter
const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
}
console.log(namaJenisAnjing());

const informaticsSubject = () => {
    const elective = ["Data Mining", "Knowledge Management", "Multimedia"];
    return elective[elective.length-1];
}
console.log(informaticsSubject());

//Implicit Return Value
const greeting = (nama) => `Hi ${nama}`;
console.log(greeting('Einstein'));

const major = (subject) => `${subject} is a major subject`;
console.log(major('Web Programming'));


//Default Parameter
// function panggang(bahan, durasi, suhu){
//     return `Panggang ${bahan} selama ${durasi} pada suhu ${suhu}`;
// }
// panggang("Roti", "10 menit", "100 C");
// console.log(panggang());


//Exercise
const yearUntilRetirement = (birthYear = 1999, currentYear = 2020, firstName) => {
    let age = currentYear - birthYear;
    let retirement = 65 - age;
    if(retirement > 0){
        return `${firstName} retired in ${retirement} years`;
    }
    else{
        return `${firstName} is already retired.`;
    }
 }
console.log(yearUntilRetirement(2000, 2020, 'Enola')); 