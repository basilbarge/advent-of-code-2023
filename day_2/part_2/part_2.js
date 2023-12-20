import { input } from './input.js'

export function solve(problemInput) {
	const games = problemInput.map((game) => {
		const gameSplit = game.split('Game')[1].split(':')
		const gameNumber = parseInt(gameSplit[0].trim())
		const gameData = gameSplit[1].trim()

		return {
			gameNum: gameNumber,
			rounds: gameData.split(';').map((round) => parseRoundToObject(round))
		}
	})

	const gamesWithMinBag = games.map((game) => {
		return findMinBag(game.rounds)
	})

	return gamesWithMinBag.reduce((totalPower, minBag) => {
		const minRed = minBag['red'] || 1
		const minBlue = minBag['blue'] || 1
		const minGreen = minBag['green'] || 1
		return totalPower + (minRed * minBlue * minGreen)
	}, 0)

}

export function findMinBag(rounds) {
	let redMax = 0
	let greenMax = 0
	let blueMax = 0

	rounds.map((round) => {
		const roundRed = round['red'] || 0
		const roundBlue = round['blue'] || 0
		const roundGreen = round['green'] || 0

		if (roundRed > redMax) redMax = roundRed
		if (roundGreen > greenMax) greenMax = roundGreen
		if (roundBlue > blueMax) blueMax = roundBlue
	})

	return {
		'red': redMax,
		'green': greenMax,
		'blue': blueMax,
	}
}

export function parseRoundToObject(roundData) {
	if (roundData === '') return {}

	return roundData.trim().split(',').reduce((data, currentData) => {
		const trimmedEntry = currentData.trim()
		return {
			...data,
			[trimmedEntry.split(' ')[1]]: parseInt(trimmedEntry.split(' ')[0])
		}
	}, {})
}

if (process.env.NODE_ENV !== 'test') console.log(solve(input))
