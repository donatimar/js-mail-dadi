// *Mail
/*
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

// array con lista di email valide
const validEmails = ["marco@gmail.com", "paolo@gmail.com", "michele@gmail.com"];

// prompt di richiesta inserimento email
const userEmail = prompt("Inserisci la tua email");

// controllo validità dell'email inserita
if (!userEmail.includes("@") || !userEmail.includes(".")) {
  // se l'email inserita è errata mostra un messaggio di errore
  console.log("Errore: l'email inserita non è valida");
  alert("Errore: l'email inserita non è valida");

  // controllo se l'email è nella lista
}

// stampo l'esito del controllo

// * Gioco dei dadi
/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
