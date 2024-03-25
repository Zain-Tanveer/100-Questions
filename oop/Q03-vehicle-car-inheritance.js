class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  details() {
    console.log(
      `Model ${this.model} was made by ${this.make} in year ${this.year}.`
    );
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);

    this.doors = doors;
  }

  details() {
    super.details();
    console.log(`It has ${this.doors} doors.`);
  }
}

const vehicle = new Vehicle("Bugatti", "veron", 2010);
vehicle.details();

console.log("\n");

const car = new Car("Honda", "city", 2015, 4);
car.details();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
