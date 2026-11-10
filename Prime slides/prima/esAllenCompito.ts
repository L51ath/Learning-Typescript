/**
 * ESERCIZI TYPESCRIPT — SET 2
 * Argomenti: controllo di flusso, cicli, array, oggetti.
 *
 * Implementa le funzioni al posto del commento.
 * Sotto ogni funzione trovi dei test cases: incolla tutto il file nel TypeScript
 * Playground (typescriptlang.org/play), premi Run e guarda la scheda "Logs".
 * In locale puoi usare:  npx tsx esercizi2.ts
 * Soluzioni in:  soluzioni2.ts   (npx tsx test2.ts soluzioni2)
 */

// --- Funzioni di supporto per i test (non modificare) ----------------------
function uguali(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const oa = a as Record<string, unknown>;
  const ob = b as Record<string, unknown>;
  const chiaviA = Object.keys(oa);
  if (chiaviA.length !== Object.keys(ob).length) return false;
  return chiaviA.every((k) => k in ob && uguali(oa[k], ob[k]));
}
function test(descrizione: string, ottenuto: unknown, atteso: unknown): void {
  const ok = uguali(ottenuto, atteso);
  console.log(
    ok
      ? `✅ ${descrizione}`
      : `❌ ${descrizione} -> ottenuto ${JSON.stringify(ottenuto)}, atteso ${JSON.stringify(atteso)}`
  );
}
function testErrore(descrizione: string, codice: () => void): void {
  let lanciato = false;
  try { codice(); } catch { lanciato = true; }
  console.log(`${lanciato ? "✅" : "❌"} ${descrizione}`);
}
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// ESERCIZIO 1 — Numeri primi (cicli annidati + uscita anticipata)
// Restituisci tutti i numeri primi minori o uguali a `n`, in ordine crescente.
// Esempio: primiFinoA(10) -> [2, 3, 5, 7]     primiFinoA(1) -> []
// ---------------------------------------------------------------------------
function primiFinoA(n: number): number[] {
    let a: number[] = []
    let j: number = 0
    for(let i:number = 2; i<=n;i++){
        let prime:boolean = true 
        for(let k:number = 2; k<=Math.floor(i/2)&&prime;k++){
            if(i%k===0){
                prime = false 
            }
        }
        if(prime){
            a[j] = i
            j++
        }

    }
    return a

}
// Test cases per primiFinoA
test("primiFinoA(10)", primiFinoA(10), [2, 3, 5, 7]);
test("primiFinoA(20)", primiFinoA(20), [2, 3, 5, 7, 11, 13, 17, 19]);
test("primiFinoA(2)", primiFinoA(2), [2]);
test("primiFinoA(1)", primiFinoA(1), []);
test("primiFinoA(0)", primiFinoA(0), []);





// ---------------------------------------------------------------------------
// ESERCIZIO 2 — Giorni nel mese (switch + anno bisestile)
// `mese` va da 1 (gennaio) a 12 (dicembre). Restituisci quanti giorni ha.
// Un anno è bisestile se è divisibile per 4 ma non per 100, oppure se è
// divisibile per 400. Mese non valido -> -1.
// Esempio: giorniNelMese(2, 2024) -> 29    giorniNelMese(2, 1900) -> 28
// ---------------------------------------------------------------------------
function bisestile(a:number):boolean{
    if(((a%4===0)&&(a%100!==0))||(a%400===0)){
        return true
    } else return false
}
function giorniNelMese(mese: number, anno: number): number {
    let bis: boolean = bisestile(anno)

    switch (mese) {
        case 1:
            return 31
        case 2:
            return bis ? 29 : 28
        case 3:
            return 31
        case 4:
            return 30
        case 5:
            return 31
        case 6:
            return 30
        case 7:
            return 31
        case 8:
            return 31
        case 9:
            return 30
        case 10:
            return 31
        case 11:
            return 30
        case 12:
            return 31
        default:
            return -1
    }
}
// Test cases per giorniNelMese
test("giorniNelMese(1, 2023)", giorniNelMese(1, 2023), 31);
test("giorniNelMese(4, 2023)", giorniNelMese(4, 2023), 30);
test("giorniNelMese(2, 2023)", giorniNelMese(2, 2023), 28);
test("giorniNelMese(2, 2024)", giorniNelMese(2, 2024), 29);
test("giorniNelMese(2, 1900)", giorniNelMese(2, 1900), 28);
test("giorniNelMese(2, 2000)", giorniNelMese(2, 2000), 29);
test("giorniNelMese(12, 2023)", giorniNelMese(12, 2023), 31);
test("giorniNelMese(13, 2020)", giorniNelMese(13, 2020), -1);
test("giorniNelMese(0, 2020)", giorniNelMese(0, 2020), -1);





