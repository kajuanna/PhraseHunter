/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      //An array of phrases for game.
      "Coding is great",
      "Flipping Pancakes Yum",
      "I said what I said",
      "Coding is the way to go",
      "Up Up And Away",
    ];
    this.activePhrase = null;
  }
  startGame() {
    //Starts the game displaying the random phrases.
    this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

    document.getElementById("overlay").style.display = "none"; //removes the start game overlay
  }

  getRandomPhrase() {
    //Selects the random phrases from the array.
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    let phrase = this.phrases[randomNum];
    this.activePhrase = new Phrase(phrase);
  }

  /**
   * function handleInteraction
   * this function checks to see if the selected letter matches the letter 
   * in the function and if the button clicked is correct 
   * 
  @param {object} key- this is the button element selected by user
*/

  handleInteraction(key) {
    console.log(key);
    key.disabled = true;
    let letter = key.innerText;
    let isMatched = this.activePhrase.checkLetter(letter);

    if (isMatched) {
      key.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letter);
      this.checkForWin();
    } else {
      key.classList.add("wrong");
      this.removeLife();
    }
  }
  removeLife() {
    // Removes life from game and replaces it with a lost heart.
    if (this.missed < 4) {
      const scoreboard = document.getElementById("scoreboard");
      const image = scoreboard.getElementsByTagName("img");
      let currentImage = image[this.missed];
      currentImage.src = "images/lostHeart.png";
    } else {
      this.gameOver();
    }
    this.missed++;
  }

  checkForWin() {
    //Checcks for win if false game over.
    let hiddenLetters = document.getElementsByClassName("hide");
    if (!hiddenLetters.length) {
      this.gameOver(true);
    }
  }

  gameOver(won) {
    //Displays the game over message won or loss.
    document.getElementById("overlay").style.display = "flex";
    let gameMessage = document.getElementById("game-over-message");

    if (won) {
      gameMessage.textContent = "YOU WON!";
      document.getElementById("overlay").className = "win";
    } else {
      gameMessage.textContent = "Try again!";
      document.getElementById("overlay").className = "lose";
    }

    // Reset the game board after win or loss
    let keys = document.querySelectorAll(".key");

    keys.forEach((key) => {
      key.disabled = false;
      key.classList.remove("wrong");
      key.classList.remove("chosen");
    });
    const ul = document.getElementById("phrase");
    ul.innerHTML = "";

    const scoreboard = document.getElementById("scoreboard");
    const images = scoreboard.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
      images[i].src = "images/liveHeart.png";
    }
  }
}
