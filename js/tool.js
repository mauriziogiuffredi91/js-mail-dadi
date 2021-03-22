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

// console.log(mail.length);


// check

for (var i = 0; i < mail.length; i++){
    if (mail [i] === mailUtente){
        mailFound = true;
        break;
    } 
    

}

// 3 fase
if (mailFound === true){
    document.getElementById("login").innerHTML = 'Benvenuto ' + mailUtente;

} else {
    document.getElementById("login").innerHTML = 'Impossibile accedere, mail non registrata';

}
/*

Dice problem

1 generare numero random da 1 a 6 (per pc e per giocatore)

2 chi fa punteggio più alto vince

3 stampare il risultato

*/