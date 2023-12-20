import { testInput } from './input'
import { solve, findMinBag } from './part_2'

describe('Using test data to test solve function functionality', () => {
	test('Test input data', () => {
		expect(solve(testInput)).toBe(2286)
	})
})

describe('Testing findMinBag', () => {
	test('findMinBag with single round returns object that matches that single round', () => {
		const rounds = [{
			'red': 2,
			'blue': 3,
			'green': 4
		}]

		expect(findMinBag(rounds)).toStrictEqual({ 'red': 2, 'blue': 3, 'green': 4 })
	})

	test('findMinBag with more than one  round returns object that matches that single round', () => {
		const rounds = [
			{
				'red': 2,
				'blue': 2,
				'green': 4
			},
			{
				'red': 1,
				'blue': 3,
				'green': 6
			}
		]

		expect(findMinBag(rounds)).toStrictEqual({ 'red': 2, 'blue': 3, 'green': 6 })
	})
})
