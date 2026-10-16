import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, cx, img, scrollToForm } from "../lib";

const slides = ["hero-1.webp", "hero-2.jpg", "hero-3.webp", "hero-4.webp", "hero-5.webp"].map(img);
const AUTOPLAY_MS = 4500;

export function Hero() {
  const [idx, setIdx] = useState(0);

  // Restarting the timer on every change also resets it after manual navigation.
  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [idx]);

  const go = (i: number) => setIdx((i + slides.length) % slides.length);

  const arrow = (dir: -1 | 1) => {
    const Icon = dir < 0 ? ChevronLeft : ChevronRight;
    return (
      <button
        type="button"
        onClick={() => go(idx + dir)}
        aria-label={dir < 0 ? "Ảnh trước" : "Ảnh tiếp"}
        className={cx(
          "absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card/90 shadow-lg flex items-center justify-center hover:bg-card transition-all",
          dir < 0 ? "left-3" : "right-3",
        )}
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
      </button>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center pt-14 overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl gradient-bg" />
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Nhượng quyền giặt sấy thông minh <span className="gradient-text">chỉ từ 150 triệu</span>
            </h1>
            <p className="text-lg text-xanh-body leading-relaxed mb-8 max-w-xl">
              Được xây dựng trên nền tảng gần 10 năm kinh nghiệm thực chiến kinh doanh, vận hành và mở rộng trong ngành
              giặt ủi cao cấp với gần 20 cửa hàng và 162K+ khách hàng tin dùng. Công nghệ và đào tạo chuyên biệt từ A-Z
              cho ngành giặt sấy, giặt ủi, vệ sinh giày. Phí nhượng quyền trọn đời. Thu hồi vốn sau 12 - 18 tháng.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                type="button"
                onClick={scrollToForm}
                className="btn-cta w-[220px] py-4 rounded-lg text-base transition-transform hover:scale-105 shadow-lg"
              >
                NHẬN TƯ VẤN NGAY
              </button>
              <a
                href={PHONE_TEL}
                className="border-2 border-primary text-primary hover:text-primary w-[220px] py-4 rounded-lg text-base text-center font-display font-bold hover:bg-primary/5 transition-colors"
              >
                GỌI {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-xanh-body">
              {["Dịch vụ chuẩn mực", "Marketing bài bản", "Đồng hành trọn đời"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full gradient-bg" />
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square bg-muted">
              {slides.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Cửa hàng XANH LAUNDRY ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={cx(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                    i === idx ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              {arrow(-1)}
              {arrow(1)}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {slides.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`Ảnh ${i + 1}`}
                    onClick={() => go(i)}
                    className={cx("h-2 rounded-full transition-all", i === idx ? "w-6 bg-white" : "w-2 bg-white/60")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
