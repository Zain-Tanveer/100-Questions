const isEven = (n) => {
  if (n < 0) {
    n = Math.abs(n);
  }

  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return false;
  }

  return isEven(n - 2);
};

const result = isEven(-2);

if (result) {
  console.log("Number is even.");
} else {
  console.log("Number is odd.");
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
