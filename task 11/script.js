// Algebra Sequence — Boxes

// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

function boxSeq(step) {
	let num = 0;
	for(let i = 0; i < step; i++){
		if(i%2==0)num+=3
		else num-=1
	}
	return num
}