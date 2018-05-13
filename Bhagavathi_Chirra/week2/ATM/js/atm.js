let checkingBalance = 0;
let savingsBalance = 0;

$(document).ready(function() {
//  $("#checkingDeposit").on('click', checkingDeposit);
  $("#checkingDeposit").click(checkingDeposit);

  $("#checkingWithdraw").on('click', checkingWithdraw);
  $("#savingsDeposit").on('click', savingsDeposit);
  $("#savingsWithdraw").on('click', savingsWithdraw);
  //checking for zero balance1
  $("#balance1").on("DOMSubtreeModified",function(){
    if(checkingBalance == 0){
      $("#balance1").css("background-color","red");
    }
    else{
      $("#balance1").css("background-color","Gainsboro");
    }
  });
  //checking for zero balance2
  $("#balance2").on("DOMSubtreeModified",function(){
    if(savingsBalance == 0){
      $("#balance2").css("background-color","red");
    }
    else{
      $("#balance2").css("background-color","Gainsboro");
    }
  });

// function to deposit checkAccount
  function checkingDeposit(event){
    //console.log(this.id);
    let $ckeckAmtToDep = $("#checkingAmount").val();
    // checking for negative value
    if(Math.sign($ckeckAmtToDep) === 1){
          checkingBalance = checkingBalance + parseInt($ckeckAmtToDep);
    }
    displayClearChk();
  }
// function to withdraw from checkAccount
  function checkingWithdraw(event) {
    let $checkAmtToWdr = $("#checkingAmount").val();
    // checking for sufficient funds
    if(checkingBalance >= parseInt($checkAmtToWdr)){
      checkingBalance = checkingBalance - parseInt($checkAmtToWdr);
    }
    displayClearChk();
  }
  // Clearing input and updating UI
  function displayClearChk(){
    $("#balance1").text(`$${checkingBalance}`);
    $("#checkingAmount").val("");
  }
//************* Savings  ************

// function to deposit savingsAccount
  function savingsDeposit(event){
    let $savingsAmtToDep = $("#savingsAmount").val();
    // checking for negative value
    if(Math.sign($savingsAmtToDep) === 1){
      savingsBalance = savingsBalance + parseInt($savingsAmtToDep);
    }
    displayClearSav();
  }
// function to withdraw from checkAccount
  function savingsWithdraw(event) {
    let $savingsAmtToWdr = $("#savingsAmount").val();
    // checking for sufficient funds
    if(savingsBalance >= parseInt($savingsAmtToWdr)){
          savingsBalance = savingsBalance - parseInt($savingsAmtToWdr);
    }
    displayClearSav();
  }
  // Clearing input and updating UI
  function displayClearSav(){
    $("#balance2").text(`$${savingsBalance}`);
    $("#savingsAmount").val("");
  }



});
