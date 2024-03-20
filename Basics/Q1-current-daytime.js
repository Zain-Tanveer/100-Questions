const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date();

const currentDay = days[currentDate.getDay()];

let currentHour = currentDate.getHours();
currentHour = currentHour > 12 ? 24 - currentHour : currentHour;
currentHour = currentHour < 10 ? currentHour + 10 : currentHour;

let currentMinutes = currentDate.getMinutes();
currentMinutes = currentMinutes < 10 ? currentMinutes + 10 : currentMinutes;

let currentSeconds = currentDate.getSeconds();
currentSeconds = currentSeconds < 10 ? currentSeconds + 10 : currentSeconds;

const dayNight = currentHour > 12 ? "PM" : "AM";

const currentTime = `${currentHour} : ${currentMinutes} : ${currentSeconds} ${dayNight}`;

console.log(`Today is : ${currentDay}.`);
console.log(`Current time is : ${currentTime}`);

// copy the content and paste it in index.js

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
