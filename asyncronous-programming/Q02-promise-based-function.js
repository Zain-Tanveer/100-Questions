const getDataPromise = (url) => {
  return new Promise((resolve, reject) => {
    getData(url, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const getData = (url, callback) => {
  setTimeout(() => {
    try {
      decodeURIComponent(url);
      callback(null, "Data Fetched!");
    } catch (error) {
      callback(
        new Error("Something went wrong while fetching the data...", null)
      );
    }
  }, 2000);
};

const errorUrl = "https://www.example.com?name=zain%tanveer";
const url = "https://www.example.com?name=zain%20tanveer";

console.log("Fetching data...");

getDataPromise(url)
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
