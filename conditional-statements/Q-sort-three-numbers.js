/*
3. Write a JavaScript conditional statement to sort three 
numbers. Display an alert box to show the results.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/

let first = 0;
let second = -1;
let third = 4;

let temp;

if (first < second) {
  temp = first;
  first = second;
  second = temp;
}

if (second < third) {
  temp = second;
  second = third;
  third = temp;
}

if (first < second) {
  temp = first;
  first = second;
  second = temp;
}

console.log(first, second, third);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
