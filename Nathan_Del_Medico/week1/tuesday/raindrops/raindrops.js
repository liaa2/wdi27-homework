// //Raindrops
// const raindrops = function(number) {
//   if (number%3 === 0 && number%5 === 0 && number%7 === 0) {
//     console.log(`PlingPlangPlong`);
//   }
//   else if (number%3 === 0 && number%5 === 0) {
//     console.log(`PlingPlang`);
//   }
//   else if (number%3 === 0 && number%7 === 0) {
//     console.log(`PlingPlang`);
//   }
//   else if (number%5 === 0 && number%7 === 0) {
//     console.log(`PlingPlong`);
//   }
//   else if (number%3 === 0) {
//     console.log(`Pling`);
//   }
//   else if (number%5 === 0) {
//     console.log(`Plang`);
//   }
//   else if (number%7 === 0) {
//     console.log(`Plong`);
//   }
//   else {
//     console.log(`${number}`);
//   }
// }

const raindrops = function(number) {
  let answer = "";
  if (number%3 === 0) {
    answer += "Pling";
  }
  if (number%5 === 0) {
    answer += "Plang";
  }
  if (number%7 === 0) {
    answer += "Plong";
  }
  if (answer === "") {
    answer += string(number);
  }
  console.log(`${answer}`);
}
