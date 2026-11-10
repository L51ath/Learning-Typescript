/*(Perfetto) Dato x ≥ 1, trovare il più piccolo numero 
perfetto p ≥ x e stamparlo con la lista dei suoi divisori 
(escluso p) separati da +. 
Usa le funzioni
● divisori(n: number): number[]
● somma(arr: number[]): number
● formattaDivisori(p: number): string
● primoPerfetto(x: number): number*/
function divisori(n:number): number[]{
    let a: number[] = []
    let j:number = 0
    for(let i:number = 1; i<=Math.floor(n/2);i++){
        if(n%i===0){
            a[j] = i
            j++
        }
    }
    return a
}
function somma(arr: number[]):number{
    let sum: number = 0
    for(let i:number = 0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}
function formattaDivisori(p:number): string{
    let s: string = ""
    let a: number[] = divisori(p)
    for(let i:number = 0;i<a.length;i++){
        s = s===""?s+`${a[i]}`:s+ "+" + `${a[i]}`
    }
    return `${p}` + "=" + s
}
function primoPerfetto(x:number):number{
    let i:number = x
    while(somma(divisori(i))!==i){
        i++
    }
    return i
}

/*(Inventario) Leggere (una per volta) coppie 
prodotto-quantità fino a "stop", sommando le 
quantità dei prodotti ripetuti; stampare 
l'inventario su una riga.
Usa le funzioni
● aggiungi(inv: Inventario, p: 
string, q: number): void
● formatta(inv: Inventario): 
string
type Inventario = {[chiave:string]:number}
let inventario:Inventario = {}
function aggiungi(inv:Inventario,p:string,q:number):void{
    if(p in inv){
        inv[p] = inv[p] + q
    } else {
        inv[p] = q
    }
}
let prodotto:string = String(prompt("scegli un prodotto"))
while(prodotto!=="stop"){
    let quantita:number = Number(prompt("dimmi una quantita"))
    aggiungi(inventario,prodotto,quantita)
    prodotto = String(prompt("scegli un prodotto"))
}
function formatta(inv:Inventario):string{
    let s: string = ""
    for(let k in inv){
        s = s + "(" + `${k}`+","+`${inv[k]}`+")"
    }
    return s
}*/



/*(Analisi delle vendite) Dato il negozio, 
restituire una tupla [incasso totale, prodotto più 
venduto]. A parità di pezzi, vince il nome 
alfabeticamente minore.
Usa le funzioni
● totalePezzi(p: Prodotto): 
number
● incasso(p: Prodotto): number
● analizzaVendite(negozio: 
Negozio): [number, string]*/
type Prodotto = {prezzo:number,vendite:number[]}
type Negozio = {[chiavi:string]: Prodotto}

function totalePezzi(p:Prodotto):number{
    let totale: number = 0
    for(let k of p.vendite){
        totale = totale + k
    }
    return totale
}
function incasso(p:Prodotto): number{
    let totProd:number = p.prezzo*totalePezzi(p)
    return totProd
}
function analizzaVendite(negozio:Negozio):[number,string]{
    let prodPiuVenduto: string = ""
    let prezProdPiuVend: number = 0
    let prezzoTotale:number = 0
    for(let k in negozio){
        let prodCorrente:string = k
        prezzoTotale = prezzoTotale+incasso(negozio[k])
        if(prodPiuVenduto===""){
            prodPiuVenduto = k
            prezProdPiuVend = totalePezzi(negozio[k])
        } else if(totalePezzi(negozio[k])>prezProdPiuVend){
            prodPiuVenduto = k
            prezProdPiuVend = totalePezzi(negozio[k])
        } else if(totalePezzi(negozio[k])===prezProdPiuVend){
            if(k<prodPiuVenduto){
            prodPiuVenduto = k
            prezProdPiuVend = totalePezzi(negozio[k])
            }
        }
    }
   return [prezzoTotale,prodPiuVenduto]
}

/*(Registro studenti) Data una lista di studenti, 
stampare la classifica per media decrescente (a 
parità: ordine alfabetico), con la media a 2 cifre 
decimali (default), e frequenze degli studenti per 
fascia di media in [0,18), [18,24), [24,28), [28,30].
Usa le funzioni
● media(voti: number[], cifre: 
number): number
● precede(a: Studente, b: Studente): 
boolean
● classifica(s: Studente[]): string[]
● istogramma(s: Studente[]): Fasce*/
type Studente = {nome:string,voti:number[]}
type Fasce = {[chiavi:string]:number}
function media(voti:number[],cifre:number=2):number{
    let somma:number = 0
    let divisore:number = 0
    for(let k of voti){
        somma = somma + k
        divisore++
    }
    return Number((somma/divisore).toFixed(cifre))
}
function precede(a:Studente,b:Studente): boolean{
    let prec:boolean = true
    if(media(b.voti)>media(a.voti)){
        prec = false
    } else if(media(a.voti)>media(b.voti)){
        prec = true 
    }else{
        if(a.nome<b.nome){
            prec = true
        } else {
            prec = false
        }
    }
    return prec
}
function classifica(s:Studente[]):string[]{
    let arr:string[] = []
    let j:number = 0
    s.sort(confronta)
    for(let k in s){
        arr[j] = `${s[k].nome}` + " "+ `${media(s[k].voti)}`
        j++
    }
    return arr
}
function confronta(a:Studente,b:Studente):number{
    if(precede(a,b)){
        return - 1
    } else if(precede(b,a)){
        return 1 
    } else {
        return 0
    }
}
function istogramma(s:Studente[]):Fasce{
    let fasce:Fasce = {"[0,18)":0,"[18,24)":0,"[24,28)":0,"[28,30]":0}
    for(let k in s){
        let med:number = media(s[k].voti)
        if(med>=0&&med<18){
            fasce["[0,18)"] = fasce["[0,18)"] + 1
        } else if(med>=18&&med<24){
            fasce["[18,24)"] = fasce["[18,24)"] + 1
        } else if(med>=24&&med<28){
            fasce["[24,28)"] = fasce["[24,28)"] + 1
        } else {
            fasce["[28,30]"] = fasce["[28,30]"] + 1
        }
    }
    return fasce
}

// TEST 1: Esempio della slide
let studenti1: Studente[] = [
    {nome:"Anna", voti:[30,28,29]},
    {nome:"Bea", voti:[30,28,29]},
    {nome:"Zoe", voti:[30,29,30]},
    {nome:"Ugo", voti:[27,28,28]},
    {nome:"Eva", voti:[17,15,18]}
];

console.log("TEST 1 - CLASSIFICA", classifica(studenti1));
// ["Zoe: 29.67", "Anna: 29", "Bea: 29", "Ugo: 27.67", "Eva: 16.67"]

console.log("TEST 1 - ISTOGRAMMA", istogramma(studenti1));
// {"[0,18)":1, "[18,24)":0, "[24,28)":1, "[28,30]":3}


// TEST 2: Uno studente per fascia
let studenti2: Studente[] = [
    {nome:"A", voti:[10,12,14]},
    {nome:"B", voti:[18,20,22]},
    {nome:"C", voti:[25,26,27]},
    {nome:"D", voti:[28,29,30]}
];

console.log("TEST 2 - CLASSIFICA", classifica(studenti2));
// ["D: 29", "C: 26", "B: 20", "A: 12"]

console.log("TEST 2 - ISTOGRAMMA", istogramma(studenti2));
// {"[0,18)":1, "[18,24)":1, "[24,28)":1, "[28,30]":1}


// TEST 3: Valori esatti sui confini
let studenti3: Studente[] = [
    {nome:"A", voti:[18,18,18]},
    {nome:"B", voti:[24,24,24]},
    {nome:"C", voti:[28,28,28]},
    {nome:"D", voti:[30,30,30]}
];

console.log("TEST 3 - CLASSIFICA", classifica(studenti3));
// ["D: 30", "C: 28", "B: 24", "A: 18"]

console.log("TEST 3 - ISTOGRAMMA", istogramma(studenti3));
// {"[0,18)":0, "[18,24)":1, "[24,28)":1, "[28,30]":2}


// TEST 4: Parità di media, ordine alfabetico
let studenti4: Studente[] = [
    {nome:"Zoe", voti:[25,25,25]},
    {nome:"Anna", voti:[25,25,25]},
    {nome:"Marco", voti:[25,25,25]}
];

console.log("TEST 4 - CLASSIFICA", classifica(studenti4));
// ["Anna: 25", "Marco: 25", "Zoe: 25"]

console.log("TEST 4 - ISTOGRAMMA", istogramma(studenti4));
// {"[0,18)":0, "[18,24)":0, "[24,28)":3, "[28,30]":0}


// TEST 5: Array vuoto
let studenti5: Studente[] = [];

console.log("TEST 5 - CLASSIFICA", classifica(studenti5));
// []

console.log("TEST 5 - ISTOGRAMMA", istogramma(studenti5));
// {"[0,18)":0, "[18,24)":0, "[24,28)":0, "[28,30]":0}


// TEST 6: Ordinamento misto
let studenti6: Studente[] = [
    {nome:"Zoe", voti:[30,30,30]},
    {nome:"Carlo", voti:[18,18,18]},
    {nome:"Anna", voti:[30,30,30]},
    {nome:"Bruno", voti:[24,24,24]},
    {nome:"Dario", voti:[18,18,18]}
];

console.log("TEST 6 - CLASSIFICA", classifica(studenti6));
// ["Anna: 30", "Zoe: 30", "Bruno: 24", "Carlo: 18", "Dario: 18"]

console.log("TEST 6 - ISTOGRAMMA", istogramma(studenti6));
// {"[0,18)":0, "[18,24)":2, "[24,28)":1, "[28,30]":2}