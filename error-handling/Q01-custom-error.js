const customError = (val) => {
  if (typeof val !== "number") {
    throw new Error(`${val} is not a type on 'number'`);
  }

  console.log("Value type: ", typeof val);
};

customError(10);
customError("10");

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
