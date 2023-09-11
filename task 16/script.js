function rps(p1, p2) {
	let rock = "Rock"
	let paper = "Paper"
	let scissors = "Scissors"
	if(p1 == p2 ){
		return "It's a draw"
	}
	else if(p1 == rock && p2 == paper){
		return "The winner is p2"
	} else if(p1 == scissors && p2 == rock){
		return "The winner is p2"
	} else if(p1 == scissors && p2 == paper){
		return "The winner is p1"
	} else if(p1 == paper && p2 == rock){
		return "The winner is p1"
	}
	
}

React

Reply







