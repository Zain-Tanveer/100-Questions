const numberReverse = (num) => {
  const reverse = num.toString().split("").reverse().join("");
  return reverse;
};

const reverse = numberReverse(32243);
console.log(reverse);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
