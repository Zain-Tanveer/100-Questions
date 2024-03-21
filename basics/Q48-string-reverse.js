const reverseString = (s) => {
  let stringArr = s.split("");
  stringArr.reverse();
  s = stringArr.join("");

  return s;
};

console.log(reverseString("javascript"));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
