class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  details() {
    console.log(`${this.name} is ${this.age} years old from ${this.country}.`);
  }
}

const john = new Person("John Doe", 25, "America");
john.details();

const peter = new Person("Peter", 30, "Canada");
peter.details();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
