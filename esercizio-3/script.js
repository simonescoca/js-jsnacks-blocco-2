// Calcola la somma e la media dei primi 10 numeri

const primiDieciNumeri = []
let sum = 0

for (let i = 1 ; i < 11 ; i++) {
    const numero = i
    primiDieciNumeri.push(numero)
}

console.log(primiDieciNumeri)

for (let i = 0 ; i < primiDieciNumeri.length ; i++) {
    sum += primiDieciNumeri[i]
}

const ave = (sum / primiDieciNumeri.length)

console.log ("La somma dei primi 10 numeri è: " + sum)
console.log ("La media dei primi 10 numeri è: " + ave)