/*
103. Write a JavaScript program to find the maximum 
number of a given positive integer by deleting exactly 
one digit of the given number. 
*/

const findMaximumNumber = (num) => {
  let newNumS = num.toString().slice(1);

  if (parseInt(newNumS) === 0) {
    console.log("if");
    newNumS = num.toString().slice(0, -1);
  }

  return parseInt(newNumS);
};

console.log("Max number :", findMaximumNumber(10));
console.log("Max number: ", findMaximumNumber(345));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
