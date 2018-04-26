// What number's bigger?

const greaterNum = function(a,b){
  if (typeof(a) === `number` && typeof(b) === `number`){
    if (a === b){
      console.log(`Equal!`);
    }
    else console.log(`The greater number of ${a} and ${b} is ${(a > b ? a : b)}.`);
  }
}

greaterNum(5,6);
greaterNum(-20,-21);



// The World Translator

const helloWorld = function(lang){
  if (lang === "es"){
    console.log(`¡Hola, Mundo!`);
  }
  else if (lang === "de"){
    console.log(`Hallo, Welt!`);
  }
  else if (lang === "kr"){
    console.log(`안녕, 세상!`);
  }
  else console.log(`Hello, World!`);
}

helloWorld("es");
helloWorld("de");
helloWorld("kr");
helloWorld();



// The Grade Assigner

const assignGrade = function(grade){
  if (grade >= 80){
    console.log(`A`);
  }
  else if (grade >= 70){
    console.log(`B`);
  }
  else if (grade >= 60){
    console.log(`C`);
  }
  else if (grade >= 50){
    console.log(`D`);
  }
  else console.log(`F`);
}

assignGrade(95);
assignGrade(75);
assignGrade(55);
assignGrade(45);



// The Pluralizer

const pluralizer = function(noun,c){
  if (c === 1){
    console.log(`${c} ${noun}`);
  }
  else console.log(`${c} ${noun}s`);
}

pluralizer("bee", 1);
pluralizer("cat", 5);
pluralizer("dog", 0);
pluralizer("cow", -1);



// The Calculator
// Part 1
// (1)
const squareNumber = function(d){
  if (typeof(d) === `number`){
    console.log(`The result of squaring the number ${d} is ${d**2}.`);
    return d*d;
  }
}
squareNumber(16);

// (2)
const halfNumber = function(e){
  if (typeof(e) === `number`){
    console.log(`Half of ${e} is ${e/2}.`);
    return e/2;
  }
}
halfNumber(20.5);

// (3)
const percentOf = function(p,q){
  if (typeof(p) === `number` && typeof(q) === `number`){
    console.log(`${p} is ${((p/q)*100).toFixed(2)}% of ${q}.`);
    return Number(p*100/q.toFixed(2));
  }
}
percentOf(5,7);

// (4)
const areaOfCircle = function(r){
  if (typeof(r) === 'number'){
    console.log(`The area for a circle with radius ${r} is ${(Math.PI*r**2).toFixed(2)}.`);
    return Number(Math.PI*r*r.toFixed(2));
  }
}
areaOfCircle(12);

console.log(`Combining functions`)

// Part 2
const combinedFunctions = function(x){
  let firstStep = halfNumber(x);
  let secondStep = squareNumber(firstStep);
  let thirdStep = areaOfCircle(secondStep);
  return percentOf(thirdStep, secondStep);
}

combinedFunctions(10);


// Strings

// DrEvil

const DrEvil = function(dollarAmount){
  if (Number(dollarAmount) === 1000000){
    console.log(`${dollarAmount} dollars (pinky)`);
  }
  else console.log(`${dollarAmount} dollars`);
}

DrEvil(50);
DrEvil(1000000);



// MixUp

const mixUp = function(stringOne, stringTwo){
  console.log(`${stringTwo.slice(0,2)}${stringOne.slice(2)} ${stringOne.slice(0,2)}${stringTwo.slice(2)}`)
}

mixUp('Rick','Morty');



// FixStart

const fixStart = function(stringToFix){
  let letterFixQueue = stringToFix.split("");
  const filteringLetter = stringToFix.split("")[0];
  for (var i=1; i<letterFixQueue.length; i++){
    if (filteringLetter === letterFixQueue[i]){
      letterFixQueue[i] = `*`;
    }
  }
  console.log(letterFixQueue.join(""));
}

fixStart(`aadvark`);


// Verbing

const verbing = function(verb){
  const endsInIng = /ing$/;
  if (verb.length >= 3){
    (verb.match(endsInIng) ? console.log(`${verb}ly`) : console.log(`${verb}ing`));
  }
  else console.log(`${verb}`);
}

verbing(`play`);
verbing(`playing`);
verbing(`do`);


// Not Bad
const replaceNotBad = (sentence) => {
  return sentence.replace(/not.*bad/, 'good')
}

const notBad = function(badCheck){
  const firstNot = /\bnot/; // b.?\bbad[\b$]/;
  const firstBad = /\bbad/;
  if (typeof badCheck.match(firstBad) === `number` && typeof badCheck.match(firstNot) === `number`){
    const indexOfBad = badCheck.match(firstBad).index;
    const indexOfNot = badCheck.match(firstNot).index;
    if (indexOfBad > indexOfNot){
      let strToCut = badCheck.slice(indexOfNot,indexOfBad+3);
      console.log(badCheck.replace(strToCut,"good"));
    }
  }
  else console.log(badCheck);
}

notBad(`This dinner is not that bad!`);
notBad(`This movie is not so bad!`);
notBad(`This dinner is bad!`);
