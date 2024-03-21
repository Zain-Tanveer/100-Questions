const addPy = (s) => {
  if (s.startsWith("Py")) {
    return s;
  }

  return `Py${s}`;
};

console.log(addPy("Pylance"));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
