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

	const inputs = parseNumbersWithinString(input, numbers)

	const answers = parseFinalAnswers(inputs, numbers)

	return answers.reduce((total, current) => {
		return total + current
	}, 0)
}

function parseFinalAnswers(numbersWithinString) {
	const answers = []
	numbersWithinString.map(numObjects => {
		const firstNumber = numObjects.sort((a, b) => a.index - b.index)[0]
		const secondNumber = numObjects.sort((a, b) => b.index - a.index)[0]
		const number = firstNumber.value  + secondNumber.value

		answers.push(parseInt(number))
	})

	return answers
}

function parseNumbersWithinString(inputString, spelledNumbers) {
	let inputs = []

	inputString.map((strings) => {
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

		spelledNumbers.map((number) => {
			if (strings.includes(number)) {
				numbersWithinString.push(
					{
						value: (spelledNumbers.indexOf(number) + 1).toString(),
						index: strings.indexOf(number),
					}
				)
			}
		})

		inputs.push(numbersWithinString)
	})

	return inputs
}

const input = join('.', 'day_1', 'part_2', 'edge_case_test_input.txt')

console.log(solve(input))

module.exports = {
	solve,
	parseNumbersWithinString,
	parseFinalAnswers
}
