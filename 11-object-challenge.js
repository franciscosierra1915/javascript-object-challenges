const list = { piano: "200", tv: "300" }


function convertToNumber(obj) {
	for(str in obj) {
		obj[str] = parseInt(obj[str])
    }

    return obj
}

convertToNumber(list)