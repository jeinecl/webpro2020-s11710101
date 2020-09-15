//Exercise 02
let account = {
    name: 'Jeine',
    expenses: []
}

function addExpenses(description, amount){
account.expenses.push({
    keterangan: description,
    jumlah: amount
});
console.log(account.expenses[account.expenses.length-1].keterangan + ' = Rp. ' + account.expenses[account.expenses.length-1].jumlah);
}

let totalExpenses = 0;
function getAccountSummary(){
// let totalExpenses = account.expenses * length;
// let showTotalExpenses = function(el){
//     console.log(el);
account.expenses.forEach(element => {
    totalExpenses = totalExpenses + element.jumlah;
});
console.log(account.name + "'s total expenses = Rp. " + totalExpenses)
}


addExpenses('Ayam Geprek', 20000);
addExpenses('Belanja Bulanan', 200000);
getAccountSummary();