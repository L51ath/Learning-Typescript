// ESERCIZIO 1 - PUNTI SPESA
// Calcolare i punti accumulati dagli acquisti di un cliente,
// assegnando un punto per prodotto e un bonus ogni tre acquisti
// di pane. Restituire -1 se è presente un prodotto non valido.
function punti_spesa(a:string[]):number{
    let punti:number = 0
    let contaPane: number = 0
    if(a.length === 0){
        return 0
    }
    for(let i:number = 0;i<a.length;i++){
        switch(a[i]){
            case "pane":
                punti=punti + 1
                contaPane = contaPane+1
                break;
            case "latte":
                punti = punti + 1
                break;
            case "sapone":
                punti = punti + 1
                break;
            case "acqua":
                punti = punti + 1
                break;
            default:
                return - 1
        }
        if(contaPane%3===0){
            punti = punti + 1
        }
    }
    return punti
}



// ESERCIZIO 2 - MINIMA STRINGA PALINDROMA
// Trovare la stringa palindroma più corta in un array di stringhe.
// In caso di parità, restituire la prima in ordine di apparizione.
// Se non esistono stringhe palindrome, considerare l'intero array.
function minima_stringa(a:string[]):string{
    if(palindroma(a[0])){
        return a[0]
    } 
    let stringaPiccola: string = a[0]
    for(let i: number = 1; i<a.length;i++){
        if(palindroma(a[i])){
            if(a[i].length<stringaPiccola.length){
                return a[i]
            } else if(a[i].length===stringaPiccola.length){
                return stringaPiccola
            } else {
                return stringaPiccola
            }
        } else {
            if(a[i].length<stringaPiccola.length){
                stringaPiccola=a[i]
            } 
        }
    }
    return stringaPiccola
}
//funzione ausiliaria verifica palindroma 
function palindroma(s:string):boolean{
    let i:number = 0
    let j:number = s.length-1
    let pal:boolean = true 
    for(let k:number = 0; k<Math.floor(s.length/2);k++){
        if(s[i]!==s[j]){
            pal = false
            break;
        } else {
            i++
            j--
        }
    }
    return pal
}

// ESERCIZIO 4 - CONTEGGIO DELLE OCCORRENZE DELLE PAROLE
// Scrivere una funzione che riceve un array di stringhe e restituisce
// un oggetto in cui ogni chiave rappresenta una parola presente nell'array
// e il relativo valore indica il numero delle sue occorrenze.
// Le parole possono contenere lettere maiuscole e minuscole.
type parole = {[chiave:string]:number}
function contaParole(a:string[]):parole{
    let obj:parole = {}
    for(let i: number = 0;i<a.length;i++){
        if(a[i] in obj){
            obj[a[i]] = obj[a[i]] + 1
        } else {
            obj[a[i]] = 1
        }
    }
    return obj
}


//ESERCIZIO 5 - SELEZIONE DI LIBRI PER CATEGORIA
// Scrivere una funzione che riceve un array di oggetti Libro
// e restituisce un nuovo array contenente soltanto i romanzi.
// Ogni libro selezionato deve essere un nuovo oggetto senza
// la proprietà categoria, mantenendo titolo, autore e anno.
// Preservare l'ordine originale senza modificare gli oggetti
// o l'array di partenza.
type Libro = {categoria:string,titolo:string,autore:string,anno:number}
type LibroSenzaCategorie = {titolo:string,autore:string,anno:number}

function seleziona(libri:Libro[]):LibroSenzaCategorie[]{
    let obj:LibroSenzaCategorie[] = []
    let j:number = 0

    for(let i:number= 0;i<libri.length;i++){
        let libroCorrente:LibroSenzaCategorie = {titolo:"",autore:"",anno:0}
        if(libri[i].categoria==="romanzo"){
            for(let k in libri[i]){
                switch(k){
                    case "titolo":
                        libroCorrente["titolo"] = libri[i][k]
                        break
                    case "autore":
                        libroCorrente["autore"] = libri[i][k]
                        break
                    case "anno":
                        libroCorrente["anno"] = libri[i][k]   
                        break      
                }            
            } 
            obj[j] = libroCorrente 
            j++
        }
    }
    return obj
}



// ESERCIZIO: Prodotto migliore
// Individuare il prodotto con la media delle valutazioni più alta
// rispetto a una caratteristica specificata.
// Ignorare i prodotti privi di valutazioni per quella caratteristica.
// In caso di parità, scegliere il nome alfabeticamente minore.
type Prodotto = {nome:string,valutazioni:{[caratteristica:string]:number[]}}
function prodottoMigliore(a:Prodotto[], p:string):string{
    let prodMigl: string = ""
    let mediaPiugrande: number = 0
    for(let i:number = 0;i<a.length;i++){
        let prodCorrente:string = a[i].nome
        for(let k in a[i]["valutazioni"]){
            if(k===p){
                let somma:number = 0
                let divisore:number = 0
                let media:number = 0
                for(let j:number=0 ;j<a[i]["valutazioni"][p].length;j++){
                    somma = somma + a[i]["valutazioni"][p][j]
                    divisore = divisore + 1
                }
                media = somma/divisore
                if(media>mediaPiugrande){
                    prodMigl = prodCorrente
                    mediaPiugrande = media
                } else if(media===mediaPiugrande){
                    if(prodMigl===""){
                        prodMigl = prodCorrente
                        mediaPiugrande = media
                    } else if(prodCorrente<prodMigl){
                        prodMigl = prodCorrente
                        mediaPiugrande = media
                    }
                }
            }
        }
    }
    return prodMigl
}




