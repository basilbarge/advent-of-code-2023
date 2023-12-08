const testInput = [
	'1abc2',
	'pqr3stu8vwx',
	'a1b2c3d4e5f',
	'treb7uchet',
]

const num = Array(testInput.length).fill('');

testInput.map((word, idx) => {
	word.split('').map(letter => {
		console.log(letter)
		if (parseInt(letter) !== NaN) {
			console.log('here')
			num[idx] += letter
		}
	})
})

console.log(num);
