const handleDifferentErrors = () => {
  const num = 10;
  let s;

  try {
    s = num.toUpperCase(); // type error
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("TypeError :", error.message);
    } else if (error instanceof RangeError) {
      console.log("RangeError :", error.message);
    } else {
      console.log("Error :", error.message);
    }
  }
};

handleDifferentErrors();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
