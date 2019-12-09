function highestTopSpeed(data) {
    // your code here
    var McQueen = []
    var temp = ''
    for (var i = 0; i < data.length; i++) {
      if (isNaN(data[i]) === false) {
          temp += data[i]
      }

      if (data[i] === ' ') {
        McQueen.push(parseInt(temp))
        temp = ''
      }
    }
    var result = 0
    for (var j = 0; j < McQueen.length; j++) {
      if (McQueen[j] > result ) {
        result = McQueen[j]
      }
    }
  
    return result
  }
  
  console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
  // 180
  
  console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
  // 200
  
  console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
  // 175
  
  console.log(highestTopSpeed(''));
  // No data