# 📚 BookStore - Website Bán Sách Online

> **Dự án thực hành Git/GitHub** cho nhóm sinh viên.
> Mục tiêu: Làm quen với Git workflow chuẩn, Pull Request, và xử lý merge conflict.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🌐 Demo

Mở file `index.html` trực tiếp bằng trình duyệt (không cần server).

## 📂 Cấu trúc project

```
bookstore-management/
├── index.html              # Trang chủ - danh sách sách
├── detail.html             # Trang chi tiết sách
├── cart.html               # Trang giỏ hàng
├── css/
│   └── style.css           # Stylesheet chính ⚠️ DỄ CONFLICT
├── js/
│   ├── data.js             # Dữ liệu sách   ⚠️ DỄ CONFLICT NHẤT
│   ├── cart.js             # Module giỏ hàng
│   └── app.js              # Logic trang chủ  ⚠️ DỄ CONFLICT
├── images/                 # Thư mục ảnh
├── docs/
│   ├── TASKS.md            # Bảng phân công nhiệm vụ
│   └── WORKFLOW.md         # Hướng dẫn Git workflow chi tiết
├── .github/
│   └── pull_request_template.md
├── CONTRIBUTING.md         # Hướng dẫn đóng góp
├── .gitignore
└── README.md               # File này
```

---

## 🚀 Bắt đầu nhanh

### 1. Clone repository

```bash
# Dùng terminal
git clone <your-repo-url>
cd bookstore-management

# Hoặc dùng GitHub Desktop: File > Clone Repository
```

### 2. Chuyển sang nhánh develop

```bash
git checkout develop

# GitHub Desktop: Current Branch > develop
```

### 3. Tạo nhánh feature mới

```bash
git checkout -b feature/ten-tinh-nang

# GitHub Desktop: Current Branch > New Branch > feature/ten-tinh-nang
```

### 4. Code, commit, push

```bash
git add .
git commit -m "feat: mô tả thay đổi"
git push origin feature/ten-tinh-nang
```

### 5. Tạo Pull Request

- Vào GitHub > Pull Requests > New Pull Request
- Base: `develop` ← Compare: `feature/ten-tinh-nang`
- Điền mô tả theo template
- Assign reviewer

---

## 🌿 Git Branch Strategy

```
main          ← Code ổn định, đã review
  └── develop     ← Nhánh tích hợp, merge features vào đây
        ├── feature/add-books-member1
        ├── feature/search-filter
        ├── feature/cart-discount
        └── feature/ui-improvements
```

| Nhánh       | Mục đích              | Ai merge?                  |
| ----------- | --------------------- | -------------------------- |
| `main`      | Production-ready code | Team Lead (sau khi review) |
| `develop`   | Integration branch    | Qua Pull Request           |
| `feature/*` | Tính năng mới         | Mỗi thành viên tự tạo      |

---

## 📝 Quy ước Commit Message

Sử dụng format: `<type>: <mô tả ngắn>`

| Type       | Ý nghĩa            | Ví dụ                              |
| ---------- | ------------------ | ---------------------------------- |
| `feat`     | Tính năng mới      | `feat: thêm 3 cuốn sách IT`        |
| `fix`      | Sửa lỗi            | `fix: sửa lỗi tính tổng giỏ hàng`  |
| `style`    | Thay đổi giao diện | `style: đổi màu header thành xanh` |
| `docs`     | Cập nhật tài liệu  | `docs: thêm hướng dẫn cài đặt`     |
| `refactor` | Cải thiện code     | `refactor: tách hàm renderBooks`   |

---

## ⚔️ Khu vực dễ Conflict (Cố ý!)

Các file sau được thiết kế để **dễ xảy ra conflict** khi merge, giúp các bạn luyện tập:

| File            | Lý do dễ conflict                            |
| --------------- | -------------------------------------------- |
| `js/data.js`    | **Nhiều người cùng thêm sách** vào cùng mảng |
| `css/style.css` | **Cùng sửa màu sắc**, font, layout           |
| `js/app.js`     | **Cùng sửa hàm `renderBooks`**, thêm filter  |
| `index.html`    | **Cùng sửa header, footer, filter bar**      |

### 🛠️ Cách xử lý Conflict

```
<<<<<<< HEAD (your changes)
    code của bạn ở đây
=======
    code của người khác ở đây
>>>>>>> feature/other-branch
```

1. Mở file conflict trong VS Code
2. Chọn: **Accept Current** / **Accept Incoming** / **Accept Both**
3. Sửa code cho đúng logic
4. `git add .` → `git commit -m "fix: resolve merge conflict"`

---

## 👥 Thành viên nhóm

| STT | Họ tên    | GitHub        | Feature phụ trách           |
| --- | --------- | ------------- | --------------------------- |
| 1   | (Tên TV1) | @github_user1 | `feature/add-books-member1` |
| 2   | (Tên TV2) | @github_user2 | `feature/search-filter`     |
| 3   | (Tên TV3) | @github_user3 | `feature/cart-discount`     |
| 4   | (Tên TV4) | @github_user4 | `feature/ui-improvements`   |

---

## 📖 Tài liệu thêm

- [CONTRIBUTING.md](CONTRIBUTING.md) - Hướng dẫn chi tiết cách đóng góp
- [docs/TASKS.md](docs/TASKS.md) - Bảng phân công nhiệm vụ cụ thể
- [docs/WORKFLOW.md](docs/WORKFLOW.md) - Hướng dẫn Git workflow kèm sơ đồ

---

## 📜 License

Dự án demo phục vụ mục đích học tập. Free to use! 🎓
