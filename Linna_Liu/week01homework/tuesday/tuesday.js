// The Calculator
// Part 1

const squareNumber = function (number){
  const numberSquared = number**2;
  console.log(`The result of squaring the number ${number} is ${numberSquared}`);
  return numberSquared;
};
squareNumber(3);


const halfNumber = function (number) {
  const numberDivided = number/2;
  console.log(`Half of ${number} is ${numberDivided}`);
  return numberDivided;
};
halfNumber(5);

const percentOf = function (num1, num2) {
  const percentage = Math.round((num1/num2)*100);
  console.log(`${num1} is ${percentage}% of ${num2}`);
  return percentage;
};
percentOf(2,4);


const areaOfCircle = function (radius) {
  const area = Math.PI*(radius**2);
  console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`);
  return area
};

areaOfCircle(2);


// Part 2

const comebineCalculations = function (number) {
  const half=halfNumber(number);
  const squared=squareNumber(half);
  const area=areaOfCircle(squared);
  const percent=percentOf(squared, area);
}

comebineCalculations(5);


// DrEvil

const DrEvil = function (number) {
  if (number === 1000000) {
    console.log(`${number} dollars (pinky)`);
  } else {
    console.log(`${number} dollars`);
  }
};

DrEvil(10);
DrEvil(1000000);

// MixUp

const mixUp = function (str1, str2) {
  str1Start = str1.slice(0,2);
  str1End = str1.slice(2);
  str2Start = str2.slice(0,2);
  str2End = str2.slice(2);
  console.log(str2Start+str1End+" "+str1Start+str2End);
};

mixUp('mix', 'pod')
mixUp('dog', 'dinner')

// fixStart
//Option 1
const fixStart  = function (string) {
  const stringSplit = string.split("");
  const stringFirst=stringSplit[0]
  for (let i = 1; i<stringSplit.length; i++) {
    if (stringFirst === stringSplit[i]) {
      stringSplit[i] = "*"
    }; 
    return stringSplit.join("")
};

//Option 2
const fixStart = function (string) {
  firstLetter = string[0];
  return firstLetter + string.slice(1).replace(new RegExp(firstLetter, 'g'),'*')
}

console.log(fixStart("babble"));



//verbing

const verbing = function (string) {
  if (string.slice(-3)==="ing") {
    console.log(`${string}ly`);
  } else if (string.length>=3){
    console.log(`${string}ing`);
  } else {
    console.log (string)
  }
}

console.log(verbing("go"));

// notBad

const notBad = function (string) {
  const indexNot=string.indexOf("not")
  const indexBad=string.indexOf("bad")
  if (indexNot == -1 || indexBad == -1 || indexBad<indexNot) {
    return string;
  } else {
    return string.slice(0,indexNot)+"good"+string.slice(indexBad+3)
  }
}

console.log(notBad('This dinner is not that bad!'))
console.log(notBad('This movie is not so bad!'))
console.log(notBad('This dinner is bad!'))
