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
    // THÊM SÁCH MỚI - ID: 9-14
    // ==============================================
    {
        id: 9,
        title: "Design Patterns",
        author: "Gang of Four",
        price: 285000,
        category: "programming",
        categoryName: "Lập trình",
        emoji: "🎨",
        description: "Cuốn sách kinh điển về các mẫu thiết kế phần mềm, giải quyết các vấn đề thiết kế hướng đối tượng.",
        rating: 4.7
    },
    {
        id: 10,
        title: "Head First HTML",
        author: "Elisabeth Robson",
        price: 195000,
        category: "programming",
        categoryName: "Lập trình",
        emoji: "🌐",
        description: "Hướng dẫn học HTML theo phương pháp trực quan, dễ hiểu cho người mới bắt đầu.",
        rating: 4.4
    },
    {
        id: 11,
        title: "Vũ Trụ Trong Vỏ Hạt",
        author: "Stephen Hawking",
        price: 180000,
        category: "science",
        categoryName: "Khoa học",
        emoji: "🌌",
        description: "Khám phá những bí ẩn của vũ trụ từ lượng tử đến siêu hấp dẫn, viết dễ hiểu cho mọi người.",
        rating: 4.8
    },
    {
        id: 12,
        title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        author: "Nguyễn Nhật Ánh",
        price: 95000,
        category: "literature",
        categoryName: "Văn học",
        emoji: "🌻",
        description: "Câu chuyện tuổi thơ về tình bạn, tình yêu và những ký ức đẹp đẽ trong làng quê Việt Nam.",
        rating: 4.9
    },
    {
        id: 13,
        title: "Nhà Lãnh Đạo Không Chức Danh",
        author: "Robin Sharma",
        price: 145000,
        category: "business",
        categoryName: "Kinh doanh",
        emoji: "👔",
        description: "Học cách trở thành nhà lãnh đạo tự nhiên, gây ảnh hưởng mà không cần chức vị formal.",
        rating: 4.5
    },
    {
        id: 14,
        title: "The Lean Startup",
        author: "Eric Ries",
        price: 220000,
        category: "business",
        categoryName: "Kinh doanh",
        emoji: "💡",
        description: "Phương pháp khởi nghiệp tinh gọn giúp xây dựng doanh nghiệp thành công nhanh chóng.",
        rating: 4.6
    }
    // ==============================================
];
