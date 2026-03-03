/* =============================================
   BOOK DATA - DỮ LIỆU SÁCH
   =============================================
   ⚠️  FILE DỄ CONFLICT NHẤT!
   Mỗi thành viên sẽ thêm sách vào đây.
   Khi merge, chú ý thứ tự ID và format.
   ============================================= */

const books = [
    // ===== SÁCH LẬP TRÌNH =====
    {
        id: 1,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        price: 185000,
        category: "programming",
        categoryName: "Lập trình",
        emoji: "💛",
        description: "Cuốn sách kinh điển giúp bạn hiểu sâu về JavaScript, tập trung vào những phần tinh hoa nhất của ngôn ngữ.",
        rating: 4.5
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 320000,
        category: "programming",
        categoryName: "Lập trình",
        emoji: "🧹",
        description: "Hướng dẫn viết code sạch, dễ đọc và dễ bảo trì. Cuốn sách mọi lập trình viên nên đọc.",
        rating: 4.8
    },
    {
        id: 3,
        title: "Python Crash Course",
        author: "Eric Matthes",
        price: 275000,
        category: "programming",
        categoryName: "Lập trình",
        emoji: "🐍",
        description: "Nhập môn Python từ cơ bản đến nâng cao, kèm theo các dự án thực hành thú vị.",
        rating: 4.3
    },

    // ===== SÁCH KHOA HỌC =====
    {
        id: 4,
        title: "Lược Sử Thời Gian",
        author: "Stephen Hawking",
        price: 150000,
        category: "science",
        categoryName: "Khoa học",
        emoji: "🕐",
        description: "Cuốn sách kinh điển về vũ trụ học, từ Big Bang đến hố đen, được viết dễ hiểu cho mọi người.",
        rating: 4.7
    },
    {
        id: 5,
        title: "Sapiens: Lược Sử Loài Người",
        author: "Yuval Noah Harari",
        price: 199000,
        category: "science",
        categoryName: "Khoa học",
        emoji: "🌍",
        description: "Hành trình 70.000 năm của loài người từ thời kỳ đồ đá đến kỷ nguyên công nghệ.",
        rating: 4.9
    },

    // ===== SÁCH VĂN HỌC =====
    {
        id: 6,
        title: "Nhà Giả Kim",
        author: "Paulo Coelho",
        price: 79000,
        category: "literature",
        categoryName: "Văn học",
        emoji: "✨",
        description: "Câu chuyện về chàng chăn cừu Santiago và hành trình đi tìm kho báu, cũng là hành trình tìm kiếm ước mơ.",
        rating: 4.6
    },
    {
        id: 7,
        title: "Đắc Nhân Tâm",
        author: "Dale Carnegie",
        price: 86000,
        category: "literature",
        categoryName: "Văn học",
        emoji: "🤝",
        description: "Cuốn sách kinh điển về nghệ thuật giao tiếp và ứng xử, bán hơn 30 triệu bản trên toàn thế giới.",
        rating: 4.4
    },

    // ===== SÁCH KINH DOANH =====
    {
        id: 8,
        title: "Khởi Nghiệp Tinh Gọn",
        author: "Eric Ries",
        price: 169000,
        category: "business",
        categoryName: "Kinh doanh",
        emoji: "🚀",
        description: "Phương pháp khởi nghiệp hiện đại, xây dựng sản phẩm nhanh, đo lường và học hỏi liên tục.",
        rating: 4.2
    },

    // ==============================================
    // 🔽 THÊM SÁCH MỚI BÊN DƯỚI DÒNG NÀY 🔽
    // Mỗi thành viên thêm 2-3 cuốn sách
    // ID tiếp theo: 9
    // Format:
    // {
    //     id: 9,
    //     title: "Tên sách",
    //     author: "Tác giả",
    //     price: 100000,
    //     category: "programming|science|literature|business",
    //     categoryName: "Tên thể loại tiếng Việt",
    //     emoji: "📖",
    //     description: "Mô tả ngắn về cuốn sách"
    // },
    // ==============================================
];
