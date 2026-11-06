//array di oggetti con almeno 2 chiavi numeriche 
//scrivere funzione che restituisce la somma massima 
//in caso di parità scrivere il primo dell'array
type XandY = {x:number,y:number,[chiave:string]: any}
function maxSum(arr:XandY[]): XandY|undefined{
    if(arr.length===0){
        return undefined
    } else {
        let maxSum = arr[0].x + arr[0].y
        let oggettoPiugrosso: XandY = arr[0]
        for(let i:number = 1; i<arr.length; i++){
            if(maxSum<arr[i].x + arr[i].y){
                maxSum = arr[i].x + arr[i].y
                oggettoPiugrosso = arr[i]
            } 
        }
        return oggettoPiugrosso
    }
}


// ESERCIZIO 2: domina(f, g, a, b)
// true se f(n) >= g(n) per ogni n naturale in [a, b], altrimenti false.
function domina(f:(n:number)=>number,g:(n:number)=>number,a:number,b:number):boolean{
    let dominio = true 
    for(let i:number = a; i<=b;i++){
        if(f(i)<g(i)){
            dominio = false
            break
        }
    }
    return dominio
}


// ESERCIZIO 3: paren(n)
// "(1)((2))(((3)))..." fino a n: il numero k è racchiuso in k coppie di parentesi.s
function paren(n:number): string{
    let s: string = ""
    for(let i:number = 1;i<=n;i++){
        let corrente:string = ""
        let left: string = "("
        let right: string = ")"
        for(let j:number = 1;j<i;j++){
            left = "("+ left 
            right = right + ")"
        }
        corrente = left+`${i}`+right
        s = s + corrente 
    }
    return s
}



// ESERCIZIO 4: bogoval(s)
function bogoval(s:string):number{
    let sum: number = 0
    for(let i: number = 0; i<s.length;i++){
        if(s[i]==="+"){
            sum = sum + 1
        } else if(s[i]==="-"){
            sum = sum  - 1
        } else {
            let n: number  = Number(s[i])
            sum = sum + n
        } 
    }
    return sum
}





//ESERCIZIO 5: filtraOrdinaCoppie(v)
// Filtra le coppie con entrambi i valori positivi e somma >= 10,
// poi ordina per somma crescente e, a parità, per primo elemento crescente.
function filtraOrdinaCoppie(v:[number,number][]):[number,number][]{
    let a: [number,number][] = filtra(v)
    a = ordina(a)
    return a
}

function filtra(v:[number,number][]):[number,number][]{
    let a: [number,number][] = []
    let j:number = 0
    for(let i:number = 0; i<v.length;i++){
        let pos:boolean = true
        let sum:number = 0
        for(let j:number = 0; j<v[i].length;j++){
            if(v[i][j]<=0){
            pos = false
            } else {
                sum = sum + v[i][j]
            }
        } 
        if(pos&&sum>=10){
            a[j] = v[i]
            j++
        }
    }
    return a
}

function ordina(v:[number,number][]): [number,number][]{
    v.sort(confronta)
    return v

}

function confronta(a:[number,number],b:[number,number]):number{
    if((a[0]+a[1])!==(b[0]+b[1])){
        return (a[0]+a[1]) - (b[0]+b[1])
    } else {
        return a[0] - b[0]
    }
}


//filtraCorso ESERCIZIO 6
function filtraCorso(a:[string,number][],f:(a:number)=>boolean):[string,number][]{
    let array: [string,number][] = []
    let j: number = 0
    for(let i: number = 0;i<a.length;i++){
        if(matricolaValida(a[i][1])&&f(a[i][1])){
            array[j] = a[i]
            j++
        }
    }  
    array.sort(confronto)
    return array
}

function matricolaValida(n:number):boolean{
    let valido:boolean 
    if(String(n).length===6&&n>0){
        valido = true
    } else {
        valido = false
    }
    return valido
}

function confronto(a:[string,number],b:[string,number]):number{
    if(a[0]<b[0]){
        return - 1
    } else if(a[0] === b[0]){
        return b[1] - a[1]
    }
    return 1
}


// ESERCIZIO 6: dronePiuVicino(a, p, epsilon)
// Restituisce il drone (punto di a) con distanza Euclidea minima da p.
// Due distanze d1, d2 sono considerate uguali se |d1 - d2| < epsilon.
// A parità (entro la tolleranza) restituisce il primo punto dell'array.









