const formEl = document.getElementById("form");
const resultEl = document.getElementById("result");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const submitButtonVal = e.submitter.value;

  let result;

  if (submitButtonVal === "multiply") {
    result = firstNumber * secondNumber;
  } else {
    result = firstNumber / secondNumber;
  }

  resultEl.innerHTML = result;
});

// you need to open the html file to see the output of this

// copy the content and paste it in index.js

// NOTE: Need to be in the basics directory.

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
