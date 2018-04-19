const squareNumber = function(numberInput, supressLog){
  let numberOutput = Math.pow(numberInput, 2);
  if(!supressLog){
    console.log(`The result of squaring the number ${numberInput} is ${numberOutput}`);
  };
  return numberOutput;
}

const halfNumber = function(numberInput, surpressLog){
  let numberOutput = numberInput / 2;
  if(!surpressLog){
    console.log(`Half of ${numberInput} is ${numberOutput}`);
  };
  return numberOutput;
}

const percentOf = function(numberInput1, numberInput2, surpressLog){
  let numberOutput = (numberInput1 / numberInput2) * 100;
  if(!surpressLog){
    console.log(`${numberInput1} is ${numberOutput}% of ${numberInput2}`);
  };
  return numberOutput;
}

const areaOfCircle = function(circleRadius, surpressLog){
  let circleArea = squareNumber(circleRadius, true) * Math.PI;
  let circleAreaDisplay = circleArea.toFixed(2);
  if(!surpressLog){
    console.log(`The area for a circle with radius ${circleRadius} is ${circleAreaDisplay}`);
  };
  return circleArea;
}

const percentageOfCircleArea = function(numberInput){
  let halvedInput = halfNumber(numberInput, true);
  let squared = squareNumber(halvedInput, true);
  let area = areaOfCircle(squared, true);
  let areaPercentage = percentOf(squared, area);
}

const DrEvil = function(numberInput){
  let pinky = null;
  numberInput === 1000000 ? pinky="(pinky)" : pinky="";
  console.log(`DrEvil(${numberInput}): ${numberInput} dollars ${pinky}`);
}

const mixUp = function(stringInput1, stringInput2){
  let inputOneInitChars = stringInput1.substr(0, 2);
  let inputOneRemChars = stringInput1.substr(2);
  let inputTwoInitChars = stringInput2.substr(0, 2);
  let inputTwoRemChars = stringInput2.substr(2);

  let stringOutput = `${inputTwoInitChars}${inputOneRemChars} ${inputOneInitChars}${inputTwoRemChars}`
  console.log(`mixUp('${stringInput1}', '${stringInput2}'): '${stringOutput}'`);
}

const fixStart = function(stringInput){
  let stringInputInitChar = stringInput.substr(0, 1);
  let stringInputRemChars = stringInput.substr(1);
  stringInputRemChars = stringInputRemChars.replace(new RegExp(stringInputInitChar, "g"), "*");

  let stringOutput = `${stringInputInitChar}${stringInputRemChars}`;
  console.log(`fixStart('${stringInput}'): '${stringOutput}'`);
}

const verbing = function(stringInput){
  let last3Chars = stringInput.substring(stringInput.length-3);
  if(last3Chars === "ing"){
    stringOutput = stringInput.concat('ly');
  }else if(stringInput.length >= 3){
    stringOutput = stringInput.concat('ing');
  }else{
    stringOutput = stringInput;
  };

  console.log(`verbing('${stringInput}'): '${stringOutput}'`);
}

const notBad = function(stringInput){
  let stringOutput = stringInput.replace(new RegExp('not.*bad'), 'good');
  console.log(`notBad('${stringInput}'): '${stringOutput}'`);
}

const whichIsBigger = function(numberInput1, numberInput2, surpressLog){
  // Function will compare 2 numbers and return the greater of the 2
  // If both are equal it will return null

  let biggerNumber = null;
  if(numberInput1 > numberInput2){
    biggerNumber = numberInput1;
  }else if(numberInput2 > numberInput1){
    biggerNumber = numberInput2;
  }

  if(!surpressLog){
    if(biggerNumber === null){
      console.log(`whichIsBigger: ${numberInput1} and ${numberInput2} are equal.`);
    }else{
      console.log(`whichIsBigger: The greater number of ${numberInput1} and ${numberInput2} is ${biggerNumber}.`);
    };
  };
  return biggerNumber;
}

const worldTranslator = function(stringInput, surpressLog){
  let stringOutput = "Hello, World";

  if(stringInput === "es"){
    stringOutput = "Hola Mundo"
  }else if(stringInput === "de"){
    stringOutput = "Hallo Welt"
  }

  if(!surpressLog){
      console.log(`worldTranlator(${stringInput}): ${stringOutput}`);
  };

  return stringOutput;
};

const gradeAssigner = function(numberInput, surpressLog){
  let gradeOutput = null;
  if(numberInput >= 90){
    gradeOutput = "A";
  }else if(numberInput >= 75){
    gradeOutput = "B";
  }else if(numberInput >= 60){
    gradeOutput = "C";
  }else if(numberInput >= 45){
    gradeOutput = "D";
  }else{
    gradeOutput = "F";
  }

  if(!surpressLog){
    console.log(`gradeAssigner(${numberInput}): Grade is ${gradeOutput}`);
  };
  return gradeOutput;
};

const pluralizer = function(stringInput, numberInput, surpressLog){
  let stringOutput = null;
  let pluralException = {};
  pluralException["sheep"] = "sheep";
  pluralException["goose"] = "geese";

  if(numberInput === 1){
    pluralString = stringInput;
  }else if(pluralException[stringInput] != null){
    pluralString = pluralException[stringInput];
  }else{
    pluralString = stringInput.concat('s');
  }

  if(numberInput === 0){
    stringOutput = `No ${pluralString}`
  }else{
    stringOutput = `${numberInput} ${pluralString}`;
  };

  if(!surpressLog){
    console.log(`pluralizer(${stringInput}, ${numberInput}): ${stringOutput}}`);
  };
  return stringOutput;
};

console.log("=== if/else statements Homework (js-3-conditionals.md) ===");
whichIsBigger(5, 10);
whichIsBigger(15, 15);
worldTranslator("de");
worldTranslator("en");
worldTranslator("es");
gradeAssigner(68);
gradeAssigner(92);
pluralizer("dog", 2);
pluralizer("cat", 0);
pluralizer("goose", 1);
pluralizer("sheep", 10);
console.log("\n=== The Calculator Homework (js-homework-1.md) ===");
squareNumber(3);
halfNumber(5);
percentOf(2, 4);
areaOfCircle(2);
percentageOfCircleArea(4);
console.log("\n=== Strings Homework (js-homework-1.md) ===");
DrEvil(10);
DrEvil(1000000);
DrEvil(1000);
mixUp('mix', 'pod');
mixUp('dog', 'dinner');
fixStart('babble');
verbing('swim');
verbing('swimming');
verbing('go');
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This movie is bad!');
console.log("=== END OF HOMEWORK ===")
