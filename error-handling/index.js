const displayUser = () => {
  //   const jsonString = '{"name":"John", "age":30, "city":"New York"}';
  const jsonString = '"name":"John", "age":30, "city":"New York"}';

  try {
    console.log(JSON.parse(jsonString));
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("SyntaxError :", error.message);
    } else {
      console.log("Error :", error.message);
    }
  }
};

displayUser();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.

// you need to open the html file to see the output of this

// copy the content and paste it in index.js

// NOTE: Need to be in the basics directory.
