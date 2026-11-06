// Si scriva una funzione domina(f, g) che confronta due array di numeri f e g posizione per posizione.
// Diciamo che f domina g se f[i] > g[i] per ogni posizione i, cioè se in ogni posizione f è strettamente maggiore di g.
// La funzione restituisce:
// 1: se f domina g;
// -1: se g domina f;
// 0: in tutti gli altri casi: se in alcune posizioni è maggiore f e in altre g, se in almeno una posizione i valori sono uguali, 
// se i due array sono uguali, se hanno lunghezza diversa, oppure se sono entrambi vuoti.
function dom(f:number[],g:number[]):number{
    if(f.length!==g.length || f.length==0&&g.length==0){
        return 0
    } 
    let dominaF: boolean = true
    let dominaG:boolean = false
    for(let i:number = 0; i<f.length;i++){
        if(f[i]===g[i]){
            return 0 
        } else if(f[i]<g[i]&&i===0){
            dominaF = false
            dominaG = true 
        } else if(f[i]>g[i]&&dominaG){
            dominaG = false
        } else if(g[i]>f[i]&&dominaF){
            dominaF = false
        }
    }
    if(dominaF){
        return 1
    } else if(dominaG){
        return -1
    } else {
        return 0       
    }
}





// Una matrice di numeri è rappresentata come un array di array: ogni elemento dell'array è una riga. La matrice è quadrata se ogni riga ha lunghezza uguale al numero di righe. 
// Una matrice quadrata è simmetrica se, per ogni coppia di posizioni (i,j), l'elemento nella riga i e colonna j è uguale a quello nella riga j e colonna i.
// La traccia di una matrice quadrata è la somma degli elementi della sua diagonale principale, cioè di quelli che hanno lo stesso indice di riga e di colonna (m[0][0], m[1][1], m[2][2], …). 
// Ad esempio, nella matrice [[1,2,3],[2,5,6],[3,6,9]] la diagonale principale è formata da 1, 5 e 9, quindi la traccia è 1 + 5 + 9 = 15.
// Si scriva una funzione TypeScript simmetrica(m) che, dato un array m di array di numeri con almeno una riga, restituisce una tupla [boolean, number] in cui:
// - il primo elemento è true se la matrice è quadrata e simmetrica, false altrimenti;
// - il secondo elemento è la traccia della matrice;
// - se la matrice non è quadrata la traccia non è definita: in questo caso la funzione restituisce [false, NaN].
function simmetrica(m:number[][]):[boolean,number]{
    let a: [boolean,number] = [false,NaN]
    const colonne:number = m.length
    for(let i:number = 0;i<m.length;i++){
        if(m[i].length>colonne||m[i].length<colonne){
            return a
        }
    }
    let traccia: number = 0
    let sim:boolean = true 
    for(let i: number = 0;i<m.length;i++){
        for(let j:number = 0;j<m[i].length;j++){
            if(j===i){
                traccia = traccia + m[i][j]
            } else if(j!==i){
                if(m[i][j]!==m[j][i]){
                    sim = false
                }
            }
        }
    }
    a = [sim,traccia]
    return a 
}




/*(Registro studenti) Data una lista di studenti, 
stampare la classifica per media decrescente (a 
parità: ordine alfabetico), con la media a 2 cifre 
decimali (default), e frequenze degli studenti per 
fascia di media in [0,18), [18,24), [24,28), [28,30].*/

