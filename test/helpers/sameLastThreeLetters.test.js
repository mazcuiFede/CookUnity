const { sameLastThreeLetters } = require('../../utils/helpers.js')
const maze = require('./../../constants/maze_real.js')


let solution = [[0,0]]
console.log(!sameLastThreeLetters(maze, solution) ? "Test OK" : "Test FAIL")

solution.push([1, 0])
console.log(!sameLastThreeLetters(maze, solution) ? "Test OK" : "Test FAIL")

solution.push([2, 0])
console.log(sameLastThreeLetters(maze, solution) ? "Test OK" : "Test FAIL")

solution.push([0, 1])
console.log(!sameLastThreeLetters(maze, solution) ? "Test OK" : "Test FAIL")
