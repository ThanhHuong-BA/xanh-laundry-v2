import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Gift,
  Smartphone,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cx, img } from "../lib";

type Feature = { Icon: LucideIcon; title: string; description: string; images: string[]; color: string };

const features: Feature[] = [
  {
    Icon: ClipboardList,
    title: "Quản lý đơn hàng tập trung & rõ ràng",
    description:
      "Lên đơn nhanh, chụp hình đồ trước khi xử lý, ghi chú yêu cầu xử lý của khách và theo dõi từng đơn, từng món theo từng công đoạn giặt",
    images: ["feature-order-items.png", "feature-order-photo.png", "feature-order-list.png"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    Icon: Users,
    title: "Lưu trữ & chăm sóc khách hàng hiệu quả hơn",
    description:
      "Lưu trữ thông tin (liên hệ, sở thích, lịch sử đặt hàng,... etc) để phục vụ và chăm sóc khách hàng nhanh & tốt hơn, tăng khả năng hài lòng và quay lại",
    images: ["feature-customer-info.png"],
    color: "from-purple-500 to-pink-500",
  },
  {
    Icon: Gift,
    title: "Khuyến mãi – hoàn tiền giữ chân khách",
    description:
      "Giữ chân và khuyến khích khách hàng sử dụng thường xuyên với các chương trình khuyến mãi, hoàn tiền hấp dẫn, dễ dàng khởi tạo",
    images: ["feature-promo-list.png", "feature-cashback.png", "feature-promo-apply.png"],
    color: "from-pink-500 to-rose-500",
  },
  {
    Icon: BarChart3,
    title: "Báo cáo doanh thu – chi phí minh bạch, tự động",
    description:
      "Theo dõi doanh thu và chi phí tự động theo ngày, tuần, tháng một cách chính xác. Nắm bắt kịp thời tình hình kinh doanh của cửa hàng",
    images: [
      "feature-report-overview.png",
      "feature-report-revenue.png",
      "feature-report-services.png",
      "feature-report-customers.png",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    Icon: Sparkles,
    title: "Tiện ích nâng cao, quản lý tiệm chuyên nghiệp hơn",
    description:
      "Khách hàng có thể theo dõi đơn hàng trực tuyến (website), được thông báo vấn đề trước khi xử lý, nhận thông tin tự động khi đồ hoàn tất (Zalo, SMS), xác nhận giao đúng người bằng mã OTP,... etc",
    images: ["feature-store-tracking.png", "feature-store-notification.png", "feature-store-otp.png"],
    color: "from-violet-500 to-purple-500",
  },
];

const AUTOPLAY_MS = 4000;

function PhoneMockup({ feat, index, imageIdx, desktop }: { feat: Feature; index: number; imageIdx: number; desktop?: boolean }) {
  const { Icon } = feat;
  return (
    <div className="relative bg-black rounded-[2.5rem] p-2.5 shadow-2xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
      <div className={cx("relative bg-white rounded-[2rem] overflow-hidden", desktop ? "aspect-[9/19]" : "aspect-[9/18.5]")}>
        <div className="relative w-full h-full">
          {feat.images.map((src, i) => (
            <img
              key={src}
              src={img(src)}
              alt={feat.title}
              loading="lazy"
              className={cx(
                "absolute inset-0 w-full h-full object-cover transition-all",
                i === imageIdx ? "opacity-100 translate-x-0" : i < imageIdx ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full",
              )}
            />
          ))}
          {feat.images.length > 1 && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-1 z-20">
              {feat.images.map((src, i) => (
                <div
                  key={src}
                  className={cx(
                    "rounded-full transition-all duration-300",
                    i === imageIdx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40",
                  )}
                />
              ))}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className={cx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r mb-2", feat.color)}>
              <Icon className="w-3 h-3" />
              <span className="text-[10px] font-semibold">Tính năng {index + 1}</span>
            </div>
            <h4 className="text-sm font-bold mb-1">{feat.title}</h4>
            <p className="text-xs text-gray-200">{feat.description}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
    </div>
  );
}

/** Phone mockup with prev/next arrows and dots for features that have several screenshots. */
function PhoneCarousel({
  feat,
  index,
  imageIdx,
  setImageIdx,
  desktop,
}: {
  feat: Feature;
  index: number;
  imageIdx: number;
  setImageIdx: (i: number) => void;
  desktop?: boolean;
}) {
  const multi = feat.images.length > 1;
  const last = feat.images.length - 1;
  const arrowCls = cx(
    "absolute top-1/2 -translate-y-1/2 z-20 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed",
    desktop ? "w-9 h-9" : "w-8 h-8",
  );
  const iconCls = cx("text-foreground", desktop ? "w-5 h-5" : "w-4 h-4");
  return (
    <div className={cx("relative mx-auto w-full", desktop ? "max-w-[320px]" : "max-w-[280px]")}>
      {multi && (
        <>
          <button
            type="button"
            aria-label="Ảnh trước"
            onClick={() => setImageIdx(Math.max(0, imageIdx - 1))}
            disabled={imageIdx === 0}
            className={cx(arrowCls, desktop ? "-left-12" : "-left-10")}
          >
            <ChevronLeft className={iconCls} />
          </button>
          <button
            type="button"
            aria-label="Ảnh tiếp"
            onClick={() => setImageIdx(Math.min(last, imageIdx + 1))}
            disabled={imageIdx === last}
            className={cx(arrowCls, desktop ? "-right-12" : "-right-10")}
          >
            <ChevronRight className={iconCls} />
          </button>
        </>
      )}
      <PhoneMockup feat={feat} index={index} imageIdx={imageIdx} desktop={desktop} />
      {multi && (
        <div className="flex justify-center mt-3 gap-1.5">
          {feat.images.map((src, i) => (
            <button
              type="button"
              key={src}
              aria-label={`Ảnh ${i + 1}`}
              onClick={() => setImageIdx(i)}
              className={cx(
                "rounded-full transition-all duration-300",
                i === imageIdx ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function TinyClean() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const [imageIdx, setImageIdxMap] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLElement>(null);

  // Start cycling from the first feature whenever the section scrolls into view; pause when it leaves.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAutoPlay(true);
          setActive(0);
        } else {
          setAutoPlay(false);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % features.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [autoPlay, active]);

  const select = (i: number) => {
    setActive(i);
    setAutoPlay(false);
  };
  const setImageIdx = (fi: number, i: number) => setImageIdxMap((m) => ({ ...m, [fi]: i }));
  const activeFeat = features[active];

  return (
    <section ref={sectionRef} id="tinyclean" className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            <span className="gradient-text">TinyClean</span> — nền tảng công nghệ giặt ủi #1 Việt Nam
          </h2>
          <p className="text-lg text-xanh-body max-w-2xl mx-auto">
            Xây dựng từ 9 năm kinh nghiệm vận hành thực tế của HERAMO — nền tảng duy nhất trên thị trường được thiết kế
            chuyên biệt cho ngành giặt ủi.
          </p>
        </div>
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">Tính năng toàn diện</h3>
          <p className="text-lg text-xanh-body max-w-2xl mx-auto">Mọi thứ bạn cần để quản lý tiệm giặt nhẹ nhàng và hiệu quả</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Desktop: feature list */}
          <div className="hidden lg:block space-y-4">
            {features.map((f, i) => {
              const isActive = active === i;
              return (
                <div
                  key={f.title}
                  onClick={() => select(i)}
                  className={cx(
                    "relative p-6 rounded-2xl cursor-pointer transition-all duration-300 bg-card shadow-lg border-2",
                    isActive ? "scale-105 border-primary shadow-xl" : "border-border hover:border-primary/30",
                  )}
                >
                  {isActive && <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-16 bg-primary rounded-r-full" />}
                  <div className="flex items-start gap-4">
                    <div
                      className={cx(
                        "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
                        f.color,
                      )}
                    >
                      <f.Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={cx(
                          "text-lg font-bold mb-2 transition-colors",
                          isActive ? "text-foreground" : "text-foreground/80",
                        )}
                      >
                        {f.title}
                      </h4>
                      <p className={cx("text-sm transition-colors", isActive ? "text-xanh-body" : "text-muted-foreground")}>
                        {f.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                    )}
                  </div>
                  {isActive && autoPlay && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted rounded-b-2xl overflow-hidden">
                      <div className="h-full gradient-bg animate-progress" />
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex items-center gap-3 pt-4 px-6">
              <button
                type="button"
                onClick={() => setAutoPlay((a) => !a)}
                className={cx(
                  "text-sm font-medium transition-colors px-3 py-1.5 rounded-lg",
                  autoPlay ? "text-primary bg-primary/10 hover:bg-primary/20" : "text-muted-foreground bg-muted hover:bg-muted/80",
                )}
              >
                {autoPlay ? "⏸ Tạm dừng" : "▶ Tự động chuyển"}
              </button>
              <div className="flex gap-2">
                {features.map((f, i) => (
                  <button
                    type="button"
                    key={f.title}
                    aria-label={`Tính năng ${i + 1}`}
                    onClick={() => select(i)}
                    className={cx(
                      "h-2 rounded-full transition-all duration-300",
                      active === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: phone preview */}
          <div className="hidden lg:block relative self-start">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-[2rem] blur-3xl opacity-50 animate-pulse" />
            <PhoneCarousel
              desktop
              feat={activeFeat}
              index={active}
              imageIdx={imageIdx[active] || 0}
              setImageIdx={(i) => setImageIdx(active, i)}
            />
          </div>

          {/* Mobile/tablet: accordion */}
          <div className="lg:hidden space-y-3 col-span-full">
            {features.map((f, i) => {
              const expanded = expandedMobile === i;
              return (
                <div
                  key={f.title}
                  className={cx(
                    "bg-card rounded-2xl border-2 transition-all duration-300 overflow-visible",
                    expanded ? "border-primary shadow-xl" : "border-border shadow-md",
                  )}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={cx(
                          "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
                          f.color,
                        )}
                      >
                        <f.Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-foreground mb-1">{f.title}</h4>
                        <p className="text-sm text-xanh-body mb-3">{f.description}</p>
                        <button
                          type="button"
                          onClick={() => {
                            setExpandedMobile(expanded ? null : i);
                            select(i);
                          }}
                          className={cx(
                            "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300",
                            expanded ? "gradient-bg text-primary-foreground shadow-lg" : "bg-primary/10 text-primary hover:bg-primary/20",
                          )}
                        >
                          <Smartphone className="w-4 h-4" />
                          Xem trên ứng dụng
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={cx(
                      "transition-all duration-500 ease-in-out",
                      expanded ? "max-h-[700px] opacity-100 overflow-visible" : "max-h-0 opacity-0 overflow-hidden",
                    )}
                  >
                    <div className="px-4 pb-6 pt-2">
                      <PhoneCarousel
                        feat={f}
                        index={i}
                        imageIdx={imageIdx[i] || 0}
                        setImageIdx={(ii) => setImageIdx(i, ii)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
