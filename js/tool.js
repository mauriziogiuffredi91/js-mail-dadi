// console.log('works');

/*

Mail problem

1 chiedi all'utente la sua mail

2 controlla che la mail sia tra quelle in elenco

3 messaggio sull'esito del controllo 

*/


//1 fase
var mailUtente = prompt('Inserire la propria mail').toLowerCase();
// console.log(mailUtente);

//2 fase 
var mail = ["mario@gmail.com", "rocco@alice.it", "giuseppe@hotmail.com", "pippo@yahoo.com"];
// mailFound = false;

// console.log(mail.length);


// check

for (var i = 0; i < mail.length; i++){
    if (mail [i] === mailUtente){
        mailFound = true;
        break;
    } else {
        mailFound = false;
    }
    

}

// 3 fase
if (mailFound === true){
    document.getElementById("login").innerHTML = 'Benvenuto ' + mailUtente;

} else {
    document.getElementById("login").innerHTML = 'Impossibile accedere, sei registrato come visitatore';

}
/*

Dice problem

1 generare numero random da 1 a 6 (per pc e per giocatore)

2 chi fa punteggio più alto vince

3 stampare il risultato

*/

// 1 fase

var playerNumber = document.getElementById("dice-player").innerHTML = Math.floor(Math.random() * 6 + 1);

var pcNumber = document.getElementById("dice_pc").innerHTML = Math.floor(Math.random() * 6 + 1);

// 2 fase

if (playerNumber > pcNumber) {
    document.getElementById("winner").innerHTML = 'Hai vinto'

} else if (playerNumber === pcNumber) {
    document.getElementById("winner").innerHTML = 'Pareggio, ma il banco vince sempre!'
} else{
    document.getElementById("winner").innerHTML = 'Hai perso'
}