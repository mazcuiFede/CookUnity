const { isAllowedPosition } = require('./../../utils/helpers.js')
const maze = require('./../../constants/maze_real.js')

var solution = []

console.log(isAllowedPosition(solution, [0, 0]) ? "Test OK" : "Test FAIL")
console.log(isAllowedPosition(solution, [maze[maze.length - 1][0], 0]) ? "Test OK" : "Test FAIL")
console.log(isAllowedPosition(solution, [0, maze[0][maze.length - 1]]) ? "Test OK" : "Test FAIL")
console.log(isAllowedPosition(solution, [0, 0]) ? "Test OK" : "Test FAIL") 