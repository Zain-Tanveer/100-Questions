class BankAccount {
  constructor(accountNumber, holder, balance) {
    this.accountNumber = accountNumber;
    this.holder = holder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `Amount : ${amount} deposited in account ${this.accountNumber}.`
    );
    console.log(`Total balance : ${this.balance}\n`);
  }

  withdraw(amount) {
    if (this.balance < amount) {
      throw new Error(
        `Insufficient balance! Your account only has : Rs. ${this.balance}.`
      );
    }

    this.balance -= amount;
    console.log(
      `Amount : ${amount} withdrawn from account ${this.accountNumber}.`
    );
    console.log(`Total balance : ${this.balance}\n`);
  }

  transfer(amount, userAccount) {
    this.withdraw(amount);
    userAccount.deposit(amount);

    console.log(
      `${amount} deposited to account holder '${userAccount.holder}' having account number '${userAccount.accountNumber}'.\n`
    );
  }

  details() {
    console.log("---Account Details---");
    console.log(`Account Number :`, this.accountNumber);
    console.log(`Holder Name :`, this.holder);
    console.log(`Balance :`, this.balance, "\n");
  }
}

const johnAccount = new BankAccount("12345", "John Doe", 400);
const peterAccount = new BankAccount("67890", "Peter Parker", 1000);
const janeAccount = new BankAccount("13579", "Jane Foster", 100);

johnAccount.details();
peterAccount.details();
janeAccount.details();

// peter wants to transfer 500 rs into jane's account
try {
  peterAccount.transfer(500, janeAccount);

  peterAccount.details();
  janeAccount.details();
} catch (error) {
  console.log(error.message);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
