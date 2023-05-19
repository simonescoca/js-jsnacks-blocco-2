// Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
// Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
// Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

const randomNumber = parseInt ( Math.random () * 100) + 1
let userNumber = 0

console.log (randomNumber)

while (userNumber != randomNumber ) {
    userNumber = prompt ("Indovina il numero che ho generato compreso tra 1 e 100, estremi inclusi")

    if ( ( isNaN (userNumber) || parseFloat (userNumber) !== parseInt (userNumber) || parseFloat (userNumber) < 1 || parseFloat (userNumber) > 100) ) {
        console.log ("C'è un errore di scrittura dei dati")

    } else if (userNumber > randomNumber) {
        console.log ("Il numero da indovinare è più piccolo")

    } else if (userNumber < randomNumber) {
        console.log ("Il numero da indovinare è più grande")
    } else {
        console.log ("Hai vinto!")
    }
}