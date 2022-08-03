const { findExit } = require('../../utils/helpers.js')

let neighbours = [ [ 0, 0 ], [ 1, 1] ]
console.log(findExit(neighbours, []).length === 0 ? "Test OK" : "Test FAIL")


neighbours.push([0, 1])
console.log(findExit(neighbours, []).length > 0 ? "Test OK" : "Test FAIL")