const checkIntegers = (num1, num2) => {
  if (num1 < 0 && num2 > 0) {
    return `${num1} is negative and ${num2} is positive.`;
  } else if (num1 > 0 && num2 < 0) {
    return `${num1} is positive and ${num2} is negative.`;
  } else {
    return "Both are either negatives or positives or non-negatives"; // 0 is neither positive nor negative. It is a non-negative.
  }
};

console.log(checkIntegers(3, -1));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
