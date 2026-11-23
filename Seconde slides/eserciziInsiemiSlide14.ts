//INSIEMI
type Stringset = {[proprietà:string]:boolean}
type Numberset = {[proprietà:number]:boolean}

//funzione per l'inserimento in un insieme 
function inserisci(insieme: Stringset,elemento:string):void{
    insieme[elemento] = true
}
//funzione per eliminare un elemento
function elimina(insieme:Stringset,elemento:string):void{
    delete insieme[elemento]
}
//funzione per dire se un elemento appartiene all'insieme 
function appartiene(insieme:Stringset,elemento:string):boolean{
    if((elemento in insieme)&&insieme[elemento] === true){
        return true
    } else {
        return false
    }
}
//funzione per fare l'unione insiemistica
function unione(A:Stringset, B:Stringset):Stringset{
    let C:Stringset = {}
    for(let i in B){
        if(!appartiene(C,i)){
            C[i] = true
        }
    }
    for(let i in A){
        if(!appartiene(C,i)){
            C[i] = true
        }
    }
    return C
}
//funzione per l'intersezione insiemistica
function intersezione(A:Stringset,B:Stringset):Stringset{
    let C:Stringset = {}
    for(let i in A){
        if(appartiene(B,i)){
            C[i] = true
        }
    }
    return C
}
//funzione per la differenza insiemistica
function differenza(A:Stringset,B:Stringset):Stringset{
    let C:Stringset = {}
    for(let i in A){
        if(!(appartiene(B,i))){
            C[i] = true 
        }
    }
    return C
}
//funzione per verifica sottoinsieme 
function sottoinsieme(A:Stringset,B:Stringset):boolean{
    for(let i in A){
        if(!appartiene(B,i)){
            return false
        }
    }
    return true 
}
//funzione di uguaglianza insiemistica
function uguali(A:Stringset,B:Stringset):boolean{
    return (sottoinsieme(A,B)&&sottoinsieme(B,A))
}








//MULTIINSIEMI
type StringMultiSet = {[element:string]:number}
type NumberMultiSet = {[element:number]:number}

//funzione per restituire la molteplicità di un elemento
function molteplicita(M:StringMultiSet, elemento:string):number{
    if(elemento in M){
        return M[elemento]
    } else {
        return 0
    }
}
//funzione per inserire elementi 
function inserisciMulti(M: StringMultiSet, elemento:string, quantita:number): void{
   if(molteplicita(M,elemento)>0){
    M[elemento] = M[elemento] + quantita
   } else {
    M[elemento] = quantita
   }
}
//funzione per rimuovere elementi
function rimuoviMulti(M:StringMultiSet,elemento:string,quantita:number): void{
    if(molteplicita(M,elemento)-quantita<=0){
        delete M[elemento]
    } else {
        M[elemento] = M[elemento]-quantita
    }
}
//funzione unione molteplicità
function unioneMulti(A:StringMultiSet, B:StringMultiSet):StringMultiSet{
    let C:StringMultiSet = {}
    for(let i in A){
        if(i in B){
            C[i] = A[i]>=B[i]? A[i]:B[i]
        } else{
            C[i] = A[i]
        }
    }
    for(let j in B){
        if(!(j in A)){
            C[j] = B[j] 
        }
    }
    return C
}
//funzione intersezione molteplicità
function IntersezioneMulti(A:StringMultiSet,B:StringMultiSet):StringMultiSet{
    let C:StringMultiSet = {}
    for(let i in A){
        if(i in B){
            C[i] = A[i]>=B[i]?B[i]:A[i]
        } 
    }
    return C
}
//funzione differenza molteplicità
function differenzaMulti(A: StringMultiSet, B:StringMultiSet):StringMultiSet{
    let C:StringMultiSet = {}
    for(let i in A){
        let c:number = 0
        if(i in B){
            c = A[i] - B[i]
        } else {
            C[i] = A[i]
        }
        if(c>0){
            C[i] = c
        }
    }
    return C
}
//funzione cardinalità multi
function cardinalitaMulti(M:StringMultiSet):number{
    let cardinalità:number = 0
    for(let i in M){
        cardinalità = cardinalità + M[i]
    }
    return cardinalità
}




//ESERCIZI SLIDE 14
//sottoinsiemi multi
function sottoinsiemeMulti(A:StringMultiSet,B:StringMultiSet):boolean{
    for(let i in A){
        if(molteplicita(B,i)>0){
            if(!(molteplicita(A,i)<=molteplicita(B,i))){
                return false
            }
        } else {
            return false
        }
    }
    return true
}

