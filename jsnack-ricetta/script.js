// ? Dati un input e due bottoni, l'utente popola una lista di ingredienti usando il primo bottone,
// al termine della quale preme un secondo bottone e viene generata un'immagine casuale di un pasto
// al centro dello schermo dopo 2 secondi per ogni ingrediente nella ricetta..

const UlElemet = document.getElementById ("ul")
const inputTextElement = document.getElementById ("input-text")
const buttonAdd = document.getElementById ("button-add")
const buttonGenPlate = document.getElementById ("button-gen")


buttonAdd.addEventListener ("click",
    function () {
        const ingrediente = inputTextElement.value
        aggiungiIngrediente(ingrediente)
    }
)

buttonGenPlate.addEventListener ("click",
    function () {
        setTimeout (revealImg, 2000)
    }
)


function aggiungiIngrediente (ingrediente) {
    const newLiElement = document.createElement("ul")
    newLiElement.append (ingrediente)
    UlElemet.appendChild(newLiElement)
}

function revealImg () {
    imgElement = document.getElementById ("img")
    imgElement.classList.remove("d-none")
}