// The Word Guesser
/*
-guessLetter():
- loop though letters of secret Word
-check each letter against the guess letter
-if it matches, fill in the guess array with that letter at the correct index
-increment the guess conunt
-if the wrong guess count is larger than 6, end the game and
print a message
*/
const myArray = ['G','E','N','E','R','A','L'];
const currentGuessed = ['_','_','_','_','_','_','_'];

let guessedCount = 0;
//guessedCount stays outside of function, otherwise it stays with 1 if
//wrong letter entered

const guessLetter = function (guessedLetter) {

  guessedLetter = guessedLetter.toUpperCase();

  let matched = false;
  let foundMatch = false;

  for (let i = 0; i < myArray.length; i++) {
    if (guessedLetter===myArray[i]) {
      currentGuessed[i]=guessedLetter;
      console.log(`Congratulation! You found a new letter ${currentGuessed}`);

      if (currentGuessed.join()===myArray.join()) {
        console.log('You won!');
        return;
      }
      matched = true;
      foundMatch = true;
    }
  }//end of for loop

  if (matched === false) {
    console.log(`Wrong!`);
  }

  if (foundMatch === false) {
    guessedCount +=1;
    console.log(guessedCount)
    if (guessedCount===6) {
      console.log('SORRY, FAILED.')
      return;
    }
  }
};
