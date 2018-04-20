// Geometry Function Lab
const rectangle = {
  length: 6,
  width: 4
};

const isSquare = function(inputObject){
  if(inputObject.length === inputObject.width){
    return true;
  };
  return false;
}

const rectangleArea = function(inputObject){
  return inputObject.length * inputObject.width;
}

const rectanglePerimeter = function(inputObject){
  return (inputObject.length * 2) + (inputObject.width * 2);
}

console.log('=== PART 1 : RECTANGLE ===')
console.log(`Is the ${ rectangle.length } x ${ rectangle.width } rectangle a square? ${ isSquare(rectangle) }`);
console.log(`Area of ${ rectangle.length } x ${ rectangle.width } rectangle is ${ rectangleArea(rectangle) }`);
console.log(`Perimeter of ${ rectangle.length } x ${ rectangle.width } rectangle is ${ rectanglePerimeter(rectangle) }`);

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(inputObject){
  if((inputObject.sideA === inputObject.sideB) && (inputObject.sideA === inputObject.sideC)){
    return true;
  };
  return false;
}

const isIsosceles = function(inputObject){
  if(inputObject.sideA === inputObject.sideB){
    return true;
  }

  if(inputObject.sideA === inputObject.sideC){
    return true;
  }

  if(inputObject.sideB === inputObject.sideC){
    return true;
  }
  return false;
}

const isObtuse = function(inputObject){
  if(Math.pow(inputObject.sideA, 2) + Math.pow(inputObject.sideB, 2) < Math.pow(inputObject.sideC, 2)){
    return true;
  }

  if(Math.pow(inputObject.sideB, 2) + Math.pow(inputObject.sideC, 2) < Math.pow(inputObject.sideA, 2)){
    return true;
  }

  if(Math.pow(inputObject.sideC, 2) + Math.pow(inputObject.sideA, 2) < Math.pow(inputObject.sideB, 2)){
    return true;
  }
  return false;
}

const triangleArea = function(inputObject){
  const localSideA = inputObject.sideA;
  const localSideB = inputObject.sideB;
  const localSideC = inputObject.sideC;

  const p = (localSideA + localSideB + localSideC) / 2;
  return area = Math.sqrt((p * (p - localSideA) * (p - localSideB) * (p - localSideC)));
};


console.log('\n\n=== PART 2 : TRIANGLE ===')
console.log(`Is the ${ triangle.sideA } x ${ triangle.sideB } x ${ triangle.sideC } triangle equilateral? ${ isEquilateral(triangle) }`);
console.log(`Is the ${ triangle.sideA } x ${ triangle.sideB } x ${ triangle.sideC } triangle isosceles? ${ isIsosceles(triangle) }`);
console.log(`Is the ${ triangle.sideA } x ${ triangle.sideB } x ${ triangle.sideC } triangle obtuse? ${ isObtuse(triangle) }`);
console.log(`Area of ${ triangle.sideA } x ${ triangle.sideB } x ${ triangle.sideC } triangle is ${ triangleArea(triangle) }`);

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(inputObject){
  let runningTotal = 0;
  for(let i in inputObject){
    runningTotal += Number(inputObject[i]);
  }

  return runningTotal;
}

// Output
console.log('\n\n=== THE CASH REGISTER ===')
console.log(`Total of the cartForParty is $${ cashRegister(cartForParty) }`);
