const removeCharacterFromString = (s, position) => {
  if (position > s.length) {
    return `The provided string ${s} does not have more than ${s.length} characters.`;
  }

  return s.slice(0, position - 1) + s.slice(position);
};

console.log(removeCharacterFromString("javascript", 7));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
