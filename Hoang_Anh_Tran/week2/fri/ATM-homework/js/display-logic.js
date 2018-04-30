// // Data structures we need
// ### Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ### Objectives:
// - DOM selection, appending, removal, updating
//
// ### Specification:
//
// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.

// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.

// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?
//
// ___
//
// #### Separation of Concerns
//
// Spend some time thinking about the following before you even start writing code: can you separate the GUI code (event handlers for form input or buttons) from the banking code (deposit and withdrawal between accounts, checking for overdraft etc) as much as possible?
//
// Ideally you would be able to test all the banking functions from the console, and then connect them to the GUI code with the minimum amount of overlap or points of contact.
//
// _These two parts of the system (display logic and business logic) should know as little as possible about each other._




// - create a function to get the input
// - get the old value, create a function
// - function to set the balance
// - deposit function will do three things: get value added, then set balances
//
// - withdraw function will do three things : get value added, check for old balance, then set balances
//
//
// add event listener


// JQUERY

const updateDisplay = function () {
  $( "#balance1" ).text( bank.checking );
  $( "#balance2" ).text( bank.savings );
  $(".balance").each(function () {
    if($(this).text() === "0") {
      $(this).css("background-color", "red");
    }
  });
};

updateDisplay();

//add event handler for deposit button for checking account
$( "#checkingDeposit" ).click(function() {
  bank.checkingDeposit($ ( "#checkingAmount" ).val());
  updateDisplay();
});


//add event handler for deposit button for savings account
$( "#savingsDeposit" ).click(function() {
  bank.savingsDeposit($( "#savingsAmount" ).val());
  updateDisplay();
});

// add event handler for withdrawal button for checking account
$("#checkingWithdraw").click(function() {
  bank.checkingWithdraw($( "#checkingAmount" ).val());
  updateDisplay();
});


// add event handler for withdrawal button for savings account
$( "#savingsWithdraw" ).click(function() {
  bank.savingsWithdraw($( "#savingsAmount" ).val());
  updateDisplay();
});
