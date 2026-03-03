/* =============================================
   APP.JS - Logic chính trang chủ
   =============================================
   Render danh sách sách, xử lý filter & search
   ⚠️  FILE DỄ CONFLICT khi thêm tính năng:
   - Thêm kiểu sort mới
   - Thêm filter mới
   - Thay đổi cách render card
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {
    // Khởi tạo
    renderCategoryChips();
    updateCartCount();

    // Event listeners cho filter & search
    document.getElementById('search-input').addEventListener('input', function() {
        applyFilters();
        handleSearchInput();
    });
    document.getElementById('category-filter').addEventListener('change', applyFilters);
    document.getElementById('price-filter').addEventListener('change', applyFilters);
    document.getElementById('rating-filter').addEventListener('change', applyFilters);
    document.getElementById('sort-select').addEventListener('change', applyFilters);

    // Khởi tạo search enhancements
    initSearchEnhancements();
    const categoryList = document.getElementById('category-list');
    if (categoryList) {
        categoryList.addEventListener('click', onCategoryChipClick);
    }

    applyFilters();
});

/**
 * Áp dụng tất cả bộ lọc và render lại danh sách
 */
function applyFilters() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    const category = document.getElementById('category-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    const minRating = document.getElementById('rating-filter').value;
    const sortBy = document.getElementById('sort-select').value;

    let filteredBooks = [...books];

    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm)
        );
    }

    // Lọc theo thể loại
    if (category !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.category === category);
    }

    // Lọc theo khoảng giá
    if (priceRange !== 'all') {
        filteredBooks = filteredBooks.filter(book => {
            const price = book.price / 1000;
            switch (priceRange) {
                case 'under-100': return price < 100;
                case '100-200': return price >= 100 && price <= 200;
                case 'over-200': return price > 200;
                default: return true;
            }
        });
    }

    // Lọc theo rating
    if (minRating !== 'all') {
        filteredBooks = filteredBooks.filter(book =>
            book.rating && book.rating >= parseFloat(minRating)
        );
    }

    // Sắp xếp
    switch (sortBy) {
        case 'price-asc':
            filteredBooks.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredBooks.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredBooks.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
            break;
        case 'rating-desc':
            filteredBooks.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
        default:
            break;
    }

    renderBooks(filteredBooks);
    setActiveCategoryChip(category);
    updateCatalogSelection(category, filteredBooks.length);
}

/**
 * Render danh sách sách ra giao diện
 * @param {Array} bookList - Mảng sách cần hiển thị
 */
