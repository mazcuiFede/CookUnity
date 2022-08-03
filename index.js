const maze = require('./constants/maze_real.js')

const { getNeighbours, findExit, positionToChar, shouldAddValue } = require('./utils/helpers.js')

var solution = []


const findPath = (solution) => {
  const root = solution[solution.length - 1]

  if (root) {

    const neighbours = getNeighbours(maze, solution, root)
    const exit = findExit(maze, neighbours, solution)

    console.clear()

    if (exit.length > 0) {
      solution.push(exit[0])
      solution.map((x) => {
        console.log(positionToChar(maze, x), "at position", x)
      })
      console.log('End')
    } else {
      if (neighbours[0] && shouldAddValue(maze, solution, neighbours[0])) {
        solution.push(neighbours[0])
        findPath(solution)
      } else {
        if (neighbours[1] && shouldAddValue(maze, solution, neighbours[1])) {
          solution.push(neighbours[1])
          findPath(solution)
        } else {
          if (neighbours[2] && shouldAddValue(maze, solution, neighbours[2])) {
            solution.push(neighbours[2])
            findPath(solution)
          } else {
            const last = solution.pop()
            maze[last[0]][last[1]] = -1
            findPath(solution)
          }
        }
      }
    }
  }

}


solution.push([0, 1]) 
findPath(solution)
