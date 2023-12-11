const { join } = require('path')
const testInput = join('.', 'day_1', 'part_1_test_input.txt')
const solve = require('./part_1')

test('solve with test input', () => {
	expect(solve(testInput)).toBe(142)
})
