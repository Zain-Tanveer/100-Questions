const merge = (leftArr, rightArr) => {
  let left = 0;
  let right = 0;
  let mergedArr = [];

  while (leftArr.length > left && rightArr.length > right) {
    if (leftArr[left] < rightArr[right]) {
      mergedArr.push(leftArr[left]);
      left++;
    } else {
      mergedArr.push(rightArr[right]);
      right++;
    }
  }

  return mergedArr.concat(leftArr.slice(left)).concat(rightArr.slice(right));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  return merge(sortedLeftHalf, sortedRightHalf);
};

const arr = [4, 7, 2, 5, 1, 9, 3];
const result = mergeSort(arr);
console.log(result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
