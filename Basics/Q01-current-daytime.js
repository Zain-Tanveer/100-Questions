const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date(); // gets new date

const currentDay = days[currentDate.getDay()]; // get day returns 0 - 6

let currentHour = currentDate.getHours();
currentHour = currentHour > 12 ? 24 - currentHour : currentHour; // hours are returned in military time
const hour = currentHour < 10 ? `0${currentHour}` : currentHour; // adds a 0 for single digit values

const currentMinutes = currentDate.getMinutes();
const minutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes; // adds a 0 for single digit values

const currentSeconds = currentDate.getSeconds();
const seconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds; // adds a 0 for single digit values

const dayNight = currentHour >= 12 ? "PM" : "AM";

const currentTime = `${hour} : ${minutes} : ${seconds} ${dayNight}`;

console.log(`Today is : ${currentDay}.`);
console.log(`Current time is : ${currentTime}`);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
