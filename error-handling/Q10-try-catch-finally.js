const tryCatchFinally = () => {
  const person = undefined;

  try {
    console.log(person.name);
  } catch (error) {
    if (error instanceof URIError) {
      console.log("URIError :", error.message);
    } else if (error instanceof TypeError) {
      console.log("TypeError :", error.message);
    } else {
      console.log("Error :", error.message);
    }
  } finally {
    console.log("This code will always run.");
  }
};

tryCatchFinally();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
