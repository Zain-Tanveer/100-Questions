class Product {
  constructor(product_id, name, price) {
    this.product_id = product_id;
    this.name = name;
    this.price = price;
  }

  totalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(product_id, name, price, warranty) {
    super(product_id, name, price);

    this.warranty = warranty;
  }

  // add a % of total price based on warranty
  // 5 years warranty equals 5% increase in total price
  totalPrice(quantity) {
    const total_price = super.totalPrice(quantity);
    return total_price + total_price * (this.warranty / 100);
  }
}

const careProduct = new PersonalCareProduct(1, "Face Lotion", 15, 2);
console.log("Total price :", careProduct.totalPrice(5));

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
