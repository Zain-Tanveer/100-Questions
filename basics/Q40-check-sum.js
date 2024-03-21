const checkIntegers = (first, second) => {
  if (first === 8 || second === 8) {
    return `"${first}" or "${second}" is 8.`;
  }

  const sum = first + second;
  if (sum === 8) {
    return `Sum of "${first}" and "${second} is 8."`;
  }

  const difference = first - second;
  if (difference === 8) {
    return `Difference of "${first}" and "${second} is 8."`;
  }

  return "Neither numbers nor their sum or difference equal 8.";
};

console.log(checkIntegers(8, 5));
console.log(checkIntegers(1, 8));
console.log(checkIntegers(3, 5));
console.log(checkIntegers(10, 2));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
