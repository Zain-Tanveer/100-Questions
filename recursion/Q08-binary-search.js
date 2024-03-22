const binarySearch = (n, arr, start = 0, end = arr.length - 1) => {
  if (start > end) {
    return -1; // not in array
  }

  const mid = Math.floor((start + end) / 2);

  if (n === arr[mid]) {
    return mid;
  }

  if (n > arr[mid]) {
    return binarySearch(n, arr, mid + 1, end);
  }

  return binarySearch(n, arr, start, mid - 1);
};

const arr = [0, 1, 2, 3, 4, 5, 6];
const number = 1;

const result = binarySearch(number, arr);
if (result === -1) {
  console.log(`${number} not in array.`);
} else {
  console.log(`${number} found at index ${result}`);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
