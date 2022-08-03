const { findExit } = require('../../utils/helpers.js')
const maze = require('./../../constants/maze_real.js')

let neighbours = [ [ 0, 0 ], [ 1, 1] ]
console.log(findExit(maze, neighbours, []).length === 0 ? "Test OK" : "Test FAIL")


neighbours.push([0, 1])
console.log(findExit(maze, neighbours, []).length > 0 ? "Test OK" : "Test FAIL")