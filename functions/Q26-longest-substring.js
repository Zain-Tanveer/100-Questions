function hasRepeatingCharacters(str) {
  const seen = [];

  for (let char of str) {
    if (seen.includes(char)) {
      return true;
    }
    seen.push(char);
  }

  return false;
}

const subStringsWithNoRepeatingCharacters = (s) => {
  const substrings = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.slice(i, j);
      if (!hasRepeatingCharacters(substring)) {
        substrings.push(substring);
      }
    }
  }

  substrings.sort((a, b) => a.length - b.length);
  return substrings[substrings.length - 1];
};

const str = "google.com";
const result = subStringsWithNoRepeatingCharacters(str);
console.log("Longest non-repeating sub-string :", result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