// ---------------------------------------------------------------------------
// ESERCIZIO 3 — Sequenza di Collatz (ciclo while)
// Parti da `n` (intero >= 1). Finché n != 1:
//   se n è pari -> n = n / 2, altrimenti n = 3n + 1.
// Restituisci tutti i valori visitati, compreso il primo e l'1 finale.
// Esempio: collatz(6) -> [6, 3, 10, 5, 16, 8, 4, 2, 1]
// Se n < 1 o non è intero restituisci [].
// ---------------------------------------------------------------------------
function collatz(n: number): number[] {
    let a:number[] = []
    let j: number = 0
    if(n<1||Math.floor(n/1)!==n){
        return a
    } else {
        a[j] = n
        j++
        while(n!==1){
            if(n%2==0){
                n=n/2
                a[j] = n
                j++
            } else {
                n = 3*n + 1
                 a[j] = n
                j++
            }
        }
    }
    return a
}
// Test cases per collatz
test("collatz(6)", collatz(6), [6, 3, 10, 5, 16, 8, 4, 2, 1]);
test("collatz(3)", collatz(3), [3, 10, 5, 16, 8, 4, 2, 1]);
test("collatz(1)", collatz(1), [1]);
test("collatz(0)", collatz(0), []);
test("collatz(2.5)", collatz(2.5), []);





// ---------------------------------------------------------------------------
// ESERCIZIO 4 — Palindromo (stringhe + due indici)
// Restituisci true se il testo è palindromo, ignorando maiuscole/minuscole
// e tutto ciò che non è lettera o cifra (spazi, punteggiatura).
// Esempio: eUnPalindromo("I topi non avevano nipoti") -> true
//          eUnPalindromo("Ciao") -> false
// Una stringa vuota è palindroma.
// ---------------------------------------------------------------------------
function alfaNumerico(s:string):boolean{
    return (s>="a" && s<="z") || (s>= "0" && s<= "9")
}
function eUnPalindromo(testo: string): boolean {
    let palindroma:boolean = true 
    testo = testo.toLowerCase()
    let i:number = 0
    let j:number = testo.length-1
    while((i<j)&&palindroma){
        while(i < j&&!alfaNumerico(testo[i])){
            i++
        }
        while(i < j&&!alfaNumerico(testo[j])){
            j--
        }
        if(testo[i]!==testo[j]){
            palindroma = false
        } else {
            i++
            j--
        }
    }
    return palindroma 
}

// Test cases per eUnPalindromo
test('eUnPalindromo("I topi non avevano nipoti")', eUnPalindromo("I topi non avevano nipoti"), true);
test('eUnPalindromo("Anna")', eUnPalindromo("Anna"), true);
test('eUnPalindromo("A man, a plan, a canal: Panama!")', eUnPalindromo("A man, a plan, a canal: Panama!"), true);
test('eUnPalindromo("Ciao")', eUnPalindromo("Ciao"), false);
test('eUnPalindromo("ab")', eUnPalindromo("ab"), false);
test('eUnPalindromo("")', eUnPalindromo(""), true);





