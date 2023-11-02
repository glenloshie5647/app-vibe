/**
 * Filename: complex_code.js
 * Description: This complex code demonstrates the implementation of a shopping cart application.
 *              It handles adding, removing, and updating items in the cart, as well as computing
 *              the total cost and providing various utility functions.
 * Note: Please note that this is a simplified example and may not cover all edge cases.
 */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const existingItemIndex = this.items.findIndex((i) => i.product.name === item.name);

    if (existingItemIndex !== -1) {
      this.items[existingItemIndex].quantity += quantity;
    } else {
      this.items.push({ product: item, quantity });
    }
  }

  removeItem(item, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const existingItemIndex = this.items.findIndex((i) => i.product.name === item.name);

    if (existingItemIndex !== -1) {
      const existingItem = this.items[existingItemIndex];

      if (existingItem.quantity <= quantity) {
        this.items.splice(existingItemIndex, 1);
      } else {
        existingItem.quantity -= quantity;
      }
    }
  }

  updateQuantity(item, newQuantity) {
    if (newQuantity <= 0) {
      this.removeItem(item, item.quantity);
    } else {
      const existingItemIndex = this.items.findIndex((i) => i.product.name === item.name);

      if (existingItemIndex !== -1) {
        this.items[existingItemIndex].quantity = newQuantity;
      }
    }
  }

  getTotalCost() {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  getItems() {
    return this.items;
  }

  /**
   * Other utility methods (such as getUniqueItemsCount, clearCart, etc.) can be implemented here.
   * However, to keep the code concise, we'll exclude those methods in this example.
   */
}

// Usage example:

// Create some products
const product1 = new Product("T-shirt", 19.99);
const product2 = new Product("Jeans", 39.99);
const product3 = new Product("Shoes", 59.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 2);

// Update quantity of an item in the cart
cart.updateQuantity(product1, 3);

// Remove an item from the cart
cart.removeItem(product2, 1);

// Get all items in the cart
const itemsInCart = cart.getItems();

// Calculate the total cost
const totalCost = cart.getTotalCost();

// Output the cart details
console.log("Items in cart:", itemsInCart);
console.log("Total cost:", totalCost.toFixed(2));