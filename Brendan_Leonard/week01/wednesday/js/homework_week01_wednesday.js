const wordGuesser = function(hiddenWord, letterGuesses, gameMode){
  // Game Mode is Hangman, Wheel for Wheel of Fortune or blank for standard
  gameMode === undefined ? gameMode = "STANDARD" : gameMode.toUpperCase();
  let unhiddenWord = [];
  let matches = 0;
  let guesses = 0;
  let totalReward = 0;
  let reward = 0;
  let solved = false;

  if(gameMode === "HANGMAN"){
    maxGuesses = 6;
  }else{
    maxGuesses = letterGuesses.length;
  }

  // Initialise the displayed output array
  for (let i = 0; i < hiddenWord.length; i++) {
    unhiddenWord[i] = '_';
  }

  const guessLetter = function(charInput, supressLog){
    guesses++;
    console.log(`Checking letter [${charInput}] > guess number ${guesses}`);

    for (var i = 0; i < hiddenWord.length; i++) {
      if(hiddenWord[i] === charInput){
        console.log(`Found a match for [${charInput}]`);
        unhiddenWord[i] = charInput;
        // Display the current state of the unhidden word
        console.log(unhiddenWord);

        // If in Wheel of Fortune mode then add a reward
        if(gameMode === "WHEEL"){
            reward = Math.random() * 100;
            totalReward = totalReward + reward;
            console.log(`Your successful guess got you a reward of $${ reward.toFixed(2) } ... total reward so far $${ totalReward.toFixed(2) }`);
        }

        matches++;
        if(matches === hiddenWord.length){
          solved = true;
          break;
        }
      }
    }

    if(solved){
      return;
    }
  }

  if(gameMode === "STANDARD" || gameMode === "WHEEL"){
    console.log(`\n>>>>>>>> We are playing in ${gameMode} mode (unlimited guesses)`);
  }else{
    console.log(`\n>>>>>>>> We are playing in ${gameMode} mode (${maxGuesses} guesses allowed)`);
  }

  console.log(`>>>>>>>> At the start ${unhiddenWord}`);

  for (var i = 0; i < letterGuesses.length; i++) {
    guessLetter(letterGuesses[i]);
    if(solved) {
      console.log(">>>>>>>> Congratulations - You've solved the guessing game");
      console.log(`>>>>>>>> It took you a total of ${guesses} guesses`);
      break;
    }else if(guesses >= maxGuesses){
      break;
    }
  }

  if(!solved){
    console.log(`>>>>>>>> Bad Luck - You made ${guesses} guesses but didn't manage to solve the game`);
    console.log(`The hidden word was ${hiddenWord} and you got to ${unhiddenWord}`);
  }
}

const maxOfTwoNumbers = function(numberInput1, numberInput2, surpressLog){
  let maxNumber = numberInput1;

  if(numberInput1 === numberInput2){
    if(!surpressLog){
      console.log(`maxOfTwoNumbers(${numberInput1}, ${numberInput2}): Both numbers are the same.`);
    }
  }else{
    numberInput1 > numberInput2 ? maxNumber = numberInput1 : maxNumber = numberInput2;
    if(!surpressLog){
      console.log(`maxOfTwoNumbers(${numberInput1}, ${numberInput2}): ${maxNumber} is the larger of the two.`);
    }
  }
  return maxNumber;
}

const maxOfThreeNumbers = function(numberInput1, numberInput2, numberInput3){
  let numberInputArr = [numberInput1, numberInput2, numberInput3];
  let maxNumber = numberInput1;

  // Check if they're all the same
  if(numberInput1 === numberInput2 && numberInput1 === numberInput3){
    console.log(`maxOfThreeNumbers(${numberInput1}, ${numberInput2}, ${numberInput3}): ${maxNumber} is the largest of the three.`);
  }else{
    for (var i = 0; i < numberInputArr.length; i++) {
      maxNumber = maxOfTwoNumbers(maxNumber, numberInputArr[i], true);
    }
    console.log(`maxOfThreeNumbers(${numberInput1}, ${numberInput2}, ${numberInput3}): ${maxNumber} is the largest of the three.`);
  }
}

