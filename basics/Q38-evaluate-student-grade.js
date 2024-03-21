const evaluateStudentGrade = (subjectMarks, isFinals) => {
  const totalMarks = subjectMarks.reduce((total, current) => total + current);

  if (isFinals && totalMarks >= 90 && totalMarks <= 100) {
    return true;
  }

  if (!isFinals && totalMarks >= 89 && totalMarks <= 100) {
    return true;
  }

  return false;
};

const isAPlusGrade = evaluateStudentGrade([93]);

if (isAPlusGrade) {
  console.log("Congrats! You got A+ grade!");
} else {
  console.log("Sorry. You did not get A+ grade. Better luck next time!");
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
