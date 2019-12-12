/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  var duitJeff = 100000
  var duitLarry = 95000
  var duitJack = 90000

  var result = []
  var split = []
  for (var i = 0; i < tradeActivity.length; i++) {
    for (var j = 0; j < tradeActivity[i].length; j++) {
      var strTemp = ''
      for (var k = 0; k < tradeActivity[i][j].length; k++) {
        if (tradeActivity[i][j][k] != '%') {
          strTemp += tradeActivity[i][j][k]
        }
        if (tradeActivity[i][j][k+1] === '+' || tradeActivity[i][j][k+1] === '-') {
          split.push(strTemp)
          strTemp = ''
        }
        if (tradeActivity[i][j][k+1] === undefined) {
          split.push(parseInt(strTemp))
          strTemp = ''
        }
      }
    }
  }
  
  for (var l = 0; l < split.length; l++) {
    if (l % 2 === 1) {
      if (split[l - 1] === 'Jeff Bezos') {
        duitJeff += duitJeff * split[l] / 100
        result.push({
          name: split[l - 1],
          deposit: duitJeff,
          owner: 'Amazon'
        })
      } else if (split[l - 1] === 'Jack Ma') {
        duitJack += duitJack * split[l] / 100
        result.push({
          name: split[l - 1],
          deposit: duitJack,
          owner: 'Alibaba'
        })
      } else if (split[l - 1] === 'Larry Page') {
        duitLarry += duitLarry * split[l] / 100
        result.push({
          name: split[l - 1],
          deposit: duitLarry,
          owner: 'Google'
        })
      }
    }
  }
  return result
}


console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
  ['Larry Page+2%', 'Larry Page-1%'],
  ['Jack Ma+4%'],
  ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]));
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/
console.log("==============================================================================");

console.log(economyChangeSummary([
  ['Jeff Bezos-10%']
]))
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/