/*Definire una funzione replace(arr, target, replacement) che, 
dato un array arr, ritorni un nuovo array dove tutte le istanze di target 
sono sostituite da replacement. Non modificare l’array originale.*/
function replace(a: number[],t:number,r:number): number[]{
    let b: number[] = []
    for(let i: number = 0; i<a.length; i++){
        if(a[i]===t){
            b[i] = r
        } else {
            b[i] = a[i]
        }
    }
    return b
}



/*Definire una funzione contamaggioredi(arr, threshold) che ritorni il 
numero di elementi di arr maggiori strettamente di threshold.*/
function contamaggioredi(a: number[], treshold: number): number{
    let conta: number = 0
    for(let i: number = 0; i<a.length; i++){
        if(a[i]>treshold){
            conta = conta + 1
        }
    }
    return conta
}

/*Dati due array x e y ad n componenti, definire prodotto_scalare(x, y) 
che ritorna la somma di x[i]*y[i]. Se le lunghezze differiscono, ritorna 
NaN. Formula: x · y = somma_{i=1..n} x_i * y_i*/
function prodotto_scalare(x: number[], y: number[]): number{
    let prodotto: number = 0
    if(x.length!==y.length){
        return NaN
    } else {
        for(let i: number = 0; i<x.length; i++){
            prodotto = prodotto + x[i]*y[i]
        }
    }
    return prodotto
}

/*Definire clip(arr, threshold, replacement) che ritorni un nuovo 
array dove ogni elemento > threshold viene sostituito con replacement. 
Usare come valore di default per il parametro replacement la soglia 
threshold*/
function clip(a:number[], t:number,r:number = t): number[]{
    let b: number[] = []
    for(let i:number= 0; i<a.length; i++){
        if(a[i]>t){
            b[i] = r
        } else {
            b[i] = a[i]
        }
    }
    return b
}

/*(Statistiche con funzioni) Leggere da tastiera 6 numeri e memorizzarli in un 
array. Definire le seguenti funzioni (solo l'ultima può stampare)
let a: number[] = []
let n: number;
for(let i: number = 0; i<6;i++){
    n = Number(prompt("scegli un numero"))
    a[i] = n
}

function somma(a: number[]): number{
    let sum: number = 0
    for(let i: number = 0; i<a.length; i++){
        sum = sum + a[i]
    }
    return sum
}

function minMax(a: number[]): [number,number]{
    let t: [number,number] = [+Infinity,-Infinity]
    for(let i: number = 0; i<a.length; i++){
        if(a[i]<t[0]){
            t[0] = a[i]
        }
        if(a[i]>t[1]){
            t[1] = a[i]
        }
    }
    return t
}

function media(a: number[], cifre: number = 2): number{
    let sum: number = somma(a)
    let media: number = sum/6
    return Number(media.toFixed(cifre))
}


function stampaRiepilogo(a: number[]): void{
    console.log(`${a} sono i numeri`)
    console.log(`${somma(a)} è la somma dei numeri`)
    console.log(`${minMax(a)} sono minimo e massimo`)
    console.log(`${media(a)} è la media`)
}*/


/*Mostrare ripetutamente un menu e terminare quando l'utente digita q. Ogni volta 
chiedere un operatore (+, -, *, /, ^) e due numeri, e stampare il risultato. 
Implementare calcola(op: string, x: number, y: number): number 
con uno switch in cui ogni caso fa return (senza break), restituendo NaN 
per operatore sconosciuto o divisione per zero, e mostraMenu(): void
function calcola(op:string, x: number, y:number): number{
    switch (op) {
        case "+": return x+y
        case "-": return x-y
        case "*": return x*y
        case "/": if(y!==0){
            return x/y
        } else {
            return NaN
        }
        case "^": return x**y
        default: return NaN
    }
}

function mostraMenu():void{
    let op: string = String(prompt("scegli un operatore"))
    if(op!=="q"){
    let x: number = Number(prompt("scegli un numero"))
    let y: number = Number(prompt("scegli un numero"))
        while(op!=="q"){
           console.log(calcola(op,x,y))
           op = String(prompt("scegli un operatore"))
           if(op!=="q"){
            x = Number(prompt("scegli un numero"))
            y = Number(prompt("scegli un numero"))
           }
        }
    }
}*/










