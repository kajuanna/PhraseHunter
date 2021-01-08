/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // Displays phrase on board.
  addPhraseToDisplay() {
    console.log(this.phrase);
    const letters = this.phrase.split("");
    const ul = document.getElementById("phrase");

    let html = ``;

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === " ") {
        html += `<li class="space"> </li>`;
      } else {
        html += `<li class="hide letter ${letters[i]}">${letters[i]}</li>`;
      }
    }

    ul.insertAdjacentHTML("beforeend", html);
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * checkLetter function
   * @param{string} letter-this is the letter that inside of the button
   * @returns{boolean}- is there a match inside of the phrase
   */

  /**
   * @param{string} letter-this is the letter that inside of the button
   *
   */

  // Shows matched letters chosen.
  showMatchedLetter(letter) {
    console.log(letter);
    let match = document
      .getElementById("phrase")
      .getElementsByClassName(letter);
    console.log(match);
    for (let i = 0; i < match.length; i++) {
      match[i].classList.replace("hide", "show");
    }
  }
}
