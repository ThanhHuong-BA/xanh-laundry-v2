import { img } from "../lib";
import { Grad, SectionTitle } from "../components/SectionTitle";

const personas = [
  {
    img: "persona-office.jpg",
    title: "Nhân viên văn phòng",
    desc: "Có từ 200 triệu tiền nhàn rỗi, muốn nguồn thu nhập thêm bền vững. Không cần nghỉ việc - quản lý từ xa qua TinyClean.",
  },
  {
    img: "persona-property.jpg",
    title: "Chủ mặt bằng",
    desc: "Có mặt bằng tầng trệt 15–25m² đang trống hoặc cho thuê giá thấp. Mở XANH LAUNDRY để tận dụng diện tích, tăng dòng tiền thu.",
  },
  {
    img: "persona-startup.jpg",
    title: "Người mới khởi nghiệp",
    desc: "Lần đầu kinh doanh, cần mô hình có quy trình sẵn, đào tạo bài bản, rủi ro thấp, thị trường sẵn có.",
  },
  {
    img: "persona-investor.jpg",
    title: "Nhà đầu tư có kinh nghiệm",
    desc: "Muốn mở rộng danh mục đầu tư với mô hình vận hành tinh gọn, không cần quản lý trực tiếp, phục vụ thị trường dịch vụ cơ bản có nhu cầu bền vững.",
  },
];

export function WhoIsItFor() {
  return (
    <section className="py-20 bg-xanh-light-gray">
      <div className="container">
        <SectionTitle sub="Không cần kinh nghiệm ngành giặt ủi">
          Ai nên đầu tư <Grad>XANH LAUNDRY</Grad>?
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p) => (
            <div key={p.title} className="xanh-card xanh-card-hover p-6 text-center transition-all duration-300">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary">
                <img src={img(p.img)} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-xanh-body leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
