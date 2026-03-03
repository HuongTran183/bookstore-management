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
    // Check if product is in stock
    if (!productsManager.isInStock(book.id)) {
      console.warn(`Product "${book.title}" is out of stock`);
      return false;
    }
    
    // Check if requested quantity exceeds available stock
    const product = productsManager.getProductById(book.id);
    if (quantity > product.stock) {
      console.warn(`Requested quantity ${quantity} exceeds available stock ${product.stock}`);
      return false;
    }
    
    const existingItem = this.items.find(item => item.id === book.id);
    
    if (existingItem) {
      // Check if adding more items would exceed stock
      if (existingItem.quantity + quantity > product.stock) {
        console.warn(`Total quantity would exceed available stock`);
        return false;
      }
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        image: book.image,
        quantity: quantity,
        stock: product.stock
      });
    }
    
    this.saveToStorage();
    return true;
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
        // Check if quantity exceeds available stock
        const product = productsManager.getProductById(bookId);
        if (quantity > product.stock) {
          console.warn(`Quantity ${quantity} exceeds available stock ${product.stock}`);
          return false;
        }
        item.quantity = quantity;
        this.saveToStorage();
        return true;
      }
    }
    return false;
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

  // Get available stock for an item
  getAvailableStock(bookId) {
    const product = productsManager.getProductById(bookId);
    if (product) {
      const item = this.items.find(i => i.id === bookId);
      return product.stock - (item ? item.quantity : 0);
    }
    return 0;
  }

  // Check if all items in cart are in stock
  validateStock() {
    for (let item of this.items) {
      const product = productsManager.getProductById(item.id);
      if (!product || product.stock < item.quantity) {
        return false;
      }
    }
    return true;
  }
}

// Initialize cart
const shoppingCart = new ShoppingCart();
