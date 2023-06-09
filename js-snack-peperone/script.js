// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

// Bonus:
// crea un peperone con una funzione

const peperoni = []

for (let i = 0 ; i < 10 ; i++) {
    const nuovoPeperone = peperone()
    peperoni.push(nuovoPeperone)
}

console.log(peperoni)
console.log ("Il peso totale di tutti questi peperoni è: ", pesoTotale().toFixed(3), " grammi")

function peperone () {
    const peperone = {
        "varietà": varieta (),
        peso: peso(),
        lunghezza: lunghezza()
    }
    return peperone
}

function varieta () {
    const varietaPossibili = ["verde", "giallo", "rosso"]
    const varieta = varietaPossibili [Math.floor (Math.random() * varietaPossibili.length)]
    return varieta
}

function peso () {
    const pesoInGrammi = (Math.random() * 400) + 100
    return pesoInGrammi
}

function lunghezza () {
    const lunghezzaInCm = (Math.random() * 15) + 10
    return lunghezzaInCm
}

function pesoTotale () {
    let pesoTotale = 0

    for (let i = 0 ; i < peperoni.length ; i++) {
        const pesoCiascuno = peperoni[i].peso
        pesoTotale += pesoCiascuno
    }

    return pesoTotale
}