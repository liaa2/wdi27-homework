// $ symbol
// parseInt, lowest value is 1 cent

const atm = {
    accounts: {
        checking: 1000,
        savings: 2000
    },

    deposit: function(depositAmount, accountType){
        this.accounts[accountType] += depositAmount;
        console.log("deposit successful");
        console.log(this.accounts);
    },

    withdraw: function(withdrawAmount, accountType){
        const totalAmount = this.accounts["checking"] + this.accounts["savings"];
        if (withdrawAmount > totalAmount){
            console.log("invalid");
            return this.accounts;
        }
        else if (withdrawAmount > this.accounts[accountType]){
            var remainingWithdrawal = withdrawAmount - this.accounts[accountType];
            this.accounts[accountType] = 0;
            console.log("overdraft protection enabled");
            if (this.accounts[accountType] === this.accounts.checking){
                this.accounts.savings -= remainingWithdrawal;
            }
            else {
                this.accounts.checking -= remainingWithdrawal;  
            }
            console.log("withdrawal successful");
            return this.accounts;
        }
        else if (withdrawAmount <= this.accounts[accountType]){
            this.accounts[accountType] -= withdrawAmount;
            console.log("withdrawal successful");
            return this.accounts;
        }
    }
}