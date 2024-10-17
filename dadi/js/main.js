// * Gioco dei dadi
/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// genera un numero casuale da 1 a 6 per il giocatore
const playerScore = Math.floor(Math.random() * 6) + 1;
console.log("Il punteggio del giocatore è:", playerScore);

// genera un numero casuale per il computer
const computerScore = Math.floor(Math.random() * 6) + 1; // G
console.log("Il punteggio del computer è:", computerScore);

// chi ha fatto il punteggio più alto?
