/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga) {
  //your code here
  var result = {}
  var pecahan = [100000,50000,20000,10000,5000,1000]
  var kembailan = bayar - harga
  var totalPecahan = 0

  if (kembailan < 0) {
    return 'Uang tidak cukup'
  }

  for (var i = 0; i < pecahan.length; i++) {

    if (kembailan - pecahan[i] >= 0) {
      kembailan -= pecahan[i]
      totalPecahan += 1
      result[pecahan[i]] = totalPecahan
      i -= 1
    } else {
      totalPecahan = 0
    }
  }
  return result
}

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000, 50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000, 500000)); // Uang tidak cukup