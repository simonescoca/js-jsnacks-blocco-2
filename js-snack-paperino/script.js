// ? A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

// # Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

const array = ["pippo", "PLUTO", "PapERino"];

const lowerArray = array.map ((element) => {
    element.toLowerCase()
    element[0].toUpperCase
})