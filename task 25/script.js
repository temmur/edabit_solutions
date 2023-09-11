// Any Prime Number in Range


function primeInRange(n1, n2) {
	const isPrime = n => {
		for(let i = 3; i <= Math.floor(n / 2); i++)
			if(n % i === 0) return false
		return n >= 2
	}
	for(let i = n1; i <= n2; i++)
		if(isPrime(i)) return true
	return false
}