const checkSundayYears = () => {
  let startYear = 2014;
  const endYear = 2050;

  const sundayYears = [];

  while (startYear <= endYear) {
    const date = new Date(`${startYear}-01-01`);
    if (date.getDay() === 0) {
      sundayYears.push(date.getFullYear());
    }

    startYear++;
  }

  return sundayYears;
};

const sundayYears = checkSundayYears();
console.log(`The following years have sunday on January 1st`);
console.log(sundayYears);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
