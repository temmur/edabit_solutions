// Find the Mean of All Digits
function mean(num) {
	let list = `${num}`.split("") 
	let result = 0
    let lng = 0
	list.forEach((element)=>{
		result+= element * 1
        lng+= element.length
	})
    let a = result / lng
    console.log(a)
}
mean(123)