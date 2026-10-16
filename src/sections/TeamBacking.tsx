import { img } from "../lib";

const founders = [
  {
    name: "Lê Phước Phúc",
    role: "Co-Founder & CEO Xanh Laundry",
    img: "founder-phuc.jpg",
    bio: "Kỹ sư công nghệ Đại học Bách Khoa, cựu Giám đốc sản phẩm Chợ Tốt, cựu Giám đốc chuyển đổi số Home Credit Vietnam. Đồng sáng lập HERAMO — thương hiệu số 1 ngành giặt ủi cao cấp tại HCM.",
  },
  {
    name: "Huỳnh Nhật Phương",
    role: "Co-Founder & COO Xanh Laundry",
    img: "founder-phuong.jpg",
    bio: "MBA — Đại học Kinh tế HCM & Viện ISB. Cựu quản lý nhà hàng 5 sao thuộc Park Hyatt Saigon. Đồng sáng lập HERAMO — thương hiệu số 1 ngành giặt ủi cao cấp tại HCM.",
  },
];

const intro =
  "Đội ngũ sáng lập với 10 năm kinh nghiệm xây dựng, kinh doanh, vận hành và mở rộng trong ngành giặt ủi cao cấp với đa dịch vụ (giặt ủi hằng ngày, giặt hấp đồ hiệu, vệ sinh spa phục hồi giày, túi xách, vệ sinh sofa nệm rèm thảm & máy lạnh), phục vụ 162.000+ khách hàng, vận hành 10+ cửa hàng có lợi nhuận tại TP.HCM.";

const photos = ["opening-298-thanh-cong.jpg", "team-2.webp"];

export function TeamBacking() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            Đội ngũ <span className="gradient-text">sáng lập</span>
          </h2>
          <p className="text-base text-xanh-body leading-relaxed max-w-3xl mx-auto">{intro}</p>
        </div>

        <div className="space-y-10 md:space-y-14">
          {founders.map((f) => (
            <div key={f.name}>
              {/* Mobile: avatar + name row, bio below */}
              <div className="md:hidden">
                <div className="flex items-start gap-4 mb-3">
                  <div className="relative shrink-0 w-24 h-24">
                    <div className="absolute inset-0 gradient-bg rounded-xl translate-x-[5px] translate-y-[5px]" />
                    <img src={img(f.img)} alt={f.name} className="relative w-full h-full object-cover object-top rounded-xl shadow-md" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-extrabold text-lg text-foreground leading-tight">{f.name}</div>
                    <div className="text-xs font-semibold gradient-text mt-1 leading-snug">{f.role}</div>
                  </div>
                </div>
                <p className="text-sm text-xanh-body leading-relaxed border-l-4 pl-4 border-gradient-y">{f.bio}</p>
              </div>

              {/* Desktop: portrait in 3 cols, text in 9 cols */}
              <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-3">
                  <div className="relative mx-auto max-w-[180px]">
                    <div className="absolute inset-0 gradient-bg rounded-2xl translate-x-2 translate-y-2" />
                    <img
                      src={img(f.img)}
                      alt={f.name}
                      className="relative w-full aspect-square object-cover object-top rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                <div className="md:col-span-9">
                  <div className="font-display font-extrabold text-xl md:text-2xl text-foreground leading-tight mb-1">{f.name}</div>
                  <div className="font-display font-bold text-sm gradient-text mb-5">{f.role}</div>
                  <p className="text-base text-xanh-body leading-relaxed border-l-4 pl-5 border-gradient-y">{f.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left edge aligns with the founder portraits above (col-span-3 of a 12-col grid with 32px gaps, 180px image centered). */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 md:mt-16"
          style={{ marginLeft: "max(0px, calc(((100% - 352px) / 4 - 116px) / 2))" }}
        >
          {photos.map((src, i) => (
            <div key={src} className="aspect-[16/10] rounded-2xl overflow-hidden bg-xanh-light-gray border border-border shadow-md">
              <img src={img(src)} alt={`Đội ngũ Xanh Laundry ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
