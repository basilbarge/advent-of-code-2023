import { join } from 'path'
const testInput = join('.', 'day_1', 'part_1', 'test_input.txt')
import solve from './part_1'

test('solve with test input', () => {
	expect(solve(testInput)).toBe(142)
})
