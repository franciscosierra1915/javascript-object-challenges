const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
  }

function calculateLosses(obj) {

    let valuesArray = Object.values(obj);

	if(valuesArray.length === 0) {

        console.log("Lucky you!")
        
	} else {

		let sum = valuesArray.reduce(function(a, b){

            return a + b
            
        })
        
        console.log(sum)
        return sum
    
    }
    
}

calculateLosses(stolenItems)