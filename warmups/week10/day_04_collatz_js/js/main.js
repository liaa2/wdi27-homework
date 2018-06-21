const collatz = function(num){

  // This collection will be where we store each value for comparison. With each iteration we will add the new value to the end and target that value with `collection[ collection.length - 1 ]`.
  let collection = [num];

  const makeCollection = function(){

    // while(the current number i.e. 12, 6, 3 etc, is > 1)
    // checking that the last number in the array is larger than 1
    while( collection[collection.length - 1] > 1){
      // Using debugger to stop the code to show the collection being collated with each iteration.
      // debugger;

      // store the number from the last iteration
      // when collection = [12, 6], currentNum = 12
      const currentNum = collection[ collection.length - 1];
      // This ternary will do two things for us, it will evaluate if the number give is odd or even then run the corresponding code.

      const nextIndex = currentNum % 2 === 0 ? (currentNum / 2) : ((currentNum * 3) + 1);

      // let nextIndex;
      // if ( currentNum % 2 === 0 ){
      //   nextIndex = currentNum / 2
      // } else {
      //   nextIndex = (currentNum * 3 ) + 1
      // }

      collection.push( nextIndex )


    }

  }// makeCollection

  // This function will out put the result in the console.
  const answer = function(){
    console.log(`The function ran ${collection.length - 1} times`);

    console.log(`The process was: ${collection.join(', ')}`);
  };
  // call both functions otherwise nothing will happen.
  makeCollection()
  answer()

  // we have the ability to return an output for a user through the console logs but what about return the data in a format that another programmer might like to use?
  return {
    start: num,
    collection: collection,
    steps: collection.length - 1
  }

};// collatz

// call the outer function with a console log so we can see what we're returning.
console.log(collatz(12));

// Scott's solution with recursion()

// const findCycle = (input) => {
//     let count = 0;
//     const collatzer = (num) => {
//         if(num===1){
//             console.log(count)
//             return count;
//         } else if (num%2===0){
//             count++;
//             collatzer(num/2);
//         } else {
//             count++;
//             collatzer(3*num+1);
//         }
//
//     }
//     collatzer(input);
// }
//
// console.time('aaa')
// for( let ab=0; ab<1000; ab++ ){
//     findCycle(88888888888);
// }
// console.timeEnd('aaa')


// Nathan

// collatz = function (num) {
//   let array = [];
//   while (num !== 1) {
//     num % 2 === 0 ? num /= 2 : num = num * 3 + 1;
//     array.push(num);
//   }
//   console.log(array.length);
// };
//
//
// console.time()
// for (let i = 0; i < 1000; i++ ) {
//   collatz(88888888888)
// }
// console.timeEnd()
