import { join } from 'path'
import { readFileSync } from 'fs'

export function solve(textInputPath) {
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

	const answers = parseFinalAnswers(inputs)

	return answers.reduce((total, current) => {
		return total + current
	}, 0)
}

export function parseFinalAnswers(numbersWithinString) {
	const answers = []
	numbersWithinString.map(numObjects => {
		const firstNumber = numObjects.sort((a, b) => a.index - b.index)[0]
		const secondNumber = numObjects.sort((a, b) => b.index - a.index)[0]
		const number = firstNumber.value + secondNumber.value

		answers.push(parseInt(number))
	})

	return answers
}

export function parseNumbersWithinString(inputString, spelledNumbers) {
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
				let stringIndex = strings.indexOf(number)
				while (stringIndex !== -1) {
					numbersWithinString.push(
						{
							value: (spelledNumbers.indexOf(number) + 1).toString(),
							index: stringIndex,
						}
					)

					stringIndex = strings.indexOf(number, stringIndex + 1)
				}
			}
		})

		inputs.push(numbersWithinString)
	})

	return inputs
}

const input = join('.', 'day_1', 'part_2', 'input.txt')

if (process.env.NODE_ENV !== 'test') console.log(solve(input))
