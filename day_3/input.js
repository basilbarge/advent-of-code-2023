import { readFileSync } from 'fs'
import { join } from 'path'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseInputFileByLine(fileName) {
	const inputPath = join(__dirname, fileName)

	const input = readFileSync(inputPath, 'utf8').split('\n').filter(n => n)

	const inputSplitByCharacter = input.map((line) => line.split(''))

	return inputSplitByCharacter
}

export const input = parseInputFileByLine('input.txt')
export const testInput = parseInputFileByLine('test_input.txt')
