const word = 'pneumonoultramicroscopicsilicovolcanoconiosis'

function getObjectFromStr(str) {
    const myArray = str.split("")
    let myObj = new Object();
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] in myObj) {
            myObj[myArray[i]] += 1
        } else {
            myObj[myArray[i]] = 1
        }
    }
    return myObj
}

getObjectFromStr(word)

