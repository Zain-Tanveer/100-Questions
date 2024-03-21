const multipleOfThreeOrSeven = (num) => {
  if (num % 3 === 0 && num % 7 === 0) {
    return `${num} is a multiple of 3 and 7.`;
  }
  if (num % 3 === 0) {
    return `${num} is a multiple of 3.`;
  }
  if (num % 7 === 0) {
    return `${num} is a multiple of 7.`;
  }

  return `${num} is neither a multiple of 3 nor a multiple of 7.`;
};

console.log(multipleOfThreeOrSeven(21));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
