const lettersInAlphabeticalOrder = (s) => {
  return s.split("").sort().join("");
};

const result = lettersInAlphabeticalOrder("webmaster");
console.log("Alphabetical Order :", result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
