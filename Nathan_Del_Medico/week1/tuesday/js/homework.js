// Squaring a Number
const squareNumber = function(number) {
  const answer = number**2;
  console.log(`The result of squaring the number ${number} is ${answer}`);
  return answer;
}

// Halving a Number
const halfNumber = function(number) {
  const answer = number/2;
  console.log(`Half of ${number} is ${answer}`);
  return answer;
}

// Percent of the Number
const percentOf = function(percentNumber, fullNumber) {
  const answer = (percentNumber/fullNumber)*100;
  console.log(`${percentNumber} is ${answer}% of ${fullNumber}`);
}

// Calculates area of Circle
const areaOfCircle = function(radius) {
  const answer = (radius**2) * Math.PI;
  console.log(`The area for a circle with radius ${radius} is ${answer}`);
  return answer;
}

// Part 2
const part2 = function(number) {
  const halfOfNumber = number/2;
  const secondNumberSquared = halfOfNumber**2;
  const areaOfCircle = (secondNumberSquared**2) * Math.PI;
  const percentageOfSquaredResult = (areaOfCircle / secondNumberSquared) * 100;
  console.log(`Half of ${number} is ${halfOfNumber}. ${halfOfNumber} squared is ${secondNumberSquared}. The area of a circle with a radius of ${secondNumberSquared} is ${areaOfCircle}. ${areaOfCircle} is ${percentageOfSquaredResult}% of ${secondNumberSquared}.`);
}

// DrEvil
const drEvil = function(amount) {
  // Checks if the amount is 1,000,000. If it is, adds (pinky)
  if (amount === 1000000) {
    return `${amount} dollars (pinky)`;
  }
  // Else just returns the amount with dollars by itself
  else {
    return `${amount} dollars`;
  }
}

// MixUp
// const mixUp = function(firstString,secondString) {
//   const newFirstString = firstString.replace(firstString[0], secondString[0]);
//   const newSecondString = secondString.replace(secondString[0], firstString[0]);
//   return `${newFirstString} ${newSecondString}`;
// }

// MixUp V2
const mixUp = function(firstString, secondString) {
  // Assigning the first letter of each string to a variable
  let newFirstString = secondString[0];
  let newSecondString = firstString[0];
  let counter = 1;
  // Adds the rest of the first string to the first character of the second string
  while (counter < firstString.length) {
    newFirstString += firstString[counter];
    counter += 1;
  }
  counter = 1;
  // Adds the rest of the second string to the first character of the first string
  while (counter < secondString.length) {
    newSecondString += secondString[counter];
    counter += 1;
  }
  return `${newFirstString} ${newSecondString}`;
}

// FixStart
// const fixStart = function(onlyString) {
//   const firstLetter = onlyString[0];
//   let counter = 0;
//   while (counter < onlyString.length) {
//     if (firstLetter === onlyString[counter]) {
//       onlyString = onlyString.replace(onlyString[counter], "*");
//     }
//     counter += 1;
//   }
//   onlyString = onlyString.replace(onlyString[0], firstLetter);
//   console.log(onlyString);
// }

// FixStart that doesn't work??
// const fixStart = function(onlyString) {
//   const firstLetter = onlyString[0];
//   let counter = 1;
//   while (counter < onlyString.length) {
//     if (firstLetter === onlyString[counter]) {
//       onlyString = onlyString.replace(onlyString[counter], "*");
//     }
//     counter += 1;
//   }
//   console.log(onlyString);
// }

//FixStart V3
const fixStart = function(onlyString) {
  // Assigns the first letter of the string to compare with the other characters
  const firstLetter = onlyString[0];
  let counter = 1;
  let answer = firstLetter;
  while (counter < onlyString.length) {
    // Goes through each character in the string, if that character is the same as the first character, it adds * instead of the default character
    if (onlyString[counter] === firstLetter) {
      answer = answer+"*";
    }
    // If the character is not the same as the first character, it just adds the default character
    else {
      answer = answer+onlyString[counter];
    }
    counter += 1;
  }
  console.log(answer);
}

// Verbing
const verbing = function(verb) {
  // If the last 3 letters are ing
  if (verb[verb.length-3] === "i" && verb[verb.length-2] === "n" && verb[verb.length-1] === "g") {
    verb += "ly";
  }
  // If the word is longer than 3 characters
  else if (verb.length > 3) {
    verb += "ing";
  }
  // Else do nothing
  return verb;
}

// Not Bad
const notBad = function(onlyString) {
  let counter = 0;
  let notTotal;
  let badTotal;
  let notStart;
  let newOnlyString = "";
  while (counter + 2 < onlyString.length) {
    // Checks if there is not in the string, if there is, it assigns a numerical value based on the position
    if (onlyString[counter] === "n" && onlyString[counter + 1] === "o" && onlyString[counter + 2] === "t") {
      notTotal = (counter*3)+3;
      // Stores where the word not started in the string
      notStart = counter;
    }
    // Checks if there is bad in the string, if there is, it assigns a numberical value based on the position
    else if (onlyString[counter] === "b" && onlyString[counter + 1] === "a" && onlyString[counter + 2] === "d") {
      badTotal = (counter*3)+3;
      // When adding not again to the string, it would make it no longer work. This fixes that.
      if (notTotal != 0) {
        counter = onlyString.length;
      }
    }
    counter += 1;
  }
  // By assigning not and bad numerical values, we can compare these variables to see which one came first
  // If not came first, this makes a new string with everything up to not, then adds good instead
  if (notTotal < badTotal) {
    let newCounter = 0;
    while (newCounter < notStart) {
      newOnlyString += onlyString[newCounter];
      newCounter += 1;
    }
    newOnlyString += "good";
  }
  // Else just return the default string
  else {
    newOnlyString = onlyString;
  }
  return newOnlyString;
}
