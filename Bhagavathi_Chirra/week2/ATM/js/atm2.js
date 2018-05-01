
$(document).ready(function(){
  const bank = {
    checkingBalance : 0,
    savingsBalance : 0,
    totalBalance : 0,
    // function to deposit
    Deposit : function (amtToDep, acc){
      if(Math.sign(amtToDep) === 1){
        if(acc == 1){
          this.checkingBalance = this.checkingBalance + parseInt(amtToDep);
        }else if(acc == 2){
          this.savingsBalance = this.savingsBalance + parseInt(amtToDep);
        }
      }
    },
    //function to withdraw
    Withdraw : function(amtToWdr, acc){
      this.totalBalance = this.checkingBalance + this.savingsBalance;
      if(Math.sign(amtToWdr) === 1){
        if(acc == 1){
          if(this.totalBalance >= parseInt(amtToWdr)){
            if(this.checkingBalance >=       parseInt(amtToWdr)){
              this.checkingBalance = this.checkingBalance - parseInt(amtToWdr);
            }
            else{
              this.checkingBalance = 0;
              this.savingsBalance = this.totalBalance - parseInt(amtToWdr);
            }
          }
        }else if(acc == 2){
          if(this.totalBalance >= parseInt(amtToWdr)){
            if(this.savingsBalance >= parseInt(amtToWdr)){
              this.savingsBalance = this.savingsBalance - parseInt(amtToWdr);
            }
            else{
              this.savingsBalance = 0;
              this.checkingBalance = this.totalBalance - parseInt(amtToWdr);
            }
          }
        }
      }
    }
  };
  // handling events
  $("#checkingDeposit").click(transaction);
  $("#savingsDeposit").click(transaction);
  $("#checkingWithdraw").click(transaction);
  $("#savingsWithdraw").click(transaction);
  // checking for zero balance1
  $("#balance1").on("DOMSubtreeModified",function(){
    if(bank.checkingBalance == 0){
      $("#balance1").css("background-color","red");
    }
    else{
      $("#balance1").css("background-color","Gainsboro");
    }
  });
  // checking for zero balance2
  $("#balance2").on("DOMSubtreeModified",function(){
    if(bank.savingsBalance == 0){
      $("#balance2").css("background-color","red");
    }
    else{
      $("#balance2").css("background-color","Gainsboro");
    }
  });
  // transaction function
  function transaction(event){
    const eventId = this.id;
    let $amtToDepOrWdr = 0;
    //calling checkingDeposit
    switch (eventId) {
      case "checkingDeposit":
        $amtToDepOrWdr = $("#checkingAmount").val();
        bank.Deposit($amtToDepOrWdr,1);
      break;
      case "savingsDeposit":
        $amtToDepOrWdr = $("#savingsAmount").val();
        bank.Deposit($amtToDepOrWdr,2);
      case "checkingWithdraw":
        $amtToDepOrWdr = $("#checkingAmount").val();
        bank.Withdraw($amtToDepOrWdr,1);
      break;
      case "savingsWithdraw":
        $amtToDepOrWdr = $("#savingsAmount").val();
        bank.Withdraw($amtToDepOrWdr,2);
    }
    displayClear();
  }
  // Clearing input and updating UI
  function displayClear(){
    $("#balance1").text(`$${bank.checkingBalance}`);
    $("#checkingAmount").val("");
    $("#balance2").text(`$${bank.savingsBalance}`);
    $("#savingsAmount").val("");
  }

});
