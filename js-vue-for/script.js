// # Genero due cicli for con vue
// # uno che cicla in un array di quattro elementi e li stampa su schermo
// # l'altro che stampa su schermo i primi 10 numeri

const {createApp} = Vue
createApp ({
    data () {
        return {
            array: ["no", "bro", 6, false]
        }
    }
}).mount ("#app")