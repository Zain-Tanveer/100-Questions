const rotateStringRight = (s) => {
  console.log(s);

  let stringArr = s.split("");

  stringArr.forEach(() => {
    let lastLetter = stringArr.pop();
    stringArr = [lastLetter, ...stringArr];

    console.log(stringArr.join(""));
  });
};

rotateStringRight("w3resource");

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
