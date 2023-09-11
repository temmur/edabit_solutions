// Return an Array of Subarrays


function matrix(x, y, z) {
	let arr = []
	for(let i =0 ; i<x; i++){
		let subArr = []
		for(let b = 0; b< y; b++){
			subArr.push(z)
		}
		arr.push(subArr)
	}
	return arr
}