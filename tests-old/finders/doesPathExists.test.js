const { doesPathExists } = require('../../utils/finders.js')
const maze = require('../../constants/maze');

console.log(doesPathExists([0,1], "B") ? "Test OK" : "Test FAIL") 
