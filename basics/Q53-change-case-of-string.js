/*
98. Write a JavaScript program to change the case 
of the minimum number of letters to make a given 
string written in upper case or lower case. 
Fox example "Write" will be write and "PHp" will 
be "PHP"
*/

const changeCaseOfString = (s) => {
  let lowerCount = 0;
  let upperCount = 0;

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      upperCount++;
    } else if (charCode >= 97 && charCode <= 122) {
      lowerCount++;
    }
  }

  if (upperCount > lowerCount) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
};

console.log(changeCaseOfString("Write"));
console.log(changeCaseOfString("PHp"));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
