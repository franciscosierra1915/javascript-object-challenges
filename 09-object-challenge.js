// makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]])
// ➞ { kitchen: { piano: 1000, tv: 50 } }


// makeDetailedList([
//   ["basement", ["baseball bat"], [500] ],
//   ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
// ]) ➞ {
//   basement: {
//     "baseball bat": 500
//   },
//   garage: {
//     horses : 110,
//     cadillac: 2000,
//     flowers: 30
//   }
// }

const mainArr = [["kitchen", ["piano", "tv"], [1000, 50]], ["basement", ["baseball bat"], [500] ], ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]]

function makeDetailedList(arr) {

    let n = arr.length
    const myObj = {}

    for(let i = 0; i < n; i++) {
        myObj[arr[i][0]] = {};
        for(let j = 0; j < arr[i][1].length; j++) {
            // console.log(arr[i][1][j])
            console.log(myObj[arr[i][j]])
        }
    }

}

makeDetailedList(mainArr)

// three for loops
// console.log(arr[i][2][2])