/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.
Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6
RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!
*/

function countSolo(numbers) {
    var solo = []
    for (var i = 0; i < numbers.length; i++) {
        var jumlah = 0;
        for (var j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                jumlah++
            }
        }
        if (jumlah === 1) {
            solo.push(numbers[i])
        }
    }
    
    var result = 0
    for (var k = 0; k < solo.length; k++) {
        result += solo[k]
    }

    return result
}

console.log(countSolo([5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6
console.log(countSolo([3, 6, 3, 6, 1, 1, 2, 1])) // 2
console.log(countSolo([3, 3, 3, 3, 4, 5, 8, 10, 11])) // 38