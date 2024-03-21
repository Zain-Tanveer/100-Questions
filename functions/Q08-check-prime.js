const checkIsPrime = (num, divisor = 2) => {
  if (num <= 2) {
    return num === 2;
  }
  if (num % divisor === 0) {
    return false;
  }
  if (divisor * divisor > num) {
    return true;
  }

  return checkIsPrime(num, divisor + 1);
};

const num = 11;
const isPrime = checkIsPrime(num);

if (isPrime) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is not a prime number.`);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
