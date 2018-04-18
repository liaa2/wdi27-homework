// What Numbers Bigger?
const greaterNum = function(numberOne, numberTwo) {
  // Checks if first number is bigger than second number
  if (numberOne > numberTwo) {
    return `${numberOne} is bigger than ${numberTwo}`;
  }
  // Checks if second number is bigger than first number
  else if (numberOne < numberTwo) {
    return `${numberOne} is smaller than ${numberTwo}`;
  }
  // If this runs, the numbers are equal
  else {
    return `${numberOne} and ${numberTwo} are equal`;
  }
}

//The World Translator
const helloWorld = function(language) {
  // Spanish
  if (language === "es") {
    return `Hola Mundo`;
  }
  // Dutch
  else if (language === "de") {
    return `Hallo Wereld`;
  }
  // Anything else
  else {
    return `Hello, World`;
  }
}

//The Grade Assigned
const assignGrade = function(score) {
  if (score > 100) {
    return `Impossible`;
  }
  else if (score >= 90) {
    return `Grade = A`;
  }
  else if (score >= 80) {
    return `Grade = B`;
  }
  else if (score >= 70) {
    return `Grade = C`;
  }
  else if (score >= 50) {
    return `Grade = D`;
  }
  else {
    return `Grade = F`;
  }
}

// The pluralizer
const pluralize = function(noun,number) {
  if (number === 1) {
    return `${number} ${noun}`;
  }
  else {
    return `${number} ${noun}s`
  }
}
