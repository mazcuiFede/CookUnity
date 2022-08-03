const { getAllowedPositions } = require('../../utils/finders.js')
const maze = require('./../../constants/maze');

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

const allowedPositions = getAllowedPositions([1,2])
console.log(allowedPositions.equals([[1,1], [0,2], [2,2], [1,3]]) ? "Test OK" : "Test FAIL")

const allowedPositions2 = getAllowedPositions([0, 0])
console.log(allowedPositions2.equals([[1,0], [0,1]]) ? "Test OK" : "Test FAIL")

const allowedPositions3 = getAllowedPositions([maze[0].length, maze.length])
console.log(allowedPositions3.equals([[maze[0].length, maze.length - 1], [maze[0].length - 1, maze.length]]) ? "Test OK" : "Test FAIL")
