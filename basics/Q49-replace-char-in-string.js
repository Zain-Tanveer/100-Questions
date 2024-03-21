const replaceCharInString = (s) => {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      charCode = charCode === 122 ? 97 : charCode + 1;
    } else if (charCode >= 65 && charCode <= 90) {
      charCode = charCode === 90 ? 65 : charCode + 1;
    }

    result += String.fromCharCode(charCode);
  }

  return `${s} : ${result}`;
};

console.log(replaceCharInString("ace"));
// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
