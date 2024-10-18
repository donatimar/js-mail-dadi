// * Gioco dei dadi
/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// genera un numero casuale da 1 a 6 per il giocatore
const playerScore = Math.floor(Math.random() * 6) + 1;
console.log("Il punteggio del giocatore è:", playerScore);

// genera un numero casuale per il computer
const computerScore = Math.floor(Math.random() * 6) + 1;
console.log("Il punteggio del computer è:", computerScore);

// chi ha fatto il punteggio più alto?
if (playerScore > computerScore) {
  console.log("Il punteggio più alto è del giocatore");
  alert("Il punteggio più alto è del giocatore");
} else if (playerScore < computerScore) {
  console.log("Il punteggio più alto è del computer");
  alert("Il punteggio più alto è del computer");
} else {
  console.log("il giocatore e il computer hanno lo stesso punteggio");
  alert("Il giocatore e il computer hanno lo stesso punteggio");
}
