// Don't Roll Doubles!

function diceGame(arr) {
	let result = 0;
	for(let i = 0; i<arr.length; i++){
		let element = arr[i]
		let num1 = element[0]
		let num2 = element[1]
		if(num1 === num2)return 0
		result += num1 + num2
	}
	return result
}