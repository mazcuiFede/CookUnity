const { lastLetterEqualsValueToAdd } = require('../../utils/helpers.js')
const maze = require('./../../constants/maze_real.js')

let solution = [[0,0]]
console.log(lastLetterEqualsValueToAdd(maze, solution, solution[solution.length -1]) ? "Test OK" : "Test FAIL")

console.log(!lastLetterEqualsValueToAdd(maze, solution, [0, 1]) ? "Test OK" : "Test FAIL")

