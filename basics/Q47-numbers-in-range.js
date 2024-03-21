const checkNumberInRange = (start, end, number) => {
  if (number < 40 || number > 10000) {
    return "Number is out of min-max range.";
  }

  if (start >= end) {
    return "Please provide valid boundary values.";
  }

  if (number >= start && number <= end) {
    return `${number} in range of ${start} -- ${end}`;
  }

  return `${number} not in range of ${start} -- ${end}`;
};

console.log(checkNumberInRange(500, 1000, 550));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
