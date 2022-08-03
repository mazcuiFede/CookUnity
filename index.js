const maze = require('./constants/maze2.js')
const alphabet = require('./constants/alphabet.js')
const { arrayContainsArray } = require('./utils/arrays.js')

var solucion = []

const isAllowedPosition = (axi) => {
  var result = 
  axi[0] >= 0 &&
  axi[0] < maze.length &&
  axi[1] >= 0 &&
  axi[1] < maze[0].length &&
  !arrayContainsArray(solucion, axi) &&
  letraByPosicion(axi) != -1
  
  return result
}

const obtenerAdyacencias = (startAxis) => {
  var results = []

  isAllowedPosition([startAxis[0], startAxis[1] - 1]) &&
    results.push([startAxis[0], startAxis[1] - 1])
  isAllowedPosition([startAxis[0] + 1, startAxis[1]]) &&
    results.push([startAxis[0] + 1, startAxis[1]])
  isAllowedPosition([startAxis[0], startAxis[1] + 1]) &&
    results.push([startAxis[0], startAxis[1] + 1])
  isAllowedPosition([startAxis[0] - 1, startAxis[1]]) &&
    results.push([startAxis[0] - 1, startAxis[1]])

  return results
}

const letraByPosicion = (posicion) => {
  return posicion && maze[posicion[0]][posicion[1]] ? maze[posicion[0]][posicion[1]] : undefined
}

const esLetraVecina = (rootLetter, letter) => {
  const positionOfLetter = alphabet.indexOf(letraByPosicion(rootLetter))

  let consecutiveLetters = [
    alphabet[positionOfLetter - 1],
    alphabet[positionOfLetter + 1],
  ]

  return consecutiveLetters.includes(letraByPosicion(letter))
}

const ultimasTresLetrasConsecutivas = (solucion) => {
  return (
    letraByPosicion(solucion[solucion.length - 1]) ===
      letraByPosicion(solucion[solucion.length - 2]) &&
    letraByPosicion(solucion[solucion.length - 2]) ===
      letraByPosicion(solucion[solucion.length - 3])
  )
}

const ultimaLetraIgualValorAAgregar = (solucion, valorAAgregar) => {
  return (
    letraByPosicion(solucion[solucion.length - 1]) ===
    letraByPosicion(valorAAgregar)
  )
}

const deboAgregarValor = (solucion, valorAAgregar) => {
  if (
    solucion.length === 1 &&
    esLetraVecina(solucion[solucion.length - 1], valorAAgregar)
  ) {
    return true
  }

  if (
    ultimasTresLetrasConsecutivas(solucion) &&
    esLetraVecina(solucion[solucion.length - 1], valorAAgregar)
  ) {
    return true
  }

  if (
    !ultimasTresLetrasConsecutivas(solucion) &&
    ultimaLetraIgualValorAAgregar(solucion, valorAAgregar)
  ) {
    return true
  }

  return false
}

const esAlgunaAdyacenciaLaSalida = (adyacencias, solucion) => {
  var adyacenciasB = adyacencias.filter((x) => maze[x[0]][x[1]] === 'B')
  return adyacenciasB.length > 0 && !arrayContainsArray(solucion, adyacenciasB)
}


const findPath = (solucion) => {
  const elementoAAnalizar = solucion[solucion.length - 1]

  if (elementoAAnalizar) {
    console.log('Empezamos con la raiz: ', elementoAAnalizar, solucion.length)

    const adyacencias = obtenerAdyacencias(elementoAAnalizar)

    const adyacenciaSalida = esAlgunaAdyacenciaLaSalida(adyacencias, solucion)


    console.clear()
    solucion.map((x) => {
      console.log(letraByPosicion(x), x)
    })


    if (adyacenciaSalida > 0) {
      solucion.push(adyacenciaSalida[0])
      console.log('Encontré la solución al problema de la resaca')
    } else {
      if (adyacencias[0] && deboAgregarValor(solucion, adyacencias[0])) {
        solucion.push(adyacencias[0])
        findPath(solucion)
      } else {
        if (adyacencias[1] && deboAgregarValor(solucion, adyacencias[1])) {
          solucion.push(adyacencias[1])
          findPath(solucion)
        } else {
          if (adyacencias[2] && deboAgregarValor(solucion, adyacencias[2])) {
            solucion.push(adyacencias[2])
            findPath(solucion)
          } else {
            const ultimoLugar = solucion.pop()
            maze[ultimoLugar[0]][ultimoLugar[1]] = -1
            findPath(solucion)
          }
        }
      }
    }
  }

}


solucion.push([0, 1])
findPath(solucion)
