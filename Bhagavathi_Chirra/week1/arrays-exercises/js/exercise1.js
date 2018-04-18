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
