const { join } = require('path')
const test_input = join('.', 'day_1', 'part_2', 'test_input.txt')
const solve = require('./part_2')


test('solve with input', () => {
	expect(solve(test_input)).toBe(281)
})
