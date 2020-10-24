// mostExpensiveItem({
//     piano: 2000,
//   }) ➞ "piano"
  
//   mostExpensiveItem({
//     tv: 30,
//     skate: 20,
//   }) ➞ "tv"
  
//   mostExpensiveItem({
//     tv: 30,
//     skate: 20,
//     stereo: 50,
//   }) ➞ "stereo"

mainObj = {
    tv: 30,
    skate: 20,
    stereo: 50,
    laptop: 1000,
    shirt: 10,
    piano: 500
  }

  function mostExpensiveItem(obj) {

    let highestValue = 0;
    let highestValuedItem = ''

	for(let item in obj){
        if(obj[item] > highestValue) {
            highestValue = obj[item];
            highestValuedItem = item
        } 
    }
    return highestValuedItem
}

mostExpensiveItem(mainObj)