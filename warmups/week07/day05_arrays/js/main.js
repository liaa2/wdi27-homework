
const testOne = ['one', 'two', 'three']

const reverse = function( array ){

  let reversed = [];
  // One way to reverse the array is to start from the end, and, counting down, push each
  // element on to the end of
  //
  // for (var i = arr.length-1; i >= 0; i-- ) {
  //   console.log(i, arr[i] );
  //   reversed.push( arr[ i ] );
  //   console.log(reversed);
  // }

  // unshift adds elements to the beginning of an array
  for( let i = 0; i < array.length; i++){
    reversed.unshift( array[i] )
  }
  return reversed;
};
console.log("original array: ", testOne);
console.log("reversed array: ", reverse(testOne));

const array2 = ['one', 'two', ['a', 'b', 'c'], 'three']

const flatten = function( array ){

  let flattened = [];

  for( let i = 0; i < array.length; i++ ){
    let currentElem = array[i];

    // We need to test whether current a scalar (i.e. simple var like an int or string) or an array...
    // Since every variable in Javascript is created using a constructor function (usually implicitly)
    // and this constructor is actually stored as a method of the variable, we can check whether the
    // constructor function used to construct this variable is the Array() constructor

    // Note that another way of check this is to use the 'instanceof' operator,
    // though it's slightly slower;
    // if( variable instanceof Array ){
    // OR
    // if( Array.isArray(currentElem)  )
    if( currentElem.constructor === Array ){

      for( let j = 0; j < currentElem.length; j++ ){
        flattened.push(currentElem[j]);
      }

    } else {
      flattened.push( currentElem );
    }// else
  }// for
  return flattened
};

console.log("original array: ", array2);
console.log("flattened array: ", flatten(array2));

const array3 = ['one1', 'one2', ['two2', 'two3', [[[[[[['six']]]]]]]]]

const flattenMagic = function( array ){
    // using reduce to gain access to the accumulator (flat) and the current value (toFlatten).
  return array.reduce(function(flat, toFlatten){
    // if the current value is an array we call this function again if not it will concatinate the value into the accumulator. The trailing [] is where the result will be put.
    return flat.concat(Array.isArray(toFlatten) ? flattenMagic(toFlatten) : toFlatten)
  }, [])
}
console.log('Original array:', array3);
console.log('Original array:', flattenMagic(array3));


//------- reduce example ----------//

// [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
//   return accumulator + currentValue;
// });
// 0 + 1 + 2 + 3 + 4 
// output => 10
