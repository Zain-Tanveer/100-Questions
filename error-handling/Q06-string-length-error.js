const checkStringLength = (s) => {
  if (s.length === 0) {
    throw new Error("String length is '0'.");
  }

  return s.length;
};

checkStringLength("");

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
