function hashPlusCount(str) {
	let numOfDashes = 0;
	let numOfPluses = 0;
	Array.from(str).forEach((count)=>{
		if(count == "#") numOfDashes++
		else if(count == "+") numOfPluses++
	})
	return[numOfDashes, numOfPluses]
}