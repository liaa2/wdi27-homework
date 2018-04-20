// Max Two
const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is larger than ${num2}`)
  }
  else if (num1 < num2) {
    console.log(`${num1} is smaller than ${num2}`)
  }
  else {
    console.log(`${num1} is equal to ${num2}`)
  }
}
// Max Three
const maxOfThree = function(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} is larger than ${num2} and ${num3}`)
    }
    else {
      console.log(`${num3} is larger than ${num1} and ${num2}`)
    }
  }
  else {
    if (num2 > num3) {
      console.log(`${num2} is larger than ${num1} and ${num3}`)
    }
    else {
        console.log(`${num3} is larger than ${num1} and ${num2}`)
    }
  }
}
// Vowel Checker
vowelList = ["a","e","i","o","u"];
const vowelChecker = function(vowel) {
  for (i = 0; i < vowelList.length; i++) {
    if (vowel === vowelList[i]) {
      console.log(`${vowel} is a vowel`);
      return;
    }
  }
  console.log(`${vowel} is not a vowel`);
}

// Sum Array
const sumArray = function(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log(`Total = ${total}`);
}

//Multiply Array
const multiplyArray = function(array) {
  let total = 1;
  for (i = 0; i < array.length; i++) {
    total = total * array[i];
  }
  console.log(`Total = ${total}`);
}

//Reverse
const reverseString = function(string) {
  let array = [];
  let answer = "";
  for (i = 0; i < string.length; i++) {
    array[i] = string[i]
  }
  array = array.reverse();
  // array = array.join();
  for (j = 0; j < string.length; j++) {
    answer += array[j];
  }
  console.log(answer);
}

//Find longest word
const longestWord = function(words) {
  let longWord = "";
  let longWordLength = 0;
  for (i = 0; i < words.length; i++) {
    if (words[i].length > longWordLength) {
      longWord = words[i];
      longWordLength = words[i].length;
    }
  }
  console.log(`${longWord} is the longest word with a length of ${longWordLength}`);
}

// Filter longest words
const longWords = function(words, minLength) {
  let newWords = [];
  for (i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      newWords.push(words[i]);
    }
  }
  console.log(newWords);
}
