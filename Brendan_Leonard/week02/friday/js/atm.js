const bank = {
  balance: {
    checking: 0,
    savings: 0,
  },
  transactionTypes: { 
    deposit: 0,
    withdraw: 0 
  },

  getBalance: function ( account ){
    // Returns balance for the requested account or 
    // total balance if no account is specified
    if( !account ) {
      let balance = 0;
      for ( account in bank.balance ) {
        balance += bank.balance[account];
      }
      return balance;
    } else {
      return this.balance[account];
    }
  },

  sufficientFundsExist: function( account, amount ) {
    // Function checks that enough funds exist in the account to process a withdrawal
    return this.balance[account] >= amount;
  },
  
  deposit: function( account, amount ) {
    // Function adds funds to the appropriate account and returns the new balance
    this.balance[account] += amount;
    return this.balance[account];
  },

  withdraw: function ( account, amount ) {
    if ( !(this.sufficientFundsExist ( account, amount ))) {
      if ( this.getBalance() >= amount ){
        // Code below handles overdraft functionality
        const transferAmount = amount - this.balance[account];
	const fromAccount = account === 'savings' ? 'checking' : 'savings'; 

        // Transfer sufficient funds to cover the withdrawal
        this.transfer( fromAccount, account, transferAmount );
      } else { 
        return false; // Even with overdraft there is not enough funds
      }
    }

    // Process the withdrawal
    this.balance[account] -= amount;
    return this.balance[account];
  },

  transfer: function ( fromAccount, toAccount, amount ) {
    // Do a withdrawal and then deposit to effect the transfer
    this.withdraw( fromAccount, amount );
    this.deposit( toAccount, amount );
    return true;    
  }
}

// Function to set the balance displays on the page
const updateBalanceDisplay = function () {
  let $field = '';
  let balanceAmount = 0;

  for ( account in bank.balance ) {
    $field = $('#' + `${ account }` + 'Balance'); // display field is called #checkingBalance for example
    balanceAmount = bank.getBalance( account );
    $field.text( '$' + balanceAmount );
    $field.toggleClass( 'zero-background', balanceAmount === 0 );
  }
}

// Function that sits behind all buttons on the page
const clickHandler = function () {
  const buttonPressed = event.srcElement.id.toLowerCase();
  let transaction = buttonPressed;
  let account = buttonPressed;

  // Determine transaction to perform by interrogating the button pressed
  for ( accountType in bank.balance ) {
    // Replace below will strip away the account type e.g. 'savings'
    // from the ID of the button pressed. Leaving the transaction to
    // perform e.g. 'deposit' as a result
    transaction = transaction.replace( accountType, '' );
  }

  for ( transactionType in bank.transactionTypes ) {
    // Replace strips away the transaction type e.g. 'deposit'
    // from the ID of the button pressed. Leaving the account to
    // perform transaction on e.g. 'savings' as a result
    account = account.replace( transactionType, '' );
  }

  // Get the amount from the appropriate form field
  const $amountElement = $('#' + account + 'Amount');
  const amount = Number($amountElement.val());

  if ( amount > 0 ) {
    // Run the transaction - referencing the bank object since the handling function
    // is named the same as the transaction - e.g. deposit, withdraw
    bank[transaction]( account, amount );
    updateBalanceDisplay();
  }

  // Reset the amount entry element on the page
  $amountElement.val('');
}

// Function below will run when page is ready - i.e. all DOM elements loaded
$(function() { 
  updateBalanceDisplay(); // Initial set of balance display

  // Use a single generic function to manages all the buttons
  $(':button').on('click', clickHandler);
});
