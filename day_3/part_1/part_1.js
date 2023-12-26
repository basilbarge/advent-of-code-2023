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
	//Top Right - array[i+1][j+1]
	//Right - array[i][j+1]
	//Bottom Right - array[i+1][j+1]
	//Bottom - array[i+1][j]
	//Bottom Left - array [i+1][j-1]

	for (rowIndex in problemInput) {
		for (columnIndex in row) {
		}
	}
}

if (process.env.NODE_ENV !== 'test') console.log(solve(testInput));
