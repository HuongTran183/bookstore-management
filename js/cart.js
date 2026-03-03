/* =============================================
   CART MODULE - Quản lý Giỏ Hàng
   =============================================
   Sử dụng localStorage để lưu trữ giỏ hàng.
   ⚠️  FILE DỄ CONFLICT khi thêm tính năng mới:
   - Discount / mã giảm giá
   - Giới hạn số lượng
   - Tính phí ship
   ============================================= */

/**
 * Lấy giỏ hàng từ localStorage
 * @returns {Array} Mảng các item {id, quantity}
 */
function getCart() {
    const cart = localStorage.getItem('bookstore_cart');
    return cart ? JSON.parse(cart) : [];
}

/**
 * Lưu giỏ hàng vào localStorage
 * @param {Array} cart - Mảng các item
 */
function saveCart(cart) {
    localStorage.setItem('bookstore_cart', JSON.stringify(cart));
}

/**
 * Thêm sách vào giỏ hàng
 * @param {number} bookId - ID của sách
 */
function addToCart(bookId) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === bookId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: bookId, quantity: 1 });
    }

    saveCart(cart);
    updateCartCount();

    // Hiển thị thông báo
    showNotification('✅ Đã thêm vào giỏ hàng!');
}

/**
 * Xóa sách khỏi giỏ hàng
 * @param {number} bookId - ID của sách
 */
function removeFromCart(bookId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== bookId);
    saveCart(cart);
    updateCartCount();
}

/**
 * Cập nhật số lượng sách trong giỏ
 * @param {number} bookId - ID của sách
 * @param {number} delta - Thay đổi số lượng (+1 hoặc -1)
 */
function updateQuantity(bookId, delta) {
    const cart = getCart();
    const item = cart.find(item => item.id === bookId);

    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(bookId);
            return;
        }
        saveCart(cart);
        updateCartCount();
    }
}

/**
 * Cập nhật số lượng hiển thị trên icon giỏ hàng
 */
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const countElements = document.querySelectorAll('#cart-count');
    countElements.forEach(el => {
        el.textContent = count;
    });
}

/**
 * Hiển thị thông báo tạm thời
 * @param {string} message - Nội dung thông báo
 */
function showNotification(message) {
    // Xóa notification cũ nếu có
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// =============================================
// 🔽 THÊM TÍNH NĂNG MỚI BÊN DƯỚI 🔽
// Ví dụ: applyDiscount(), calculateShipping()
// =============================================
