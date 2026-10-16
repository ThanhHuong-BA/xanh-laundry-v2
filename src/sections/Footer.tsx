import { Mail, MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, ZALO_URL, img } from "../lib";
import { FacebookIcon } from "../components/FacebookIcon";

const ecosystem = [
  { name: "HERAMO", desc: "Dịch vụ giặt ủi, vệ sinh cao cấp", url: "https://heramo.com" },
  { name: "Laundry Academy", desc: "Đào tạo nghề giặt sấy, giặt là", url: "https://laundry.academy/" },
  {
    name: "TinyClean",
    desc: "Phần mềm quản lý tiệm giặt",
    url: "https://tinyuse.ai/phan-mem-quan-ly-tiem-giat-mien-phi-tinyclean",
  },
  { name: "TinyUse Tech Lab", desc: "Giải pháp phần mềm cho SMEs", url: "https://tinyuse.ai" },
];

const ColTitle = ({ children }: { children: string }) => (
  <div className="font-display font-bold text-[11px] uppercase tracking-widest text-primary-foreground/50 mb-3">{children}</div>
);

const contactLink = "flex items-center gap-2 hover:text-primary-foreground transition-colors";

export function Footer() {
  return (
    <footer className="bg-xanh-navy pt-10 pb-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 md:gap-12 pb-6">
          <div>
            <img src={img("xanh-laundry-logo.png")} alt="XANH LAUNDRY" className="h-10 mb-3 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Hệ thống nhượng quyền giặt sấy thông minh - vốn thấp, vận hành hiệu quả, đồng hành trọn đời.
            </p>
          </div>

          <div>
            <ColTitle>Doanh nghiệp</ColTitle>
            <div className="font-display font-bold text-[13px] text-primary-foreground/90 leading-snug mb-2">
              Công ty TNHH CN DV &amp; TM Xanh Laundry
            </div>
            <div className="text-[12.5px] text-primary-foreground/65 leading-relaxed">
              <div>MST: 0319634321</div>
              <div>
                Số 01 Trường Sơn, P. Tân Sơn Nhất,
                <br />
                TP Hồ Chí Minh
              </div>
            </div>
          </div>

          <div>
            <ColTitle>Liên hệ</ColTitle>
            <div className="flex flex-col gap-2 text-[13.5px] text-primary-foreground/80">
              <a href={PHONE_TEL} className={contactLink}>
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <a href="mailto:franchise@xanhlaundry.com" className={contactLink}>
                <Mail className="h-4 w-4" />
                franchise@xanhlaundry.com
              </a>
              <a href="https://www.facebook.com/xanhlaundry.franchise" target="_blank" rel="noopener noreferrer" className={contactLink}>
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className={contactLink}>
                <MessageCircle className="h-4 w-4" />
                Zalo
              </a>
            </div>
          </div>

          <div>
            <ColTitle>CHUNG HỆ SINH THÁI</ColTitle>
            <div className="flex flex-col gap-2 text-[13px] text-primary-foreground/80 leading-snug">
              {ecosystem.map((e) => (
                <a
                  key={e.name}
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  <span className="font-display font-bold text-primary-foreground/90">{e.name}</span> – {e.desc}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-4 text-center text-xs text-primary-foreground/45">
          © 2026 XANH LAUNDRY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
