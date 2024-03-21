const addFirstCharacter = (s) => {
  if (s.length < 1) {
    return "Insufficient string length.";
  }

  const charFirst = s.charAt(0);

  return `${charFirst}${s}${charFirst}`;
};

console.log(`New String : ${addFirstCharacter("java")}`);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
