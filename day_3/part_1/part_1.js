import { input, testInput } from '../input.js';

/**
 *
 * @param {string} problemInput
 *
 * @returns {number} Sum of mechanical part numbers
 */
export function solve(problemInput) {
	const symbols = '!@#$%^&*';
	console.log(problemInput);

	//Surrounding indices  of array[i][j]
	//Left - array[i][j-1]
	//Top Left - array[i-1][j-1]
	//Top - array[i-1][j]
	//Top Right - array[i+1][j-1]
	//Right - array[i][j+1]
	//Bottom Right - array[i+1][j+1]
	//Bottom - array[i+1][j]
	//Bottom Left - array [i-1][j+1]

	for (const rowIndex in problemInput) {
		for (const columnIndex in problemInput[rowIndex]) {
			const symbol = problemInput[rowIndex][columnIndex]
			if (symbols.includes(symbol) && surroundedByNumber(problemInput, rowIndex, columnIndex)) {
				problemInput[rowIndex][columnIndex] = 'T'
			}
		}
	}

	console.log(problemInput)
}

export function surroundedByNumber(array, rowIndex, columnIndex) {
	if (rowIndex > 1) {
		return parseInt(array[rowIndex][columnIndex - 1]) ||
			parseInt(array[rowIndex - 1][columnIndex - 1]) ||
			parseInt(array[rowIndex - 1][columnIndex]) ||
			parseInt(array[rowIndex + 1][columnIndex - 1]) ||
			parseInt(array[rowIndex][columnIndex + 1]) ||
			parseInt(array[rowIndex + 1][columnIndex + 1]) ||
			parseInt(array[rowIndex + 1][columnIndex]) ||
			parseInt(array[rowIndex - 1][columnIndex + 1])
	} else if (rowIndex < array.length) {
		return parseInt(array[rowIndex][columnIndex - 1]) ||
			parseInt(array[rowIndex - 1][columnIndex - 1]) ||
			parseInt(array[rowIndex - 1][columnIndex]) ||
			parseInt(array[rowIndex + 1][columnIndex - 1]) ||
			parseInt(array[rowIndex][columnIndex + 1]) ||
			parseInt(array[rowIndex + 1][columnIndex + 1]) ||
			parseInt(array[rowIndex + 1][columnIndex]) ||
			parseInt(array[rowIndex - 1][columnIndex + 1])

	}
}

if (process.env.NODE_ENV !== 'test') console.log(solve(testInput));
