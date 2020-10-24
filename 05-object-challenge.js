const mainObj = { piano: 500, stereo: 300 }

function removeEntry(obj, itemName) {
    let newObj = {
        ...obj
    }
    delete newObj[itemName];
    console.log(newObj)
}

removeEntry(mainObj, "piano")