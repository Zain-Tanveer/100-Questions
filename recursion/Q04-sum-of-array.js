const sum = (arr, index = 0) => {
  if (index === arr.length - 1) {
    return arr[index];
  }

  return arr[index] + sum(arr, index + 1);
};

const result = sum([1, 2, 3, 4, 5, 6]);
console.log("Sum of array :", result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
