const randomNumber = Math.floor(Math.random() * 10) + 1;
const userInput = prompt("Enter a number between 1 and 10!");

const messageEl = document.querySelector(".message");

if (randomNumber === userInput) {
  messageEl.innerHTML = `You guessed right! The random number was ${randomNumber}`;
} else {
  messageEl.innerHTML = `Sorry! The random number was ${randomNumber}. You guessed ${userInput}.`;
}

// you need to open the html file to see the output of this

// copy the content and paste it in index.js

// NOTE: Need to be in the basics directory.
