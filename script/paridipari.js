/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
Dichiariamo chi ha vinto. */


let even = ('pari')
let odd = ('dispari')
let userNumber;
let pcNumber = getRandomNumber(1,5);
let userChoice = prompt('Pari o Dispari');

do{
    userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
}
while ( (userNumber < 1) || (userNumber > 5) ){
}

console.log(`Hai scelto ${userChoice}`);

console.log(`Il tuo numero:  ${userNumber}`);

function getRandomNumber (nMin, nMax){
    const randomNumber = Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
    return randomNumber;
}
console.log(`Il numero del computer:  ${pcNumber}`);

let sum = userNumber + pcNumber;

console.log(`La somma dei due numeri è:  ${sum}`);

if (sum % 2 == 0){
    console.log("E' uscito pari");
} else if (userNumber == even || userNumber == odd ) {
    console.log("Hai vinto");
}else {
    console.log("E' uscito dispari");
}



