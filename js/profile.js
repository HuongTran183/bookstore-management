/* =============================================
   PROFILE MODULE - Quản lý Hồ Sơ Người Dùng
   =============================================
   Feature: user-profile
   Branch: feature/user-profile
   Sử dụng localStorage để lưu thông tin user.
   ============================================= */

/**
 * Lấy thông tin profile từ localStorage
 * @returns {Object} Thông tin user
 */
function getProfile() {
    const profile = localStorage.getItem('bookstore_profile');
    return profile ? JSON.parse(profile) : {
        name: '',
        email: '',
        phone: '',
        address: '',
        avatar: '👤'
    };
}

/**
 * Lưu thông tin profile vào localStorage
 * @param {Object} profile - Thông tin user
 */
function saveProfile(profile) {
    localStorage.setItem('bookstore_profile', JSON.stringify(profile));
}

/**
 * Render form profile lên giao diện
 */
function renderProfileForm() {
    const profile = getProfile();
    const container = document.getElementById('profile-form');
    if (!container) return;

    container.innerHTML = `
        <div class="profile-avatar">
            <span class="avatar-display">${profile.avatar}</span>
            <div class="avatar-picker">
                <span class="avatar-option" onclick="changeAvatar('👤')">👤</span>
                <span class="avatar-option" onclick="changeAvatar('👨')">👨</span>
                <span class="avatar-option" onclick="changeAvatar('👩')">👩</span>
                <span class="avatar-option" onclick="changeAvatar('🧑‍💻')">🧑‍💻</span>
                <span class="avatar-option" onclick="changeAvatar('📚')">📚</span>
            </div>
        </div>
        <div class="form-group">
            <label for="profile-name">Họ và tên</label>
            <input type="text" id="profile-name" class="form-input" 
                   value="${profile.name}" placeholder="Nhập họ và tên">
        </div>
        <div class="form-group">
            <label for="profile-email">Email</label>
            <input type="email" id="profile-email" class="form-input" 
                   value="${profile.email}" placeholder="Nhập email">
        </div>
        <div class="form-group">
            <label for="profile-phone">Số điện thoại</label>
            <input type="tel" id="profile-phone" class="form-input" 
                   value="${profile.phone}" placeholder="Nhập số điện thoại">
        </div>
        <div class="form-group">
            <label for="profile-address">Địa chỉ giao hàng</label>
            <textarea id="profile-address" class="form-input form-textarea" 
                      placeholder="Nhập địa chỉ giao hàng">${profile.address}</textarea>
        </div>
        <div class="form-actions">
            <button class="btn btn-primary" onclick="saveProfileForm()">💾 Lưu thông tin</button>
            <button class="btn btn-secondary" onclick="resetProfile()">🔄 Đặt lại</button>
        </div>
    `;
}

/**
 * Lưu thông tin từ form
 */
function saveProfileForm() {
    const profile = {
        name: document.getElementById('profile-name').value.trim(),
        email: document.getElementById('profile-email').value.trim(),
        phone: document.getElementById('profile-phone').value.trim(),
        address: document.getElementById('profile-address').value.trim(),
        avatar: getProfile().avatar
    };

    // Validate cơ bản
    if (!profile.name) {
        showNotification('⚠️ Vui lòng nhập họ và tên!');
        return;
    }

    if (profile.email && !isValidEmail(profile.email)) {
        showNotification('⚠️ Email không hợp lệ!');
        return;
    }

    saveProfile(profile);
    showNotification('✅ Đã lưu thông tin thành công!');
    updateProfileDisplay();
}

/**
 * Đổi avatar
 * @param {string} emoji - Emoji avatar mới
 */
function changeAvatar(emoji) {
    const profile = getProfile();
    profile.avatar = emoji;
    saveProfile(profile);

    const avatarDisplay = document.querySelector('.avatar-display');
    if (avatarDisplay) {
        avatarDisplay.textContent = emoji;
    }
    updateProfileDisplay();
}

/**
 * Reset profile về mặc định
 */
function resetProfile() {
    localStorage.removeItem('bookstore_profile');
    renderProfileForm();
    updateProfileDisplay();
    showNotification('🔄 Đã đặt lại thông tin!');
}

/**
 * Cập nhật hiển thị profile trên header (nếu có)
 */
function updateProfileDisplay() {
    const profile = getProfile();
    const displayEl = document.getElementById('profile-display');
    if (displayEl) {
        displayEl.textContent = profile.name
            ? `${profile.avatar} ${profile.name}`
            : `${profile.avatar} Khách`;
    }
}

/**
 * Render lịch sử đơn hàng (mock data)
 */
function renderOrderHistory() {
    const container = document.getElementById('order-history');
    if (!container) return;

    const orders = getOrderHistory();

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>📦 Chưa có đơn hàng nào.</p>
                <a href="index.html" class="btn btn-primary">Mua sắm ngay</a>
            </div>
        `;
        return;
    }

    container.innerHTML = orders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <span class="order-id">#${order.id}</span>
                <span class="order-date">${order.date}</span>
                <span class="order-status status-${order.status}">${order.statusText}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <span class="order-item">${item.emoji} ${item.title} x${item.quantity}</span>
                `).join('')}
            </div>
            <div class="order-total">
                Tổng: <strong>${order.total.toLocaleString('vi-VN')}đ</strong>
            </div>
        </div>
    `).join('');
}

/**
 * Lấy lịch sử đơn hàng từ localStorage
 * @returns {Array} Mảng đơn hàng
 */
function getOrderHistory() {
    const orders = localStorage.getItem('bookstore_orders');
    return orders ? JSON.parse(orders) : [];
}

/**
 * Validate email đơn giản
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// =============================================
// Khởi tạo khi DOM ready
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    renderProfileForm();
    renderOrderHistory();
    updateProfileDisplay();
});
