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

	const possibleGames = getPossibleGames(games, bag)
	return possibleGames
}

export function getPossibleGames(games, bag) {
	return games
		.filter(game => {
			const gameRounds = game.rounds.length
			const filteredLength = game.rounds.filter(round => isRoundPossible(round, bag)).length
			return gameRounds === filteredLength
		})
}

export function isRoundPossible(round, bag) {
	if (JSON.stringify(round) === '{}') return false

	const isRedPossible = round['red'] ? (round['red'] <= bag['red']) : true
	const isGreenPossible = round['green'] ? (round['green'] <= bag['green']) : true
	const isBluePossible = round['blue'] ? (round['blue'] <= bag['blue']) : true

	return isRedPossible && isGreenPossible && isBluePossible
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
