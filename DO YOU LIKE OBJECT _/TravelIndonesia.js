/*

Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();

*/






function travelingIndonesia(arr, emoney) {
  if (arr[0] === undefined) {
    return []
  }
  const rute  = ['Yogyakarta', 'Semarang', 'Surabaya', 'Denpasar']
  function cost(rute, awal, akhir, naikApa) {
    for (var i = 0; i < rute.length; i++) {
      if (awal === rute[i]) {
        awal = i
      }
      if (akhir === rute[i]) {
        akhir = i
      }
    }
    var result = akhir - awal
    if (result < 0) {
      result *= -1
      return result * naikApa
    } else {
      return result * naikApa
    }
  }
  const method = {
    OVO: 15,
    Dana: 10,
    Gopay: 5
  }
  var diskon;
  if (emoney === 'Cash') {
    diskon = 1
  } else {
    diskon = ((100 - method[emoney]) / 100)
  }

  const harga = {
    Pesawat: 275000,
    Kereta: 250000,
    Bis: 225000
  }
  var result = []
  for (var i = 0; i < arr.length; i++) {
    var strTemp = '';
    var data = []
    for (var j = 0; j <= arr[i].length; j++) {
      if (arr[i][j] === '-' || arr[i][j] === undefined) {
        data.push(strTemp)
        strTemp = ''
      } else {
        strTemp += arr[i][j]
      }
    }
    
    if (data.length === 4) {
      result.push({
        name: data[0],
        departureCity: data[1],
        destinationCity: data[2],
        transport: data[3],
        totalCost: cost(rute, data[1], data[2], harga[data[3]]) * diskon

      })
    }
    
  }
  for (var k = 0; k < result.length; k++) {
    for (var l = 0; l < result.length - 1; l++ ) {
        if (result[l].totalCost < result[l + 1].totalCost) {
          var tampung = result[l + 1]
          result[l + 1] = result[l]
          result[l] = tampung
        }
      }
  }
  return result
};



console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];