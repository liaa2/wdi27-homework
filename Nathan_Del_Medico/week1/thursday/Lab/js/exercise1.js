// Rectangle
const rectangle = {
  length: 4,
  width: 5,
};

// Is Square
const isSquare = function (shape) {
  if (shape.length === shape.width) {
    return `This is a square`;
  }
  return `This isnt a square`;
}

// Area
const area = function (shape) {
  return shape.length * shape.width;
}

// Perimiter
const perimeter = function (shape) {
  return (shape.length*2) + (shape.width*2);
}





// Triangle
// Triangle
// Triangle
const triangle = {
  sideA: 6,
  sideB: 6,
  sideC: 6
};

// Is Equilateral
const isEquilateral = function () {
  if((triangle.sideA+triangle.sideB+triangle.sideC)/3 === triangle.sideA) {
    return `This triange is an Equilateral triangle.`;
  }
  return `This triangle isn't an Equilateral triangle.`;
}

// Is Isosceles
const isIsosceles = function () {
  if (triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC || triangle.sideA === triangle.sideC && triangle.sideA !== triangle.sideB || triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA) {
    return `This triangle is an Isosceles triangle.`;
  }
  return `This triangle isn't an Isosceles triangle.`;
}

// Area of Triangle
// a = 1/2*b*h
// sideA is base
// half of a2 + b2 = c2
const triangleArea = function () {
  let height = (triangle.sideB**2)-((triangle.sideA/2)**2);
  height = Math.sqrt(height);
  answer = 0.5*triangle.sideA*height;
  return `The area is ${answer}`;
}

// The Cash Register
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
let totalPrice = 0;
const price = function () {
  for( let key in cartForParty) {
    totalPrice += Number(cartForParty[key]);
  }
  return `Total: $${totalPrice}`;
};
