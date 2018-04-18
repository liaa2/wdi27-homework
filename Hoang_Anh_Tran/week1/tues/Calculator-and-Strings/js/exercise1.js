// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
//It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(num) {
  const squareResult = num**2;
  console.log(`The result of squaring the number ${num} is ${squareResult}`);
};


squareNumber(199);
squareNumber(1203);
squareNumber(-1);



// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
//It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(num) {
  const halfResult = num / 2;
  console.log(`Half of ${num} is ${halfResult}`);
};

halfNumber(12);
halfNumber(104);
halfNumber(10245453);


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
//and return the result. It should also log a string like "2 is 50% of 4."


const percentOf = function(num1, num2) {
  const percentResult = (num1 / num2) * 100;
  console.log(`${num1} is ${percentResult}% of ${num2}`);
};

percentOf(10, 30);
percentOf(12, 100);
percentOf(1, 20);



// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.



const areaOfCircle = function (radius) {
  const areaValue = Math.PI * radius**2;
  console.log(`The area for a circle with radius ${radius} is ${areaValue.toFixed(2)}`);

};

areaOfCircle(10);




// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
//  js-homework-2.md

const calculator = function (number) {
  const half = halfNumber(number);
  const squared = squareNumber(half);
  const circle = areaOfCircle(squared);
  const percentage = percentOf(circle, squared);

};
console.log(calculator(12));



// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
//

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function(amount) {
  if (amount === 1000000) {
    console.log(`${amount} dollars (pinky)`);
  } else {
    console.log(`${amount} dollars`);
  }
};

drEvil(1000000);
drEvil(12);







// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings
// (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!


const mixUp = function (str1, str2) {
const str1To2 = str2.slice(0,2) + str1.slice(2, );
const str2To2 = str1.slice(0,2) + str2.slice(2, );
const total = str1To2 + " " + str2To2;
return total;

};

console.log(mixUp("dog", "dinner"));
console.log(mixUp("mix", "pod"));


// FixStart
// Create a function called fixStart. It should take a single argument, a string,
//and return a version where all occurences of its first character have been replaced with '*', except for the first character itself.
//You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

//const fixStart = function (wordFix) {




// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end,
//unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
//For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(word) {
  if (word.length < 3) {
    console.log(word);
  } else if (word[word.length - 1 ] === "g" && (word[word.length - 2] === "n") && word[word.length - 3] === "i") {
    console.log(`${word}ly`);
  } else {
    console.log(`${word}ing`);
  }
};



verbing("cook");
verbing("go");
verbing("eating");



// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'







// Warmup - Raindrops
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.




// const factorNumber = function (num) {
//   if (number.to(string)().indexOf('3') === true) {
//     console.log("Pling");
//   } else if (number.to(string)().indexOf('5') === true) {
//     console.log("Plang");
//     else if (number.to(string)().indexOf('7') === true) {
//     console.log("Plong");
//   } else {
//     console.log(number.to(string));
//   }
// };


//warmup:



const rainDrops = function (number) {
  let string = "";
  // if (number % 3 === 0 && number % 5 === 0) {
  //   console.log("PlingPlang");
   if (number % 3 === 0) {
    string += "Pling";

  } else if (number % 5 === 0) {
    sring += "Plang";

  } else if (number % 7 === 0) {
    string += ("Plong");

  } else {
    const result = number;
    console.log(result);
  }
};
rainDrops(34);
rainDrops(10);
rainDrops(150);



const isAFactor = function (number, factor) {
  return number % factor === 0;
}

const randrops = function(number) {
  let string = "";

  if (isAFactor(number, 3)) {
    string += "Pling"

  } else if (isAFactor(number, 5)) {
      string += "Plong"

  } else if (isAFactor(number, 7)) {
      string += "Plang"

    } if(string.length === 0) {
      string += number;
    }
  return string;

}

// Examples
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
