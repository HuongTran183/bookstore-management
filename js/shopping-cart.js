// Shopping Cart Management System
class ShoppingCart {
  constructor() {
    this.items = [];
    this.loadFromStorage();
  }

  // Load cart from localStorage
  loadFromStorage() {
    const saved = localStorage.getItem('bookstoreCart');
    if (saved) {
      this.items = JSON.parse(saved);
    }
  }

  // Save cart to localStorage
  saveToStorage() {
    localStorage.setItem('bookstoreCart', JSON.stringify(this.items));
  }

  // Add item to cart
  addItem(book, quantity = 1) {
    const existingItem = this.items.find(item => item.id === book.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        image: book.image,
        quantity: quantity
      });
    }
    
    this.saveToStorage();
  }

  // Remove item from cart
  removeItem(bookId) {
    this.items = this.items.filter(item => item.id !== bookId);
    this.saveToStorage();
  }

  // Update quantity
  updateQuantity(bookId, quantity) {
    const item = this.items.find(item => item.id === bookId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(bookId);
      } else {
        item.quantity = quantity;
        this.saveToStorage();
      }
    }
  }

  // Get total price (without tax)
  getSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Get tax amount (10%)
  getTax() {
    return this.getSubtotal() * 0.1;
  }

  // Get total with tax
  getTotal() {
    return this.getSubtotal() + this.getTax();
  }

  // Get item count
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  // Get all items
  getItems() {
    return this.items;
  }

  // Clear cart
  clear() {
    this.items = [];
    this.saveToStorage();
  }

  // Check if cart is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Initialize cart
const shoppingCart = new ShoppingCart();
