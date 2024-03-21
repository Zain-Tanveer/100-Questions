const scriptInString = (s) => {
  if (s.startsWith("Script", 4)) {
    return `${s.slice(0, 4)}${s.slice(10, s.length)}`;
  }

  return s;
};

console.log(scriptInString("JavaScript Questions"));
console.log(scriptInString("Javascript Questions"));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
