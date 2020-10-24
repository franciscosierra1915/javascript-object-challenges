mainObj = { "baseball bat": 20, "bat": 20, "baseball": 20,}

function calculateDifference(obj, limit) {

    let valuesArray = Object.values(obj);

    let sum = valuesArray.reduce(function(a, b){

        return a + b;

    })
    console.log(sum - limit)
    return(sum - limit)
}

calculateDifference(mainObj, 10)