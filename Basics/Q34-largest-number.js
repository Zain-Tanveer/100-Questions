const largestNumber = (first, second) => {
  if (first < 40 || first > 60 || second < 40 || second > 60) {
    return "Numbers are not in range of 40...60.";
  }

  return first > second
    ? `Largest Number : ${first}`
    : `Largest Number : ${second}`;
};

console.log(largestNumber(20, 30));
console.log(largestNumber(42, 51));
console.log(largestNumber(78, 99));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
