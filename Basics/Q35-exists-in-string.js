const existsInString = (s, ch) => {
  if (s.length < 1) {
    return "Insufficient string length.";
  }

  const subString = s.slice(1, 3);
  if (subString.includes(ch)) {
    return `'${ch}' character is in '${s}' between 2nd and 4th positions.`;
  }

  return `'${ch}' character is not in '${s}' between 2nd and 4th positions.`;
};

console.log(existsInString("Programmers Force", "g"));
console.log(existsInString("Programmers Force", "o"));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
