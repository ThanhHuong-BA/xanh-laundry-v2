// Cover images are hot-linked from xanhlaundry.com; they disappear if the blog moves or deletes them.
const posts = [
  {
    url: "https://xanhlaundry.com/blog/nhuong-quyen-giat-say/",
    img: "https://xanhlaundry.com/blog/wp-content/uploads/2026/10/nhuong-quyen-giat-say-xanh-laundry-1024x681.jpg",
    title: "Nhượng quyền giặt sấy 2026: Chi phí thật, lợi nhuận và cách chọn thương hiệu",
    excerpt:
      "Bóc tách từng khoản vốn, kể cả phí hằng tháng, bảng lỗ lãi mẫu, thời gian hoàn vốn và 12 câu hỏi nên hỏi trước khi ký.",
  },
  {
    url: "https://xanhlaundry.com/blog/nhuong-quyen-giat-ui/",
    img: "https://xanhlaundry.com/blog/wp-content/uploads/2026/10/nhuong-quyen-giat-ui-xanh-laundry-3-1024x683.jpg",
    title: "Nhượng quyền giặt ủi 2026: Mô hình tiệm 6 dịch vụ, chi phí và cách vận hành",
    excerpt: "6 nguồn doanh thu của một tiệm 25–40m², thiết bị cho từng dịch vụ và cách vận hành với 1 nhân viên mỗi ca.",
  },
];

export function Blog() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="text-center mb-10 flex flex-col items-center gap-3">
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
            Tìm hiểu thêm về mô hình Xanh Laundry
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Các bài viết chi tiết từ đội ngũ sáng lập XANH LAUNDRY về chi phí, lợi nhuận và cách vận hành một tiệm giặt
            nhượng quyền.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {posts.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow text-foreground"
            >
              <div className="aspect-[16/9] bg-xanh-light-gray overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-display font-bold text-lg md:text-xl leading-snug">{p.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <span className="mt-auto pt-2 font-display font-bold text-sm text-primary">Đọc bài viết →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
