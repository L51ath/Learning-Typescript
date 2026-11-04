/*(Perfetto) Dato x ≥ 1, trovare il più piccolo numero 
perfetto p ≥ x e stamparlo con la lista dei suoi divisori 
(escluso p) separati da +. */
function divisori(n:number): number[]{
    let j: number = 0
    let a: number[] = []
    for(let i:number = 1; i<=Math.floor(n/2);i++){
        if(n%i===0){
            a[j] = i
            j++
        }
    }
    return a
}
function somma(arr: number[]): number{
    let sum: number = 0
    for(let k of arr){
        sum = sum + k
    }
    return sum
}
function formattaDivisori(p: number): string{
    let a: number[] = divisori(p)
    let s: string = ""
    for(let i: number = 0; i<a.length; i++){
        if(i===0){
            s = `${p}` + "=" + s + `${a[i]}`
        } else {
            s = s + "+" + `${a[i]}`
        }
    }
    return s
}
function primoPerfetto(x: number): number{
    let i: number = x
    let per: boolean = false
    while(!per){
        if(i===somma(divisori(i))){
            per = true
        } else {
            i++
        }
    }
    return i
}

/*(Inventario) Leggere (una per volta) coppie 
prodotto-quantità fino a "stop", sommando le 
quantità dei prodotti ripetuti; stampare 
l'inventario su una riga.
type inventario = {[p:string]: number}
let inv: inventario = {}
let prodotto: string = String(prompt("scegli un prodotto"))
function aggiungi(inv:inventario, p:string, q:number): void{
    let trovato: boolean = false
    for(let k in inv){
        if(k===p){
            inv[k] = inv[k] + q
            trovato = true
        } 
    }
    if(!trovato){
        inv[p] = q
    }
} 
while(prodotto!=="stop"){
    let quantita: number = Number(prompt("scegli una quantita"))
    aggiungi(inv,prodotto,quantita)
    prodotto = String(prompt("scegli un prodotto"))
}
function formatta(inv:inventario): string{
    let a: [string,number][] = Object.entries(inv)
    let s: string = ""
    for(let k of a){
        s = s + `(${k[0]},${k[1]}) `
    }
    return s
}*/

/*(Analisi delle vendite) Dato il negozio, 
restituire una tupla [incasso totale, prodotto più 
venduto]. A parità di pezzi, vince il nome 
alfabeticamente minore.*/
type Prodotto = {prezzo:number, vendite:number[]}
type Negozio = {[nome:string]:Prodotto}

function totalePezzi(p: Prodotto): number{
    let totaleVenduti: number = 0
    for(let i: number = 0; i<p.vendite.length;i++){
        totaleVenduti = totaleVenduti + p.vendite[i]
    }
    return totaleVenduti
}

function incasso(p: Prodotto): number{
    let ricavo: number = p.prezzo*totalePezzi(p)
    return ricavo
}

function analizzaVendite(negozio:Negozio):[number,string]{
    let t:[number,string] = [0,""]
    let incassoTotale: number = 0
    let piuVend: string = ""
    for(let k in negozio){
        incassoTotale = incassoTotale + incasso(negozio[k])
        if(piuVend===""){
            piuVend = k
        } else if(totalePezzi(negozio[k])>totalePezzi(negozio[piuVend])){
            piuVend = k
        } else if(totalePezzi(negozio[k])===totalePezzi(negozio[piuVend])){
            if(k<piuVend){
                piuVend=k
            }
        }
    }
    t = [incassoTotale,piuVend]
    return t
        
}

console.log(analizzaVendite({ quaderno:{prezzo: 3, vendite: [2, 4]},  penna:{prezzo: 2, vendite: [5, 3, 1]},
 gomma:{prezzo: 1, vendite: [1, 2, 0]} }))



