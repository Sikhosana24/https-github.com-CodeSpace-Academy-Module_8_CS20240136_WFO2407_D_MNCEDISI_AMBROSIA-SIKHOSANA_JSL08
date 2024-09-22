// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
  constructor(branchInfo) {
    if (bankBranchInstance){
        return bankBranchInstance;
    }

    this.branchInfo = branchInfo;
    bankBranchInstance = this;
  }
  getBranchInfo() {
    return this.branchInfo;
  }
}

const branchA = new BankBranch ({name: "Central Branch", location: "123 Main St",manager: "John Doe"});
console.log("Branch A Info:", branchA.getBranchInfo());

const branchB = new BankBranch ({ name: "West Branch", location: "456 Elm St", manager: "Jane Smith"});
console.log("Branch B Info:", branchB.getBranchInfo());

console.log("Are both instances the same?", branchA === branchB);