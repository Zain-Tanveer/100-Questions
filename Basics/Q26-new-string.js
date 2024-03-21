const createString = (s) => {
  if (s.length < 3) {
    return `Insufficient string length of ${s}`;
  }

  const subString = s.slice(-3);

  return `${subString}${s}${subString}`;
};

console.log(createString("javascript"));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
