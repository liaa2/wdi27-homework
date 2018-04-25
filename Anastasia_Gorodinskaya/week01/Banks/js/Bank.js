// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
/*
Aim : Describe
1. method to return the total balance of the accounts
2. Withdraw or deposits
3. Method to add new accounts
*/

// const bank = {
//   accounts: [
//     {owner : "Lea", currBalance : 2000},
//     {owner : "Solo", currBalance: 3000},
//     {owner : "Yoda", currBalance: 3000}
//   ],
//
//   printInfo: function(){
//     for (var i = 0; i < this.accounts.length; i++) {
//       let account = this.accounts[i];
//       console.log(account.owner)
//     }
//   }
// };
//
// bank.printInfo()

const bank = {
	accounts: [
		{owner : "Lea", currBalance : 2000},
		{owner : "Solo", currBalance: 3000},
		{owner : "Yoda", currBalance: 3000}
	],

	totalBalance: function(){
		let totalBalance = 0;
		for (var i = 0; i < this.accounts.length; i++) {
			totalBalance = totalBalance + this.accounts[i].currBalance;
		}
		console.log(`${totalBalance}`);
	},

	depositMoney: function(depositMoney){
		for (var i = 0; i < this.accounts.length; i++) {
			this.accounts[i].currBalance += depositMoney
			console.log(`Your new balance is ${this.accounts[i].currBalance}`);
		}
	},

	withdrawMoney: function(withdrawMoney){
		for (var i = 0; i < this.accounts.length; i++) {
			this.accounts[i].currBalance -= withdrawMoney
			console.log(`Your new balance is ${this.accounts[i].currBalance}`);
			if (this.accounts[i].currBalance <= withdrawMoney){
				console.log('You have got insuficient funds, change the amount that you would like to withdraw')
			}
		}
	},

	addAccount(name, initialBalance) {
		let newAccount = {
			owner: name,
			currBalance:initialBalance
		};
		const ownerExists = this.accounts.findIndex(({ owner }) => owner === newAccount.owner) >= 0;
		if (!ownerExists){
			return this.account.push(newAccount);
		}else{
		 console.info('Owner exists!')
	 }
	}
};


bank.totalBalance()
bank.depositMoney(500)
bank.withdrawMoney(2000)
bank.addAccount({owner:"Asoka", currBalance:100})
