// What numbers bigger?
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function(number1,number2){
  if(number1 > number2){
    return `${number1} is big`;
  }
  else
    return `${number2} is big`;

}
const largest1 = greaterNum(34,67);
const largest2 = greaterNum(89,23);
console.log(largest1);
console.log(largest2);

// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

console.log('The World Translator');

const helloWorld = function(langCode){
  if(langCode=='LA'){
    return `${langCode} is for Latin`;
  }
  else if(langCode=='TA'){
    return `${langCode} is for Tamil`;
  }
  else if(langCode=='KN'){
    return `${langCode} is for Kannada`;
  }
  else {
    return `${langCode} is for English`;
  }
}
const latin = helloWorld('LA');
const tamil = helloWorld('TA');
const kannada = helloWorld('KN');
const english = helloWorld('EN');

console.log(latin);
console.log(tamil);
console.log(kannada);
console.log(english);

// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

console.log('The Grade Assigner');

const assignGrade = function(numScore){
if(numScore > 80){
  return `falls on grade A`;
}
else if(numScore > 70){
  return `falls on grade B`;
}
else if(numScore > 60){
  return `falls on grade C`;
}
else if(numScore > 50){
  return `falls on grade D`;
}
else if(numScore > 40){
  return `falls on grade E`;
}
else{
  return `falls on grade F`;
}
}
const score1 = assignGrade(87);
const score2 = assignGrade(56);
const score3 = assignGrade(67);
const score4 = assignGrade(23);

console.log(score1);
console.log(score2);
console.log(score3);
console.log(score4);


// The Pluralizer
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

console.log('The Pluralizer');

const pluralize = function(nounIn,numIn){
  if(numIn==1)
  {
    return `1 ${nounIn}`;
  }
  else if (numIn>1){
    if(nounIn=='sheep'){
      return `${numIn} sheep`;
    }
    else if(nounIn=='goose'){
        return `${numIn} geese`;
    }
    else {
      return `${numIn} ${nounIn}s`;
    }
  }
}
const forSheep = pluralize('sheep',4);
const forGoose = pluralize('goose',7);
const forAny = pluralize('cat',4);

console.log(forSheep);
console.log(forGoose);
console.log(forAny);
