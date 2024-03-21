const startsWithJava = (s) => {
  return s.startsWith("Java")
    ? `String ${s} starts with 'Java'`
    : `String ${s} does not start with 'Java'`;
};

console.log(startsWithJava("Javascript"));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
