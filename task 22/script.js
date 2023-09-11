// Instant JAZZ

function jazzify(arr) {
	let a = arr.map((e)=>{
		if(e.charAt(e.length - 1) == 7) return e
		return `${e}7`
	})
	return a
}