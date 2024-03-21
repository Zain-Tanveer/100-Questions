const findFactors = (num) => {
  let factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors = [...factors, i];
    }
  }

  return factors.join(", ");
};

// const number = 6;
// const number = 28;
const number = 496;

const result = findFactors(number);
console.log(`Factors of ${number} :`, result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
