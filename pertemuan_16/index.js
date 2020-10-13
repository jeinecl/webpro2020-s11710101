//Modularisasi
//Export-Import
//Export: menandai suatu variabel dan atau fungsi yang nantinya dapat diakses dari luar modul
//1. import beberapa elemen
//import { hello, world, name } from './hello.js'; //hello.js adalah nama modul, sedangkan { hello } adalah nama fungsi yang akan dipanggil
//2. import semua elemen
//import * as helper from './hello.js';
//3. import 1 function
import hello from './hello.js';

hello('John Doe');
// helper.world();
// console.log(helper.name);
