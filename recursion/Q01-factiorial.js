const factorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

const num = 5;
const result = factorial(num);
console.log(`Factorial of ${num} :`, result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
