//
// Create an array to hold your top five choices of something
//(colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
//picking the right suffix for the number based on what it is.

var fruits = ["Banana", "Orange", "Apple", "Mango", "Grape"];
const suffixes = ['st','nd','rd','th','th'];
for (let i = 0; i < fruits.length; i++) {
  const ending = suffixes[i];
  console.log(`My #${i}${ ending } choice is ${fruits[i]}.`);
}
//
// const colorChoice1 = funChoice('White');
// console.log(``);
// const guessLetter = 'X';


// const guessLetter = function(letterIn){
//   var guessCount = 0;
//   const secretWord = ['F','O','X'];
//   const guessArray = ['','',''];
//   const maxAllowed = secretWord.length;
//
//   if(guessCount<secretWord.length)
//   {
//     for(i=0; i<secretWord.length; i++){
//       if(letterIn==secretWord[i]){
//         guessArray[i] = letterIn;
//         guessArrayStr = "";
//         for(y=0; y<guessArray.length; y++){
//           if (guessArray[y]=="") {
//             guessArrayStr = guessArrayStr + " _ ";
//           }
//           else {
//             guessArrayStr = guessArrayStr + guessArray[y];
//           }
//         }
//         return guessArrayStr;
//       }
//       guessCount = guessCount + 1;
//     }
//   }
//   else {
//   return "End";
//   }
// }
// // const guessLetterIn = guessLetter('O');
// // console.log(`${guessLetterIn}`);
// console.log(guessLetter('O'));
// console.log(guessLetter('F'));
// console.log(guessLetter('X'));
//guessArrayStr = "";
console.log('# Homework: The Word Guesser');
var guessCount = 0;
const guessArray = ['_','_','_'];

const guessLetter = function(letterIn){

  const secretWord = ['F','O','X'];

  const maxAllowed = secretWord.length;

  if(guessCount<secretWord.length)
  {
    for(i=0; i<secretWord.length; i++){
      if(letterIn==secretWord[i]){
        guessArray[i] = letterIn;
        guessArrayStr ="";
        for(y=0; y<guessArray.length; y++){
            guessArrayStr = guessArrayStr + guessArray[y];
        }
        return guessArrayStr;
      }
      guessCount = guessCount + 1;
    }
  }
  else {
  return "End";
  }
}
console.log(guessLetter('O'));
console.log(guessLetter('F'));
console.log(guessLetter('X'));
console.log(guessLetter('A'));


console.log(Math.random());


// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.
const answerQuest = function(questIn){
  if(questIn === '' || questIn === null || questIn === undefined)
  {
    return "Fine. Be that way!";
  }
  else
  {
    if(questIn.endsWith('?')){
      return "Sure.";
    }
    else if(questIn == questIn.toUpperCase()){
       return "Woah, chill out!";
     }
    else return 'Whatever';

  }
}

console.log(answerQuest('How are you?'));
console.log(answerQuest('WHAT ARE YOU DOING'));
console.log(answerQuest(''));
console.log(answerQuest('How are you'));
