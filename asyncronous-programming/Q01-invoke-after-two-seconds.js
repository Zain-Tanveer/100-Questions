const invoke = (cb) => {
  setTimeout(cb, 2000);
};

const sayHi = () => {
  console.log("Hi there!");
};

console.log("Program Started...");
invoke(sayHi);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
