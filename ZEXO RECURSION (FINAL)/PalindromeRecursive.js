/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/


function palindromeRecursive(sentence) {
    function jekso(num) {
        if (num === sentence.length) {
            return ''
        } else {
            return sentence[num] + jekso(num + 1)
        }
    }
    
    function oskej(num) {
        if (num === -1) {
            return ''
        } else {
            return sentence[num] + oskej(num - 1)
        }
    }

    if (jekso(0) === oskej(sentence.length - 1)) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false