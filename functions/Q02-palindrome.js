const palindrome = (s) => {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

// const inputS = "java";
const inputS = "madam";

const isPalindrome = palindrome(inputS);

if (isPalindrome) {
  console.log(`'${inputS}' is a palindrome.`);
} else {
  console.log(`'${inputS}' is not a palindrome.`);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
