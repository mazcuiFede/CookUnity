const { isNeighborLetter } = require('../../utils/helpers.js')

console.log(isNeighborLetter([0,1], [0,0]) ? "Test OK" : "Test FAIL")

console.log(!isNeighborLetter([0,0], [0,0]) ? "Test OK" : "Test FAIL")
console.log(!isNeighborLetter([0,0], [0,2]) ? "Test OK" : "Test FAIL")
console.log(!isNeighborLetter([0,0], [1,1]) ? "Test OK" : "Test FAIL")
