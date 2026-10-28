/*(Inventario) Si scriva un programma per gestire un inventario, formato da un 
insieme di coppie prodotto-quantità. Tali coppie vengono lette da tastiera, fino a 
quando l’utente inserisce “stop” come nome del prodotto. Stampare la lista dei 
prodotti inventariati, con le rispettive quantità, su una sola riga.
let inventario: {[k:string]:number} = {}
let prodotto: string = String(prompt("scegli un prodotto"))
while(prodotto!=="stop"){
  let presente: boolean = false
  let quantita: number = Number(prompt("scegli un numero"))
  for(let k in inventario){
    if(k===prodotto){
      presente = true
      break
    }
  }
  if(presente){
    inventario[prodotto] = inventario[prodotto] + quantita
    prodotto = String(prompt("scegli un prodotto"))

  } else {
    inventario[prodotto] = quantita
    prodotto = String(prompt("scegli un prodotto"))
  }
}
let stInv = ""
let coppie: [string, number][] = Object.entries(inventario)
for(let i: number = 0; i<coppie.length; i++){
  stInv = stInv + " " + "("+`${coppie[i]}`+")"
}*/


/*(Media dei voti) Si scriva un programma che, dato un insieme di studenti con i 
rispettivi voti di 3 esami, calcoli e visualizzi la media aritmetica dei voti di ciascuno. 
L’utente fornirà il nome di ogni studente, seguito dai suoi 3 voti. L’acquisizione 
termina quando l’utente inserisce “stop” come nome di uno studente.
let studenti: {[k:string]: number[]} = {}
let studente: string = String(prompt("Inserisci nome studente"))

//inserire nell'oggetto
while(studente!=="stop"){
  let a: number[] = []
  if(studente in studenti){
    studente = String(prompt("Inserisci nome studente"))
  } else {
    for(let i: number = 0; i<3; i++){
      let voto: number = Number(prompt("dimmi il voto"))
      a[i] = voto
    }
    studenti[studente] = a
    studente = String(prompt("Inserisci nome studente"))
  }
}
//calcolare la media 
for(let k in studenti){
  let somma: number = 0
  let array: number[] = studenti[k]
  for(let i: number = 0; i<array.length; i++){
    somma = somma + array[i]
  }
  let media: number = somma/3
  console.log(`${k}:${media.toFixed(2)}`)
}*/

/*Un negozio registra i suoi prodotti utilizzando un oggetto TypeScript: ogni chiave è il 
nome di un prodotto, che ha come valore associato un altro oggetto con chiavi:
prezzo, associato al prezzo unitario del prodotto, e
vendite, associato ad un array contenente le quantità vendute nei diversi giorni. 
Scrivere una funzione analizzaVendite che, dato un oggetto non vuoto con questa 
struttura, restituisce una tupla contenente 1) l’incasso complessivo e 2) il nome del 
prodotto con il maggior numero totale di pezzi venduti, in questo ordine. In caso di 
parità, restituire il prodotto alfabeticamente più piccolo.*/
function analizzaVendite(obj:{[chiavi:string]:{prezzo:number,vendite:number[]}}): [number,string]{
    let incassoTotale: number = 0
    let prodPrec: string = ""
    let totalePrec: number = -Infinity
    for(let k in obj){
        let totaleAttuale = 0
        let sommaAttuale = 0
        let prezzoAttuale = obj[k].prezzo
        for(let i: number = 0; i<obj[k].vendite.length;i++){
            sommaAttuale = sommaAttuale + obj[k].vendite[i]
        } 
        totaleAttuale = prezzoAttuale*sommaAttuale
        if(totalePrec<sommaAttuale){
            totalePrec = sommaAttuale
            prodPrec = k
        } else if(totalePrec===sommaAttuale){
            if(prodPrec === ""){
                prodPrec = k 
            } else if(k<prodPrec){
                prodPrec = k
            }
        }
        incassoTotale = incassoTotale + totaleAttuale
    }
    return [incassoTotale,prodPrec]
}


// TEST 1 - Esempio della slide
console.log(analizzaVendite({
    quaderno: { prezzo: 3, vendite: [2, 4] },
    penna: { prezzo: 2, vendite: [5, 3, 1] },
    gomma: { prezzo: 1, vendite: [1, 2, 0] }
}));
// Atteso: [39, "penna"]


// TEST 2 - Parità di pezzi venduti
console.log(analizzaVendite({
    matita: { prezzo: 1, vendite: [2, 4] },
    penna: { prezzo: 2, vendite: [5, 1] }
}));
// Atteso: [18, "matita"]


// TEST 3 - Un solo prodotto
console.log(analizzaVendite({
    libro: { prezzo: 10, vendite: [2, 3] }
}));
// Atteso: [50, "libro"]


// TEST 4 - Nessuna vendita
console.log(analizzaVendite({
    penna: { prezzo: 2, vendite: [0, 0] },
    quaderno: { prezzo: 5, vendite: [0, 0] }
}));
// Atteso: [0, "penna"]


// TEST 5 - Il più venduto non è il più redditizio
console.log(analizzaVendite({
    computer: { prezzo: 1000, vendite: [1, 1] },
    mouse: { prezzo: 20, vendite: [10, 20] },
    tastiera: { prezzo: 50, vendite: [3, 2] }
}));
// Atteso: [2850, "mouse"]





