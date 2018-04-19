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

const funcRaindrops = function(numberInput){
  let stringOutput = "";
  if(numberInput % 3 === 0){
    stringOutput = stringOutput.concat("Pling ");
  }
  if(numberInput % 5 === 0){
    stringOutput = stringOutput.concat("Plang ");
  }
  if(numberInput % 7 === 0){
    stringOutput = stringOutput.concat("Plong ");
  }
  stringOutput = stringOutput.trim();

  console.log(stringOutput);
}

// Warmup - Raindrops
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

squareNumber(3);
halfNumber(5);
percentOf(2, 4);
areaOfCircle(2);
percentageOfCircleArea(4);
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
funcRaindrops(28);
funcRaindrops(1755);
funcRaindrops(9);
