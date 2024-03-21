const findLongestWord = (s) => {
  const strArr = s.split(" ");
  let longestWord = strArr[0];

  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length > longestWord.length) {
      longestWord = strArr[i];
    }
  }

  return longestWord;
};

const result = findLongestWord("Web Development Tutorial");
console.log("Longest Word :", result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
