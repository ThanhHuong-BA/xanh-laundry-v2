import { Ban } from "lucide-react";
import { CtaButton } from "../components/CtaButton";
import { Grad, SectionTitle } from "../components/SectionTitle";

const guarantees = [
  {
    title: "KHÔNG phí nhượng quyền theo năm",
    desc: "Trả 30 triệu một lần - sử dụng thương hiệu nhượng quyền vĩnh viễn. Không thu phí theo năm.",
  },
  {
    title: 'KHÔNG "đem con bỏ chợ"',
    desc: "Đồng hành hỗ trợ nhanh chóng trọn đời cho mọi khía cạnh vận hành, kinh doanh và quản lý.",
  },
  {
    title: "KHÔNG mở dày đặc",
    desc: "Cam kết khoảng cách tối thiểu, không mở cửa hàng dày đặc gây cạnh tranh nội bộ và giảm hiệu quả kinh doanh.",
  },
];

export function TripleNo() {
  return (
    <section className="py-20 bg-xanh-navy">
      <div className="container">
        <SectionTitle light>
          Cam kết <Grad>TRỌN ĐỜI</Grad>
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {guarantees.map((g) => (
            <div key={g.title} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <Ban className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{g.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
