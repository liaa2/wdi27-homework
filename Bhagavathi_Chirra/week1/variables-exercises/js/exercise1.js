console.log('Fortune Teller');

var noOfChildren=2;
var partnerName="Nag";
var resLocation="Sydney";
var jobTitle="Web Developer";
var str = "You will be a" + jobTitle + " in " + resLocation + ", and married to" + partnerName + "with" +  noOfChildren + "kids";
console.log(str);


console.log('Age calculator');

var currentYear=2018;
var birthYear=1989;
var age = currentYear - birthYear;
//var str1 = "They are either" + age +" or " + age-1
var str1 = `${age}`;
console.log(str1);


// console.log('LifeTime Supply calculator');
//
// var currentAge=30;
// var maxAge=55;
// const estAmtPerDay=5;
// //console.log("You will need" + estAmtPerDay
// //* maxAge +" to last you until the ripe old age of " + maxAge);
// const yrsRemaining = maxAge - currentAge;
// //const amtPerYr =
// //const estAmtPerYear =

const radius = 72;
const circumference = 2 * Math.PI * radius ;
const area = Math.PI * radius ** 2;
console.log(`area ${area}`);

console.log('Temp Conv');

const celsiusTemp = 47;
const fahrenheitTemp = (celsiusTemp * 1.8) + 32;

console.log(`${fahrenheitTemp}˚F`);
