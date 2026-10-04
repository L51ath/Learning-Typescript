/*Scrivere un programma che stampa la 
tabella di verità per la funzione 
Booleana ‘OR’*/
console.log(`${true||true}\n${true||false}\n${false||true}\n${false||false}`)

/*Scrivere un programma che, data una temperatura in Celsius, calcola e 
mostra a video la temperatura in Fahrenheit (F = C × 1.8 + 32)*/
function CtoF(a: number) : number {
    return (a*1.8) + 32
}
//senza funzione
let C: number = 50
let F: number = C*1.8 + 32
console.log(F)

/*Scrivere un programma che, dato un numero di secondi, calcola e mostra a 
video il numero di ore, minuti e secondi inclusi*/
function OMinSec(Sec: number) : string{
    let ore: number = Sec/3600 - (Sec%3600)/3600
    let SecRim: number = Sec - ore*3600
    let min: number = SecRim/60 - (Sec%60)/60
    SecRim = SecRim - min*60
    return `in ${Sec} secondi ci sono ${ore} ore, ${min} minuti, ${SecRim} secondi`
}

