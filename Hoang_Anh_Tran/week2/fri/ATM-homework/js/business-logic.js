

const bank = {

  savings: 100,
  checking: 200,

  balance: function() {
    return this.savings + this.checking;
  },

  checkingDeposit: function (amount) {
    this.checking += parseInt(amount);
  }, // end of function

  checkingWithdraw: function (amount) {
    if (amount > this.balance()) {
      alert("You cannot withdraw this much")
    } else if (amount <= this.balance() && amount > this.checking) {
      this.savingsWithdraw(amount - this.checking);
      this.checkingWithdraw(this.checking)
    } else {
    this.checking -= amount;
    } // end if else
  }, // end of function

  savingsDeposit: function (amount) {
    this.savings += parseInt(amount);
  }, // end of function

  savingsWithdraw: function (amount) {
    if (amount > this.balance()) {
      alert("You cannot withdraw this much");
    } else if (amount <= this.balance() && amount > this.savings) {
      this.checkingWithdraw(amount - this.savings);
      this.savingsWithdraw(this.savings)
    } else {
      this.savings -= amount;
    }
  }, // end of function

}; // end of object
