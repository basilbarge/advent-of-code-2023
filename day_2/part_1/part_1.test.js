import { testInput } from './input'
import solve from './part_1'

test('Test input data', () => {
	expect(solve(testInput)).toBe(8)
})
