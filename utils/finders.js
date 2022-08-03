const alphabet = require('../constants/alphabet');
const maze = require('../constants/maze.js');

const getGate = (elements) => {
    return [0, elements[0].indexOf("B")]
}

const getPossibleLetters = (letter) => {
    const positionOfLetter = alphabet.indexOf(letter) //maze[startAxis[0]][startAxis[1]]
    
    let lettersToSearch = []
    
    alphabet[positionOfLetter - 1] && lettersToSearch.push(alphabet[positionOfLetter - 1])
    alphabet[positionOfLetter + 1] && lettersToSearch.push(alphabet[positionOfLetter + 1])
    
    return lettersToSearch
}

const isAllowedPosition = (axi) => {
    return axi[0] >= 0 && axi[0] <= maze[0].length && axi[1] >= 0 && axi[1] <= maze.length
}

const getAllowedPositions = (startAxis) => {
    var results = []

    isAllowedPosition( [startAxis[0] - 1, startAxis[1]]) && results.push([startAxis[0] - 1, startAxis[1]])
    isAllowedPosition( [startAxis[0], startAxis[1] - 1]) && results.push([startAxis[0], startAxis[1] - 1])
    isAllowedPosition( [startAxis[0] + 1, startAxis[1]]) && results.push([startAxis[0] + 1, startAxis[1]])
    isAllowedPosition( [startAxis[0], startAxis[1] + 1]) && results.push([startAxis[0], startAxis[1] + 1])
    
    return results
}

//Dado una raiz devuelve el siguiente camino
const nextAllowedAxis = (startAxis) => {
    //Devolver la posición que también tiene una letra igual a la del Start Axis dentro de las posiciones permitidas

    // Obtener posiciones permitidas
    const allowedPositions = getAllowedPositions(startAxis)

    // Devolver la posición permitida cuyo valor sea igual al start axis

}


// se usa?
const doesPathExists = (startAxis, letter) => {
    // Obteniendo una letra, necesito saber si encuentro tres posiciones consecutivas

    const allowedPositions = getAllowedPositions(startAxis)
    const posiblePathLetter = getPossibleLetters(letter)
    const nose = allowedPositions.map(x => maze[x[0]][x[1]]).filter(x => posiblePathLetter.includes(x))
    console.log(allowedPositions)

    return nose
    //Obtener la siguiente secuencia que será buscando las letras de "lettersToSearch" en las posiciones permitidas del maze

}


module.exports = { getGate, getPossibleLetters, doesPathExists, getAllowedPositions, isAllowedPosition }