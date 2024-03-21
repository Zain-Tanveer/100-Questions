const checkLastDigitsSame = (numArr) => {
  const lastDigit = numArr[0] % 10;

  for (const num of numArr) {
    if (lastDigit !== num % 10) {
      return "Last digits of the provided numbers are not same";
    }
  }

  return "Last digits of the three numbers are same.";
};

console.log(checkLastDigitsSame([3233, 4893, 892]));
console.log(checkLastDigitsSame([3233, 4893, 8923]));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
