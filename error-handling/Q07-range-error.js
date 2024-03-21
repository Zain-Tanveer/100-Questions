const returnArrayVal = (arr, index) => {
  try {
    if (arr[index] === undefined) {
      throw new RangeError();
    }
    return arr[index];
  } catch (error) {
    if (error instanceof RangeError) {
      console.log("Index out of range.");
    } else {
      console.log("Error :", error);
    }
  }
};

returnArrayVal([1, 2, 3], 4);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
