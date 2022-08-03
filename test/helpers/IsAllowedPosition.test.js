const { isAllowedPosition } = require('./../../utils/helpers.js')
const maze = require('./../../constants/maze_real.js')

var solution = []

console.log(isAllowedPosition(solution, [0, 0]) ? "Test OK" : "Test FAIL")
console.log(isAllowedPosition(solution, [maze.length - 1, 0]) ? "Test OK" : "Test FAIL")
console.log(isAllowedPosition(solution, [0, maze[0].length - 1]) ? "Test OK" : "Test FAIL")
console.log(isAllowedPosition(solution, [2, 3]) ? "Test OK" : "Test FAIL") 

console.log(!isAllowedPosition(solution, [-1, 0]) ? "Test OK" : "Test FAIL") 
console.log(!isAllowedPosition(solution, [0, -1]) ? "Test OK" : "Test FAIL") 

solution.push([0, 0])
console.log(!isAllowedPosition(solution, [0, 0]) ? "Test OK" : "Test FAIL") 