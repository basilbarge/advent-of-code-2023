const { join } = require('path')
const { readFileSync } = require('fs')

function solve(textInputPath) {
	const input = readFileSync(textInputPath, 'utf8').split('\n').filter(n => n)

	return input
}

module.exports = solve
