// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

console.log ("Ti faccio inserire numeri nell'array finchè la loro somma non arriva a 50")

const listaNumeri = []
let sum = 0

while (sum < 50) {

    let numeroDaInserire = prompt ("Inserisci un numero intero positivo")

    if ( isNaN(numeroDaInserire) || parseFloat (numeroDaInserire) !== parseInt (numeroDaInserire) || parseFloat (numeroDaInserire) < 0) {
        console.log ("C'è un errore di scrittura dei dati")

    } else {
        numeroDaInserire = parseInt (numeroDaInserire)
        listaNumeri.push (numeroDaInserire)
        sum += listaNumeri[listaNumeri.length - 1]
    }
}

console.log (listaNumeri)
console.log (sum)