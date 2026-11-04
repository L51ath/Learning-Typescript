//primalità su 10 numeri
/*for(let i: number = 0; i<10; i++){
    let n: number = Number(prompt("scegli un numero"))
    let primo: boolean = true 
    if(n<=1){
        console.log(`${n} non  è primo`)
        continue 
    } else {
        let j: number = 2
        while(j<=Math.floor(n/2) && primo){
            if(n%j===0){
                primo = false
            } else {
                j++
            }
        }
        if(primo){
            console.log(`${n} è primo`)
        } else {
            console.log(`${n} non è primo`)
        }
    }
}*/

//fattoriale
/*let n: number = Number(prompt("scegli un numero"))
let fact:number = 1
for(let i: number = 2; i<=n; i++){
    fact = fact*i
}
console.log(fact)*/

//Si scriva un programma che legge numeri da tastiera finché la somma non supera 101, quindi stampi la somma.
/*let addendo: number = Number(prompt("scegli un numero"))
let somma: number = addendo
while(somma<=101){
    addendo = Number(prompt("scegli un numero"))
    somma = somma + addendo 
}
console.log(somma)


//funzione tombolares
function tombola(a: number[], b: number[]): string{
    let contatore: number = 0
    for(let i: number = 0; i<a.length; i++){
        let current: number = a[i]
        for(let j: number = 0; j<b.length; j++){
            if(a[i]===b[j]){
                contatore++
                break
            }
        }
    }
    if(contatore===0){
        return "ritenta"
    } else if(contatore===1){
        return "ritenta"
    } else if(contatore===2){
        return "ambo"
    } else if(contatore===3){
        return "terno"
    } else {
        return "tombola"
    }
}

//Scrivere un programma che legga 3 numeri da tastiera e mostri a video il loro massimo.
let contatore: number = 0
let max: number = -Infinity
while(contatore<3){
    let n: number = Number(prompt("scegli un numero"))
    if(n>max){
        max = n
    }  
    contatore++
}
console.log(max)*/


//Si scriva un programma che legga da tastiera 10 interi e stampi il valore min
/*let contatore: number = 0
let min: number = +Infinity
while(contatore<10){
    let n: number = Number(prompt("scegli un numero"))
    if(n<min){
        min = n
    }  
    contatore++
}
console.log(min)*/

/*Si scriva un programma che legga da tastiera una serie di interi e stampi l’elemento letto se rispetta una delle seguenti proprietà: 
(i) E’ positivo e pari, oppure (ii) è
negativo e preceduto (nell’ordine di inserimento) da un intero con valore maggiore o uguale. 
Terminare l’acquisizione alla lettura di uno zero.
let n: number = Number(prompt("scegli un numero"))
let prec: number = n
let primoN: boolean = true 

while(n!==0){
    if(n>0 && n%2===0){
        console.log(n)
    } else if(!primoN && n<0 && n<=prec){
        console.log(n)
    }
    primoN = false 
    prec = n
    n = Number(prompt("scegli un numero"))
}*/

//scrivere funzione che dato intervallo conti il numero di anni bisestili
function contaBisestile(a: number,b:number): number {
    let conta: number = 0
    for(let i: number = a; i<=b; i++){
        if(i%400===0 || (i%4==0 && i%100!==0)){
            conta = conta + 1
        }
    }
    return conta
}

/*Si scriva un programma che dato un intero 
n stampi 
n asterischi sulla prima linea, 
n-2 asterischi sulla seconda linea, 
n-4 sulla terza e così via, fino ad arrivare a
stampare uno o due asterischi sull’ultima linea.*/
function asterischi(n:number): string{
    let s: string = ""
    for(let i: number = n; i>=1; i=i-2){
        let riga: string = ""
        for(let j:number = 0; j<i; j++){
            riga = riga + "*"
        }
        s = s + riga + "\n"
    }
    return s
}




