const showUsername = () => {
  try {
    console.log(username);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("ReferenceError :", error.message);
    } else {
      console.log("Error :", error.message);
    }
  }
};

showUsername();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
