const maze = require('./constants/maze_real.js')

const { getNeighbours, findExit, positionToChar, shouldAddValue } = require('./utils/helpers.js')

var solution = []


const findPath = (solution) => {
  const root = solution[solution.length - 1]

  if (root) {

    const neighbours = getNeighbours(maze, solution, root)
    const exit = findExit(maze, neighbours, solution)

    if (exit.length === 0) {

      var possibleNeighbours = neighbours.filter(neighbour => shouldAddValue(maze, solution, neighbour))

      if (possibleNeighbours.length === 0) {
        const last = solution.pop()
        maze[last[0]][last[1]] = -1
        findPath(solution)
      }
      
      possibleNeighbours.map(newRoot => {
        solution.push(newRoot)
        findPath(solution)
      })

    }
    else {
      solution.push(exit[0])

      solution.map((x) => {
        console.log(positionToChar(maze, x), "at position", x)
      })

      console.log('End')
    }

  }

}


solution.push([0, 1]) 
findPath(solution)
