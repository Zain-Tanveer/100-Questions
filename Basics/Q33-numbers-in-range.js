const twoNumbersInRange = (first, second) => {
  if (first >= 40 && first <= 60 && second >= 40 && second <= 60) {
    return "Both numbers are in range of 40...60.";
  }

  if (first >= 70 && first <= 100 && second >= 70 && second <= 100) {
    return "Both numbers are in range of 70...100.";
  }

  return "Neither are in range of 40...60 or 70...100.";
};

console.log(twoNumbersInRange(20, 30));
console.log(twoNumbersInRange(42, 51));
console.log(twoNumbersInRange(78, 99));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
