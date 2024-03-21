const checkNumbers = (num1, num2) => {
  if (num1 + num2 === 50 || num1 === 50 || num2 === 50) {
    return true;
  }

  return false;
};

console.log(checkNumbers(5, 45));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
