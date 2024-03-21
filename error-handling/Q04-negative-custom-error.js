const checkNegativeNumber = (num) => {
  if (num < 0) {
    throw new Error("Negative numbers are not allowed!");
  }

  return num;
};

checkNegativeNumber(-10);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
