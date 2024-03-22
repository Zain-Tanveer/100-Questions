const greatestCommonDivisor = (first, second) => {
  if (second === 0) {
    return first;
  } else {
    return greatestCommonDivisor(second, first % second);
  }
};

const firstNum = 24;
const secondNum = 36;

const result = greatestCommonDivisor(firstNum, secondNum);
console.log(`GCD of ${firstNum} and ${secondNum} is :`, result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
