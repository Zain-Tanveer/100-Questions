const checkThreeNumbers = (first, second, third) => {
  if (first === second && first === third) {
    return 30;
  }

  if (first === second || first === third || second === third) {
    return 40;
  }

  return 20;
};

console.log("Check three numbers :", checkThreeNumbers(1, 1, 1));
console.log("Check three numbers :", checkThreeNumbers(1, 2, 3));
console.log("Check three numbers :", checkThreeNumbers(2, 1, 1));
console.log("Check three numbers :", checkThreeNumbers(1, 2, 1));
console.log("Check three numbers :", checkThreeNumbers(1, 1, 2));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
