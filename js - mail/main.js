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
} else {
  // Controllo se l'email è nella lista
  let isAuthorized = false;

  for (let i = 0; i < validEmails.length; i++) {
    if (userEmail === validEmails[i]) {
      isAuthorized = true;
    }
  }

  // stampo l'esito del controllo
  if (isAuthorized) {
    console.log("Accesso consentito");
    alert("Accesso consentito");
  } else {
    console.log("Accesso negato");
    alert("Accesso negato, l'email inserita non ha diritti di accesso");
  }
}
