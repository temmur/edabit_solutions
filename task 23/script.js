// Seven Boom!


function sevenBoom(arr) {
	let a = arr.filter((element)=>{
		if(element.toString().includes(7)){
			return true
		}else{
			return false
		}
		
	})
	return a.length == 0 ? "there is no 7 in the array" : "Boom!"
}