const findSecondLowestHighest = (arr) => {
  arr = arr.sort();
  const secondLowest = arr[1];
  const secondHighest = arr[arr.length - 2];

  return `${secondLowest}, ${secondHighest}`;
};

const result = findSecondLowestHighest([1, 2, 4, 3, 5]);
console.log("Lowest, Highest :", result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
