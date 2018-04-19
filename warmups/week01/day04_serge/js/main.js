// Serge answers 'Sure.' if you ask him a question.
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// Create a function that takes an input and returns Serge's response.

const sergeSays = function(input) {

  if (input === '' || input === null || input === undefined) {
  // if( !input ){ //shorter version - if the input is empty
    return 'Fine. Be that way!'
  }

  // if the input ends with a question mark '?'
  if (input.endsWith('?')) {
    return 'Sure.'
  // if the input is the same as the input in all upper case letters
  } else if (input === input.toUpperCase()) {
    return 'Woah, chill out!'
  }
  return 'Whatever'
};

console.log(sergeSays(''));
console.log(sergeSays('ARE YOU BLIND?'));
console.log(sergeSays('hello'));

// const sergeSays = function(input){
//   if( input === input.toUpperCase()){
//     if( input.length === 0 ){
//       return 'Fine'
//     } else {
//       return 'Woah, chill out!'
//     }
//   }
//     else if( input.endsWith('?') ){
//       return 'Sure'
//     } else {
//       return 'Whatever'
//     }
// };
