const { shouldAddValue } = require('../../utils/helpers.js')
const maze = require('./../../constants/maze_real.js')


let solution = [ [ 0, 1 ] ]
console.log(shouldAddValue(maze, solution, [0, 0]) ? "Test OK" : "Test FAIL")
console.log(!shouldAddValue(maze, solution, [1, 3]) ? "Test OK" : "Test FAIL")

solution.push([1, 1])
console.log(shouldAddValue(maze, solution, [1, 1]) ? "Test OK" : "Test FAIL")

solution.push([1, 1])
solution.push([1, 1])
console.log(!shouldAddValue(maze, solution, [1, 1]) ? "Test OK" : "Test FAIL")
