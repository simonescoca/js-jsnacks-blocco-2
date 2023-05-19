// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const listaNumeri = []
let sum = 0

while (sum < 50){

    const numeroDaInserire = parseInt (prompt ("Inserisci un numero intero positivo"))
    listaNumeri.push (numeroDaInserire)

    sum += listaNumeri[listaNumeri.length - 1]
}

console.log (listaNumeri)
console.log (sum)