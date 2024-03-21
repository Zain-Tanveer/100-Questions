/*
89. Write a JavaScript program to check whether it is possible
to replace $ in a given expression x $ y = z with one of 
the four signs +, -, * or / to obtain a correct expression.  
For example x = 10, y = 30 and z = 300, we can replace $ with 
a multiple operator (*) to obtain x * y = z
*/

const checkExpression = (x, y, z) => {
  if (x + y === z) {
    return `${x} + ${y} = ${z}`;
  }
  if (x - y === z) {
    return `${x} - ${y} = ${z}`;
  }
  if (x / y === z) {
    return `${x} / ${y} = ${z}`;
  }
  if (x * y === z) {
    return `${x} * ${y} = ${z}`;
  }

  return "Not possible.";
};

console.log(checkExpression(10, 30, 300));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
