import { useRef } from "react";
import { ChevronLeft, ChevronRight, Clock, Maximize2, Phone, User } from "lucide-react";
import { cx, img, scrollToForm } from "../lib";
import { AccentHeading } from "../components/AccentHeading";

const services = [
  { name: "Giặt sấy theo kg", img: "service-laundry-kg.jpg" },
  { name: "Ủi treo", img: "service-ironing.jpg" },
  { name: "Giặt đồ gia đình (chăn, ga, gối, drap)", img: "service-household.jpg" },
  { name: "Giặt đồ vải (khăn spa, khách sạn, ngân hàng...)", img: "service-linen.jpg" },
  { name: "Giặt gấu bông", img: "service-plush.jpg" },
  { name: "Vệ sinh giày", img: "service-shoes.jpg" },
];

const storePhotos = [
  { src: "store-front.jpg", label: "Mặt tiền cửa hàng", pos: "object-top" },
  { src: "store-inside.webp", label: "Bên trong cửa hàng", pos: "object-center" },
];

const storeSpecs = [
  { Icon: Maximize2, big: "25 – 40", unit: "m²", label: "Diện tích mặt bằng" },
  { Icon: User, big: "1", unit: "nhân viên / ca", label: "Vận hành gọn nhẹ" },
  { Icon: Clock, big: "12 – 14", unit: "giờ / ngày", label: "Thời gian hoạt động" },
];

const packages = [
  {
    tier: "Khởi Nghiệp",
    price: "70",
    tag: null,
    items: ["3 cặp máy giặt sấy 9kg", "1 máy sấy giày cỡ vừa", "1 cây ủi", "1 bồn rửa đôi vệ sinh giày"],
    fit: "Mặt bằng gọn, chi phí thấp, kiếm tiền ngay",
    grad: "linear-gradient(135deg, #3F3F46, #52525B)",
    chipBg: "rgba(44,44,44,0.10)",
    chipText: "#2C2C2C",
  },
  {
    tier: "Tăng Tốc",
    price: "100",
    tag: "PHỔ BIẾN NHẤT",
    items: [
      "2 cặp máy giặt sấy 9kg",
      "1 cặp máy giặt sấy bán công nghiệp 12–13kg",
      "1 máy sấy giày cỡ vừa",
      "1 cây ủi",
      "1 bồn rửa đôi vệ sinh giày",
    ],
    fit: "Mặt bằng gọn, tăng tốc nhanh, dịch vụ đa dạng",
    grad: "linear-gradient(135deg, #00D4FF, #00C8CA, #00C896)",
    chipBg: "rgba(0,200,202,0.14)",
    chipText: "#0891B2",
  },
  {
    tier: "Chuyên Nghiệp",
    price: "145",
    tag: null,
    items: [
      "3 cặp máy giặt sấy 9kg",
      "1 cặp máy giặt sấy bán công nghiệp 12–13kg",
      "1 máy vệ sinh giày công nghiệp cỡ lớn",
      "1 máy sấy giày cỡ lớn",
      "1 cây ủi",
    ],
    fit: "Kinh doanh chuyên nghiệp, dịch vụ đa dạng, khách hàng đông",
    grad: "linear-gradient(135deg, #1A237E, #283593)",
    chipBg: "rgba(26,35,126,0.12)",
    chipText: "#1A237E",
  },
];
type Pkg = (typeof packages)[number];

const galleryImgs = [
  "why-3.webp",
  "gallery-2.webp",
  "gallery-3.webp",
  "gallery-4.png",
  "gallery-5.jpg",
  "gallery-6.webp",
  "gallery-7.webp",
];

