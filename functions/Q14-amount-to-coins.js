const amountToCoins = (amount, coins) => {
  let sum = 0;
  let index = 0;
  let newCoins = [];

  while (sum < amount) {
    if (sum + coins[index] <= amount) {
      sum += coins[index];
      newCoins = [...newCoins, coins[index]];
    } else {
      index++;
    }
  }

  return newCoins;
};

const result = amountToCoins(46, [25, 10, 5, 2, 1]);
console.log(result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
