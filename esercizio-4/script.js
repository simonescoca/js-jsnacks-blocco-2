// Dare la possibilità di inserire due parole
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due

const parola1 = prompt ("Inserisci una parola")
const parola2 = prompt ("Inseriscine un'altra")

parolaPiuLunga (parola1, parola2)

// FUNCTIONS ///////////////////////////////////////

/**
 * This Function calculates which one is the longest word between the 1st word and the 2nd one, entered by the user
 */

function parolaPiuLunga (primaParola, secondaParola) {
    if (primaParola.length > secondaParola.length) {
        console.log ("La prima parola è la più lunga: " + primaParola)

    } else if (primaParola.length < secondaParola.length) {
        console.log ("La seconda parola è la più lunga: " + secondaParola)

    } else {
        console.log ("Le due parole hanno la stessa lunghezza: " + primaParola + ", " + secondaParola)
    }
}