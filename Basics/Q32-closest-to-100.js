const closestTo100 = (first, second) => {
  const firstDiff = Math.abs(100 - first);
  const secondDiff = Math.abs(100 - second);

  if (firstDiff < secondDiff) {
    return `${first} is closer to "100" than ${second}`;
  }

  return `${second} is closer to "100" than ${first}`;
};

console.log(closestTo100(103, 95));
console.log(closestTo100(123, 92));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
