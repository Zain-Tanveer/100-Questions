const vowels = ["a", "e", "i", "o", "u"];

const countVowels = (s) => {
  let vowelCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s.charAt(i).toLowerCase())) {
      vowelCount++;
    }
  }

  return vowelCount;
};

const result = countVowels("The quick brown fox");
console.log("Vowels :", result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
