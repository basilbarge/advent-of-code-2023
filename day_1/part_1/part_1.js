import { join } from 'path'
import { readFileSync } from 'node:fs'

function solve(inputPath) {
	const data = readFileSync(inputPath, 'utf8')
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

	return nums.reduce((total, current) => {
		return total + current
	}, 0)
}

const inputPath = join('.', 'day_1', 'part_1', 'input.txt')

console.log(solve(inputPath))

export default solve
