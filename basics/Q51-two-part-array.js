/*
85. Write a JavaScript program to divide a given array of 
positive integers into two parts. First element belongs to 
the first part, second element belongs to the second part, 
and third element belongs to the first part and so on. 
Now compute the sum of two parts and store it in an array 
of size two.  
*/

const arrayInTwoParts = (arr) => {
  let firstPart = [];
  let secondPart = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      firstPart = [...firstPart, arr[i]];
    } else {
      secondPart = [...secondPart, arr[i]];
    }
  }

  const sumArr = [];

  sumArr[0] = firstPart.reduce((sum, number) => sum + number);
  sumArr[1] = secondPart.reduce((sum, number) => sum + number);

  console.log("First Part :", firstPart);
  console.log("Second Part :", secondPart);

  console.log("Sum Array :", sumArr);

  return sumArr;
};

arrayInTwoParts([1, 2, 3, 4, 5, 6, 7]);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
