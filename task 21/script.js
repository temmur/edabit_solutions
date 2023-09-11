// Burglary Series (01): Calculate Total Losses

function calculateLosses(obj) {
	const summ = Object.values(obj).length
	? Object.values(obj).reduce((total, num)=> total+ num)
	: "Lucky you!"
	return summ
}