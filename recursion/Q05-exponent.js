const exponent = (num, power) => {
  if (power === 1) {
    return num;
  }

  return num * exponent(num, power - 1);
};

const number = 2;
const power = 3;

const result = exponent(number, power);
console.log(`${number} ^ ${power} is :`, result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
