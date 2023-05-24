// Creare una funzione che restituisca un array di quattro numeri randomici diversi tra loro tra 1 e 5 inclusi

const randomLengthArray = parseInt ( prompt ("Genero un array di numeri interi positivi da cui andare poi a pescare, quanto lo vuoi lungo?") )
const randomLengthArrayResult = parseInt ( prompt ("Quanto lo vuoi lungo l'array di numeri casuali non ripetuti?") )

const finalArray = randomNotRepeatedNumbers (randomLengthArray, randomLengthArrayResult)
console.log (finalArray)

function randomNotRepeatedNumbers (arrayLength, arrayResultLength) {
    if (arrayResultLength > arrayLength) {
        console.log ("Non puoi ottenere un array di numeri casuali non ripetuti più lungo dell'array da cui pesco i numeri stessi")

    } else {
        const array = []

        for (let i = 0 ; i < arrayLength ; i++) {
            const arrayElement = i + 1
            array.push (arrayElement)
        }

        console.log ("L'array da cui pesco: ", array)
        const arrayResult = []

        while (arrayResult.length < arrayResultLength) {
            const arrayResultElemet = array [Math.floor (Math.random() * array.length)]
            if (!arrayResult.includes (arrayResultElemet)) {
                arrayResult.push (arrayResultElemet)
            }
        }
        return arrayResult
    }
}