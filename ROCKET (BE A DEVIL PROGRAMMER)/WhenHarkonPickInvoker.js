/**
=======================================
Array of Objects  Mastery: Invoke Spell
=======================================

[INSTRUKSI]

Kael the Invoker memiliki 3 orb yaitu Quas (q), Wex (w), dan Exort (e). Jika orb ini
dikombinasikan maka akan menghasilkan salah satu dari 10 spell yang berbeda!

Diberikan function invokeSpell yang menerima parameter input, dan spell apa saja yang
dimiliki oleh Invoker sudah disediakan dalam bentuk array.

Function akan mengembalikan nama spell dari input yang dimasukkan oleh user, ex:
- input = 'eeq', output = 'Forge Spirit' (karena q = 1, w = 0, e = 2)
- input = 'www', output = 'EMP' (karena q = 0, w = 3, e = 0)
- input = 'wqz', output = 'Combination does not exist' (karena kombinasi tidak ditemukan)
- Teruskan Sampai Semua SKILL INVOKER..

NOTE:
Meskipun input terbalik atau tidak urut (ex: 'qwe', 'ewq', 'weq'), maka akan tetap mengeluarkan
spell yang sama!

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!

*/

function invokeSpell(input) {
    const injoker = [['qqq','Cold Snap'],['qqw','Ghost Walk'],['qqe','Ice Wall']
                    ,['wwq','Tornado'],['www','Emp'],['wwe','Alacrity'],['eeq','Forge Spirit']
                    ,['eew','Meteor'],['eee','Sun Strike'],['qwe','Deafening Blast']]
    const key = [ ['q',189], ['w',327], ['e',921]]
    //==============================================
    var jekso = false
    for (var i = 0; i < injoker.length; i++) {
        var value = 0
        var inputValue = 0
        for (var j = 0; j < injoker[i][0].length; j++) {
            for (var k = 0; k < key.length; k++) {
                if (injoker[i][0][j] === key[k][0]) {
                    value += key[k][1]
                }
                if (input[j] === key[k][0]) {
                    inputValue += key[k][1]
                }
            } 
        }
        if (value === inputValue) {
            return injoker[i][1]
        }
    }
    if (jekso === false) {
        return 'Combination does not exist'
    }
}

console.log(invokeSpell("qwe")); // Deafening Blast
console.log(invokeSpell("ewq")); // Deafening Blast
console.log(invokeSpell("qqq")); // Cold Snap
console.log(invokeSpell("wwq")); // Tornado
console.log(invokeSpell("wwe")); // Alacrity
console.log(invokeSpell("wew")); // Alacrity
console.log(invokeSpell("wqa")); // Combination does not exist
