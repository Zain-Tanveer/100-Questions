const checkTotalMarks = (marks) => {
  try {
    if (marks < 0) {
      throw new EvalError("marks are negative number.");
    }
  } catch (error) {
    if (error instanceof EvalError) {
      console.log("EvalError :", error.message);
    } else {
      console.log("Error :", error.message);
    }
  }
};

checkTotalMarks(-2);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
