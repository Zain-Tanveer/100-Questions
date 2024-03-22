const characterOccurrence = (s, ch) => {
  const strArr = s.split("");

  if (!strArr.includes(ch)) {
    throw new Error(`${ch} not in provided string.`);
  }

  const characters = strArr.reduce(
    (prev, curr) =>
      curr.toLowerCase() === ch.toLowerCase() ? prev + curr : prev,
    ""
  );

  return characters.length;
};

const string = "Hey There";
const character = "e";

try {
  const result = characterOccurrence(string, character);
  console.log(`${character} has occurred ${result} time/s.`);
} catch (error) {
  console.log(error.message);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
