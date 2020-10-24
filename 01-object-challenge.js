const word = 'pneumonoultramicroscopicsilicovolcanoconiosis'

function getObjectFromStr(str) {

    const wordArray = str.split("")

    let myObj = new Object();

    for (let i = 0; i < wordArray.length; i++) {

        if (wordArray[i] in myObj) {

            myObj[wordArray[i]] += 1

        } else {

            myObj[wordArray[i]] = 1

        }

    }

    console.log(myObj)
    return myObj

}

getObjectFromStr(word)
