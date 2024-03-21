const stringCombinations = (s) => {
  let combinations = [];
  const strArr = s.split("");

  for (let i = 0; i < strArr.length; i++) {
    let stringConcat = "" + strArr[i];
    combinations = [...combinations, stringConcat];

    for (let j = i + 1; j < strArr.length; j++) {
      stringConcat += strArr[j];
      combinations = [...combinations, stringConcat];
    }
  }

  return combinations.join(",");
};

console.log(stringCombinations("dog"));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
