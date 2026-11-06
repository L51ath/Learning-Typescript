/*(Giorni sempre più caldi) Si vogliono ottenere delle statistiche sulle temperature 
alte registrate durante una settimana. Consideriamo un giorno di caldo intenso 
se la temperatura massima è uguale o superiore ai 32°C. 
Scrivere un programma che legga da tastiera le temperature massime di sette 
giorni, e le memorizzi in un array. Successivamente, si conti il numero di giorni in 
cui c’è stato caldo intenso durante la settimana data, e lo si stampi.*/
let a: number[] = []
let n: number
let contatore: number = 0
for(let i:number=0;i<7;i++){
    n = Number(prompt("dammi una temperatura"))
    a.push(n)
}
for(let j:number = 0; j<a.length; j++){
    if(a[j]>=32){
        contatore++
    }
}
console.log(contatore)


/*Si scriva un programma che, dato un insieme di studenti con i rispettivi voti di 3 
esami, calcoli e visualizzi la media aritmetica dei voti di ciascuno. L’utente fornirà il 
nome di ogni studente, seguito dai suoi 3 voti. L’acquisizione termina quando l’utente 
inserisce “stop” come nome di uno studente.
let a: [string,number[]][] = []
let nome: string = String(prompt("nome studente"))
let i: number = 0

while(nome !== "stop"){
    a[i] = [nome,[]]
    let voti: number[] = a[i][1]
    for(let k: number = 0; k<3;k++){
        let voto:number = Number(prompt("dammi un voto"))
        voti[k] = voto
    }
    i++
    nome = String(prompt("nome studente"))
}
console.log(a)

for(let i: number = 0; i<a.length; i++){
    let nome = a[i][0]
    let somma: number = 0
    let media: number = 0
    for(let j: number = 0; j<a[i][1].length;j++){
        somma = somma + a[i][1][j]
    }
    media = somma/3
    console.log(`${nome}:${media}`)
}*/


/*Si scriva un programma per gestire un inventario, formato da un insieme di 
coppie prodotto-quantità. Tali coppie vengono lette da tastiera, fino a quando 
l’utente inserisce “stop” come nome del prodotto. Stampare la lista dei prodotti 
inventariati, con le rispettive quantità, su una sola riga. */
type prodotti = [string,number]
let prod:string = String(prompt("scegli un prodotto o stop"))
let inv: prodotti[] = []
while(prod!=="stop"){
    let quantita: number = Number(prompt("scegli un numero"))
    let prodotto:prodotti = [prod,quantita]
    let prodottoPresente: boolean = false
    for(let i:number = 0;i<inv.length;i++){
        if(inv[i][0]===prodotto[0]){
            prodottoPresente = true 
            inv[i][1] = inv[i][1] + quantita
        }
    }
    if(!prodottoPresente){
        inv.push(prodotto)
    } 
    prod = String(prompt("scegli un prodotto"))
}
let inventario: string = ""
for(let k of inv){
    inventario = inventario===""? inventario + "("+`${k[0]}`+","+`${k[1]}`+")":inventario + " " + "("+`${k[0]}`+","+`${k[1]}`+")"
}
console.log(inventario)



