import { join } from 'path'
const test_input = join('.', 'day_1', 'part_2', 'test_input.txt')
import { solve, parseNumbersWithinString, parseFinalAnswers } from './part_2'


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

test('solve with input', () => {
	expect(solve(test_input)).toBe(281)
})

test('parse numbers in edge case', () => {
	expect(parseFinalAnswers(parseNumbersWithinString(['123eighttwo'], numbers))).toStrictEqual([12])
	expect(parseFinalAnswers(parseNumbersWithinString(['123oneight'], numbers))).toStrictEqual([18])
	expect(parseFinalAnswers(parseNumbersWithinString(['eighttwo123'], numbers))).toStrictEqual([83])
	expect(parseFinalAnswers(parseNumbersWithinString(['oneight123'], numbers))).toStrictEqual([13])
	expect(parseFinalAnswers(parseNumbersWithinString(['one7onetwo'], numbers))).toStrictEqual([12])
	expect(parseFinalAnswers(parseNumbersWithinString(['two7twoone'], numbers))).toStrictEqual([21])
	expect(parseFinalAnswers(parseNumbersWithinString(['two7onetwo'], numbers))).toStrictEqual([22])
	expect(parseFinalAnswers(parseNumbersWithinString(['one7twoone'], numbers))).toStrictEqual([11])
	expect(parseFinalAnswers(parseNumbersWithinString(['one7twone'], numbers))).toStrictEqual([11])
})

//123eighttwo
//123oneight
//eightwo123
//oneight123
//one7onetwo
//two7twoone
//two7onetwo
//one7twoone
//one7twone

