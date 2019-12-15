/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  var temp = ''
  var first = ''
  equation = String(equation)
  for (var i = 0; i < equation.length; i++) {
    if (i > 0) {
      temp += equation[i]
    } else {
      first += equation[i]
    }
  }
  
  if (equation.length === 1) {
    if (Number(first) === 0) {
      return ''
    } else {
      return first
    }
  } else {
    first = Number(first) * 10 ** temp.length
    if (Number(first) === 0) {
      equation = temp
      return parseNumber(equation)
    }
    first = String(first)
    if (equation.length === 2 && equation[1] === '0') {
      equation = temp
      return first + parseNumber(equation)
    }
    first += '+'
    equation = temp
    return first + parseNumber(equation)
  }
};

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3