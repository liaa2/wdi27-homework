
console.log('# Exercises: For loops');
for(var i=0; i<=20; i++){
  // if(i%2 == 0)
  // {
  //   console.log(`${i} is even`);
  // }
  // else {
  //   console.log(`${i} is odd`);
  // }
  console.log(`${i} is ${ i%2 === 0 ? 'even' : 'odd'}.`);
}

console.log('## Multiplication Tables');
for(var x=0; x<=10; x++){
  for(var j=0; j<=10; j++){
    console.log(`%c${x} * ${j} = ${x*j}`,'color:hotpink ; font');
  }
}

console.log('## The Grade Assigner');
for(var y=60; y<=100; y++)
{
  if(y==89)
  {
    console.log('you got a B');
  }
  else if(y==90){
    console.log('you got an A');
  }
}
