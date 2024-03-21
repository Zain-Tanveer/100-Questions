const checkNumberRange = (num) => {
  if (num >= 80 && num <= 120) {
    return "Within range of 100.";
  } else if (num >= 380 && num <= 420) {
    return "Within range of 400.";
  } else {
    return "Not within range of either 100 or 400";
  }
};

console.log(checkNumberRange(390));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
