const palindrome = (s) => {
  if (s.length <= 1) {
    return true;
  }

  if (s.charAt(0) !== s.charAt(s.length - 1)) {
    return false;
  }

  return palindrome(s.slice(1, -1));
};

const string = "madam";

const isPalindrome = palindrome(string);
if (isPalindrome) {
  console.log(`${string} is a palindrome.`);
} else {
  console.log(`${string} is not a palindrome.`);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
