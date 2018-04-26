// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.




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







// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


const maxOfTwoNumbers = function(x,y){
  if (x < y) {
    return y;
  } else {
    return x;
  }
};

console.log(maxOfTwoNumbers(3,6));
console.log(maxOfTwoNumbers(7,2));
console.log(maxOfTwoNumbers(4,4));


const maxOfThree = function (x,y,z) {
  if (x>y) {
    if (x>z) {
      return x;
    } else {
      return z;
    }
  } else {
    if (y>z) {
      return y;
    } else {
      return z;
    }
  }
};

console.log(maxOfThree(3,5,7));
console.log(maxOfThree(2,6,6));
console.log(maxOfThree(8,12,5));


const checkVowel = function (string) {
  let vowel = ["a", "e", "i", "o", "u", "A", "E","I", "O","U"]
    for (var i in vowel) {
      if (string===vowel[i]) {
        return true;
      }
    }
  return false;
}
console.log(checkVowel("a"));
console.log(checkVowel("I"));
console.log(checkVowel("x"));
