// * Crea un array composto da 15 automobili.
// * Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// * Dividi le automobili in 3 array separati: 

// * nel primo array solo le auto a benzina,   (ciclo for )
// * nel secondo solo le auto a diesel,   (ciclo foreach)
// * nel terzo il resto delle auto.  (array.filter)

// * Infine stampa separatamente i 3 array.

const carList = []

for (let i = 0 ; i < 15 ; i++) {
    const newCar = genCar()
    carList.push (newCar)
}

function genCar () {
    const newCar = {
        marca: brand (),
        modello: model(),
        alimentazione: fuel()
    }
    return newCar
}


function brand () {
    const brands = ["BMW", "MERCEDES", "AUDI", "PORSCHE", "FERRARI", "LAMBORGHINI"]
    const randomBrand = brands [Math.floor (Math.random() * brands.length)]
    return randomBrand
}

function model () {
    const models = ["X1", "G63", "RS6", "911-GT3", "SF-90", "REVUELTO"]
    const randomModel = models [Math.floor (Math.random() * models.length)]
    return randomModel
}

function fuel () {
    const fuels = ["benzina", "diesel", "gpl", "electric", "metano", "e-fuel"]
    const randomfuel = fuels [Math.floor (Math.random() * fuels.length)]
    return randomfuel
}

// * ora seleziono ciò che mi interessa dall'array generato

const aBenzina = []

for (let i = 0 ; i < carList.length ; i++) {
    if (carList[i].alimentazione == "benzina") {
        aBenzina.push (carList[i])
    }
}

console.log (aBenzina)