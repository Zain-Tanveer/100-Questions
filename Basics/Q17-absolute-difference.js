const getAbsoluteDifference = (num) => {
  const difference = num - 19;

  if (difference > 19) {
    return difference * 3;
  }

  return Math.abs(difference);
};

console.log(`Difference : ${getAbsoluteDifference(25)}`);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
