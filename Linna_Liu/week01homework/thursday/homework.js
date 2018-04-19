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
const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function () {
  if (rectangle.length === rectangle.width) {
    console.log ("The rectangle is a square.");
  } else {
    console.log ("The rectangle is not a square.");
  }
};

const areaSquare = function () {
  return rectangle.length * rectangle.width;
};

const perimeter = function () {
  return 2*(rectangle.length + rectangle.width);
};


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
  sideC: 5
};

const isEquilateral = function () {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    console.log ("The triangle is equilateral.");
  } else {
    console.log ("The triangle is not equilateral.");
  }
};

const isIsosceles = function () {
  const ab = triangle.sideA === triangle.sideB
  const ac = triangle.sideA === triangle.sideC
  const bc = triangle.sideB === triangle.sideC
  // console.log(ab)
  // console.log(ac)
  // console.log(bc)
  if (ab || bc || ac) {
    console.log ("The triangle is isosceles.");
  } else {
    console.log ("The triangle is not isosceles.");
  }
};

const areaTriangle = function () {
  const p = (triangle.sideA+triangle.sideB+triangle.sideC)/2;
  const area = [p*(p-triangle.sideA)*(p-triangle.sideB)*(p-triangle.sideC)]**0.5;
  return area.toFixed(2);
};


const isObtuse = function () {
  const aSquared = triangle.sideA**2;
  const bSquared = triangle.sideB**2;
  const cSquared = triangle.sideC**2;
  // console.log(aSquared);
  // console.log(bSquared);
  // console.log(cSquared);
  if (aSquared+bSquared < cSquared || bSquared+cSquared < aSquared || aSquared+cSquared < bSquared) {
    console.log ('The triangle is obtuse.');
  } else {
    console.log ('The triangle is not obtuse.');
  }
};


// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

const cashRegister = function (cart) {
  let prices=0;

  for (let key in cart) {
    // console.log(key);
    prices+= Number(cart[key]) ;
  };
  return prices;
};


// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
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


const bank = {
  accounts: [
    {
      ownerName: "Abby Joe",
      currentBalance: 300
    },
    {
      ownerName: "Bob Smith",
      currentBalance: 1000
    },
    {
      ownerName: "Charlie Gerrard",
      currentBalance: 50
    },
  ],


  sumofMoney: function () {
    let sum = 0;
    for (let i = 0; i < this.accounts.length; i++) {
      sum += this.accounts[i].currentBalance
    };
    console.log(sum);
  },

  addAccount: function (name, initialBalance) {
    const newAccount = {};
    newAccount.ownerName = name;
    // console.log(newAccount)
    newAccount.currentBalance = Number(initialBalance);
    // console.log(newAccount)
    this.accounts.push(newAccount);
    console.log(this.accounts)
  },


  depositMoney: function (money) {
    let amount = 0;
    amount+=Number(money);
    // console.log(amount);
    return amount;
  },

  withdrawMoney: function (money) {
    let amount = 0;
    amount-=Number(money);
    // console.log(amount);
    return amount;
  },

  makeTransactions: function (depositOrWithdraw, money) {
    if (depositOrWithdraw === "deposit") {
      // console.log(depositOrWithdraw)
      this.depositMoney(money);
    } else if (depositOrWithdraw === "withdraw") {
      // console.log(depositOrWithdraw)
      this.withdrawMoney(money);
    } else {
      console.log ("Please enter: deposit or withdraw")
      return;
    }
  }
};
