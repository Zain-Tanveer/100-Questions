class Bank {
  constructor(name, branches = []) {
    this.name = name;
    this.branches = branches;
  }

  addBranch(branch) {
    if (this.branches.includes(branch)) {
      console.log(`${branch} is already in the list of branches.`);
      return;
    }

    this.branches.push(branch);
    console.log(`${branch} added.`);
  }

  removeBranch(branch) {
    if (!this.branches.includes(branch)) {
      console.log(`${branch} not in list of branches.`);
      return;
    }

    this.branches = this.branches.filter((val) => val !== branch);
    console.log(`${branch} removed.`);
  }

  displayBranches() {
    if (this.branches.length === 0) {
      console.log("You have no branches added!");
      return;
    }

    console.log("Branches :", this.branches.join(", "));
  }
}

const bankDetails = new Bank("Meezan Bank", ["DHA", "Saddar", "Johar Town"]);
bankDetails.displayBranches();

bankDetails.addBranch("Wapda Town");
bankDetails.displayBranches();

bankDetails.removeBranch("DHA");
bankDetails.displayBranches();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
