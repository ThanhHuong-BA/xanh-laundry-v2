import { Play } from "lucide-react";
import { AccentHeading } from "../components/AccentHeading";
import { CtaButton } from "../components/CtaButton";
import { Grad, SectionTitle } from "../components/SectionTitle";

const steps = [
  { num: "01", title: "Đăng ký tư vấn", desc: "Nhắn tin, gọi hotline hoặc điền form - đội ngũ Xanh Laundry liên hệ trong 24H" },
  { num: "02", title: "Tư vấn 1-1 online", desc: "Đội ngũ chuyên gia gọi online, khảo sát nhu cầu chi tiết, tư vấn tận tâm mọi vấn đề" },
  {
    num: "03",
    title: "Ký LOI (Letter of Intent) và đặt cọc",
    desc: "Gặp mặt (hoặc online), tư vấn chi tiết giải pháp, máy móc, dự phóng chi phí, lợi nhuận kỳ vọng. Ký LOI và đặt cọc.",
  },
  {
    num: "04",
    title: "Tư vấn, tìm kiếm và khảo sát mặt bằng",
    desc: "Đội ngũ chuyên gia hỗ trợ tìm kiếm, tư vấn khảo sát, chốt hợp đồng mặt bằng. Lên thiết kế 2D, 3D phối cảnh.",
  },
  {
    num: "05",
    title: "Ký hợp đồng chính thức & thanh toán",
    desc: "Ký kết HĐ chính thức, chốt phương án thi công & chi phí, thanh toán phí nhượng quyền và đặt cọc máy móc, thi công.",
  },
  { num: "06", title: "Thi công & lắp đặt", desc: "Thi công sửa chữa, lắp đặt bảng hiệu, máy móc, điện nước, trang bị quầy kệ bàn tủ…etc" },
  {
    num: "07",
    title: "Đào tạo & chạy thử",
    desc: "Đào tạo trọn gói vận hành, xử lý đồ, marketing, quản lý tiệm, phần mềm, chăm sóc khách hàng",
  },
  {
    num: "08",
    title: "Khai trương & kinh doanh",
    desc: "Hỗ trợ khai trương, đội ngũ Xanh Laundry đồng hành liên tục trong chặng đường kinh doanh",
  },
];

/**
 * Store opening videos. Fill `src` with an .mp4 URL or a YouTube *embed* URL
 * (https://www.youtube.com/embed/<id>); empty entries show a "coming soon" placeholder.
 */
const openingVideos = [
  { title: "Khai trương cửa hàng Xanh Laundry 1", src: "" },
  { title: "Khai trương cửa hàng Xanh Laundry 2", src: "" },
  { title: "Khai trương cửa hàng Xanh Laundry 3", src: "" },
];

function Video({ title, src }: { title: string; src: string }) {
  if (!src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-xanh-body">
        <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
          <Play className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="text-sm">Video sắp cập nhật</span>
      </div>
    );
  }
  if (/youtube\.com|youtu\.be/.test(src)) {
    return (
      <iframe
        src={src}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 0 }}
      />
    );
  }
  return <video src={src} controls playsInline preload="metadata" className="w-full h-full object-cover bg-black" />;
}

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="container">
        <SectionTitle sub="Chỉ 2 tuần từ lúc đăng ký tới lúc khai trương và bắt đầu kinh doanh">
          Quy trình nhượng quyền — <Grad>tận tâm, đơn giản, minh bạch</Grad>
        </SectionTitle>

        <div className="max-w-3xl space-y-6 ml-0 md:ml-[12%]">
          {steps.map((st) => (
            <div key={st.num} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <span className="text-sm font-display font-extrabold text-primary-foreground">{st.num}</span>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground mb-1">{st.title}</h3>
                <p className="text-sm text-xanh-body leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="xanh-card p-7 mt-14">
          <AccentHeading title="Thi công & khai trương cửa hàng Xanh Laundry" />
          <div className="grid md:grid-cols-3 gap-6">
            {openingVideos.map((v) => (
              <div key={v.title} className="aspect-video rounded-xl overflow-hidden bg-xanh-light-gray border border-border">
                <Video {...v} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
