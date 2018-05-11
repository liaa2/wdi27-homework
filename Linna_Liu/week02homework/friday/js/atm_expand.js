// Title: GA ATM App
// Type:
// Lab
// Summary
// This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.
// Objectives:
// DOM selection, appending, removal, updating
// Specification:
// Keep track of the checking and savings balances somewhere
// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?
// Separation of Concerns
// Spend some time thinking about the following before you even start writing code: can you separate the GUI code (event handlers for form input or buttons) from the banking code (deposit and withdrawal between accounts, checking for overdraft etc) as much as possible?
//
// Ideally you would be able to test all the banking functions from the console, and then connect them to the GUI code with the minimum amount of overlap or points of contact.
//
// These two parts of the system (display logic and business logic) should know as little as possible about each other.


// html
// contents, css selectors
//
// CSS
// set styles via css selectors
//
// JS
// vanilla JS - functional stuff
// JQuery - eventListener



const atm = {

  checking: 100,

  savings: 200,

  //Simple deposit to savings account - dont call this method
  depositSavings: function (amount) {
    // console.log(this.savings);
    this.savings += amount;
    console.log(`Your balance for savings is ${this.savings}.`);;
  },

  // deposit to any account - Official
  deposit: function (account, amount) {
    this[account] += amount;
    // console.log(this[account]);
    console.log(`Your balance for ${account} is ${this[account]}.`);;
  },


  // Simple withdraw, withdraw money from savings account - dont call this method
  withdrawSimple: function (amount) {
    if(amount <= this.savings) {
      this.savings -= amount;
      console.log(`Your remaining balance for savings is ${this.savings}.`);
      return;
    }
    console.log("No enough balance. Try Again.")
  },


  //Simple withdraw from checking account - dont call this method
  withdrawCheckingSimple: function (amount) {
    if(amount > this.checking) {
      this.savings = this.savings - (amount - this.checking);
      // console.log(this.savings)
      this.checking = 0;
      console.log(`Your remaining balance for checking is: ${this.checking}.`);
      console.log(`Your remaining balance for savings is: ${this.savings}.`);
      return;
    }
     this.checking -= amount;
     console.log(`Your remaining balance for checking is ${this.checking}.`)
  },


  //Withdraw from checking account, with -ve balance warning - dont call this method
  withdrawChecking: function (amount) {
    if(amount > (this.checking+this.savings)) {
      console.log("No enough balance. Try again.")
      return false;
    } else if(amount > this.checking) {
      this.savings = this.savings - (amount - this.checking);
      // console.log(this.savings)
      this.checking = 0;
      console.log(`Your remaining balance for checking is: ${this.checking}.`);
      console.log(`Your remaining balance for savings is: ${this.savings}.`);
      return;
    }
     this.checking -=amount;
     console.log(`Your remaining balance for checking is ${this.checking}.`)
  },



  // withdraw with overdraft protection going both ways - Official
  withdraw: function (account, amount) {
    if(amount > (this.checking+this.savings)) {
      alert("No enough balance. Try again.")
      return;
    }

    let otherAccount; //<--shorter expression
     //OR let otherAccount = '';

  // store the next account's name to an variable, easier to find it. No need to create if/else amount comparison inside another if/else account checking
    if( account === 'savings') {
      otherAccount = 'checking';
    } else {
      otherAccount = 'savings';
    }

    if (amount > this[account]) {
      // ???if no enough money in this account, get money from the next account???
      // take EVERYTHING from current account,
      // AND then take the remaining

      //Below are different coding styles
      // ===option1===
      // const remainder = amount - this[account];
      // this[account] = 0;
      // this[otherAccount] -= remainder;

      // ===option2===
      // this[otherAccount] = this[otherAccount] - (amount - this[account]);
      // this[account]=0;

      // ===Option3===
      this[otherAccount] -= amount-this[account];
      this[account]=0;

      console.log(`Your remaining balance for ${account} is: $${this[account]}.`);
      console.log(`Your remaining balance for ${otherAccount} is: $${this[otherAccount]}.`);
      return;
    } //else {   <--- no need "else" if we put "return" in the previous condition
      this[account] -= amount;
      console.log(`Your remaining balance for ${account} is $${this[account]}.`)
  }
};




////////////////////////// GUI/jQuery code/////////////////////////////////////////

$(document).ready(function () {
  console.log("The page is ready.");

  // update the account balance on the webpage + create a function to store this action
  const updateDisplay = function () {
    $("#balance1").html( '$' + atm.checking );
    $("#balance2").html( '$' + atm.savings );
  };

  updateDisplay();



  const changeBackground = function () {
    if(($("#balance1").html())=="$0"){
    $("#balance1").css({backgroundColor: "red"})
    } else {
    $("#balance1").css({backgroundColor: "#E3E3E3"})
    };

    if(($("#balance2").html())=="$0"){
    $("#balance2").css({backgroundColor: "red"})
    } else {
    $("#balance2").css({backgroundColor: "#E3E3E3"})
    }
  };


  // store the savingsDeposit button's list of events once click it
  $("#savingsDeposit").on('click', function () {
    let amount = parseInt($("#savingsAmount").val());//use parseInt to ensure the input is a number, otherwise cant do the calculation later on
    // console.log(amount);
    atm.deposit("savings", amount);
    updateDisplay();
    changeBackground();
  });


  // same as above, for savingsWithdraw button
  $("#savingsWithdraw").on('click', function () {
    let amount = parseInt($("#savingsAmount").val());
    atm.withdraw("savings",amount);
    updateDisplay();
    changeBackground();
  });


  //same as savings account buttons
  $("#checkingDeposit").on('click', function () {
    let amount = parseInt($("#checkingAmount").val());
    // console.log(amount)
    atm.deposit("checking",amount);
    updateDisplay();
    changeBackground();
  });


  $("#checkingWithdraw").on('click',function () {
    let amount = parseInt($("#checkingAmount").val());
    atm.withdraw("checking",amount);
    updateDisplay();
    changeBackground();
    changeBackground();
  })
});
