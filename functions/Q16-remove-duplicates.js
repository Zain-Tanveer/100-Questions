const removeDuplicates = (s) => {
  let seen = [];
  let result = "";
  const strArr = s.split("");

  for (let char of strArr) {
    if (!seen.includes(char)) {
      result += char;
      seen = [...seen, char];
    }
  }

  return result;
};

const s = "thequickbrownfoxjumpsoverthelazydog";
const result = removeDuplicates(s);
console.log(result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
