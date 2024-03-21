const findLargestNumber = (numArr) => {
  if (numArr.length < 1) {
    return "Insufficient array length.";
  }

  if (numArr.length === 1) {
    return `Largest number : ${numArr[0]}`;
  }

  const sortedArr = numArr.sort();

  return `Largest number : ${sortedArr[sortedArr.length - 1]}`;
};

console.log(findLargestNumber([]));
console.log(findLargestNumber([23]));
console.log(findLargestNumber([23, 99, 76]));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
