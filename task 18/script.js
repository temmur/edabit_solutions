// Assign Person to Occupation


function assignPersonToJob(names, jobs) {
	let obj = {}
	for(let i = 0; i< names.length; i++){
		obj[names[i]] = jobs[i]
	}
	return obj
}