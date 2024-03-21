const evaluateThreeIntegers = (first, second, third) => {
  if (
    (first >= 20 && (first < second || first < third)) ||
    (second >= 20 && (second < first || second < third)) ||
    (third >= 20 && (third < second || third < first))
  ) {
    return "At least one number is greater than or equal to 20, and less then one of the other two numbers.";
  }

  return "None of the numbers satisfy the given conditions.";
};

console.log(evaluateThreeIntegers(30, 21, 10));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
