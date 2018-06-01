// s1 = 1 - 1 + 1 - 1 + 1 - 1
 const s1 = function(num){
   // let sum = 1;
   // for( let i = 0; i <= num; i++){
   //   console.log(i);
   //   if( i % 2 === 0){
   //     sum--
   //   } else {
   //     sum++
   //   }
   // }
   //
   // return sum

   // OR
   return num % 2 === 0 ? 0 : 1
 }
console.log(s1(Infinity));

// s2 = 1 + 2 + 3 + 4 + 5 + 6
const s2 = function(num){

  // let increment = 0;
  //
  // for( let i = 1; i <= num; i++ ){
  //   console.log(increment);
  //   increment += i
  // }
  // return increment

  // OR
  return ( num * ( num + 1 ) ) / 2
  // 4 + 1 = 5
  // 4 * 5 = 20
  // 20 / 2 = 10
}

console.log(s2(4));

const simpleSumsFunc = function(num){

  let s1 = num % 2 === 0 ? 0 : 1
  let s2 = ( num * ( num + 1 ) ) / 2

  console.log(`result of s1:${s1}, result of s2:${s2}`);
}
simpleSumsFunc(4)

const simpleSumsObj = {

  s1: function(num){
    return num % 2 === 0 ? 0 : 1
  },

  s2: function(num){
    return ( num * ( num + 1 ) ) / 2
  },

  combinedResult: function(num){
    let s1 = this.s1(num);
    let s2 = this.s2(num);
    console.log(`s1 result: ${s1}, s2 result: ${s2}`);
  }

}

simpleSumsObj.combinedResult(Infinity)
