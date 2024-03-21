const divide = (first, second) => {
  if (second === 0) {
    throw new Error("Second value is '0'");
  }

  return first / second;
};

divide(10, 0);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
