const sayHi = (getUser) => {
  console.log(`Hi ${getUser()}`);
};

const getUser = () => {
  return "Zain Ul Abedien";
};

sayHi(getUser);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
