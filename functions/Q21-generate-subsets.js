const subsetsOfArray = (arr, l) => {
  if (l > arr.length) {
    throw new RangeError("Length provided is greater than array length.");
  }

  let subsets = [];

  const generateSubset = (index, subset) => {
    if (subset.length === l) {
      subsets = [...subsets, subset];
      return;
    }

    for (let i = index; i < arr.length; i++) {
      generateSubset(i + 1, [...subset, arr[i]]);
    }
  };

  generateSubset(0, []);

  return subsets;
};

try {
  const result = subsetsOfArray([1, 2, 3], 2);
  console.log(result);
} catch (error) {
  if (error instanceof RangeError) {
    console.log(`RangeError : ${error.message}`);
  } else {
    console.log("Error :", error.message);
  }
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
