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

  // deposit to any account
  deposit: function (account, amount) {
    this[account] += amount;
    // console.log(this[account]);
    console.log(`Your balance for ${account} is ${this[account]}.`);;
  },

  // withdraw with overdraft protection going both ways
  withdraw: function (account, amount) {
    if(amount > (this.checking+this.savings)) {
      alert("No enough balance. Try again.")
      return;
    }

    let otherAccount;

    if( account === 'savings') {
      otherAccount = 'checking';
    } else {
      otherAccount = 'savings';
    }

    if (amount > this[account]) {
      this[otherAccount] -= amount-this[account];
      this[account]=0;

      console.log(`Your remaining balance for ${account} is: $${this[account]}.`);
      console.log(`Your remaining balance for ${otherAccount} is: $${this[otherAccount]}.`);
      return;
    }
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
    $('.balance').each(function(){
      if($('.balance').text("$0")){
        $('.balance').css("backgroundColor","red")
      }
      $(".balance").css({backgroundColor: "#E3E3E3"})
    })
  };

  // updateDisplay();

  //
  //
  // const changeBackground = function () {
  //   if(($("#balance1").html())=="$0"){
  //   $("#balance1").css({backgroundColor: "red"})
  //   } else {
  //   $("#balance1").css({backgroundColor: "#E3E3E3"})
  //   };
  //
  //   if(($("#balance2").html())=="$0"){
  //   $("#balance2").css({backgroundColor: "red"})
  //   } else {
  //   $("#balance2").css({backgroundColor: "#E3E3E3"})
  //   }
  // };


  // store the savingsDeposit button's list of events once click it
  $("#savingsDeposit").on('click', function () {
    let amount = parseInt($("#savingsAmount").val());
    atm.deposit("savings", amount);
    updateDisplay();
    // changeBackground();
  });



  $("#savingsWithdraw").on('click', function () {
    let amount = parseInt($("#savingsAmount").val());
    atm.withdraw("savings",amount);
    updateDisplay();
    // changeBackground();
  });



  $("#checkingDeposit").on('click', function () {
    let amount = parseInt($("#checkingAmount").val());
    atm.deposit("checking",amount);
    updateDisplay();
    // changeBackground();
  });


  $("#checkingWithdraw").on('click',function () {
    let amount = parseInt($("#checkingAmount").val());
    atm.withdraw("checking",amount);
    updateDisplay();
    // changeBackground();
  })
});
