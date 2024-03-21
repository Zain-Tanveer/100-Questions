const decodeURI = (uri) => {
  try {
    const decodedURI = decodeURIComponent(uri);
    console.log("Decoded URI :", decodedURI);
  } catch (error) {
    if (error instanceof URIError) {
      console.log("URIError :", error.message);
    } else {
      console.log("Error :", error.message);
    }
  }
};

decodeURI("https://example.com?name=Zain%Ul%Abedien");
// decodeURI("https://example.com?name=Zain%20Ul%20Abedien");

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
