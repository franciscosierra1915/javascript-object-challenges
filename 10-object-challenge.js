const obj1 = {
    tv: 30,
    timmy: 20,
    stereo: 50,
}

const name1 = "timmy"

function findIt(obj, name) {
	let myName = name.charAt(0).toUpperCase() + name.slice(1)
	if(name in obj){
		return `${myName} is gone...`
	} else {
		return `${myName} is here!`
	}
}

findIt(obj1, name1)
