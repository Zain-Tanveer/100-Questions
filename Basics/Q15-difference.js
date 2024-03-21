const getDifference = (num) => {
  const difference = num - 13;

  if (difference < 0) {
    return Math.abs(difference) * 2;
  }

  return difference;
};

console.log(`Difference : ${getDifference(22)}`);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
