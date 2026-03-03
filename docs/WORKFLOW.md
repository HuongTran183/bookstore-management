# 🔄 Git Workflow - Hướng Dẫn Chi Tiết

## Sơ đồ Workflow

```
┌──────────────────────────────────────────────────────────────────┐
│                        GIT WORKFLOW                               │
│                                                                   │
│  main ─────────●──────────────────────────────●──── (stable)     │
│                │                              ▲                   │
│                │ create                  merge │ (PR + review)    │
│                ▼                              │                   │
│  develop ──────●────●────●────●────●─────────●──── (integration) │
│                     ▲    ▲    ▲    ▲                              │
│                     │    │    │    │  merge (PR)                  │
│                     │    │    │    │                               │
│  feature/A ─────────●    │    │    │                              │
│  feature/B ──────────────●    │    │                              │
│  feature/C ───────────────────●    │                              │
│  feature/D ────────────────────────●                              │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📖 Workflow từng bước (dùng GitHub Desktop)

### 🟢 Phase 1: Setup ban đầu (Team Lead làm)

```
1. Tạo repo trên GitHub
2. Push code ban đầu lên main
3. Tạo nhánh develop từ main
4. Set develop làm default branch
5. Mời thành viên vào repo (Collaborators)
6. Tạo branch protection rules (optional)
```

### 🔵 Phase 2: Mỗi thành viên bắt đầu làm việc

```
Bước 1: Clone repo
─────────────────
   GitHub Desktop → File → Clone Repository → Chọn repo → Clone

Bước 2: Chuyển sang develop
────────────────────────────
   Current Branch → develop → Pull origin

Bước 3: Tạo nhánh feature
──────────────────────────
   Current Branch → New Branch
   Name: feature/ten-tinh-nang
   Base: develop
   → Create branch

Bước 4: Code trong VS Code
───────────────────────────
   Repository → Open in Visual Studio Code
   Sửa code theo task được phân công

Bước 5: Commit changes
───────────────────────
   Quay lại GitHub Desktop
   ✓ Tick chọn file cần commit
   Summary: "feat: mô tả thay đổi"
   → Commit to feature/ten-tinh-nang

Bước 6: Push lên GitHub
────────────────────────
   → Publish branch (lần đầu)
   → Push origin (các lần sau)
```

### 🟡 Phase 3: Tạo Pull Request

```
Bước 7: Tạo PR trên GitHub
───────────────────────────
   Cách 1: GitHub Desktop → Branch → Create Pull Request
   Cách 2: GitHub.com → Pull Requests → New Pull Request

   Base: develop  ←  Compare: feature/ten-tinh-nang
   Title: "Feat: Mô tả tính năng"
   Description: Điền theo template
   Reviewers: Chọn 1-2 thành viên
   → Create Pull Request
```

### 🟠 Phase 4: Review và Merge

```
Bước 8: Review PR (Reviewer)
─────────────────────────────
   Vào PR → Tab "Files changed"
   Đọc code → Comment góp ý
   → Approve hoặc Request Changes

Bước 9: Merge PR
─────────────────
   Sau khi được approve:
   → Merge Pull Request
   → Confirm merge
   → Delete branch (cleanup)

Bước 10: Cập nhật local
────────────────────────
   GitHub Desktop:
   Current Branch → develop → Pull origin
```

---

## ⚔️ Xử lý Conflict (Chi tiết)

### Khi nào conflict xảy ra?

```
Timeline:
─────────────────────────────────────────────
TV1: checkout develop → feature/A → sửa data.js → PR → ✅ Merged!

TV2: checkout develop → feature/B → sửa data.js → PR → ❌ Conflict!
                                                         │
     Vì develop đã thay đổi data.js (từ PR của TV1)     │
     nhưng feature/B vẫn dựa trên develop CŨ            │
─────────────────────────────────────────────
```

### Cách xử lý trên GitHub Desktop

```
Bước 1: Pull develop mới nhất
──────────────────────────────
   Current Branch → develop → Pull origin

Bước 2: Merge develop vào feature
──────────────────────────────────
   Current Branch → feature/ten-tinh-nang
   Menu Branch → Merge into current branch → chọn develop

   ⚠️ "There are X conflicted files"

Bước 3: Mở VS Code xử lý conflict
───────────────────────────────────
   Click "Open in Visual Studio Code"

   Bạn sẽ thấy:
   ┌─────────────────────────────┐
   │ <<<<<<< HEAD                │  ← Code của bạn (feature branch)
   │     your code here          │
   │ =======                     │  ← Ranh giới
   │     their code here         │
   │ >>>>>>> develop             │  ← Code từ develop
   └─────────────────────────────┘

   VS Code hiện các nút:
   • Accept Current Change (giữ code của bạn)
   • Accept Incoming Change (giữ code từ develop)
   • Accept Both Changes (giữ cả hai)
   • Compare Changes (so sánh)

Bước 4: Sửa code cho đúng
──────────────────────────
   - Xóa tất cả conflict markers
   - Đảm bảo code hoạt động đúng
   - Test trên trình duyệt

Bước 5: Commit merge
─────────────────────
   Quay lại GitHub Desktop
   Summary: "fix: resolve merge conflict in data.js"
   → Continue merge → Push origin
```

---

## 📞 Tình huống thường gặp

### Q: "Tôi commit nhầm message rồi!"

```bash
git commit --amend -m "feat: message mới"
# Hoặc GitHub Desktop: Undo (Ctrl+Z) → Commit lại
```

### Q: "Tôi commit nhầm file!"

```bash
git reset HEAD~1           # Undo commit, giữ changes
# Hoặc GitHub Desktop: History → Right click commit → Undo
```

### Q: "Tôi tạo nhầm nhánh từ main thay vì develop!"

```bash
git checkout develop
git checkout -b feature/correct-branch
# Copy changes từ nhánh cũ
```

### Q: "Ai đó đã push lên develop, tôi push không được!"

```bash
git pull origin develop --rebase
# Hoặc: git pull origin develop (merge)
```

### Q: "Tôi muốn xem ai đã sửa dòng code này!"

```bash
git blame filename.js
# GitHub: Mở file → Click "Blame" button
```

---

## 🏷️ Quy ước đặt tên

### Branch names

```
feature/add-books          ✅ Rõ ràng
feature/fix-cart-bug       ✅ Có context
my-branch                  ❌ Không theo format
test123                    ❌ Không có ý nghĩa
```

### Commit messages

```
feat: thêm 3 cuốn sách mới          ✅ Rõ ràng
fix: sửa lỗi tính tổng giỏ hàng     ✅ Có context
style: đổi font chữ header           ✅ Đúng type
update code                          ❌ Quá chung chung
fix bug                              ❌ Bug gì?
asdfgh                               ❌ TUYỆT ĐỐI KHÔNG
```
