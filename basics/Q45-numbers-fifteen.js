const checkIntegerValues = (first, second) => {
  if (first === 15 || second === 15 || first + second === 15) {
    return true;
  }

  return false;
};

const isTrue = checkIntegerValues(15, 10);

if (isTrue) {
  console.log("The numbers satisfy the given condition.");
} else {
  console.log("The numbers do not satisfy the given condition.");
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
