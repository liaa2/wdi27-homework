// Bank
const bank = {
  // List of accounts
  accounts: [
    {name: "Person1", balance: 100},
    {name: "Person2", balance: 200},
    {name: "Person3", balance: 300},
    {name: "Person4", balance: 400},
    {name: "Person5", balance: 500},
    {name: "Person6", balance: 600}
  ],
  // Shows the total money of all accounts combined
  totalMoney: function () {
    let moneyTotal = 0;
    // Goes through all the accounts and adds up the money
    for(i=0; i<bank.accounts.length; i++) {
      moneyTotal += bank.accounts[i].balance;
    }
    return `The total money off all accounts combined is $${moneyTotal}`;
  },
  // Adds an accounts, takes account name and balance of the account
  addAccount: function (name, balance) {
    bank.accounts.push({name, balance});
    return `Account sucessfully added! Account name: ${name}. Account balance: $${balance}`;
  },
  transaction: function (option, name1, amount, name2) {
    // Setting variables for accounts
    let firstAccount;
    let secondAccount;
    let transfer = false;
    // Assigning accounts to variables
    for (i=0; i<bank.accounts.length; i++) {
      if (name1 === bank.accounts[i].name) {
        firstAccount = i;
      }
      if (option === "transfer") {
        if (name2 === bank.accounts[i].name) {
          secondAccount = i;
        }
        transfer = true;
      }
    }
    // Checks to see if there is a valid option
    if (option !== "transfer" && option !== "deposit" && option !== "withdraw") {
      return `Please choose either Deposit, Withdraw or Transfer.`;
    }
    // Making sure the program runs both a deposit and withdraw if transfer is selected
    // Withdrawing
    if (option === "withdraw" || transfer) {
      // Checking to see if that much can be withdrawn
      if (amount > bank.accounts[firstAccount].balance) {
        return `You can't withdraw that much!`;
      }
      bank.accounts[firstAccount].balance -= amount;
      console.log(`${name1} now has a balance of $${bank.accounts[firstAccount].balance}`);
    }
    // Changing variables so deposit will work for transfer too
    if (transfer) {
      firstAccount = secondAccount;
      name1 = name2;
    }
    // Depositing
    if (option === "deposit" || transfer) {
      bank.accounts[firstAccount].balance += amount;
      console.log(`${name1} now has a balance of $${bank.accounts[firstAccount].balance}`);
    }
  }
};
  // // Takes an account name and a value and adds that value to the account
  // deposit: function (name, amount) {
  //   // Finds the account in the account array and adds the amount
  //   for (i=0; i< bank.accounts.length; i++) {
  //     if (name === bank.accounts[i].name) {
  //       bank.accounts[i].balance += amount;
  //       return `${name} now has a balance of $${bank.accounts[i].balance}`;
  //     }
  //   }
  // },
  // // Takes an account name and a value subtracts that value from the amount
  // withdrawl: function (name, amount) {
  //   for (i=0; i< bank.accounts.length; i++) {
  //     if (name === bank.accounts[i].name) {
  //       // Checks to see if the withdrawl will put the balance below 0, if it does it lets the user know that they can't withdrawl that much
  //       if (bank.accounts[i].balance < amount) {
  //         return `You can't withdrawl that much!`;
  //       }
  //       // Otherwise removes the amount
  //       bank.accounts[i].balance -= amount;
  //       return `${name} now has a balance of $${bank.accounts[i].balance}`;
  //     }
  //   }
  // },
  // // Takes an account name to transfer from and an account name to transfer to as well as the amount.
  // transfer: function (name1, name2, amount) {
  //   // Declaring variables needed to store the account number (Position in array)
  //   let transferFrom;
  //   let transferTo;
  //   for (i=0; i<bank.accounts.length; i++) {
  //     if (name1 === bank.accounts[i].name) {
  //       // Checks to see if the account that is transferring has enough money to transfer.
  //       if (bank.accounts[i].balance < amount) {
  //         return `You can't withdrawl that much!`;
  //       }
  //       // Removing the money from the account and assigning transferFrom the account number
  //       bank.accounts[i].balance -= amount;
  //       transferFrom = i;
  //     }
  //     // Adding the money to the account and assining transferTo the account number
  //     if (name2 === bank.accounts[i].name) {
  //       bank.accounts[i].balance += amount;
  //       transferTo = i;
  //     }
  //   }
  //   // Uses transferFrom and transferTo to print the account names and balances.
  //   return `${name1} now has a balance of $${bank.accounts[transferFrom].balance} and ${name2} now has a balance of $${bank.accounts[transferTo].balance}`
  // },
