/*
9. Write a JavaScript program to find the Armstrong 
numbers of 3 digits.
Note : An Armstrong number of three digits is an integer 
such that the sum of the cubes of its digits is equal to 
the number itself. For example, 371 is an Armstrong number 
since 3**3 + 7**3 + 1**3 = 371.
*/

for (let i = 100; i < 1000; i++) {
  let first = Math.floor(i / 100);
  let second = Math.floor((i / 10) % 10);
  let third = i % 10;

  if (Math.pow(first, 3) + Math.pow(second, 3) + Math.pow(third, 3) === i) {
    console.log("Armstrong number :", i);
  }
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
