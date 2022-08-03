const { lastLetterEqualsValueToAdd } = require('../../utils/helpers.js')


let solution = [[0,0]]
console.log(lastLetterEqualsValueToAdd(solution, solution[solution.length -1]) ? "Test OK" : "Test FAIL")

console.log(!lastLetterEqualsValueToAdd(solution, [0, 1]) ? "Test OK" : "Test FAIL")

