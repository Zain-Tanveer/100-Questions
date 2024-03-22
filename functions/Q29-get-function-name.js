function getFunctionName() {
  return arguments.callee.name;
}

const result = getFunctionName();
console.log("Function name :", getFunctionName());

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