//normalizza 
function normalizza(A:StringMultiSet):StringMultiSet{
    let totMolt:number = 0
    for(let i in A){
        totMolt = totMolt + A[i]
    }
    let insNorm: StringMultiSet = {}
    for(let j in A){
        insNorm[j] = A[j]/totMolt
    }
    return insNorm
}

//verifica partizione di array di insiemi
function partizione(P:Stringset[],A:Stringset):boolean{
    //verifico insieme vuoto
    for(let i:number = 0;i<P.length;i++){
        if(insiemeVuoto(P[i])){
            return false
        }
    }

    //verifico intersezione
    for(let i :number = 0; i<P.length; i++){
        let insiemeAttuale = P[i]
        for(let j:number = i+1;j<P.length;j++){
            for(let k in insiemeAttuale){
                if(appartiene(P[j],k)){
                    return false
                }
            }
        }
    }
    //verifico unione 
    let C:Stringset = {}
    for(let i in P){
        C = unione(P[i],C)
    }
    if(!(sottoinsieme(A,C)&&sottoinsieme(C,A))){
        return false
    }
    return true
}
//funzione ausiliaria insieme vuoto
function insiemeVuoto(A:Stringset):boolean{
    for(let i in A){
        return false
    }
    return true 
}


//prodotto cartesiano 
type Prodotto = [number|string,number|string][]
function cartesiano(A:Stringset|Numberset,B:Stringset|Numberset):Prodotto{
    let prodottoCartesiano:Prodotto = []
    for(let i in A){
        for(let j in B){
            prodottoCartesiano.push([i,j])  
        }
    }
    return prodottoCartesiano
}

//top k elementi restituisci i k elementi piu frequenti ordinati per molteplicità(se pari alfabetico)
function topK(A:StringMultiSet,k:number):string[]{
    let B: string[] = []
    let C:[string,number][] = []
    for(let i in A){
        C.push([i,A[i]])
    }
    C.sort(confronto)
    for(let i:number = 0; i<k&&i<C.length;i++){
        B.push(C[i][0])
    }
    return B
    
}
//funzione ausiliaria per confronti
function confronto(A:[string,number],B:[string,number]):number{
    if(A[1]!==B[1]){
        return B[1] - A[1]
    } else {
        if(A[0]<B[0]){
            return -1
        } else if(A[0]===B[0]){
            return 0
        } else {
            return 1
        }
    }
}



//esercizio sul powerSet magari piu in la 




//Anagrammi: date due stringhe (in minuscolo) stabilire se sono anagrammi
//(stesse lettere con le stesse molteplicità in qualsiasi ordine)
//hint spezza il problema con funzioni
//contaLettere(s:string):StringMultiSet
//ugualiMulti(A,B):boolean
//anagrammi(a:string,b:string):boolean
function anagrammi(a:string, b:string):boolean{
    if(ugualiMulti(contaLettere(a),contaLettere(b))){
        return true
    } else{
        return false
    }
}
function contaLettere(s:string):StringMultiSet{
    let A:StringMultiSet = {}
    for(let i:number = 0;i<s.length;i++){
        inserisciMulti(A,s[i],1)
    }
    return A
}
function ugualiMulti(A:StringMultiSet,B:StringMultiSet):boolean{
    let C:StringMultiSet = differenzaMulti(A,B)
    let K:StringMultiSet = differenzaMulti(B,A)
    for(let i in C){
        return false
    }
    for(let j in K){
        return false
    }
    return true
}

/*Coppie con somma s (insiemi). Dato un array a di interi non negativi e un intero 
s, contare le coppie di valori distinti x < y presenti in a con x + y = s. Ogni 
coppia conta una volta sola, anche se i valori compaiono più volte nell’array. 
Usare un NumberSet.*/
//funzione ausialiaria che trasforma un array di numeri in un set
function arrayTOnumberSet(a:number[]):Numberset{
    let N:Numberset = {}
    for(let i of a){
        if(!(i in N)){
            N[i] = true
        }
    }
    return N
}

function contaCoppie(a:number[],k:number):number{
    let contatore:number = 0
    let N:Numberset = arrayTOnumberSet(a)
    for(let i in N){
        for(let j in N){
            if(Number(i)<Number(j)&&Number(i)+Number(j)===k){
                contatore++
            }
        }
    }
    return contatore
}
