/*
10. Write a JavaScript program to construct the 
following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *  
*/

for (let i = 0; i < 5; i++) {
  let stars = "";
  for (let j = 0; j < i + 1; j++) {
    stars += "* ";
  }
  console.log(stars);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