// ---------------------------------------------------------------------------
// ESERCIZIO 6 — Dividi in blocchi (cicli con passo)
// Spezza l'array in sotto-array di dimensione `dimensione`.
// L'ultimo blocco può essere più corto. Se dimensione < 1 lancia un Error.
// Esempio: dividiInBlocchi([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
// ---------------------------------------------------------------------------
function dividiInBlocchi(elementi: number[], dimensione: number): number[][] {
    let blocchi: number[][] = []
    if(elementi.length%dimensione===0){
        blocchi.length = elementi.length/dimensione
    } else {
        blocchi.length = Math.floor(elementi.length/dimensione) + 1
    } 
    let k:number = 0
    for(let i:number = 0;i<blocchi.length;i++){
        blocchi[i] = []
        if(i===blocchi.length-1){
            if(elementi.length%dimensione===0){
                blocchi[i].length = dimensione
            } else {
                blocchi[i].length = elementi.length%dimensione
            }
        } else {
            blocchi[i].length = dimensione
        }
        for(let j:number = 0;j<blocchi[i].length;j++){
            blocchi[i][j] = elementi[k]
            k++
        }
    }
    return blocchi
}
// Test cases per dividiInBlocchi
test("dividiInBlocchi([1, 2, 3, 4, 5], 2)", dividiInBlocchi([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
test("dividiInBlocchi([1, 2, 3, 4], 2)", dividiInBlocchi([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
test("dividiInBlocchi([1, 2], 5)", dividiInBlocchi([1, 2], 5), [[1, 2]]);
test("dividiInBlocchi([], 3)", dividiInBlocchi([], 3), []);
testErrore("dividiInBlocchi([1], 0) lancia un errore", () => dividiInBlocchi([1], 0));





// ---------------------------------------------------------------------------
// ESERCIZIO 7 — Confronta due insiemi (includes / filter)
// Dati due array di stringhe, restituisci un oggetto con:
//  - comuni:  elementi presenti in entrambi
//  - soloA:   elementi presenti solo in `a`
//  - soloB:   elementi presenti solo in `b`
// Ogni lista deve essere senza duplicati e ordinata alfabeticamente.
// Esempio: confrontaInsiemi(["a","b","c"], ["b","c","d"])
//   -> { comuni: ["b","c"], soloA: ["a"], soloB: ["d"] }
// ---------------------------------------------------------------------------
interface Confronto {
  comuni: string[];
  soloA: string[];
  soloB: string[];
}
function confrontaInsiemi(a: string[], b: string[]): Confronto {
    let stats: Confronto = {comuni:[],soloA:[],soloB:[]}
    stats.comuni = intersezione(a,b).sort()
    stats.soloA =  differenza(a,b).sort()
    stats.soloB = differenza(b,a).sort()
    return stats
}
function intersezione(a: string[],b:string[]):string[]{
    let c:string[] = []
    let h:number = 0
    let x:string[] = a.length<b.length?b:a
    let y:string[] = a.length<b.length?a:b
    for(let i:number = 0;i<x.length;i++){
        let current:string = x[i]
        let presenteinY:boolean = false
        let nonInC:boolean = true
        for(let k of y){
            if(current===k){
                presenteinY = true
            }
        }     
        for(let l of c){
            if(l===current){
                nonInC = false
                break
            }
        }    
        if(nonInC&&presenteinY){
            c[h] = current
            h++
        }
    } 
    return c
}
function differenza(a:string[],b:string[]):string[]{
    let c:string[] = []
    let h:number = 0
    for(let i:number = 0; i<a.length;i++){
        let current: string = a[i]
        let presenteinB:boolean = false
        let nonInC:boolean = true
        for(let l of b){
            if(current === l){
                presenteinB = true 
            }
        }
        for(let j of c){
            if(current === j){
                nonInC = false
            }
        }
        if(!presenteinB&&nonInC){
            c[h] = current
            h++
        }

    }
    return c
}
// Test cases per confrontaInsiemi
test('confrontaInsiemi(["a","b","c"], ["b","c","d"])',
  confrontaInsiemi(["a", "b", "c"], ["b", "c", "d"]),
  { comuni: ["b", "c"], soloA: ["a"], soloB: ["d"] });
test('confrontaInsiemi(["z","a","a"], ["a"])',
  confrontaInsiemi(["z", "a", "a"], ["a"]),
  { comuni: ["a"], soloA: ["z"], soloB: [] });
test('confrontaInsiemi(["x"], ["y"])',
  confrontaInsiemi(["x"], ["y"]),
  { comuni: [], soloA: ["x"], soloB: ["y"] });
test("confrontaInsiemi([], [])", confrontaInsiemi([], []), { comuni: [], soloA: [], soloB: [] });





// ---------------------------------------------------------------------------
// ESERCIZIO 8 — Raggruppa per lunghezza (oggetti con chiavi numeriche)
// Restituisci un oggetto che associa ogni lunghezza all'array delle parole
// di quella lunghezza, nell'ordine in cui compaiono.
// Esempio: raggruppaPerLunghezza(["ciao","sole","mare","a"])
//   -> { 1: ["a"], 4: ["ciao","sole","mare"] }
// ---------------------------------------------------------------------------
type Gruppi = {[chiave:number]:string[]}
function raggruppaPerLunghezza(parole: string[]): Gruppi {
    let obj:Gruppi = {}
    for(let i:number = 0;i<parole.length;i++){
        let current:string = parole[i]
        let lunghezza:number = current.length
        if(lunghezza in obj){
            obj[lunghezza].push(current)
        } else{
            obj[lunghezza] = [current]
        }
    }
    return obj
}
// Test cases per raggruppaPerLunghezza
test('raggruppaPerLunghezza(["ciao","sole","mare","a"])',
  raggruppaPerLunghezza(["ciao", "sole", "mare", "a"]),
  { 1: ["a"], 4: ["ciao", "sole", "mare"] });
test('raggruppaPerLunghezza(["io","tu","noi","voi","lui"])',
  raggruppaPerLunghezza(["io", "tu", "noi", "voi", "lui"]),
  { 2: ["io", "tu"], 3: ["noi", "voi", "lui"] });
test("raggruppaPerLunghezza([])", raggruppaPerLunghezza([]), {});



