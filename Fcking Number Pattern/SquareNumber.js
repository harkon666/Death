/**

  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]


NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'

**/


function squareNumber(num) {
 if (num < 3) {
   return 'Minimal input adalah 3'
 }
 var result = []
 var temp = []
 var check = 0
 var count = 0
 for (var i = 1; i <= num; i++) {
  count++
  if (count % 2 === 0 && count % 4 != 0) {
    if (check % 2 === 0) {  
      temp.push('O')
    } else if (check % 2 === 1) {
      temp.unshift('O')
    }
  } else if (count % 2 === 1) {
    if (check % 2 === 0) {  
      temp.push('X')
    } else if (check % 2 === 1) {
      temp.unshift('X')
    }
  } else if (count % 4 === 0) {
    if (check % 2 === 0) {  
      temp.push('#')
    } else if (check % 2 === 1) {
      temp.unshift('#')
    }
  }
  if (i === num) {
    result.push(temp)
    temp = []
    check++
    i = 0
  }
  if (check === num) {
    return result
  }
 }


}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]

console.log(squareNumber(2)); // Minimal input adalah 3