// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

// Don't make methods
// const randomLength = function(){
//   return Math.floor(1+5*Math.random());
// };
// const randomWidth = function(){
//   return Math.floor(1+5*Math.random());
// };
// const quad = {
//   length: 4,
//   width: 4,
//   isSquare: function(){
//     let result = "";
//     const width = randomWidth();
//     (this.length === this.width ? result = "Square confirmed" : result = "Not a square");
//     console.log(result);
//   },
//   findArea: function(){
//     let quadArea = this.length*this.width;
//     console.log(quadArea);
//   },
//   findPerimeter: function(){
//     let quadPerimeter = 2*this.length+2*this.width;
//     console.log(quadPerimeter);
//   }
// }
const quad = {
  length: 4,
  width: 4
};

const isSquare = function( shape ){
  return ( shape.length === shape.width );
};

const findArea = function( shape ){
  return shape.length*shape.width;
}

const findPeri = function( shape ){
  return 2*( shape.length+shape.width );
}
console.log( isSquare( quad ));
console.log( findArea( quad ));
console.log( findPeri( quad ));



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

const trianglePerimeter = function( shape ){
  return shape.sideA+shape.sideB+shape.sideC;
}

const isEquilateral = function( shape ){
  // Equality is transitive, therefore only 2 conditions need to be checked
  return ( shape.sideA === shape.sideB && shape.sideB === shape.sideC );
}

const isIsosceles = function( shape ){
  // Checking if triangle perimeter is of the form 2x+y
  // Note that all equilateral triangles are isosceles, but not all isosceles are equilateral
  let isoOrNot = "Not isosceles";
  if ( trianglePerimeter( shape ) === 2*shape.sideA+shape.sideB ){
    isoOrNot = "Isosceles confirmed";
  }
  if ( trianglePerimeter( shape ) === 2*shape.sideB+shape.sideA ){
    isoOrNot = "Isosceles confirmed";
  }
  return isoOrNot;
}

const isScalene = function( shape ){
  // checking if all 3 sides of the triangle are of different lengths
  if ( shape.sideA !== shape.sideB && shape.sideB !== shape.sideC ){
    return "Scalene"
  }
  else return "Not scalene";
}

const isObtuse = function( shape ){
  // In an obtuse triangle, there will exist an angle greater than 90 degrees.
  // Use Pythagoras to determine if an angle is > 90 degrees
  // loop and check if there is a side A such that A^2 > B^2 + C^2
  if ( shape.sideA**2 > shape.sideB**2 + shape.sideC**2 || 
    shape.sideB**2 > shape.sideA**2 + shape.sideC**2 ||
    shape.sideC**2 > shape.sideA**2 + shape.sideB**2) {
    return "Obtuse!";
  }
  return "Not obtuse!";
}

console.log( isEquilateral( triangle ));
console.log( isIsosceles( triangle ));
console.log( isScalene( triangle ));
console.log( isObtuse( triangle ));

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example


const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const sumCart = function( shoppingCart ){
  // totalCost tracks shoppingCart's item costs
  let totalCost = 0;
  for (var key in shoppingCart) {
    totalCost += Number(shoppingCart[key]);
  }
  return totalCost;
}


console.log(sumCart(cartForParty));



// JavaScript bank
// Add methods for matching name, checking balance and call in accessAccount and balanceAdder


const bank = {
  accounts: [
    {
      name: "Alice",
      balance: 100
    },
    {
      name: "Bob",
      balance: 250
    },
    {
      name: "Chris",
      balance: 375
    }
  ],
  // below are methods to check for valid string and number

  //
  balanceAdder: function(){
    // for loop will iterate through every account and add balance to totalSum
    let totalSum = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      totalSum += this.accounts[i]["balance"];
    }
    return totalSum;
  },
  newAccount: function(a,b){
    // Check for valid input ("Name", balance)
    if (typeof a === "string" && typeof b === "number"){
      // New object is created, then added to the accounts array.
      var creatingNew = {};
      creatingNew.name = a;
      creatingNew.balance = b;
      this.accounts.push(creatingNew);
      return bank.accounts;
    }
    else return "Invalid input. Enter name and balance.";
  },
  // accessAccount allows account holder to deposit and withdraw.
  // Prevents overdrafting.
  // Positive value indicates deposit, negative indicates withdrawal.
  accessAccount: function(a,b){
    // Match input name to exist account holder.
    for (var i = 0; i < bank.accounts.length; i++) {
      // Upon a match, check if transaction is valid, then update.
      if (bank.accounts[i].name === a){
        // Full balance withdrawal is valid, therefore must check if balance will be < 0.
        if (bank.accounts[i].balance - b < 0){
          bank.accounts[i].balance += b;
        }
        else return "Not enough money!";
      }
    }

  },
  // method below transfers amount x (if valid transaction) from account A to B.
  transferXFromAtoB: function(a,b,x){
    // Check if A is valid account holder
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].name === a){
        // Check if A has sufficient balance to make a transfer
        if (bank.accounts[i].balance >= x){
          // Check if B is valid account holder
          for (var j = 0; j < bank.accounts.length; j++) {
            if (bank.accounts[j].name === b){
              bank.accounts[i].balance -= x;
              bank.accounts[j].balance += x;
              return "Transaction successful."
            }
          }
          return "Invalid payee.";
        }
        return "Insufficient balance.";
      }
    }
    return "Payer account not found.";
  }
}

console.log("To find total sum of all accounts,");
console.log("invoke balanceAdder() method");
console.log(bank.balanceAdder());

console.log("New account method pushes an account to the account array");
console.log(bank.newAccount("Scott", 50000));

console.log("accessAccount method is takes 2 arguments.");
console.log("Takes string and number, match string to account name");
console.log("and checks if transaction is feasible");
console.log(bank.accessAccount("Scott", 10000));

console.log("transferXFromAtoB");
console.log("as it's name suggests transfers amount X")
console.log("from account A and to accountB ")
console.log(bank.transferXFromAtoB("Alice","Bob",5));
