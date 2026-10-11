/*(Sommatoria) Si scriva un programma che dato un numero naturale n calcoli e 
stampi la somma dei numeri fino a n.*/
function sommatoria(n:number): number{
    let sum: number = 0
    for(let i: number = 0; i<=n; i++){
        sum = sum + i
    }
    return sum
}

/*(Accumulatore) Si scriva un programma che legge numeri finché la somma non 
supera 101, quindi stampi la somma.
let n: number = Number(prompt("scegli un numero"))
let sum: number = n
while(sum<=101){
    n = Number(prompt("scegli un numero"))
    sum = n + sum
}*/



/*(Primo) Si scriva un programma che legge un numero natruale n e valuti se è primo 
(un numero è primo se non esiste un numero d in [2,n-1] tale che n sia divisibile per 
d). Si stampi il tempo di esecuzione del programma.
function primo(n: number): string{
    if(n<=1){
        return `${n} non è primo`
    } else if(n===2) {
        return `${n} è primo`
    } else {
        for(let i: number = 2; i<=Math.floor(n/2); i++){
            if(n%i===0){
                return `${n} non è primo`
            } 
        }
        return `${n} è primo`
        
    }  
}

let start: number = Date.now()

console.log(primo(15485863))

let end: number = Date.now()
console.log(`tempo di esecuzione ${end-start} ms`)
*/

//senza la sintassi con function
let n: number = 5
let start: number = Date.now() 
if(n<=1){
    console.log(`${n} non è primo`)
} else if(n===2){
    console.log(`${n} è primo`)
} else {
    let primo: boolean = true 
    for(let i: number = 2; i<=Math.floor(n/2); i++){
        if(n%i===0){
            primo = false
            break;
        } 
    } 
    if(primo){
        console.log(`${n} è primo`)
    } else {
        console.log(`${n} non è primo`)
    }
}
let end: number = Date.now()
console.log(`tempo di esecuzione ${end-start} ms`)

/*(MultiPrimo) Si modifichi il programma di sopra per leggere 10 numeri n e calcoli per 
ciascuno se si tratta di un numero primo.
let contatore: number = 1
while(contatore<=10){
let n: number = Number(prompt("scegli un numero"))
 if(n<=1){
    console.log(`${n} non è primo`)
} else if(n===2){
    console.log(`${n} è primo`)
} else {
    let primo: boolean = true 
    for(let i: number = 2; i<=Math.floor(n/2); i++){
        if(n%i===0){
            primo = false
            break;
        } 
    } 
    if(primo){
        console.log(`${n} è primo`)
    } else {
        console.log(`${n} non è primo`)
    }
}
contatore++
}*/

/*(Fattoriale) Si scriva un programma che dato un intero n calcoli e stampi il suo fattoriale.
Si ricorda che il fattoriale di n è n! = 1*2*….*(n-1)*n*/
function fattoriale(n: number): number{
    let prodotto: number = 1
    for(let i: number = 1; i<=n;i++){
        prodotto = prodotto * i
    }
    return prodotto
}

/*(Asterischi) Si scriva un programma che dato un intero n stampi n asterischi sulla prima 
linea, n − 2 asterischi sulla seconda linea, n − 4 sulla terza e così via, fino ad arrivare a 
stampare uno o due asterischi sull’ultima linea*/
function asterischi(n: number): string{
    let ast: string = ""
    for(let i: number = n; i>=1; i=i-2){
        let riga: string = ""
        for(let j: number = i; j>0 ; j--){
            riga = riga + "*"
        }
        ast =  ast + riga + "\n"
    } 
    return ast
}

/*(Stampa selettiva) Si scriva un programma che legga da tastiera degli interi e stampi 
l’elemento letto se rispetta una delle seguenti proprietà: (i) E’ positivo e pari, oppure (ii) è 
negativo e preceduto (nell’ordine di inserimento) da un intero con valore maggiore o 
uguale. Terminare la l’acquisizione alla lettura di uno zero.
let n: number = Number(prompt("scegli un numero"))
let prec: number = -Infinity
while(n!== 0){
    if(n>0 && n%2==0){
        console.log(n)
    } else if(n<0 && prec>=n){
        console.log(n)
    }
    prec = n
    n = Number(prompt("scegli un numero"))
}*/

/*(Media) Si scriva un programma che legga da tastiera 10 interi e stampi la media 
aritmetica di tutti i valori diversi da zero e di segno uguale all’ultimo valore della sequenza.
let sPos: number = 0
let sNeg: number = 0
let dPos: number = 0
let dNeg: number = 0
let n: number = 0
for(let i: number = 0; i<10;i++){   
    n = Number(prompt("scegli un numero"))
    if(n>0){
        sPos = sPos + n
        dPos++
    } else if(n<0){
        sNeg = sNeg + n
        dNeg++
    }
}
if(n>0){
    console.log(`la media dei positivi è ${sPos/dPos}`)
} else if(n<0){
    console.log(`ma media dei negativi è ${sNeg/dNeg}`)
} else {
    console.log("non rispetta la specifica")
}*/







