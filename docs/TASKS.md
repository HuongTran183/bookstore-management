# 📋 Bảng Phân Công Nhiệm Vụ

> Mỗi thành viên nhận 1 task chính. Các task được thiết kế để **chắc chắn conflict** ở một số file,
> giúp mọi người có cơ hội luyện merge conflict.

---

## 🎯 Task tổng quan

| Task                            | Thành viên | Branch                      | Độ khó | Conflict với                                |
| ------------------------------- | ---------- | --------------------------- | ------ | ------------------------------------------- |
| Task 1: Thêm sách mới           | TV1        | `feature/add-books-member1` | ⭐     | Task 2 (cùng sửa `data.js`)                 |
| Task 2: Thêm sách mới           | TV2        | `feature/add-books-member2` | ⭐     | Task 1 (cùng sửa `data.js`)                 |
| Task 3: Cải thiện UI            | TV3        | `feature/ui-improvements`   | ⭐⭐   | Task 4 (cùng sửa `style.css`, `index.html`) |
| Task 4: Tính năng Search/Filter | TV4        | `feature/search-filter`     | ⭐⭐   | Task 3 (cùng sửa `index.html`, `app.js`)    |

---

## 📝 Chi tiết từng Task

### Task 1: Thêm sách mới (Thành viên 1)

**Branch:** `feature/add-books-member1`

**Việc cần làm:**

1. Mở file `js/data.js`
2. Thêm **3 cuốn sách mới** vào mảng `books` (ID: 9, 10, 11)
3. Chọn thể loại: `programming` hoặc `science`
4. Thêm emoji phù hợp cho mỗi cuốn

**Gợi ý sách:**

- "The Pragmatic Programmer" - David Thomas
- "Design Patterns" - Gang of Four
- "Cosmos" - Carl Sagan

**Commits mẫu:**

```
feat: thêm sách "The Pragmatic Programmer"
feat: thêm sách "Design Patterns"
feat: thêm sách "Cosmos"
```

**⚠️ Conflict dự kiến:** File `js/data.js` sẽ conflict với Task 2 vì cả hai đều thêm sách cùng vị trí.

---

### Task 2: Thêm sách mới (Thành viên 2)

**Branch:** `feature/add-books-member2`

**Việc cần làm:**

1. Mở file `js/data.js`
2. Thêm **3 cuốn sách mới** vào mảng `books` (ID: 9, 10, 11)
3. Chọn thể loại: `literature` hoặc `business`
4. Thêm emoji phù hợp cho mỗi cuốn

**Gợi ý sách:**

- "Tuổi Trẻ Đáng Giá Bao Nhiêu" - Rosie Nguyễn
- "Tư Duy Nhanh Và Chậm" - Daniel Kahneman
- "Đời Ngắn Đừng Ngủ Dài" - Robin Sharma

**Commits mẫu:**

```
feat: thêm sách "Tuổi Trẻ Đáng Giá Bao Nhiêu"
feat: thêm sách "Tư Duy Nhanh Và Chậm"
feat: thêm sách "Đời Ngắn Đừng Ngủ Dài"
```

**⚠️ Conflict dự kiến:** File `js/data.js` sẽ conflict với Task 1 vì cùng dùng ID 9, 10, 11.

---

### Task 3: Cải thiện UI (Thành viên 3)

**Branch:** `feature/ui-improvements`

**Việc cần làm:**

1. **Đổi màu header** trong `css/style.css`:
   - Đổi `.header` background từ `#2c3e50` sang màu khác (vd: `#1a1a2e`)
   - Đổi gradient của `.hero` section

2. **Thêm social links** vào footer trong `index.html`:

   ```html
   <div class="footer-section">
     <h3>Mạng xã hội</h3>
     <ul>
       <li><a href="#">Facebook</a></li>
       <li><a href="#">Instagram</a></li>
     </ul>
   </div>
   ```

3. **Thêm hover effect** cho book card trong `css/style.css`:
   - Thêm border-left color khi hover
   - Đổi transition timing

**Commits mẫu:**

```
style: đổi màu header sang dark theme
feat: thêm social links vào footer
style: thêm hover effect cho book card
```

**⚠️ Conflict dự kiến:** File `css/style.css` và `index.html` sẽ conflict với Task 4.

---

### Task 4: Tính năng Search/Filter (Thành viên 4)

**Branch:** `feature/search-filter`

**Việc cần làm:**

1. **Thêm filter theo giá** trong `index.html`:

   ```html
   <select id="price-filter" class="filter-select">
     <option value="all">Tất cả giá</option>
     <option value="under-100">Dưới 100.000đ</option>
     <option value="100-200">100.000 - 200.000đ</option>
     <option value="over-200">Trên 200.000đ</option>
   </select>
   ```

2. **Cập nhật logic filter** trong `js/app.js`:
   - Thêm event listener cho `price-filter`
   - Thêm logic lọc theo khoảng giá vào hàm `applyFilters()`

3. **Style cho filter mới** trong `css/style.css`:
   - Thêm style riêng nếu cần

**Commits mẫu:**

```
feat: thêm dropdown filter theo giá
feat: implement logic lọc theo khoảng giá
style: thêm style cho price filter
```

**⚠️ Conflict dự kiến:** File `index.html`, `js/app.js`, `css/style.css` sẽ conflict với Task 3.

---

## 🔄 Thứ tự merge khuyến nghị

```
1. Task 1 (add-books-member1)  → merge vào develop (sạch, không conflict)
2. Task 2 (add-books-member2)  → merge vào develop (CONFLICT ở data.js → fix ID)
3. Task 3 (ui-improvements)    → merge vào develop (sạch hoặc conflict nhẹ)
4. Task 4 (search-filter)      → merge vào develop (CONFLICT ở index.html, app.js)
```

> **Lưu ý:** Sau khi merge xong tất cả vào `develop`, Team Lead sẽ tạo PR merge `develop` → `main`.

---

## ✅ Definition of Done

Mỗi task được coi là **hoàn thành** khi:

- [ ] Code chạy không lỗi trên trình duyệt
- [ ] Tạo PR đúng format
- [ ] Ít nhất 1 người review và approve
- [ ] Merge thành công vào `develop`
- [ ] Conflict (nếu có) được resolve đúng
