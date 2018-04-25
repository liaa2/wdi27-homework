// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };



//
const rectangle = {
  length: 4,
  width: 4
};
//

  const isSquare = function () {
    if (rectangle.length === rectangle.width) {
     console.log(`The rectangle is square`);
    } else {
     console.log(`The rectangle is not square`);
   } // end of if statement
 }; // end of function
//

  const areaCal =  function () {

   return `the rectangular area is ${rectangle.length * rectangle.width}`;
 }; // end of function
//
  const parameter = function () {
   parameterAmount = 2 * (rectangle.length + rectangle.width);
   return(`the parameter amount is ${parameterAmount}`);

 }; // end of function



console.log(isSquare());
console.log(areaCal());
console.log(parameter())




console.log("_________________________________________________________");

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4

};

// //
  const isEdquilateral = function() {
   if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    return("triangle is equilateral");
   } else {
    return("triangle is not equilateral");
   }
 }; //end of function
//
 const isIsosceles = function() {
   if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA) {
     return("triangle is isosceles");
   } else {
     return("triangle is not isosceles");
   }
 }; // end of function


console.log(isEdquilateral());
console.log(isIsosceles());


console.log("_________________________________________________________");


//  js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
//
// // Output
// cashRegister(cartForParty)); // 60.55


const cartForParty = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36,
};

let totalPrice = 0;
const cashRegister = function () {
    for (let key in cartForParty) {
    console.log(`${cartForParty[key]}`);

    totalPrice += cartForParty[key] //adding total price
    console.log(totalPrice);
  }
  return (`the total price is ${totalPrice}`);
};
console.log(cashRegister());






//  js-homework-bank.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//


console.log("_________________________________________________________");

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
let amountAdded = 0;
let newAccount = 0

const bank = {
  accounts: [
    {name: "Anna", balance: 10000},
    {name: "Ben", balance: 20000},
    {name: "Linda", balance: 102}
  ],

  addAccount : function(name, balance) {
    let newAccount = {
      name: name,
      balance: balance
    };
    console.log(this.accounts.push(newAccount)); // add new account to the bank
    return newAccount;
  },//end of function

// get the total money in account
  totalMoney: function() {
    for (let i = 0; i < this.accounts.length; i++) {
     console.log(this.accounts[i].balance);
     amountAdded += this.accounts[i].balance;
   } // end loop
   return (`The total account balance is ${amountAdded}`);
 }
};


// const returnValue = bank.addAccount("Edmond", 3);


console.log(bank.addAccount("Jackey", 1000000));
// console.log(bank.addAccount("Edmond", 3));
console.log(bank.totalMoney());
console.log(bank.accounts);






//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
//
// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.


console.log("_________________________________________________________");


//Warmup
// Leap Year Warmup Exercise
// Do this in HTML and JS!
//
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...
//
// We want a custom function called isLeapYear
// Bonus!
//
// Ask the user what number they want to test


const isLeapYear = function (year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
};

console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));


console.log(isLeapYear(400));
console.log(isLeapYear(200));
console.log(isLeapYear(500));
console.log(isLeapYear(1600));

//
// const year = prompt("Enter year");
// window.prompt(isLeapYear());
