const testInput = [
	'1abc2',
	'pqr3stu8vwx',
	'a1b2c3d4e5f',
	'treb7uchet',
]

const fs = require('node:fs')

const data = fs.readFileSync('./input.txt', 'utf8')
const input = data.split('\n').filter(n => n)

const numString = Array(input.length).fill('');

input.map((word, idx) => {
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

const final = nums.reduce((total, current) => {
	return total + current
}, 0)

console.log(final)
