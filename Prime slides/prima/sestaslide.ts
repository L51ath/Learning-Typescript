/*Si scriva un programma che, dato un numero x, restituisca il più piccolo numero 
perfetto p tale che p ≥ x, e la lista dei suoi divisori separati da +.
let n: number = 30
let per: boolean = false
while(!per){
    let st: string = ""
    let cont: number = 0
    for(let i: number = 1; i<n; i++){
        if(n%i===0){   
            if(i===1){
                st = st + 1
                cont = cont + i
            }
            else{
            st = st + "+" + i
            cont = cont + i
            }
        } 
    }
    if(cont===n){
        per = true
        console.log(`${n} = ${st}`)
    } else {
        n++
    }
}
*/

/*Si scriva un programma che analizzi la funzione f(x) = x³ - 6x²+ 11x - 6 per valori di 
x compresi tra 1 e 4, a passi di 0.01.
let max: number = -Infinity
let min: number = +Infinity
for(let i: number = 1; i<=4; i=i+0.01){
    let f: number = i**3 -6*(i**2) +11*i - 6
    if(f>=max){
        max = f
    }
    if(f<=min){
        min = f
    }
    if(f>=0){
        if(f<1e-6){
            console.log(`${i} è uno 0 della funzione`)
        }
    } else if(f<0){
        if(-f<1e-6){
            console.log(`${i} è uno 0 della funzione`)
        }
    }
}
console.log(max)
console.log(min)*/



/* (Intersezione rette) Si scriva un programma che, dati quattro valori a, b, c, d, 
calcoli il punto di intersezione delle due rette y = ax+b e y = cx+d, se esiste
let a: number = 2
let b: number = 0
let c:number = 0
let d:number = 5
if(a===c && b===d){
    console.log("le rette sono coincidenti")
} else if(a===c && b!==d){
    console.log("le rette sono parallele")
} else {
    let coordinataX: number|null = null
    let coordinataY: number|null = null
    let temp1: number = d-b
    let temp2: number = a-c
    
    coordinataX = temp1/temp2
    coordinataY = a*coordinataX +b
    
    
    console.log(`il punto di intersezione delle rette è (${coordinataX},${coordinataY})`)
}*/




/*(Tavola pitagorica) Si scriva un programma che, letto un intero n da tastiera, 
stampi la 
tavola pitagorica n x n, allineando correttamente i valori in colonne 
usando spazi*/
let n: number = 20
let tavola: string = ""
let numeroMaxSpazi: string = `${n*n}`
let misuraCif: number = numeroMaxSpazi.length

for(let i: number = 1; i<=n;i++){
    let riga: string = ""
    for(let j: number = 1; j<=n; j++){
        let spaziM: string = ""
        let cif: string = `${i*j}`
        let cifS: number = misuraCif - cif.length
        for(let k:number = 0; k<cifS; k++){
            spaziM = spaziM + " "
        }
        riga = riga + spaziM + " " + `${i*j}`    
    }
    tavola = tavola + "\n" + riga
}
console.log(tavola)


/*(Cambio monotonicità) Si scriva un programma che, data la funzione 
f(x) = x³ - 6x²+ 11x - 6, restituisca tutti i punti x in cui la funzione cambia 
monotonicità (da crescente a decrescente o viceversa) valutando la funzione 
per valori di x compresi tra 1 e 4, a passi di 0.01
let x_1: number = 0
let x_2: number = 0
let x_3: number = 0
let x_4: number = 0
for(let i: number = 1.02; i<=3.98; i = i + 0.01){
    let f:number = i**3 -6*i**2 + 11*i -6
    x_1 = (i-0.02)**3 -6*(i-0.02)**2 + 11*(i-0.02) -6
    x_2 = (i-0.01)**3 -6*(i-0.01)**2 + 11*(i-0.01) -6
    x_3 = (i+0.01)**3 -6*(i+0.01)**2 + 11*(i+0.01) -6
    x_4 = (i+0.02)**3 -6*(i+0.02)**2 + 11*(i+0.02) -6
    if((x_1<x_2&&x_2<f) && ((f>x_3)&&(x_3>x_4))){
        console.log(`${i} è un punto in cui la funzione cambia monotonia`)
    } else if((x_1>x_2&&x_2>f) && ((f<x_3)&&(x_3<x_4))){
        console.log(`${i} è un punto in cui la funzione cambia monotonia`)
    }
}*/


/*(Numeri narcisisti) Un numero naturale di d cifre si dice 
narcisista se è 
uguale alla somma delle sue cifre, ciascuna elevata alla potenza d.
Si scriva un programma che, dato un numero x, trovi il più piccolo numero narcisista n>=x.
let x: number = 406
let n: number = x
let narcisista: boolean = false
while(!narcisista){
    let stringa: string = x.toString()
    let potenza: number = stringa.length
    let somma: number = 0
    let temp: number = x
    while(temp/10!==0){
        somma = somma + (temp%10)**potenza
        temp = temp/10 - (temp%10)/10
    }
    if(somma===x){
        narcisista = true 
        console.log(`${n} è un numero narcisista`)
    } else {
        x++
        n = x
    }
}*/


/*(Triangolo di Tartaglia) Si scriva un programma che, letto un intero n da 
tastiera, stampi le prime n righe del 
Triangolo di Tartaglia, allineando 
correttamente i valori in colonne usando spazi*/
















