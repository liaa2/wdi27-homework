//Word to guess
const word = "singer";
const wordToGuess = [];
const lettersGuessed = [];
const cantUse = [];
let totalGuessed = 0;
let correctGuess = false;
let wrongGuesses = 0;
let totalMoney = 0;
// Puts the word to guess into an array
for (i = 0; i < word.length; i++) {
  wordToGuess[i] = word[i];
}
// Creates an array equal to the length of the word to guess
for (i = 0; i < wordToGuess.length; i++) {
  lettersGuessed[i] = "_";
}
// Start Logs
console.log(`Welcome to hangman`);
console.log(lettersGuessed);
// Function for guessing letters
const guessLetter = function(letter) {
  for (k = 0; k < cantUse.length; k++) {
    // Checks to see if the letter has been guessed already
    if (letter === cantUse[k]) {
      console.log("You have already guessed that, try again!");
      return;
    }
  }
  // Compares the guessed letter to the letters in the word.
  for (i = 0; i < wordToGuess.length; i++) {
    // If the letter matches, lets the user know they correctly matched a letter and shows them
    // As well as giving them a random amount of money
    if (letter === wordToGuess[i]) {
      let randomMoney = 0;
      lettersGuessed[i] = letter;
      console.log("You got a letter!");
      randomMoney = Math.random();
      randomMoney = randomMoney*2000;
      randomMoney = Math.floor(randomMoney);
      randomMoney += 500;
      totalMoney += randomMoney;
      console.log(`You earned $${randomMoney} for getting that right!`);
      correctGuess = true;
    }
  }
  // If the user guesses a wrong letter, this lets them know as well as how many wrong guesses they have left.
  if (correctGuess !== true) {
    wrongGuesses += 1;
    console.log(`Incorrect. You have ${6-wrongGuesses} wrong guesses left.`)
    let randomMoney = 0;
    randomMoney = Math.random();
    randomMoney = randomMoney*1500;
    randomMoney = Math.floor(randomMoney);
    randomMoney += 200;
    totalMoney -= randomMoney;
    console.log(`You lost $${randomMoney} for your wrong guess.`)

  }
  // This will run if the user got the letter correct, it resets the correctGuess variable
  else {
    correctGuess = false;
  }
  // Logs the letters guessed in the word
  console.log(lettersGuessed);
  // Checks to see if the user has had too many wrong guesses
  if (wrongGuesses === 6) {
    gameOver();
    return;
  }
  let totalCorrect = 0;
  // Checks to see if the user has guesses the whole word yet
  for (j = 0; j < wordToGuess.length; j++) {
    if (wordToGuess[j] === lettersGuessed[j]) {
      totalCorrect += 1;
      // If they have guessed it correctly, tells the user they won as well as the total prize money won
      if (totalCorrect === wordToGuess.length) {
        console.log("You win!");
        console.log(`You won $${totalMoney} total!`);
      }
    }
  }
  // Adds the letter guessed to an array so that the user can't guess the same letter multiple times
  cantUse[totalGuessed] = letter;
  totalGuessed += 1;
};
// Runs when the user loses the game, telling them they have lost and what the word was.
const gameOver = function() {
  console.log("Game over! You have had too many wrong guesses.");
  console.log(`The word was ${word}`);
}
