const isLeapYear = (year) => {
  const isLeap = year % 4 === 0 ? true : false;

  if (isLeap) {
    console.log(`${year} is a leap year!`);
  } else {
    console.log(`${year} is not a leap year!`);
  }
};

isLeapYear(2024);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
