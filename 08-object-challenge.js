// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

const mainObj = { piano: 500, stereo: 300 }

function addName(obj, name, value) {
	let newObj = {
        ...obj,
        [name]: value
    }
    console.log(newObj)
}

addName(mainObj, "Frank", 600)