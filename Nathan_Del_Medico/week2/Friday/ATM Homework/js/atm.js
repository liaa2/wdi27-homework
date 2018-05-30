let checkingBalance = 0;
let savingsBalance = 0;


const checkingDeposit = function (){
  let $checkingAmount = $('#checkingAmount').val();
  updateCheckingBalance("deposit", Number($checkingAmount));
};
const checkingWithdraw = function() {
  let $checkingAmount = $('#checkingAmount').val();
  updateCheckingBalance("withdraw", Number(`-${$checkingAmount}`))
}
const updateCheckingBalance = function (type, amount) {
  if (Math.abs(amount) <= checkingBalance+savingsBalance && Math.abs(amount) > checkingBalance && type === "withdraw") {
    updateSavingsBalance("withdraw", Number(`-${Math.abs(amount)-checkingBalance}`))
    amount = checkingBalance*-1;
  }
  else if (Math.abs(amount) > checkingBalance && type === "withdraw") {
    return;
  }
  checkingBalance += amount;
  $checkingVisual.text(`$${checkingBalance}`);
  if (checkingBalance === 0) {
    $checkingVisual.css({backgroundColor: "red"})
  } else {
    $checkingVisual.css({backgroundColor: "#E3E3E3"})
  }
}

const $checkingVisual = $('#balance1');
const $checkingDeposit = $('#checkingDeposit');
$checkingDeposit.on("click", checkingDeposit);
const $checkingWithdraw = $('#checkingWithdraw');
$checkingWithdraw.on("click", checkingWithdraw);




const savingsDeposit = function (){
  let $savingsAmount = $('#savingsAmount').val();
  updateSavingsBalance("deposit", Number($savingsAmount));
};
const savingsWithdraw = function() {
  let $savingsAmount = $('#savingsAmount').val();
  updateSavingsBalance("withdraw", Number(`-${$savingsAmount}`))
}
const updateSavingsBalance = function (type, amount) {
  if (Math.abs(amount) <= checkingBalance+savingsBalance && Math.abs(amount) > savingsBalance && type === "withdraw") {
    updateCheckingBalance("withdraw",amount);
    return;
  }
  else if (Math.abs(amount) > savingsBalance && type === "withdraw") {
    return;
  }
  savingsBalance += amount;
  $savingsVisual.text(`$${savingsBalance}`);
  if (savingsBalance === 0) {
    $savingsVisual.css({backgroundColor: "red"})
  } else {
    $savingsVisual.css({backgroundColor: "#E3E3E3"})
  }
}

const $savingsVisual = $('#balance2');
const $savingsDeposit = $('#savingsDeposit');
$savingsDeposit.on("click", savingsDeposit)
const $savingsWithdraw = $('#savingsWithdraw');
$savingsWithdraw.on("click", savingsWithdraw);
