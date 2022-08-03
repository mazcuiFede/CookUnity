const maze = require('./constants/maze.js')
const { getGate } = require('./utils/finders.js')


const startAxis = getGate(maze)


//Look for entrance
//const startAxis = getGate(maze)

// const lettersToSearch = posiblePathLetter(startAxis)
// console.log(lettersToSearch)

//Look for next path (using next or previus letter)
//console.log(nextSequence(startAxis, lettersToSearch))

// maze.map(x => console.log(x.toString().replaceAll(",", "  ")))
