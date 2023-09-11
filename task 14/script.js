function uniqueSort(arr) {
	let sort = new Set(arr)
	sort = [...sort]
	
	function comp(a, b){
		return a - b
	}
	sort.sort(comp)
	return sort
	
}