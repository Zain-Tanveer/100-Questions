const checkStrictSoftMode = (first, second, third) => {
  if (first < second && second < third) {
    return `Strict mode -> ${first}, ${second}, ${third}`;
  }

  if (second < third) {
    return `Soft mode -> ${first}, ${second}, ${third}`;
  }

  return "The numbers are in neither 'Strict' nor 'Soft' mode.";
};

console.log(checkStrictSoftMode(10, 15, 31));
console.log(checkStrictSoftMode(24, 22, 31));
console.log(checkStrictSoftMode(22, 41, 31));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
