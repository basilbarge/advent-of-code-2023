const testInput = [
	'1abc2',
	'pqr3stu8vwx',
	'a1b2c3d4e5f',
	'treb7uchet',
]

const numString = Array(testInput.length).fill('');

testInput.map((word, idx) => {
	word.split('').map(letter => {
		if (!isNaN(parseInt(letter))) {
			numString[idx] += letter
		}
	})
})

const nums = numString.map(numString => {
	const finalNum = numString[0] + numString[numString.length - 1]
	return parseInt(finalNum)
})

console.log(nums.reduce((total, current) => total += current, 0))
