const swapCharacters = (s) => {
  if (s.length < 1) {
    return "Insufficient string length.";
  }

  const charFirst = s.charAt(0);
  const charLast = s.charAt(s.length - 1);

  return `${charLast}${s.splice(1, -1)}${charFirst}`;
};

console.log(`New String : ${swapCharacters("java")}`);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
