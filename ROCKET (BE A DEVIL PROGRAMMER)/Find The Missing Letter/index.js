function findLetter(word) {
  const huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var result = []

  for (var i = 0; i < word.length - 1; i++) {
    var jekso = false
    var count = 0
      for (var j = 0; j < huruf.length; j++) {
          if (huruf[j] === word[i]) {
              jekso = true
              continue
          }
          if (jekso === true) {
              if (huruf[j] === word[i + 1]) {
                  jekso = false
                  if (count === 1) {
                      result.push(huruf[j - 1])
                  }
              } else {
                  count += 1
              }
          }
      }
  }
  return result
}


// Release 0

console.log(findLetter('ABDF')) // ['C', 'E']
console.log(findLetter('OPQST')) // ['R']
console.log(findLetter('DFGI')) // ['E', 'H']

console.log("=========================EZ=============================");

// Release 1
console.log(findLetter('GIAXZ')) // [ 'H', 'Y']
console.log(findLetter('GIHGWYUWCE')) // [ 'H', 'X', 'V', 'D']
console.log(findLetter('POLQWRTWY')) // ['S', 'X']
