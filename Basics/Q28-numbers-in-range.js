const numbersInRange = (num1, num2) => {
  return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
};

const inRange = numbersInRange(5, 32);

if (inRange) {
  console.log("Numbers are in range of 50...99");
} else {
  console.log("Numbers are NOT in range of 50...99");
}
// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
