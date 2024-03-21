const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = (9 / 5) * celsius + 32;
  console.log(`${celsius}'C in fahrenheit is : ${fahrenheit}'F`);
};

const fahrenheitToCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * (5 / 9);
  console.log(`${fahrenheit}'F in celsius is : ${celsius}'C`);
};

celsiusToFahrenheit(60);
fahrenheitToCelsius(45);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
