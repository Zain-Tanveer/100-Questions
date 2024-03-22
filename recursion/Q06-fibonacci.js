const fibonacci = (n, sequence = []) => {
  if (n <= 0) {
    return sequence;
  }

  if (sequence.length === 0) {
    sequence.push(0);
  } else if (sequence.length === 1) {
    sequence.push(1);
  } else {
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (next > n) {
      return sequence;
    }
    sequence.push(next);
  }

  return fibonacci(n, sequence);
};

const result = fibonacci(22);
console.log(result);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
