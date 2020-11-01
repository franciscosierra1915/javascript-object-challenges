const list = { tv: 4999, guitar: 5000, fork: 5001 }

function filterValues(obj) {
	let copy = {...obj}
	for(value in copy){
		if(copy[value] < 5000){
            delete copy[value]
		}
    }
    return copy
}

filterValues(list)
