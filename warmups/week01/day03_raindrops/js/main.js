// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

// version 1
// const raindrops = function(number){
//     let string = '';
//   if( number % 3 === 0 ){
//     string += 'Pling';
//   }
//   if( number % 5 === 0 ){
//     string += 'Plang';
//   }
//   if( number % 7 === 0 ){
//     string += 'Plong';
//   }
//   if( string.length === 0 ){
//     string =  string + number;
//   }
//   return string;
// }

// version 2
const isAFactor = function(number, factor) {
  return number % factor === 0;
}

const raindrops = function(number) {
  let string = '';

  if (isAFactor(number, 3)) {
    string += 'Pling'
  }
  if (isAFactor(number, 5)) {
    string += 'Plong';
  }
  if (isAFactor(number, 7)) {
    string += 'Plang'
  }
  if (string.length === 0) {
    string += number;
  }
  return string;
}

console.log(raindrops(28));
console.log(raindrops(1755));
console.log(raindrops(34));
