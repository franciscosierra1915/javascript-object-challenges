// mainClouds = [0, 0, 0, 1, 0, 0]

// function jumpingOnClouds(c) {

//     const cloudsLength = c.length
//     let jumps = 0

//     for(let i = 0; i < cloudsLength; i++) {
//         if(c[i + 2 ] === c[i]) {
//             jumps += 1
//             i++
//         } else if (c[i + 1] === c[i]) {
//             jumps += 1
//         }
//     }
    
//     console.log(jumps)
// }

// jumpingOnClouds(mainClouds)

const string = "aba"

const limit = 10


function repeatedString(s, n) {

    let fullStr = s
    let arrayStr 
    let count = 0

    while(fullStr.length < n) {
        fullStr = fullStr.concat(s)
        fullStr = fullStr.slice(-n)
        arrayStr  = fullStr.split('')
    }
    for(let i = 0; i < fullStr.length; i++) {
        if(arrayStr[i] === 'a'){
            count += 1
        }
    }

    return count
}

repeatedString(string, limit)