const downloadContent = (urls) => {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  });

  return Promise.all(promises);
};

const urls = [
  "https://www.boredapi.com/api/activity",
  "https://catfact.ninja/fact",
  "https://official-joke-api.appspot.com/random_joke",
];

downloadContent(urls)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
