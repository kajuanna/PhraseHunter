/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const phrase = new Phrase("Life is like a box of chocolate");
//console.log(`Phrase-phrase: ${phrase.phrase}`);
// starts new game
let game;

document.getElementById("btn__reset").addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});

let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    game.handleInteraction(key);
  });
});
