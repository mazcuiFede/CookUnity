const alphabet = require('../constants/alphabet.js')
const maze = require('../constants/maze_real.js')
const { arrayContainsArray } = require('../utils/arrays.js')

const isAllowedPosition = (solution, axi) => {
    var result = 
    axi[0] >= 0 &&
    axi[0] < maze.length &&
    axi[1] >= 0 &&
    axi[1] < maze[0].length &&
    !arrayContainsArray(solution, axi) &&
    positionToChar(axi) != -1
    
    return result
}
  
  const getNeighbours = (solution, startAxis) => {
    var results = []
  
    isAllowedPosition(solution, [startAxis[0], startAxis[1] - 1]) &&
      results.push([startAxis[0], startAxis[1] - 1])
    isAllowedPosition(solution, [startAxis[0] + 1, startAxis[1]]) &&
      results.push([startAxis[0] + 1, startAxis[1]])
    isAllowedPosition(solution, [startAxis[0], startAxis[1] + 1]) &&
      results.push([startAxis[0], startAxis[1] + 1])
    isAllowedPosition(solution, [startAxis[0] - 1, startAxis[1]]) &&
      results.push([startAxis[0] - 1, startAxis[1]])
  
    return results
  }
  
  const positionToChar = (posicion) => {
    return posicion && maze[posicion[0]][posicion[1]] ? maze[posicion[0]][posicion[1]] : undefined
  }
  
  const isNeighborLetter = (rootLetter, letter) => {
    const positionOfLetter = alphabet.indexOf(positionToChar(rootLetter))
  
    let consecutiveLetters = [
      alphabet[positionOfLetter - 1],
      alphabet[positionOfLetter + 1],
    ]
  
    return consecutiveLetters.includes(positionToChar(letter))
  }
  
  const sameLastThreeLetters = (solution) => {
    return (
      positionToChar(solution[solution.length - 1]) ===
        positionToChar(solution[solution.length - 2]) &&
      positionToChar(solution[solution.length - 2]) ===
        positionToChar(solution[solution.length - 3])
    )
  }
  
  const lastLetterEqualsValueToAdd = (solution, valueToAdd) => {
    return (
      positionToChar(solution[solution.length - 1]) ===
      positionToChar(valueToAdd)
    )
  }
  
  const shouldAddValue = (solution, valueToAdd) => {
    if (
      solution.length === 1 &&
      isNeighborLetter(solution[solution.length - 1], valueToAdd)
    ) {
      return true
    }
  
    if (
      sameLastThreeLetters(solution) &&
      isNeighborLetter(solution[solution.length - 1], valueToAdd)
    ) {
      return true
    }
  
    if (
      !sameLastThreeLetters(solution) &&
      lastLetterEqualsValueToAdd(solution, valueToAdd)
    ) {
      return true
    }
  
    return false
  }
  
  const findExit = (neighbours, solution) => {
    var neighboursB = neighbours.filter((x) => maze[x[0]][x[1]] === 'B')
    return neighboursB.length > 0 && !arrayContainsArray(solution, neighboursB) ? neighboursB : []
  }

  module.exports = { getNeighbours, findExit, positionToChar, shouldAddValue, isAllowedPosition }