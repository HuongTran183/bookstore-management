// Products Management System
class ProductsManager {
  constructor() {
    this.products = [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        category: "Fiction",
        description: "A classic American novel set in the Jazz Age",
        image: "📖",
        rating: 4.5,
        stock: 15
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 14.99,
        category: "Fiction",
        description: "A gripping tale of racial injustice and childhood innocence",
        image: "📚",
        rating: 4.8,
        stock: 12
      },
      {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 13.99,
        category: "Dystopian",
        description: "A dystopian novel about totalitarianism",
        image: "📕",
        rating: 4.6,
        stock: 20
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 11.99,
        category: "Romance",
        description: "A romantic novel of manners and marriage",
        image: "💕",
        rating: 4.7,
        stock: 18
      },
      {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 15.99,
        category: "Fantasy",
        description: "An epic fantasy adventure",
        image: "⚔️",
        rating: 4.9,
        stock: 10
      }
    ];
  }

  // Get all products
  getAllProducts() {
    return this.products;
  }

  // Get product by ID
  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  // Get products by category
  getProductsByCategory(category) {
    return this.products.filter(product => product.category === category);
  }

  // Search products
  searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return this.products.filter(product =>
      product.title.toLowerCase().includes(lowerQuery) ||
      product.author.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
    );
  }

  // Get unique categories
  getCategories() {
    return [...new Set(this.products.map(product => product.category))];
  }

  // Check if product is in stock
  isInStock(id) {
    const product = this.getProductById(id);
    return product && product.stock > 0;
  }

  // Update stock
  updateStock(id, quantity) {
    const product = this.getProductById(id);
    if (product) {
      product.stock -= quantity;
      if (product.stock < 0) {
        product.stock = 0;
      }
    }
  }

  // Add new product
  addProduct(product) {
    const newId = Math.max(...this.products.map(p => p.id), 0) + 1;
    this.products.push({
      ...product,
      id: newId
    });
  }

  // Sort products by price
  sortByPrice(isAscending = true) {
    return [...this.products].sort((a, b) => {
      return isAscending ? a.price - b.price : b.price - a.price;
    });
  }

  // Sort products by rating
  sortByRating(isDescending = true) {
    return [...this.products].sort((a, b) => {
      return isDescending ? b.rating - a.rating : a.rating - b.rating;
    });
  }

  // Get featured products (top rated)
  getFeaturedProducts(count = 3) {
    return this.sortByRating(true).slice(0, count);
  }

  // Get product count
  getTotalProducts() {
    return this.products.length;
  }

  // Get total stock value
  getTotalStockValue() {
    return this.products.reduce((total, product) => total + (product.price * product.stock), 0);
  }

  // Get low stock products (less than 10)
  getLowStockProducts(threshold = 10) {
    return this.products.filter(product => product.stock < threshold);
  }

  // Get out of stock products
  getOutOfStockProducts() {
    return this.products.filter(product => product.stock === 0);
  }

  // Validate if we can reduce stock by given quantity
  canReduceStock(id, quantity) {
    const product = this.getProductById(id);
    if (!product) return false;
    return product.stock >= quantity;
  }

  // Get product with current stock status
  getProductWithStockStatus(id) {
    const product = this.getProductById(id);
    if (!product) return null;
    
    return {
      ...product,
      isInStock: product.stock > 0,
      stockStatus: product.stock > 10 ? 'in stock' : product.stock > 0 ? 'low stock' : 'out of stock'
    };
  }
}

// Initialize products manager
const productsManager = new ProductsManager();
