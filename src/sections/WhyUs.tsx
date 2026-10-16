import { img } from "../lib";

const cards = [
  {
    img: "why-1.webp",
    title: "Vốn đầu tư tốt nhất thị trường",
    desc: "Chỉ từ 150 triệu trọn gói, tốt nhất thị trường - bao gồm phí nhượng quyền vĩnh viễn, thiết bị, cải tạo. Thu hồi vốn sau 12-18 tháng.",
  },
  {
    img: "why-2.webp",
    title: "Công nghệ quản lý trọn gói",
    desc: "Nền tảng quản lý chuyên biệt cho cửa hàng giặt ủi duy nhất trên thị trường, xây dựng từ kinh nghiệm 9 năm vận hành hàng chục cửa hàng có lợi nhuận.",
  },
  {
    img: "why-3.webp",
    title: "Đào tạo bài bản A-Z",
    desc: "Đào tạo chuẩn chỉnh tất cả kiến thức, kinh nghiệm liên quan để có thể khởi sự, tiếp thị, vận hành, quản lý và thu lợi nhuận với cửa hàng giặt ủi.",
  },
  {
    img: "why-4.webp",
    title: "Cam kết trọn đời",
    desc: 'Phí nhượng quyền vĩnh viễn. Đồng hành hỗ trợ nhanh chóng trọn đời - không setup bán máy và sau đó "mất hút" như nhiều thương hiệu khác.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-xanh-light-gray">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Vì sao nên chọn <span className="gradient-text">XANH LAUNDRY</span>?
          </h2>
          <p className="text-xanh-body max-w-2xl mx-auto">
            Mô hình nhượng quyền giặt sấy thông minh với chi phí thấp nhất, công nghệ tốt nhất
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="xanh-card xanh-card-hover overflow-hidden transition-all duration-300 cursor-default">
              <div
                role="img"
                aria-label={c.title}
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url('${img(c.img)}')` }}
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-xanh-body leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
