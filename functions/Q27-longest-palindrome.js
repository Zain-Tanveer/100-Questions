const longestPalindrome = (s) => {
  const isPalindrome = (sub) => {
    return sub === sub.split("").reverse().join("");
  };

  const palindromes = {};

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const subString = s.slice(i, j);
      if (isPalindrome(subString)) {
        palindromes[subString] = subString.length;
      }
    }
  }

  let longestP = Object.keys(palindromes)[0];

  for (key in palindromes) {
    if (palindromes[key] > longestP.length) {
      longestP = key;
    }
  }

  return longestP;
};

const string = "abracadabra";
const result = longestPalindrome(string);
console.log("Longest palindrome :", result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
