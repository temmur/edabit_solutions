// Frequency Distribution
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}
function getFrequencies(arr) {
	let obj = {};
	arr.map((item, index) => {	
		if (arr.indexOf(item) != index) {
			obj[item]++
		} else {
			obj[item] = 1;
		}
	})
	return obj;
}
