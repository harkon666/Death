/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
    var length = 0
    var word = 0
    for (var i = 0; i <= words.length; i++) {
        if (words[i] === ' ' || words[i] === undefined) {
            word++
        } else {
            length++
        }
    }
    var average = length / word
    
    var result = []
    var temp = ''
    for (var j = 0; j <= words.length; j++) {
        if (words[j] === ' ' || words[j] === undefined) {
            if (temp.length === Math.round(average)) {
                result.push(temp)
            }
            temp = ''
        } else {
            temp += words[j]
        }
    }
    console.log(result)
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []