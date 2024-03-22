const integersInRange = (start, end, result = []) => {
  if (start >= end - 1) {
    return result;
  }

  result = [...result, start + 1];
  return start, end, integersInRange(start + 1, end, result);
};

const result = integersInRange(2, 9);
console.log(result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
