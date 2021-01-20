/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//An array of phrases for game.
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "Coding is great",
      "Flipping Pancakes Yum",
      "I said what I said",
      "Coding is the way to go",
      "Up Up And Away",
    ];
    this.activePhrase = null;
  }
  //Starts the game displaying the random phrases.
  startGame() {
    this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    document.getElementById("overlay").style.display = "none"; //removes the start game overlay
  }
  //Selects the random phrases from the array.
  getRandomPhrase() {
    const number = Math.floor(Math.random() * this.phrases.length);
    let phrase = this.phrases[number];
    this.activePhrase = new Phrase(phrase);
  }

  /**
   * function handleInteraction
   * this function checks to see if the selected letter matches the letter
   * in the function and if the button clicked is correct
   */

  handleInteraction(keyElement) {
    console.log(keyElement);
    keyElement.disabled = true;
    let letter = keyElement.innerText;
    let userFoundLetter = this.activePhrase.checkLetter(letter);

    if (userFoundLetter) {
      keyElement.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letter);
      this.checkForWin();
    } else {
      keyElement.classList.add("wrong");
      this.removeLife();
    }
  }
  // Removes life from game and replaces it with a lost heart.
  removeLife() {
    if (this.missed < 4) {
      const scoreboardImages = document
        .getElementById("scoreboard")
        .getElementsByTagName("img");
      let currentImage = scoreboardImages[this.missed];
      currentImage.src = "images/lostHeart.png";
    } else {
      this.gameOver();
    }
    this.missed++;
  }
  //Checcks for win if false game over.
  checkForWin() {
    let hiddenLetters = document.getElementsByClassName("hide");
    if (!hiddenLetters.length) {
      this.gameOver(true);
    }
  }
  //Displays the game over message won or loss.
  gameOver(won) {
    document.getElementById("overlay").style.display = "flex";
    let message = document.getElementById("game-over-message");

    if (won) {
      message.textContent = "YOU WON!";
      document.getElementById("overlay").className = "win";
    } else {
      message.textContent = "Try again!";
      document.getElementById("overlay").className = "lose";
    }

    // Reset the game board after win or loss
    let keys = document.querySelectorAll(".key");
    for (let i = 0; i < keys.length; i++) {
      keys[i].disabled = false;
      keys[i].classList.remove("wrong");
      keys[i].classList.remove("chosen");
    }
    const phraseContainer = document.getElementById("phrase");
    phraseContainer.innerHTML = "";

    const scoreboardImages = document
      .getElementById("scoreboard")
      .getElementsByTagName("img");

    for (let i = 0; i < scoreboardImages.length; i++) {
      scoreboardImages[i].src = "images/liveHeart.png";
    }
  }
}
