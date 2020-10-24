mainObj = { 
    1: "Mommy", 
    2: "please", 
    3: "help", 
    4: "help", 
    5: 'Mike', 
    6: 'Frank', 
    7: 'Mike' }

function sayWhat(obj) {

    let objArray = Object.values(obj);

    objArray.push(objArray[1]);

    let arraySentence = objArray.join(" ");

    console.log(arraySentence)
    return arraySentence
}

sayWhat(mainObj)