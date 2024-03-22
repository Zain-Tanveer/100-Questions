const binarySearch = (arr, num, start = 0, end = arr.length - 1) => {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === num) {
    return mid;
  }

  if (num < arr[mid]) {
    return binarySearch(arr, num, start, mid - 1);
  }

  return binarySearch(arr, num, mid + 1, end);
};

const arr = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
const number = 6;

const result = binarySearch(arr, number);
if (result === -1) {
  console.log(`${number} not in array.`);
} else {
  console.log(`${number} in array at index ${result}`);
}
// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
