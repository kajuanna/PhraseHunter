/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // Displays phrase on board.
  addPhraseToDisplay() {
    const letters = this.phrase.split("");
    const phraseContainer = document.getElementById("phrase");

    let html = ``;

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === " ") {
        html += `<li class="space"> </li>`;
      } else {
        html += `<li class="hide letter ${letters[i]}">${letters[i]}</li>`;
      }
    }

    phraseContainer.insertAdjacentHTML("beforeend", html);
  }

  /** 
   * checkLetter function
   Checks if passed letter is in phrase
      */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    }
    return false;
  }

  // Shows matched letters chosen.
  showMatchedLetter(letter) {
    let correctLetters = document
      .getElementById("phrase")
      .getElementsByClassName(letter);
    console.log(correctLetters);
    for (let i = 0; i < correctLetters.length; i++) {
      correctLetters[i].classList.replace("hide", "show");
    }
  }
}
