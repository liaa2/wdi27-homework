// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = a => {
  const square = a*a;

  console.log(`The result of squaring the number ${a} is ${square}.`)
  return square;
};
squareNumber(2)

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (b) {
  const half = b/2;
  console.log(`Half of ${4} is ${half}.`);

  return half;
};
halfNumber(4);

// const halfNumber = b => b/2;


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(a, c) {
  const result = a*100/c;
  console.log(`${a} is ${a*100/c}% of ${c}`);

  return result;
};
percentOf(2,8)

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function(radius) {
  const area = (squareNumber(radius) * Math.PI).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}`);

  return area;
};

areaOfCircle(5)


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const part2 = function(a) {
  const half = halfNumber(a);
  const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percentage = percentOf(area, square);
};

part2(3)
