const mainObj = { a: "love", b: "hate", c: "anger", d: "peace" }

function totalAmountEmotions(obj) {

    let objToArray = Object.values(obj);

    let wordsInMyArray = [];

    let counter = 0;

    for(let i = 0; i < objToArray.length; i++){

        if(!wordsInMyArray.includes(objToArray[i])){

            wordsInMyArray.push(objToArray[i]);

            counter += 1;

        }

    }

    console.log(counter)
    return counter

}

totalAmountEmotions(mainObj)