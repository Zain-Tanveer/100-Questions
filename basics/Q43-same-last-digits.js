const sameLastDigit = (first, second, third) => {
  if (first % 10 === second % 10 && first % 10 === third % 10) {
    return "All three numbers have same last digits.";
  }

  if (
    first % 10 === second % 10 ||
    first % 10 === third % 10 ||
    second % 10 === third % 10
  ) {
    return "Two numbers have same last digit.";
  }

  return "None of the numbers have same last digit.";
};

console.log(sameLastDigit(21, 11, 31));
console.log(sameLastDigit(11, 22, 33));
console.log(sameLastDigit(22, 11, 31));
console.log(sameLastDigit(21, 12, 31));
console.log(sameLastDigit(21, 11, 32));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
