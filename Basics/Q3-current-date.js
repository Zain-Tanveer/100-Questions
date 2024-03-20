const currentDate = new Date();

const currentMonth = currentDate.getMonth() + 1;
const month = currentMonth < 10 ? `0${currentMonth}` : currentMonth;

const currentDay = currentDate.getDate();
const day = currentDay < 10 ? `0${currentDay}` : currentDay;

const year = currentDate.getFullYear();

console.log(`${month}-${day}-${year}`); // month-day-year
console.log(`${month}/${day}/${year}`); // month/day/year

console.log(`${day}-${month}-${year}`); // day-month-year
console.log(`${day}/${month}/${year}`); // day/month/year

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
