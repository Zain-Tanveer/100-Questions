const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === num) {
      return mid;
    }

    if (arr[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

const arr = [1, 2, 5, 10, 20];
const number = 4;
const result = binarySearch(arr, number);

if (result === -1) {
  console.log(`${number} is not in array.`);
} else {
  console.log(`${number} at index ${result}`);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
