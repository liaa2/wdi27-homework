// refactor
// jquery version
// red background on 0 value

const checkingDisplay = document.getElementById("balance1");
const savingsDisplay = document.getElementById("balance2");

const checkingAmount = Number(document.getElementById("checkingAmount").value);
const checkingDeposit = document.getElementById("checkingDeposit");
const checkingWithdraw = document.getElementById("checkingWithdraw");


const savingsAmount = Number(document.getElementById("savingsAmount").value);
const savingsDeposit = document.getElementById("savingsDeposit");
const savingsWithdraw = document.getElementById("savingsWithdraw");


const checkingDepositFunction = function (event) {
    const checkingAmount = Number(document.getElementById("checkingAmount").value);
    atm.deposit(checkingAmount,"checking");
    checkingDisplay.innerHTML = `${atm.accounts.checking}`;
}
checkingDeposit.addEventListener("click",checkingDepositFunction);

const savingsDepositFunction = function (event) {
    const savingsAmount = Number(document.getElementById("savingsAmount").value);
    atm.deposit(savingsAmount, "savings");
    savingsDisplay.innerHTML = `${atm.accounts.savings}`;
}
savingsDeposit.addEventListener("click", savingsDepositFunction);

const checkingWithdrawFunction = function (event) {
    const checkingAmount = Number(document.getElementById("checkingAmount").value);
    atm.withdraw(checkingAmount, "checking");
    checkingDisplay.innerHTML = `${atm.accounts.checking}`;
    savingsDisplay.innerHTML = `${atm.accounts.savings}`;
}
checkingWithdraw.addEventListener("click", checkingWithdrawFunction);

const savingsWithdrawFunction = function (event) {
    const savingsAmount = Number(document.getElementById("savingsAmount").value);
    atm.withdraw(savingsAmount, "savings");
    checkingDisplay.innerHTML = `${atm.accounts.checking}`;
    savingsDisplay.innerHTML = `${atm.accounts.savings}`;
}
savingsWithdraw.addEventListener("click", savingsWithdrawFunction);