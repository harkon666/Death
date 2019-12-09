/*

==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

/* 
    jadi gunakan nested loop untuk mengecek parameter arr1 dan arr2
    jadi yang di incar hanya pada arr1..

    if arr1.index === arr2.index maka tidak akan di tampilkan
    dan sebagai pengeceknya akan diberi variabel jumlah yang berisikan berapa kali index para arr1 itu sama dengan arr2

    kalau jumlah sama dengan 0 sudah jelas auto ditampilkan


*/

function findNotRelative(arr1, arr2) {
    notRelative = []

    for (var i = 0; i < arr1.length; i++) {
        var jumlah = 0
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                jumlah++
            }
        }
        if (jumlah === 0) {
            notRelative.push(arr1[i])
        }
    }
    return notRelative
}

console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]