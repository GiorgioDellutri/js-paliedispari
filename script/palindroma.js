// Palidroma
// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma

// ############################# MEMO #############################
/*Il metodo charAt nelle stringhe restituisce un carattere di una stringa.
* La posizione del carattere è indicata nell’indice tra parantesi tonde.
* Quindi ad esempio charAt(0) restituisce il primo carattere, mentre charAt(1) restituisce il secondo e così via */

let parolaUtente = prompt("Inserisci una parola");
let esito = isPalindrome(parolaUtente);

if (esito){
    console.log("La parola è palindroma");
} else{
    console.log("La parola non è palindroma");
}

function isPalindrome(parola) {
    let test = true;

    for (let i = 0; i < parola.length; i++){
        if (parola[i] != parola[parola.length - 1 -i]){
            test = false;
        }
    }
    // console.log(test);
    return test;
}