function Check({ pkg }: { pkg: Pkg }) {
  return (
    <span
      className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
      style={{ background: pkg.chipBg }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={pkg.chipText}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-2.5 w-2.5"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

const PopularBadge = ({ className, style }: { className: string; style?: React.CSSProperties }) => (
  <div
    className={cx(
      "absolute z-20 text-[10px] font-display font-extrabold tracking-widest px-3 py-1 rounded-full shadow whitespace-nowrap inline-flex items-center gap-1",
      className,
    )}
    style={{ background: "#FFD400", color: "#1A237E", ...style }}
  >
    <span style={{ fontSize: 12, lineHeight: 1 }}>★</span>
    PHỔ BIẾN NHẤT
  </div>
);

const FitNote = ({ pkg }: { pkg: Pkg }) => (
  <div className="border-t border-dashed border-border pt-3 text-xs leading-relaxed text-xanh-body mb-4">
    <div className="font-display font-bold text-foreground mb-1">Thích hợp</div>
    {pkg.fit}
  </div>
);

/** Portrait pricing card: mobile (stacked) and desktop (3 columns). */
function PortraitCard({ pkg }: { pkg: Pkg }) {
  if (pkg.tag) {
    return (
      <div className="relative lg:-translate-y-4 lg:scale-[1.05] z-10">
        <PopularBadge className="-top-3 left-1/2 -translate-x-1/2 pointer-events-none" />
        <div
          className="relative rounded-2xl flex flex-col bg-white overflow-hidden"
          style={{
            boxShadow: "0 0 0 2.5px #00C8CA, 0 24px 48px -12px rgba(0,200,202,0.45), 0 0 60px rgba(0,212,255,0.28)",
          }}
        >
          <div className="relative p-6 text-white overflow-hidden" style={{ background: pkg.grad }}>
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)" }}
            />
            <div className="relative font-display font-extrabold text-xl mb-3 whitespace-nowrap flex items-center gap-2">
              Gói {pkg.tier}
              <span className="text-lg">✨</span>
            </div>
            <div className="relative flex items-baseline gap-1">
              <span className="font-display font-extrabold text-5xl leading-none">{pkg.price}</span>
              <span className="font-display font-bold text-base opacity-90"> triệu</span>
            </div>
            <div className="relative mt-2 text-xs text-white/85">Cân bằng đầu tư &amp; doanh thu</div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <ul className="space-y-2.5 mb-5 flex-1">
              {pkg.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                  <Check pkg={pkg} />
                  <span className="leading-snug font-medium">{it}</span>
                </li>
              ))}
            </ul>
            <FitNote pkg={pkg} />
            <button
              type="button"
              onClick={scrollToForm}
              className="text-white font-display font-extrabold text-base py-4 rounded-lg w-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
              style={{ background: pkg.grad }}
            >
              <Phone className="h-4 w-4" />
              Nhận tư vấn ngay
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl flex flex-col bg-white border border-border shadow">
      <div className="relative p-5 rounded-t-2xl text-white" style={{ background: pkg.grad }}>
        <div className="font-display font-extrabold text-xl mb-2 whitespace-nowrap">Gói {pkg.tier}</div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-extrabold text-3xl">{pkg.price}</span>
          <span className="font-display font-bold text-sm opacity-90"> triệu</span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <ul className="space-y-2.5 mb-4 flex-1">
          {pkg.items.map((it) => (
            <li key={it} className="flex items-start gap-2 text-sm text-foreground">
              <Check pkg={pkg} />
              <span className="leading-snug">{it}</span>
            </li>
          ))}
        </ul>
        <FitNote pkg={pkg} />
        <button
          type="button"
          onClick={scrollToForm}
          className="text-white font-display font-bold text-sm py-3 rounded-lg w-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          style={{ background: pkg.grad }}
        >
          <Phone className="h-4 w-4" />
          Nhận tư vấn ngay
        </button>
      </div>
    </div>
  );
}

/** Landscape pricing card: tablet (md → lg) only. */
function LandscapeCard({ pkg }: { pkg: Pkg }) {
  const feat = !!pkg.tag;
  return (
    <div className="relative" style={{ paddingTop: feat ? 14 : 0 }}>
      {feat && <PopularBadge className="" style={{ top: 4, left: 24 }} />}
      <div
        className="rounded-2xl overflow-hidden bg-white grid"
        style={{
          gridTemplateColumns: "240px 1fr",
          boxShadow: feat ? "0 0 0 2.5px #00C8CA, 0 20px 40px -12px rgba(0,200,202,0.4)" : "0 4px 16px rgba(0,0,0,0.06)",
          border: feat ? "none" : "1px solid #E5E7EB",
        }}
      >
        <div
          className="relative text-white p-6 flex flex-col justify-center gap-1.5 overflow-hidden"
          style={{ background: pkg.grad }}
        >
          {feat && (
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)" }}
            />
          )}
          <div className="relative font-display font-extrabold text-sm opacity-90">Gói</div>
          <div className="relative font-display font-extrabold text-xl flex items-center gap-2 leading-tight">
            {pkg.tier}
            {feat && <span className="text-base">✨</span>}
          </div>
          <div className="relative flex items-baseline gap-1 mt-1.5">
            <span className="font-display font-extrabold text-4xl leading-none">{pkg.price}</span>
            <span className="font-display font-bold text-sm"> triệu</span>
          </div>
          {feat && <div className="relative text-[11px] text-white/85 mt-1.5">Cân bằng đầu tư &amp; doanh thu</div>}
        </div>
        <div className="p-5 flex flex-col gap-3">
          <ul className="grid grid-cols-2 gap-x-5 gap-y-2">
            {pkg.items.map((it) => (
              <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                <Check pkg={pkg} />
                <span className="leading-snug">{it}</span>
              </li>
            ))}
          </ul>
          <div
            className="grid gap-3 items-center pt-3 border-t border-dashed border-border"
            style={{ gridTemplateColumns: "1fr auto" }}
          >
            <div className="text-xs text-xanh-body leading-relaxed">
              <span className="font-display font-bold text-foreground">Thích hợp: </span>
              {pkg.fit}
            </div>
            <button
              type="button"
              onClick={scrollToForm}
              className="text-white font-display font-bold text-sm py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
              style={{ background: pkg.grad }}
            >
              <Phone className="h-4 w-4" />
              Tư vấn ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: -1 | 1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  const arrow = (dir: -1 | 1) => {
    const Icon = dir < 0 ? ChevronLeft : ChevronRight;
    return (
      <button
        type="button"
        onClick={() => scroll(dir)}
        aria-label={dir < 0 ? "Ảnh trước" : "Ảnh tiếp"}
        className={cx(
          "absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-all",
          dir < 0 ? "left-2 sm:left-3" : "right-2 sm:right-3",
        )}
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
      </button>
    );
  };

  return (
    <div className="xanh-card p-7 mt-6 relative">
      <AccentHeading title="Hình ảnh thực tế tại cửa hàng" sub="Hoạt động đào tạo và vận hành thực tế" />
      <div className="relative">
        <div ref={ref} className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
          {galleryImgs.map((src, i) => (
            <div
              key={src}
              className="snap-start flex-shrink-0 w-full sm:w-[45%] lg:w-[calc((100%-2rem)/3)] aspect-[16/9] rounded-xl overflow-hidden bg-muted"
            >
              <img
                src={img(src)}
                alt={`Hình ảnh cửa hàng Xanh Laundry ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {arrow(-1)}
        {arrow(1)}
      </div>
    </div>
  );
}

export function Equipment({ onZoom }: { onZoom: (src: string) => void }) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Đa dạng <span className="gradient-text">gói đầu tư</span> — sẵn sàng kinh doanh sinh lời
          </h2>
          <p className="text-xanh-body max-w-2xl mx-auto">
            Ba gói thiết bị linh hoạt phù hợp với mọi quy mô mặt bằng và ngân sách
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* Services */}
          <div className="xanh-card p-7 h-full flex flex-col">
            <AccentHeading title="Dịch vụ cung cấp" sub="6 nhóm dịch vụ chính" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 flex-1 content-start">
              {services.map((sv) => (
                <button
                  type="button"
                  key={sv.name}
                  onClick={() => onZoom(img(sv.img))}
                  className="group relative rounded-xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-lg transition-shadow bg-xanh-light-gray aspect-[16/9] sm:aspect-[4/3] text-left"
                >
                  <img
                    src={img(sv.img)}
                    alt={sv.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.15) 50%, transparent 70%)" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3.5 text-white font-display font-bold text-[15px] leading-snug"
                    style={{ textWrap: "pretty" } as React.CSSProperties}
                  >
                    {sv.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Store model */}
          <div className="xanh-card p-7 h-full flex flex-col">
            <AccentHeading title="Mô hình cửa hàng" sub="Vận hành gọn nhẹ, chi phí tối ưu" />
            <div className="flex flex-col gap-3 flex-1 items-stretch">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {storePhotos.map((ph) => (
                  <button
                    type="button"
                    key={ph.src}
                    onClick={() => onZoom(img(ph.src))}
                    className="group relative rounded-xl overflow-hidden flex-1 cursor-zoom-in aspect-[16/9] text-left"
                  >
                    <img
                      src={img(ph.src)}
                      alt={ph.label}
                      loading="lazy"
                      className={cx(
                        "absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                        ph.pos,
                      )}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 55%)" }}
                    />
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/85 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="h-3.5 w-3.5 text-foreground" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white text-[15px] font-display font-bold leading-snug">
                      {ph.label}
                    </div>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {storeSpecs.map(({ Icon, big, unit, label }) => (
                  <div
                    key={label}
                    className="bg-white shadow-md hover:shadow-lg transition-shadow border border-border/60 rounded-xl p-3 md:p-4 flex items-center gap-2.5 md:gap-3 flex-1 min-h-0"
                  >
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-1 md:gap-1.5 whitespace-nowrap">
                        <span className="font-display font-extrabold text-base md:text-xl gradient-text">{big}</span>
                        <span className="font-display font-bold text-[11px] md:text-xs text-foreground">{unit}</span>
                      </div>
                      <div className="text-[10px] md:text-[11px] text-xanh-body leading-tight">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Equipment packages */}
        <div className="xanh-card p-7">
          <AccentHeading title="Máy móc thiết bị" sub="Ba gói máy móc linh hoạt, giá cụ thể như bên dưới" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-8 md:hidden lg:grid">
            {packages.map((p) => (
              <PortraitCard key={p.tier} pkg={p} />
            ))}
          </div>
          <div className="hidden md:flex md:flex-col lg:hidden gap-4 pt-6">
            {packages.map((p) => (
              <LandscapeCard key={p.tier} pkg={p} />
            ))}
          </div>
        </div>

        <Gallery />
      </div>
    </section>
  );
}
