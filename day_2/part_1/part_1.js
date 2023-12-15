import { input } from './input.js'

function solve(problemInput) {
	const games = problemInput.map((game) => {
		const gameSplit = game.split('Game')[1].split(':')
		const gameNumber = gameSplit[0].trim()
		const gameData = gameSplit[1].trim()

		return {
			gameNum: gameNumber,
			rounds: gameData.split(';').map((round) => round.trim().split(',').reduce((roundData, currentData) => {
				const trimmedEntry = currentData.trim()
				return {
					...roundData,
					[trimmedEntry.split(' ')[1]]: trimmedEntry.split(' ')[0]
				}
			}, {}))
		}
	})

	console.log(games[0].rounds)
}

solve(input)

export default solve
