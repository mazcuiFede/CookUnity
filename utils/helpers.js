const alphabet = require('../constants/alphabet.js')
const { arrayContainsArray } = require('../utils/arrays.js')

const isAllowedPosition = (maze, solution, axi) => {
    var result = 
    axi[0] >= 0 &&
    axi[0] < maze.length &&
    axi[1] >= 0 &&
    axi[1] < maze[0].length &&
    !arrayContainsArray(solution, axi) &&
    positionToChar(maze, axi) != -1
    
    return result
}
  
const getNeighbours = (maze, solution, startAxis) => {
    var results = []

    isAllowedPosition(maze, solution, [startAxis[0], startAxis[1] - 1]) && results.push([startAxis[0], startAxis[1] - 1])
    isAllowedPosition(maze, solution, [startAxis[0] + 1, startAxis[1]]) && results.push([startAxis[0] + 1, startAxis[1]])
    isAllowedPosition(maze, solution, [startAxis[0], startAxis[1] + 1]) && results.push([startAxis[0], startAxis[1] + 1])
    isAllowedPosition(maze, solution, [startAxis[0] - 1, startAxis[1]]) && results.push([startAxis[0] - 1, startAxis[1]])

    return results
}

const positionToChar = (maze, posicion) => {
    return posicion && maze[posicion[0]][posicion[1]] ? maze[posicion[0]][posicion[1]] : undefined
}

const isNeighborLetter = (maze, rootLetter, letter) => {
    const positionOfLetter = alphabet.indexOf(positionToChar(maze, rootLetter))

    let consecutiveLetters = [
        alphabet[positionOfLetter - 1],
        alphabet[positionOfLetter + 1],
    ]

    return consecutiveLetters.includes(positionToChar(maze, letter))
}

const sameLastThreeLetters = (maze, solution) => {
    return (
        positionToChar(maze, solution[solution.length - 1]) ===
        positionToChar(maze, solution[solution.length - 2]) &&
        positionToChar(maze, solution[solution.length - 2]) ===
        positionToChar(maze, solution[solution.length - 3])
    )
}

const lastLetterEqualsValueToAdd = (maze, solution, valueToAdd) => {
    return (
        positionToChar(maze, solution[solution.length - 1]) ===
        positionToChar(maze, valueToAdd)
    )
}

const shouldAddValue = (maze, solution, valueToAdd) => {
    if  (
            solution.length === 1 &&
            isNeighborLetter(maze, solution[solution.length - 1], valueToAdd)
        ) 
        return true

    if  (
            sameLastThreeLetters(maze, solution) &&
            isNeighborLetter(maze, solution[solution.length - 1], valueToAdd)
        ) 
        return true

    if  (
            !sameLastThreeLetters(maze, solution) &&
            lastLetterEqualsValueToAdd(maze, solution, valueToAdd)
        )
        return true

    return false
}

const findExit = (maze, neighbours, solution) => {
    var neighboursB = neighbours.filter((x) => maze[x[0]][x[1]] === 'B')
    return neighboursB.length > 0 && !arrayContainsArray(solution, neighboursB) ? neighboursB : []
}

module.exports = { getNeighbours, findExit, positionToChar, shouldAddValue, isAllowedPosition, isNeighborLetter, sameLastThreeLetters, lastLetterEqualsValueToAdd }