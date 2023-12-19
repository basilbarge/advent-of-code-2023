import { input } from './input.js'

export function solve(problemInput) {
	const bag = {
		'red': 12,
		'green': 13,
		'blue': 14
	}

	const games = problemInput.map((game) => {
		const gameSplit = game.split('Game')[1].split(':')
		const gameNumber = parseInt(gameSplit[0].trim())
		const gameData = gameSplit[1].trim()

		return {
			gameNum: gameNumber,
			rounds: gameData.split(';').map((round) => parseRoundToObject(round))
		}
	})

	const possibleGames = games
		.filter(game => {
			const gameRounds = game.rounds.length
			const filteredLength = game.rounds.filter((round) => round['red'] <= bag['red'] && round['green'] <= bag['green'] && round['blue'] <= bag['blue']).length
			return gameRounds === filteredLength
		})
		.reduce((total, current) => total + current.gameNum, 0)

	return possibleGames
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

solve(input)
