const largerThenNumber = (arr, num) => {
  return arr.filter((val) => val > num);
};

const arr = [24, 10, 14, 3, 9];
const number = 12;
const result = largerThanNumber(arr, number);

if (result.length === 0) {
  console.log(`${number} is larger then all numbers.`);
} else {
  console.log("Larger than number :", result);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
