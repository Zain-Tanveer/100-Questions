class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
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
      console.log(
        `Insufficient balance! Your account only has : Rs. ${this.balance}.`
      );
      return;
    }

    this.balance -= amount;
    console.log(
      `Amount : ${amount} withdrawn from account ${this.accountNumber}.`
    );
    console.log(`Total balance : ${this.balance}\n`);
  }
}

const user1Account = new BankAccount("12345", 40);
console.log(user1Account);

user1Account.withdraw(40);
user1Account.deposit(100);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
