const checkSum = (first, second) => {
  const sum = first + second;

  if (sum >= 50 && sum <= 80) {
    return 65;
  }

  return 80;
};

console.log("Check Sum :", checkSum(30, 15));
console.log("Check Sum :", checkSum(55, 15));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