function renderBooks(bookList) {
    const bookGrid = document.getElementById('book-list');
    const noResults = document.getElementById('no-results');

    if (bookList.length === 0) {
        bookGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    // =============================================
    // BOOK CARD TEMPLATE - Khu vực dễ CONFLICT
    // Thay đổi layout card, thêm rating, thêm nút
    // =============================================
    bookGrid.innerHTML = bookList.map(book => `
        <div class="book-card">
            <a href="detail.html?id=${book.id}" class="book-cover">
                ${book.emoji || '📖'}
            </a>
            <div class="book-info">
                <span class="badge badge-${book.category}">${book.categoryName}</span>
                <h3 class="book-title">
                    <a href="detail.html?id=${book.id}">${book.title}</a>
                </h3>
                <p class="book-author">✍️ ${book.author}</p>
                <div class="book-rating">
                    ${renderStars(book.rating)}
                    <span class="rating-number">${book.rating || '0'}</span>
                </div>
                <p class="book-description">${book.description}</p>
                <div class="book-footer">
                    <span class="book-price">${formatPrice(book.price)}</span>
                    <button class="btn btn-primary btn-small" onclick="addToCart(${book.id})">
                        🛒 Thêm
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Format giá tiền theo định dạng Việt Nam
 * ⚠️  Hàm này dễ CONFLICT - format giá khác nhau
 * @param {number} price - Giá tiền
 * @returns {string} Giá đã format
 */
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

/**
 * Render danh sách category chip từ options hiện có trong dropdown
 */
function renderCategoryChips() {
    const categoryList = document.getElementById('category-list');
    const categoryFilter = document.getElementById('category-filter');

    if (!categoryList || !categoryFilter) {
        return;
    }

    const categoryCounts = books.reduce((accumulator, book) => {
        accumulator[book.category] = (accumulator[book.category] || 0) + 1;
        return accumulator;
    }, {});

    const options = Array.from(categoryFilter.options).map(option => ({
        value: option.value,
        label: option.textContent.trim()
    }));

    categoryList.innerHTML = options.map(option => {
        const count = option.value === 'all' ? books.length : (categoryCounts[option.value] || 0);

        return `
            <button type="button" class="category-chip" data-category="${option.value}">
                ${option.label}
                <span class="category-chip-count">${count}</span>
            </button>
        `;
    }).join('');
}

/**
 * Xử lý click vào category chip
 * @param {MouseEvent} event - Sự kiện click
 */
function onCategoryChipClick(event) {
    const categoryChip = event.target.closest('.category-chip');
    if (!categoryChip) {
        return;
    }

    const selectedCategory = categoryChip.dataset.category;
    const categoryFilter = document.getElementById('category-filter');

    if (!categoryFilter) {
        return;
    }

    categoryFilter.value = selectedCategory;
    applyFilters();
}

/**
 * Đồng bộ trạng thái active cho category chip
 * @param {string} category - Giá trị category đang được chọn
 */
function setActiveCategoryChip(category) {
    const categoryChips = document.querySelectorAll('.category-chip');
    categoryChips.forEach(chip => {
        chip.classList.toggle('active', chip.dataset.category === category);
    });
}

/**
 * Cập nhật dòng mô tả danh mục đang xem
 * @param {string} category - Giá trị category đang được chọn
 * @param {number} resultCount - Số sách sau khi lọc
 */
function updateCatalogSelection(category, resultCount) {
    const selectionElement = document.getElementById('catalog-selection');
    if (!selectionElement) {
        return;
    }

    const selectedOption = document.querySelector(`#category-filter option[value="${category}"]`);
    const selectedLabel = selectedOption ? selectedOption.textContent.trim() : 'Tất cả thể loại';

    selectionElement.textContent = `Đang xem: ${selectedLabel} (${resultCount} kết quả)`;
}

// =============================================
// SEARCH ENHANCEMENTS - Clear & Autocomplete
// =============================================

function initSearchEnhancements() {
    const searchClear = document.getElementById('search-clear');
    const searchSuggestions = document.getElementById('search-suggestions');

    // Xóa search khi click nút clear
    searchClear.addEventListener('click', function() {
        document.getElementById('search-input').value = '';
        searchClear.style.display = 'none';
        searchSuggestions.classList.remove('active');
        applyFilters();
    });

    // Click vào suggestion
    searchSuggestions.addEventListener('click', function(e) {
        const li = e.target.closest('li');
        if (li) {
            const bookId = li.dataset.id;
            window.location.href = `detail.html?id=${bookId}`;
        }
    });

    // Ẩn suggestions khi click ra ngoài
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-wrapper')) {
            searchSuggestions.classList.remove('active');
        }
    });
}

function handleSearchInput() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const query = searchInput.value;

    // Hiện/ẩn nút clear
    searchClear.style.display = query ? 'block' : 'none';

    // Hiện autocomplete suggestions
    showSuggestions(query);
}

function showSuggestions(query) {
    const searchSuggestions = document.getElementById('search-suggestions');

    if (!query.trim()) {
        searchSuggestions.classList.remove('active');
        return;
    }

    const matches = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    if (matches.length === 0) {
        searchSuggestions.classList.remove('active');
        return;
    }

    searchSuggestions.innerHTML = matches.map(book => `
        <li data-id="${book.id}">
            <div class="suggestion-title">${book.emoji} ${book.title}</div>
            <div class="suggestion-author">✍️ ${book.author}</div>
            <div class="suggestion-price">${formatPrice(book.price)}</div>
        </li>
    `).join('');

    searchSuggestions.classList.add('active');
}

// =============================================
// RATING STARS - Hiển thị sao đánh giá
// =============================================

/**
 * Render stars hiển thị đánh giá
 * @param {number} rating - Điểm đánh giá (0-5)
 * @returns {string} HTML chuỗi sao
 */
function renderStars(rating) {
    const maxStars = 5;
    const fullStars = Math.floor(rating || 0);
    const hasHalfStar = (rating || 0) % 1 >= 0.5;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star">★</span>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<span class="star star-half">★</span>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star star-empty">★</span>';
    }
    
    return starsHTML;
}

// =============================================
// 🔽 THÊM TÍNH NĂNG MỚI BÊN DƯỚI 🔽
// Ví dụ: pagination, rating, wishlist
// =============================================
