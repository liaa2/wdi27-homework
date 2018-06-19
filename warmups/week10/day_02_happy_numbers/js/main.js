

const isHappy = function(num){

  let cycle = {};

  let squareSum = num;

  let count = 0;

  while(true){

    squareSum = sumOfDigitsSquared( squareSum )

    if( squareSum === 1 ){
      return true;
    }

    if( cycle[ squareSum ] === true ){
      return false
    }

    cycle[ squareSum ] = true
    count++
    // console.log(cycle);
  }
}// isHappy

const sumOfDigitsSquared = function(num){

  let numStr = num.toString();
  let sum = 0;

  for( let i = 0; i < numStr.length; i++ ){
    sum += +numStr[i] * +numStr[i]
    // sum += pareseInt(numStr[i]) * pareseInt(numStr[i])
  }

  let digit
  while( num > 0){
    digit = num % 10
    sum += digit * digit
    number = (number - digit) / 10
  }

  // console.log(sum);
  return sum;
}

const generateHappyNumbers = function(count){

  let found = 0;

  for( let i = 0; found < count; i++ ){
    if( isHappy(i) ){
      found++;
      console.log('Found happy number', i);
    }
  };

  // console.log(found);

}// generateHappyNumbers

generateHappyNumbers( 10 );
