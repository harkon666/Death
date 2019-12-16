'use strict';
// code below here
function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i]
        for (var j = i - 1; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr

}

function aggregate(boards) {
    var sort = insertionSort(boards)
    var check = false
    for (var i = sort.length - 1; i >= 0; i--) {
        for (var j = i + 1; j < sort.length; j++) {
            if (sort[j] === sort[i]) {
                sort[i] += sort[j]
                sort.splice(j,1)
                check = true
            }
        }
        if (check === true && i === 0) {
            check = false
            i = sort.length - 1
        }
    }
    return sort

}

const boards = [1,1,1,1,1,2,2,2,2,4,4,4,4,16,16,16,16,32,1,1,1,1,64,2,2,2,4,4,4,4,4,1,1,2 ]; // isi bebas

// DRIVE CODE
// Release 0 - insertionSort
insertionSort(boards); // silahkan sort boards tersebut
console.log(boards); // output sudah di sort seperti pada soal

// Release 1 - aggregate
console.log(aggregate(boards)); // output sudah di aggregate seperti pada soal
