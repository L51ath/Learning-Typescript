//ping pong pari e dispari ricorsive
function pari(n:number):boolean{
    if(n===0){
        return true 
    } else if(n===1) {
        return false
    } else return dispari(n-1)
}
function dispari(n:number): boolean{
    if(n===1){
        return true 
    } else if(n===0) {
        return false
    } else return pari(n-1)
}
////////////////////////

//massimo comun divisore tra 2 numeri
function mcd(a:number, b:number):number{
    if(a===1||b===1){
        return 1
    } else if(a%b===0){
        return b
    } else if(b%a===0){
        return a
    } 
    if(a<b){
        return mcd(a,b-a)
    } else if(b<a){
        return mcd(a-b,b)
    }
    return -1
}




