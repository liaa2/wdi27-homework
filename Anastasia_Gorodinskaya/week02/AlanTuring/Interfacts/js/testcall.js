console.log('linked!');

const userA = {
  firstName:'Grant',
  age:28,
};
const userB = {
  firstName:'Bagi',
  age:25
};
const printUserInfo = function( user ){
  console.log(`Name:${ user.firstName}`);
  console.log(`Age:${user.age}`);
}

printUserInfo( userA );
printUserInfo( userB );

printUserInfo({firstName:'Anna',age:25});


const sayHello = function(){
  console.log('Hello from the inside of the box');
};

const runAnotherFunctionForMe = function( functionToRun ){
  console.log('Inside runAnotherFunctionForMe, about to run your function');
  console.log('Your function looks like:', functionToRun);
  console.log('Running!');
  functionToRun();
  console.log('Finished running');
};

runAnotherFunctionForMe(sayHello);

runAnotherFunctionForMe(function(){
  console.log('Hello from inside anonymous function we ran')
  return true;
});


console.log('About to call timeout');
// window.setTimeout( sayHello, 3000);

// let counter = 0;
// window.setInterval(function(){
//   console.log('run', counter);
//   counter++;
// }, 1000);
