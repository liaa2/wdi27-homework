//
// What number's bigger?
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


const greaterNum = function (num1, num2) {
  if (num1 - num2 > 0) {
    return (`The greater number is ${num1}`);
  } else if (num1 - num2 < 0) {
      return (`The greater number is ${num2}`);
    } else {
      return ("The numbers are even");
    }
  };
  console.log(greaterNum(12, 12));
  console.log(greaterNum(100, 12));
  console.log(greaterNum(1, -2));



// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function (langCode){
  if (langCode === "en") {
    console.log("Hello World");

  } else if (langCode === "de") {
    console.log("Guten tag");

  } else if (langCode === "es") {
    console.log("Hola");
  }
};

helloWorld("en");
helloWorld("de");
helloWorld("es");

//const languageCode

// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

const assignedGrade = function (grade) {

  if (grade >= 90) {
  console.log("You get an A");
} else if (grade >= 80) {
  console.log("You get a B");
} else if (grade >= 70) {
  console.log("You get a C");
} else if (grade >= 60) {
  rconsole.log("You get a D");
} else {
  console.log("You get an F");
}
};

assignedGrade(20);

//console.log(grade);

// The Pluralizer
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese"


const pluralize = function(number, noun) {
  if (number === 0 || number === 1) {
    console.log(`There is ${number} ${noun}`);
  } else {
    console.log(`There are ${number} ${noun}s`);
  }
};

pluralize(100, "cat");
pluralize(10, "chicken");
pluralize(0, "dog");