const isVowel = function(charInput, surpressLog){
  charInputUpper = charInput.toUpperCase();
  let vowelArray = ["A", "E", "I", "O", "U"];
  let returnVal = vowelArray.includes(charInputUpper);

  if(!surpressLog){
    console.log(`Is ${charInput} is a vowel? ${returnVal}`);
  }
  return returnVal;
}

const sumArray = function(arrayInput, surpressLog){
  let returnVal = 0;

  for (var i = 0; i < arrayInput.length; i++) {
    returnVal += arrayInput[i];
  }

  if(!surpressLog){
    console.log(`sumArray(${arrayInput}): sums to ${returnVal}`);
  }

  return returnVal;
}

const multiplyArray = function(arrayInput, surpressLog){
  let returnVal = arrayInput[0];

  for (var i = 1; i < arrayInput.length; i++) {
    returnVal = returnVal * arrayInput[i];
  }

  if(!surpressLog){
    console.log(`multiplyArray(${arrayInput}): multiplies to ${returnVal}`);
  }

  return returnVal;
}

const reverseString = function(stringInput, surpressLog){
  let stringArray = stringInput.split("");
  let stringOutput = stringInput.split('').reverse().join('');

  if(!surpressLog){
    console.log(`reverseString(${stringInput}): reverses to >${stringOutput}<`);
  }

  return stringOutput;
}

const findLongestWord = function(arrayInput, surpressLog){
  let maxWordLength = arrayInput[0].length;

  for (var i = 1; i < arrayInput.length; i++) {
    arrayInput[i].length > maxWordLength ? maxWordLength = arrayInput[i].length : maxWordLength = maxWordLength;
  }

  if(!surpressLog){
    console.log(`findLongestWord(${arrayInput}): The longest word is ${maxWordLength} characters.`);
  }

  return maxWordLength;
}

const filterLongWords = function(arrayInput, filterLength, surpressLog){
  let arrayOutput = [];

  for (var i = 0; i < arrayInput.length; i++) {
    if(arrayInput[i].length >= filterLength){
      arrayOutput.push(arrayInput[i]);
    }
  }

  if(!surpressLog){
    console.log(`filterLongWords([${arrayInput}], ${filterLength}): Filtered word list is [${arrayOutput}].`);
  }

  return arrayOutput;
}

wordGuesser(['H','E','L','L','O'], ['L','A','G','X','E','J','B','H','Z','O','W','Q','P','R']);
wordGuesser(['H','E','L','L','O'], ['L','A','G','X','E','J','B','H','Z','O','W','Q','P','R'], "HANGMAN");
wordGuesser(['H','E','L','L','O'], ['L','A','G','X','E','J','B','H','Z','O','W','Q','P','R'], "WHEEL");

console.log('\n=== OTHER HOMEWORK ===');

maxOfTwoNumbers(5, 5);
maxOfTwoNumbers(10, 12);
maxOfTwoNumbers(18, 14);

maxOfThreeNumbers(5, 5, 5);
maxOfThreeNumbers(10, 12, 9);
maxOfThreeNumbers(18, 14, 888);

isVowel('a');
isVowel('z');
isVowel('x');
isVowel('e');

sumArray([1, 2, 3, 4]);
sumArray([1, 2, 3, 5]);
sumArray([10, 10, 10]);

multiplyArray([1, 2, 3, 4]);
multiplyArray([2, 3, 2]);

reverseString('jag testar');
reverseString('Malaysia');

findLongestWord(['Hello','World','Goodbye','Earth']);
findLongestWord(['Brendan','Leonard']);

filterLongWords(['Hello','World','Goodbye','Earth'], 6);
filterLongWords(['This','Xylophone','Makes','A','Big','Noise'], 5);
