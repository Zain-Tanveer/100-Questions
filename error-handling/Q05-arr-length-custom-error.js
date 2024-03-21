const checkArrayLength = (arr) => {
  if (arr.length === 0) {
    throw new Error("Array length is '0'.");
  }

  return arr.length;
};

checkArrayLength([]);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
