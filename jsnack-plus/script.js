// Generare una lista usando una funzione:
//   - nell'html ci dovrà essere esclusivamente un elemento ul parent
//   - attraverso una funzione creiamo un singolo elemento html di tipo li
//   - poi ne aggiungiamo una decina all'ul, sempre via js

// BONUS: Se clicchiamo sul li il suo testo verrà sbarrato

const ulElement = document.getElementById ("ul")
const userWord = prompt ("Che inseriamo 10 volte nella lista?")

for (let i = 0 ; i < 10 ; i++) {
    const liElement = createElementLi (userWord)
    ulElement.appendChild (liElement)
    liElement.addEventListener ("click",
        function () {
            liElement.classList.toggle ("testo-barrato")
        }
    )
}

// FUNCTIONS //////////////////////////////////

/**
 * Creates a new li element
 * @param liContent with custom content
 * @returns the new li with custom content
 */

function createElementLi (liContent) {
    const liElement = document.createElement ("li")
    liElement.append (liContent)
    return liElement
}