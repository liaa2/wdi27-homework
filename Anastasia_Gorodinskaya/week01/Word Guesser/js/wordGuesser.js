// //You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// - user matched anything
// - keep track of the words guessed ??

/*Pseudocode:
- Loop through letters of secret word
- Check each letter against the guess letter
- if it matches fill in the guess array with that letter at the correct index
- increment the guess count
- if the guess count is larger than the max allowed counts
- end the game and print a message
*/

// const answer = ["s","t","a","r"];
// const secret = ["*","*","*,","*"];
//
// const guessedLetter = (letter) => {
//
//   for (let i=0; i< answer.length; i++) {
//     if (letter === answer [i]){
//       console.log(`Your guess is correct, the letter is ${letter}`);
//       secret[i] = letter;
//       console.log(secret);
//     } if (letter !== answer[i]){
//       console.log(`Try again!`);
//     }
//   }
// }
// guessedLetter("j");
// guessedLetter("s");
// guessedLetter("t");
// guessedLetter("a");
// guessedLetter("r");
// guessedLetter("r");

// //
// const globalGuesses = ["*","*","*","*","*"];
// const rightWord = ["s","t","a","r","s"];
// const guessedLetter1 = function(guess) {
//   for (let i=0; i<rightWord.length; i++){
//     if (guess === rightWord[i]) {
//       console.log(`Your guess of ${guess} is correct`);
//       globalGuesses[i] = guess;
//       console.log(globalGuesses);
//     }
//   }
// };
//
// guessedLetter1("s");

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// const answer1 = ["s","t","a","r"];
// const secret1 = ["*","*","*,","*"];
//
// const guessedLetter1 = (letter1) => {
//
//   for (let i=0; i< answer1.length; i++) {
//     if (letter1 === answer1 [i]){
//       console.log(`Your guess is correct, the letter is ${letter1} and you won ${i+2} dollars`);
//       secret1[i] = letter1;
//       console.log(secret1);
//       console.log(`Try again! You have ${answer1.length-secret1.length} letters to guess`);
//     } else if (letter1 !== answer1[i]){
//
//     }
//
//   }
// // }
// // guessedLetter1("s")
// // guessedLetter1("t")
// // guessedLetter1("k")
//
const answer2 = ["s","t","a","r"];
const secret2 = ["*","*","*,","*"];

const guessedLetter2 = (letter2) => {
  let correctAnswer = false;
  let wrongAnswer = false;
  for (let i=0; i< answer2.length; i++) {
    if (letter2 === answer2 [i]) {
      secret2 [i] = letter2;
      correctAnswer = true;
    }
    if (secret2[i]=="*"){
      wrongAnswer = true;
    }
  }
  if (correctAnswer){
    const randomAward = Math.random() * max;
    console.log(`Your guess is correct, the letter is ${letter2} and you won ${randomAward} dollars`);
    console.log(secret2.join (''));
    if (!wrongAnswer){
      console.log(`Congratulations! You guessed the letter`);
    }
    else {
      console.log('Sorry, your answer is wrong. Keep trying');
    }
  }
}

guessedLetter2("s");
guessedLetter2("t");
guessedLetter2("k");

// inside the loop, nesting loop...
// maxAllowed = secretword.length
// . split, .index
// total money earned -= award
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.



//
// ===========================================================================================
//
// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

let MaxOfTwoNumbers = (numArray)=> {
    return Math.max.apply(null, numArray);
};

console.log(MaxOfTwoNumbers([1,2]));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
let MaxOfThreeNumbers = (numArray)=> {
    return Math.max.apply(null, numArray);
};

console.log(MaxOfTwoNumbers([1,2,3]));


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function aaaa(newLetter) {
  if (newLetter === 'a'||newLetter === 'o'||newLetter === 'e'||newLetter === 'i'||newLetter === 'u'){
  return 'true'
}else{
  return 'false'
}
}

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.


this.array = [0, 1, 2, 3]
this.sum = this.array.reduce(function(a, b) {
  return a + b;
};





function multiplyArray(array) {
array.reduce((a, b) => a * b);
}

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
