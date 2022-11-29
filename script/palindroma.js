// Palidroma
// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma

// ############################# MEMO #############################
/*Il metodo charAt nelle stringhe restituisce un carattere di una stringa.
* La posizione del carattere è indicata nell’indice tra parantesi tonde.
* Quindi ad esempio charAt(0) restituisce il primo carattere, mentre charAt(1) restituisce il secondo e così via */

let parolaUtente = prompt("Inserisci una parola");

// function palindroma(){
    let array = [];
    
    console.log(parolaUtente);
    
    for ( let i = 0; i < parolaUtente.length; i++){ 
        array[i] = parolaUtente.charAt(i);
    }   
    console.log(array);
    
    let arrayInverso = array.reverse();
    console.log(arrayInverso);
    
    for (let i = 0; i < array.length; i++){
    
        if (array[i] != arrayInverso[arrayInverso.length -1 - i]){
            console.log("La parola non è palindroma");
        } else{
            console.log("La parola è palindroma");
        }
    }
    // return palindroma();
// }