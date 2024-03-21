const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
};

const base = 2;
const exponent = 3;

const result = power(base, exponent);
console.log("Power Result :", result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
