class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  details() {
    console.log(
      `${this.title} written by ${this.author} was published in ${this.year}`
    );
  }
}

class EBook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);

    this.price = price;
  }

  details() {
    super.details();
    console.log(`It is available online at a best price of $${this.price}.`);
  }
}

const atomicHabits = new EBook("Atomic Habits", "James Clear", "2018", "14.99");
atomicHabits.details();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
