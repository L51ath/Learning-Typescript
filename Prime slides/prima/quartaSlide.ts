/*(Pari) Scrivere un programma che legga da tastiera un numero e stabilisca 
se pari o meno, stampando in uscita rispettivamente 1 o 0.*/
function Pari(n: number): number{
    if(n%2===0){
        return 1
    } else {
        return 0
    }
}


/*(Max) Scrivere un programma che legga 3 numeri da tastiera e mostri a 
video il loro massimo.*/
function Max(a: number, b: number, c:number): number{
    if(a>=b){
        if(a>=c){
            return a
        } else {
            return c
        }
    } else {
        if(b>=c){
            return b
        } else {
            return c
        }
    }
}


/*(Calcolatore) Scrivere un programma che legga due numeri e un operatore 
tra +, -, * e / da tastiera e mostri a video il risultato dell’operazione sui due 
numeri.*/
function calcolatore(a: number, b: number, c: string): number|string{
    let operatore = c
    switch(operatore){
        case "+":
            return a+b
    
        case "-":
            return a-b
            
        case "*":
            return a*b
            
        case "/":
            return a/b
        default:
            return "operatore non valido"
    }
}


/*(Media) Si scriva un programma che legga da tastiera 4 interi e stampi la 
media aritmetica di tutti i valori diversi da zero e di segno uguale all’ultimo 
valore della sequenza.*/
function Media(a: number, b: number, c: number, d: number): number|string{
    let divPos = 0
    let divNeg = 0
    let sommaPos = 0
    let sommaNeg = 0
    if(d>0){
        divPos++
        sommaPos = sommaPos + d
        if(a>0){
            divPos++
            sommaPos = sommaPos + a
        }
        if(b>0){
            divPos++
            sommaPos = sommaPos + b
        }
        if(c>0){
            divPos++
            sommaPos = sommaPos + c
        }
        return sommaPos/divPos

    } else if(d<0){
        divNeg++
        sommaNeg = sommaNeg + d
        if(a<0){
            divNeg++
            sommaNeg = sommaNeg + a
        }
        if(b<0){
            divNeg++
            sommaNeg = sommaNeg + b
        }
        if(c<0){
            divNeg++
            sommaNeg = sommaNeg + c
        }
        return sommaNeg/divNeg
    }  else {
        return "input ultimo valore non corretto"
    }
}
//sempre stesso esercizio ma con while e senza prompt quindi una funzione
function MediaW(a:number, b: number, c: number, d: number): number|string{
    let i: number = 0
    let val: number = a
    let sPos: number = 0
    let sNeg: number = 0
    let dPos: number = 0
    let dNeg: number = 0
    while(i<4){
        switch (i) {
        case 0:
            val = a
            break
        case 1:
            val = b
            break
        case 2:
            val = c
            break
        case 3:
            val = d
            break
        }
        if(d>0){
            if(val>0){
                sPos = sPos + val
                dPos++
                i++
            } else {
                i++
            }
        } else if(d<0){
            if(val<0){
                sNeg = sNeg + val
                dNeg++
                i++
            } else {
                i++
            }
        } else {
            return "ultimo input non valido"
        }
    }
    if(d>0){
        return sPos/dPos
    } else {
        return sNeg/dNeg
    }     
}


/*(Che tipo di dato?) Scrivere un programma che, dato un valore, utilizzi 
l'operatore typeof insieme a uno switch per stampare a video una frase che 
descriva il tipo del valore (es. "è un numero", "è una stringa", "è un valore 
booleano", ecc.)*/
function type(x: number|string|boolean): string{
    switch(typeof(x)){
        case "number":
            return `${x} è di tipo number`
        case "string":
            return `${x} è di tipo string`
        case "boolean":
            return `${x} è di tipo boolean`
    }
    return "qualcosa è andato storto"
}

/*(Accesso) Scrivere un programma che legga da tastiera una stringa che 
rappresenta una password, e usi l'operatore ternario per stampare "accesso 
negato" se la stringa è vuota, altrimenti "accesso consentito".*/
function accesso(x: string): string{
    return x===""? "accesso negato":"accesso consentito"
}






