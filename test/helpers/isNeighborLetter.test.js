const { isNeighborLetter } = require('../../utils/helpers.js')
const maze = require('./../../constants/maze_real.js')

console.log(isNeighborLetter(maze, [0,1], [0,0]) ? "Test OK" : "Test FAIL")

console.log(!isNeighborLetter(maze, [0,0], [0,0]) ? "Test OK" : "Test FAIL")
console.log(!isNeighborLetter(maze, [0,0], [0,2]) ? "Test OK" : "Test FAIL")
console.log(!isNeighborLetter(maze, [0,0], [1,1]) ? "Test OK" : "Test FAIL")
