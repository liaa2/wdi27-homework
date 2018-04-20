// // Favourite list with arbitrarily large inputs
//
// const myFav = ["ab","hd","hi","ab","hd","hi","ab","hd","hi","ab","hd","hi","ab","hd","hi","ab","hd","hi","ab","hd","hi","ab","hd","hi","ab","hd","hi","ab","hd","hi","ab","hd","hi","ab","hd","hi"];
// for (var i = 0; i < myFav.length; i++) {
//   const lastDigitOne = /1$/;
//   const lastDigitTwo = /2$/;
//   const lastDigitThree = /3$/;
//   if (i > 11 && (i+100)%100===11 || (i+1).toString().match(lastDigitOne)){
//     console.log(`My ${i+1}st choice is ${myFav[i]}`);
//   } if (i > 12 && (i+100)%100===12 || (i+1).toString().match(lastDigitTwo)){
//     console.log(`My ${i+1}nd choice is ${myFav[i]}`);
//   } if (i > 13 && (i+100)%100===13 || (i+1).toString().match(lastDigitThree)){
//     console.log(`My ${i+1}rd choice is ${myFav[i]}`);
//   } else console.log(`My ${i+1}th choice is ${myFav[i]}`);
// }


// Hangman

//
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
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

const secretWord = ["A","P","P","L","E"];
const displayArray = ["_","_","_","_","_"];
const guessedLetters = [];
let wrongGuess = 0;

const guessLetter = function(letter){
  letter = letter.toUpperCase();
// checking if guessed already
(guessedLetters.indexOf(letter) === -1 ? checkAgainstWord(letter) : alreadyFound(letter));
}

const alreadyFound = function(letter){
  wrongGuess++;
  console.log(`You have guessed ${letter} already!`)
  if (wrongGuess >= 6){
    console.log(`You lose!`);
  }
}


const checkAgainstWord = function(letter){
  guessedLetters.push(letter)
  if (secretWord.indexOf(letter) === -1){
    wrongGuess++;
    if (wrongGuess >= 6){
      console.log(`You lose! Stop playing!`);
    }
  }
  for (var i = 0; i < secretWord.length; i++){
    if (secretWord[i] === letter){
      displayArray[i] = letter;
    }
  }
  if (secretWord.join("") === displayArray.join("")){
    console.log(`You got the word, ${secretWord.join("")}`);
  } else console.log(displayArray);
}


// 1. Maximum of two numbers using if and else

const maxOfTwoNumbers = function(a,b){
  if (a === b){
    console.log(`They are equal!`);
  } else if (a > b){
    console.log(a);
  } else console.log(b);
}

// 2. Maximum of arbitrary list of numbers

const maxNumber = function(numbers){
  let arrayOfArgs = [];
  for (var i = 0; i < arguments.length; i++) {
    arrayOfArgs.push(arguments[i]);
  }
  arrayOfArgs.sort(function(num1,num2){
    return num2 - num1;
  });
  console.log(arrayOfArgs[0]);
}

// 3. Vowel checker

const vowelChecker = function(singleChar){
  let arrayVowel = ["a","e","i","o","u"];
  singleChar = singleChar.toLowerCase();
  console.log(arrayVowel.indexOf(singleChar) > -1);
}

// 4. Summing and multiplying over an array arguments

const sumArray = function(preAdding){
  totalSum = 0;
  for (var i = 0; i < preAdding.length; i++) {
    totalSum += preAdding[i];
  }
  console.log(totalSum);
}

const multiplyArray = function(preMultiplying){
  totalProduct = 1;
  for (var i = 0; i < preMultiplying.length; i++) {
    totalProduct *= preMultiplying[i];
  }
  console.log(totalProduct);
}

// 5. String reversal (without reverse method)

const stringReverser = function(unreversed){
  var letterKeeper = [];
  for (var i=0; i<unreversed.length; i++){
    letterKeeper[unreversed.length -1 - i] = unreversed[i];
  }
  console.log(letterKeeper.join(""));
}

// 6. Find longest word
// Title of exercise says to find the word, but exercise description
// asks for the length.
// Below is attempt to find the word or words if multiple words
// share the longest length

const arrayOfWords = function(unorderedStrings){
  var lengthLogger = [];
  for (var i = 0; i < unorderedStrings.length; i++) {
    lengthLogger.push(unorderedStrings[i].length);
  }
// slice method included to leave lengthLogger intact
  var descendingWordLength = lengthLogger.slice().sort(function(a,b){
    return b - a;
  });
  console.log(descendingWordLength);
// Longest word in array is descendingWordLength[0].
  const longestLength = descendingWordLength[0];
// See at which index this length was logged in the lengthLogger,
// return that value from original array.
  var indexLogger = [];
  for (var i = 0; i < lengthLogger.length; i++) {
    if (lengthLogger[i] === longestLength){
      console.log(unorderedStrings[i]);
    }
  }
}

// Distracted by commenting, here is shorter version

const arrayOfWordsTwo = function(arrayString){
  arrayString.sort(function(a,b){
    return b.length - a.length;
  });
  for (var i = 0; i < arrayString.length; i++) {
    (arrayString[0].length === arrayString[i].length ? console.log(arrayString[i]) : console.log(`No more max length strings`));
  }
}


// 7. Function that takes array of words and number i, returns array of words longer than i.

const wordLengthFilter = function(arrayAndNum){
  var arrayFormat = arrayAndNum.slice.call(arguments);
  var arrayOnlyWords = arrayFormat[0];
  for (var i = 0; i < arrayOnlyWords.length; i++) {
    if (arrayOnlyWords[i].length > arrayFormat[1]){
      console.log(arrayOnlyWords[i]);
    }
  }
}
