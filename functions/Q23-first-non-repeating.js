const firstNotRepeatedCharacter = (s) => {
  const charCount = {};
  const strArr = s.split("");

  for (let char of strArr) {
    if (charCount.hasOwnProperty(char)) {
      charCount[char] = charCount[char] + 1;
    } else {
      charCount[char] = 1;
    }
  }

  for (let char in charCount) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return "";
};

const string = "abacddbec";
const result = firstNotRepeatedCharacter(string);

if (result.length === 0) {
  console.log("There are no non repeating characters.");
} else {
  console.log("The first non repeated character is :", result);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
