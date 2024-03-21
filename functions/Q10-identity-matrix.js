const identityMatrix = (n) => {
  console.log("----IDENTITY MATRIX----");
  for (let i = 0; i < n; i++) {
    let row = "\t";
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row += "1 ";
      } else {
        row += "0 ";
      }
    }

    console.log(row);
  }
};

identityMatrix(4);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
