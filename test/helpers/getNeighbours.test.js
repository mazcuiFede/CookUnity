const { getNeighbours } = require('../../utils/helpers.js')
const maze = require('./../../constants/maze_real.js')

var solution = []

console.log(getNeighbours(maze, solution, [0, 0]).equals([[ 1, 0 ], [ 0, 1 ]])? "Test OK" : "Test FAIL")
console.log(getNeighbours(maze, solution, [1, 1]).equals([[ 1, 0 ], [ 2, 1 ], [ 1, 2 ], [ 0, 1 ]])? "Test OK" : "Test FAIL")
