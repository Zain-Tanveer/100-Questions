const perfectNumber = (num) => {
  let numberSum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      numberSum += i;
    }
  }

  return numberSum === num;
};

// const number = 6;
// const number = 28;
const number = 496;

const isPerfect = perfectNumber(number);
if (isPerfect) {
  console.log(`${number} is a perfect number.`);
} else {
  console.log(`${number} is not a perfect number`);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
