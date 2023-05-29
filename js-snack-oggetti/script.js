// Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//     Codice giocatore
//     Nome
//     Cognome
//     Età
//     Media punti fatti per partita
//     Percentuale di successo per tiri da 3 punti
//     Stoppate 
//     Tiri 

// Generare casualmente le statistiche di gioco, secondo queste regole:
//     il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//     la media punti fatti per partita deve essere compresa tra 0 e 50
//     la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
//     le stoppate sono un numero intero compresot ra 0 e 30
//     i tiri sono un numero intero compreso tra 20 e 100

const NBAplayer = {
    "codice-giocatore": playerCode(),
    nome: "Lebron",
    cognome: "James",
    eta: 35,
    "media-punti-per-partita": mediaPunti(),
    "percentuale-di-successo-tiri-da-3": percentualeTiriDa3(),
    stoppate: stoppate(),
    tiri: tiri()
}

console.log(NBAplayer)

function playerCode () {
    const uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const digits = "1234567890"

    let randomLetters = ""
    let randomDigits = ""

    for (let i = 0 ; i < 3 ; i++) {
        const randomLetter = uppercaseLetters [Math.floor(Math.random() * uppercaseLetters.length)]
        randomLetters += randomLetter
    }

    for (let i = 0 ; i < 3 ; i++) {
        const randomDigit = digits [Math.floor(Math.random() * digits.length)]
        randomDigits += randomDigit
    }

    const code = randomLetters + randomDigits
    return code
}

function mediaPunti () {
    const media = Math.floor(Math.random() * 50) + 1
    return media
}

function percentualeTiriDa3 () {
    const tiriDa3 = Math.floor(Math.random() * 100) + 1
    return tiriDa3
}

function stoppate () {
    const stoppate = Math.floor(Math.random() * 30) + 1
    return stoppate
}

function tiri () {
    const tiri = Math.floor(Math.random() * 80) + 21
    return tiri
}