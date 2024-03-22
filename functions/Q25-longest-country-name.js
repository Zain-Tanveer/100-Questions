const longestCountryName = (countries) => {
  let longestName = countries[0];

  for (country of countries) {
    if (country.length > longestName.length) {
      longestName = country;
    }
  }

  return longestName;
};

const countries = ["Australia", "Germany", "United States of America"];
const result = longestCountryName(countries);
console.log(result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
