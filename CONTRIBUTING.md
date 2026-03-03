# 🤝 Hướng Dẫn Đóng Góp (Contributing Guide)

Cảm ơn bạn đã tham gia dự án BookStore! Đây là hướng dẫn chi tiết để đóng góp code theo workflow chuẩn.

---

## 📋 Quy trình đóng góp (Step by Step)

### Bước 1: Cập nhật code mới nhất

```bash
# Chuyển sang nhánh develop
git checkout develop

# Pull code mới nhất
git pull origin develop
```

**GitHub Desktop:**

1. Click **Current Branch** → chọn `develop`
2. Click **Fetch origin** → **Pull origin**

---

### Bước 2: Tạo nhánh feature mới

```bash
# Tạo nhánh mới từ develop
git checkout -b feature/ten-tinh-nang
```

**GitHub Desktop:**

1. Click **Current Branch** → **New Branch**
2. Gõ `feature/ten-tinh-nang`
3. Chọn base branch: `develop`

**Quy tắc đặt tên nhánh:**

- `feature/add-books-member1` — Thêm sách
- `feature/search-filter` — Tính năng search
- `feature/cart-discount` — Mã giảm giá
- `feature/ui-header` — Sửa giao diện header

---

### Bước 3: Code & Commit

Sửa code theo task được phân công, sau đó commit:

```bash
git add .
git commit -m "feat: thêm 3 cuốn sách về AI"
```

**GitHub Desktop:**

1. Tick chọn files đã thay đổi (bảng bên trái)
2. Gõ **Summary**: `feat: thêm 3 cuốn sách về AI`
3. Click **Commit to feature/ten-tinh-nang**

**⚠️ Lưu ý commit:**

- Mỗi commit chỉ nên làm **MỘT việc** rõ ràng
- KHÔNG commit file rác (`.DS_Store`, `node_modules`, `Thumbs.db`)
- Viết commit message bằng tiếng Việt hoặc tiếng Anh, format: `type: mô tả`

---

### Bước 4: Push lên GitHub

```bash
git push origin feature/ten-tinh-nang
```

**GitHub Desktop:**

1. Click **Publish branch** (lần đầu) hoặc **Push origin**

---

### Bước 5: Tạo Pull Request

1. Vào repository trên GitHub
2. Bạn sẽ thấy banner **"Compare & pull request"** → Click vào
3. Hoặc: Tab **Pull Requests** → **New Pull Request**

**Cài đặt PR:**

- **Base**: `develop` ← **Compare**: `feature/ten-tinh-nang`
- **Title**: Mô tả ngắn gọn (vd: `Thêm 3 cuốn sách thể loại AI`)
- **Description**: Điền theo template
- **Reviewers**: Tag 1-2 thành viên khác
- **Labels**: `feature`, `enhancement`, etc.

---

### Bước 6: Review & Merge

1. Reviewer đọc code, comment góp ý
2. Nếu cần sửa → sửa code, commit, push (PR tự cập nhật)
3. Khi được approve → **Merge Pull Request**
4. Xóa nhánh feature sau khi merge

---

## 🔄 Cập nhật nhánh feature với develop

Nếu `develop` có code mới trong khi bạn đang làm feature:

```bash
# Đang ở nhánh feature
git checkout develop
git pull origin develop
git checkout feature/ten-tinh-nang
git merge develop
# Giải quyết conflict nếu có
git push origin feature/ten-tinh-nang
```

**GitHub Desktop:**

1. Switch sang `develop` → **Pull origin**
2. Switch lại `feature/ten-tinh-nang`
3. Menu **Branch** → **Merge into current branch** → chọn `develop`
4. Giải quyết conflict nếu có (VS Code sẽ mở)
5. **Push origin**

---

## ⚔️ Xử lý Merge Conflict

### Conflict trông như thế nào?

```javascript
const books = [
<<<<<<< HEAD
    { id: 9, title: "Sách của bạn", price: 100000 },
=======
    { id: 9, title: "Sách của người khác", price: 200000 },
>>>>>>> develop
];
```

### Cách giải quyết

1. **Đọc kỹ cả 2 phần** code (trước và sau `=======`)
2. **Quyết định giữ gì**: Giữ code mình? Code người khác? Hay cả hai?
3. **Xóa các marker** (`<<<<<<<`, `=======`, `>>>>>>>`)
4. **Sửa code** cho đúng logic (vd: đổi ID để không trùng)
5. **Test** lại trên trình duyệt
6. **Commit** kết quả

### Ví dụ sau khi resolve:

```javascript
const books = [
  { id: 9, title: "Sách của bạn", price: 100000 },
  { id: 10, title: "Sách của người khác", price: 200000 },
];
```

---

## ✅ Checklist trước khi tạo PR

- [ ] Code chạy không lỗi trên trình duyệt
- [ ] Đúng theo task được phân công
- [ ] Commit message rõ ràng, đúng format
- [ ] Không commit file rác
- [ ] Đã pull mới nhất từ `develop`
- [ ] Đã tự test các tính năng liên quan

---

## 📏 Code Style

- **Indent**: 4 spaces (không dùng tab)
- **Dấu nháy**: Dùng nháy đơn `'` cho JS string
- **Tiếng Việt**: Có dấu đầy đủ trong comment và text hiển thị
- **Comment**: Giải thích logic phức tạp, đánh dấu khu vực code

---

## ❓ Gặp vấn đề?

1. Đọc lại hướng dẫn trong [docs/WORKFLOW.md](docs/WORKFLOW.md)
2. Hỏi trong group chat
3. Tag Team Lead trong issue/PR
4. Google error message 😄
