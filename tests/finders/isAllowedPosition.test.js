const { isAllowedPosition } = require('../../utils/finders.js')
const maze = require('./../../constants/maze');

console.log(isAllowedPosition([0,0]) ? "Test OK" : "Test FAIL")
console.log(isAllowedPosition([maze[0].length, maze.length]) ? "Test OK" : "Test FAIL")

console.log(!isAllowedPosition([-1,0]) ? "Test OK" : "Test FAIL")
console.log(!isAllowedPosition([0,-1]) ? "Test OK" : "Test FAIL")
console.log(!isAllowedPosition([maze[0].length + 1, 0]) ? "Test OK" : "Test FAIL")
console.log(!isAllowedPosition([0, maze.length + 1]) ? "Test OK" : "Test FAIL")