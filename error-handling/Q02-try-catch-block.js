const tryCatchBlock = () => {
  const person = undefined;

  try {
    console.log(person.name);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Type Error: Object is undefined.");
    } else {
      console.log("Error :", error);
    }
  }
};

tryCatchBlock();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
