const numberOfOccurrences = (s) => {
  let charCount = {};
  const strArr = s.split("");

  for (let char of strArr) {
    if (charCount.hasOwnProperty(char)) {
      charCount[char] = charCount[char] + 1;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
};

const s = "Java";
const result = numberOfOccurrences(s);
console.log(result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
