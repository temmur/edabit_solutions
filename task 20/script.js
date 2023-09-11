// Check if All Values Are True


function allTruthy(...args) {
	const result = args.every((value)=>{
		return value
	})
	return result
}