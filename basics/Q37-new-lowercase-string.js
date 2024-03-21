const newLowercaseString = (s) => {
  if (s.length < 3) {
    return s.toUpperCase();
  }

  const lowercaseString = s.slice(0, 3).toLowerCase();
  return `${lowercaseString}${s.slice(3, s.length)}`;
};

console.log("New String :", newLowercaseString("pf"));
console.log("New String :", newLowercaseString("PROGRAMMERS FORCE"));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
