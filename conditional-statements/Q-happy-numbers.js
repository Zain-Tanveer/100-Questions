/* 
8. According to Wikipedia a happy 
number is defined by the following process :
"Starting with any positive integer, replace 
the number by the sum of the squares of its 
digits, and repeat the process until the number 
equals 1 (where it will stay), or it loops endlessly 
in a cycle which does not include 1. Those numbers for 
which this process ends in 1 are happy numbers, while 
those that do not end in 1 are unhappy numbers 
(or sad numbers)".
Write a JavaScript program to find and print the 
first 5 happy numbers.
*/

const isHappyNumber = (n) => {
  const seen = [];

  while (n !== 1 && !seen.includes(n)) {
    seen.push(n);
    n = sumOfSquaresOfDigits(n);
  }

  return n === 1;
};

const sumOfSquaresOfDigits = (n) => {
  let sum = 0;

  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }

  return sum;
};

let happyCount = 0;
let integer = 1;

while (happyCount < 5) {
  if (isHappyNumber(integer)) {
    console.log(`Happy number found! :`, integer);
    integer++;
    happyCount++;
  } else {
    integer++;
  }
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
