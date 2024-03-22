const binaryToDecimal = (binary, n = 0) => {
  if (n >= binary.length) {
    return 0;
  }

  const digit = parseInt(binary[n]);

  return (
    digit * Math.pow(2, binary.length - n - 1) + binaryToDecimal(binary, n + 1)
  );
};

const binary = "101010";
const result = binaryToDecimal(binary);
console.log(result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
