const sum = (num1, num2) => {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  }

  return num1 + num2;
};

console.log(`Sum of two same integers : ${sum(2, 2)}`);
console.log(`Sum of two different integers : ${sum(1, 2)}`);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
