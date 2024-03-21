const firstLetterToUpperCase = (s) => {
  const strArr = s.split(" ");
  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    const capitalWord = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);

    result = [...result, capitalWord];
  }

  return result.join(" ");
};

const result = firstLetterToUpperCase("the quick brown fox");
console.log(result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
