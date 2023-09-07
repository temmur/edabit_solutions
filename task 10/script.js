function countOnes(matrix) {
	return matrix.toString().split('').filter(x => x == '0').length

}
console.log(countOnes([
	[1, 0, 1],
	[0, 0, 0],
	[0, 0, 1]
]))