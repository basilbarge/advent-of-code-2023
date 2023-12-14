const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')

function solve(textInputPath) {
	const input = readFileSync(textInputPath, 'utf8').split('\n').filter(n => n)
	const numbers = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine'
	]

	let inputs = []

	//TODO: Loops are pushing empty items for some reason
	input.map((strings) => {
		const numbersWithinString = []

		strings.split("").map((char, charIndex) => {
			if (!isNaN(parseInt(char))) {
				numbersWithinString.push(
					{
						value: char,
						index: charIndex,
					}
				)
			}
		})

		numbers.map((number) => {
			if (strings.includes(number)) {
				numbersWithinString.push(
					{
						value: (numbers.indexOf(number) + 1).toString(),
						index: strings.indexOf(number),
					}
				)
			}
		})

		//console.log(numbersWithinString)
		inputs.push(numbersWithinString)
	})


	const answers = []
	inputs.map((numObjects) => {
		const firstNumber = numObjects.sort((a, b) => a.index - b.index)[0]
		const secondNumber = numObjects.sort((a, b) => b.index - a.index)[0]
		const number = firstNumber.value + secondNumber.value

		answers.push(parseInt(number))
	})

	return answers.reduce((total, current) => {
		return total + current
	}, 0)
}

const input = join('.', 'day_1', 'part_2', 'input.txt')

console.log(solve(input))

module.exports = solve
