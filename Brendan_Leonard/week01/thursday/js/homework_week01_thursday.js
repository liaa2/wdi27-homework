// Create Bank object
const bank = {
  accounts: [ { name: '', balance: 0} ],
  getAccountByName: function(accountName){
    for (var i = 0; i < this.accounts.length; i++) {
      let currentAccount = this.accounts[i];
      if(currentAccount.name === accountName){
        return currentAccount;
      }
    }
    // Account does not already exist
    return null;
  },
  accountExists: function(accountName){
    if(this.getAccountByName(accountName) != null){
      return true;
    }

    // Account does not already exist
    return false;
  },
  deposit: function(accountName, depositAmount){
    const currentAcco`unt = this.getAccountByName(accountName);
    if(currentAccount != null){
      currentAccount.balance += depositAmount;
      return currentAccount.balance;
    }
    return false;
  },
  withdrawal: function(accountName, withdrawalAmount){
    const currentAccount = this.getAccountByName(accountName);
    let currentBalance = currentAccount.balance;
    if(currentAccount != null){
      if(withdrawalAmount > currentBalance){
        console.log(`Withdrawal of $${ withdrawalAmount } is denied as account for ${ accountName } will be overdrawn.`);
        console.log(`Current Balance of ${ accountName }'s account is $${ currentBalance }.`);
        return false
      }

      // Sufficient funds exists so lets process the withdrawal
      currentAccount.balance -= withdrawalAmount;
      return currentAccount.balance;
    }
  },
  addAccount: function(accountName, initialBalance){
    // If the account doesn't exist then pop it onto the accounts array
    if(!this.accountExists(accountName)){
      this.accounts.push({ name: accountName, balance: initialBalance });
      return true;
    } else {
      return false;
    }
  },
  totalBalance: function(){
    let runningTotal = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      runningTotal += this.accounts[i].balance;
    }
    return runningTotal;
  },
  transfer: function(fromAccount, toAccount, transferAmount){
    if(this.accountExists(fromAccount) && this.accountExists(toAccount)){
      // First withdraw and then deposit
      if(this.withdrawal(fromAccount, transferAmount)){
        this.deposit(toAccount, transferAmount);
        return true;
      }
    };
    return false;
  }
};

bank.accounts = [
  { name: 'Brendan', balance: 1000 },
  { name: 'Luke', balance: 7432 },
  { name: 'Grant', balance: 5400 },
];
