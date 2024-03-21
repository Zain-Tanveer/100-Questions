const getTotalDays = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // Leap year
    return 366;
  } else {
    // Non-leap year
    return 365;
  }
};

const daysUntilChristmas = () => {
  const currentDate = new Date();
  const christmasDay = new Date(`${currentDate.getFullYear()}-12-25`);

  const timeDifference = Math.abs(
    christmasDay.getTime() - currentDate.getTime()
  ); // getTime returns value in milliseconds

  let remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // for current date of 26 - 31 december of same year.
  if (remainingDays <= 6) {
    const totalDays = getTotalDays(currentDate.getFullYear());

    remainingDays = totalDays - remainingDays;
  }

  console.log(`Remaining days until christmas are : ${remainingDays}`);
};

daysUntilChristmas();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
