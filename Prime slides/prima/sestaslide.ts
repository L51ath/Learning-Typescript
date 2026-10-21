/*Si scriva un programma che, dato un numero x, restituisca il più piccolo numero 
perfetto p tale che p ≥ x, e la lista dei suoi divisori separati da +.*/
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

/*Si scriva un programma che analizzi la funzione f(x) = x³ - 6x²+ 11x - 6 per valori di 
x compresi tra 1 e 4, a passi di 0.01.*/
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
console.log(min)


/* (Intersezione rette) Si scriva un programma che, dati quattro valori a, b, c, d, 
calcoli il punto di intersezione delle due rette y = ax+b e y = cx+d, se esiste*/









