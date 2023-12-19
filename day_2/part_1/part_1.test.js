import { testInput } from './input'
import { solve, parseRoundToObject, isRoundPossible } from './part_1'

//test('Test input data', () => {
//	expect(solve(testInput)).toBe(8)
//})

describe('Testing parsing round data to objects', () => {
	test('parseRoundToObject with two colors', () => {
		const round = '19 blue, 12 red'

		expect(parseRoundToObject(round)).toStrictEqual({
			'red': 12,
			'blue': 19,
		})
	})

	test('parseRoundToObject with three colors', () => {
		const round = '12 blue, 151 red, 2 green'

		expect(parseRoundToObject(round)).toStrictEqual({
			'red': 151,
			'blue': 12,
			'green': 2,
		})
	})

	test('parseRoundToObject with empty string returns empty object', () => {
		const round = ''

		expect(parseRoundToObject(round)).toStrictEqual({})
	})
})

describe('Testing isPossible', () => {

	test('isPossible on empty rounds object returns false', () => {
		const bag = {
			'red': 15,
			'blue': 15,
			'green': 15
		}
		const round = {}

		expect(isRoundPossible(round, bag)).toBe(false)
	})


	test('isPossible on possible round returns true', () => {
		const bag = {
			'red': 15,
			'blue': 15,
			'green': 15
		}
		const round = {
			'red': 2,
			'blue': 2,
			'green': 2
		}

		expect(isRoundPossible(round, bag)).toBe(true)
	})

	test('isPossible on impossible round returns false', () => {
		const bag = {
			'red': 15,
			'blue': 15,
			'green': 15
		}
		const round = {
			'red': 16,
			'blue': 2,
			'green': 2
		}

		expect(isRoundPossible(round, bag)).toBe(false)
	})
})
