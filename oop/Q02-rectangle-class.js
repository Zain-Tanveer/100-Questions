class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.height * this.width;
  }

  calculatePerimeter() {
    return 2 * (this.height + this.width);
  }
}

const rectangle = new Rectangle(5, 10);
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log("Area :", area);
console.log("Perimeter :", perimeter);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
