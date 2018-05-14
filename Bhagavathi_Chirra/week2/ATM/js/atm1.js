let checkingBalance = 0;
let savingsBalance = 0;
let totlaAmt = 0;

$(document).ready(function() {
//  $("#checkingDeposit").on('click', checkingDeposit);
  $("#checkingDeposit").click(transaction);
  $("#savingsDeposit").click(transaction);
  $("#checkingWithdraw").click(transaction);
  $("#savingsWithdraw").click(transaction);
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

function transaction(event){
  const eventId = this.id;
  if(eventId == "checkingDeposit" || eventId == "savingsDeposit"){
    let $amtToDep = "";
    if(eventId == "checkingDeposit"){
      $amtToDep = $("#checkingAmount").val();
      if(Math.sign($amtToDep) === 1){
        checkingBalance = checkingBalance + parseInt($amtToDep);
      }
      displayClear();
    }else if(eventId == "savingsDeposit"){
      $amtToDep = $("#savingsAmount").val();
      if(Math.sign($amtToDep) === 1){
        savingsBalance = savingsBalance + parseInt($amtToDep);
      }
      displayClear();
    }
  }else if(eventId == "checkingWithdraw" || eventId == "savingsWithdraw"){
    let $amtToWdr = "";
    totlaAmt = checkingBalance
    + savingsBalance;
    if(eventId == "checkingWithdraw"){
      $amtToWdr = $("#checkingAmount").val();
      // checking for sufficient funds
      if(totlaAmt >= parseInt($amtToWdr)){
        if(checkingBalance >=           parseInt($amtToWdr)){
          checkingBalance = checkingBalance - parseInt($amtToWdr);
        }
        else{
          checkingBalance = 0;
          savingsBalance = totlaAmt - parseInt($amtToWdr);
        }
      }
      displayClear();
    }else if(eventId == "savingsWithdraw"){
      $amtToWdr = $("#savingsAmount").val();
      // checking for sufficient funds
      if(totlaAmt >= parseInt($amtToWdr)){
        if(savingsBalance >= parseInt($amtToWdr)){
          savingsBalance = savingsBalance - parseInt($amtToWdr);
        }
        else{
          savingsBalance = 0;
          checkingBalance = totlaAmt - parseInt($amtToWdr);
        }
      }
      displayClear();
    }
  }
}
// Clearing input and updating UI
function displayClear(){
  $("#balance1").text(`$${checkingBalance}`);
  $("#checkingAmount").val("");
  $("#balance2").text(`$${savingsBalance}`);
  $("#savingsAmount").val("");
}
});
