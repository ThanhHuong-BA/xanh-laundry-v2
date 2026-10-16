import { cx } from "../lib";
import { Grad, SectionTitle } from "../components/SectionTitle";

const criteria = [
  "Vốn đầu tư",
  "Phí nhượng quyền & Phí ẩn",
  "Chương trình Đào tạo",
  "Hỗ trợ & Đồng hành",
  "Hỗ trợ Marketing",
  "Dịch vụ kinh doanh",
  "Phần mềm quản lý",
];

const models = [
  {
    name: "Nhượng quyền\nXanh Laundry",
    highlight: true,
    values: [
      "Từ 150 triệu",
      "Phí niêm yết 50 triệu giảm còn 30 triệu, không phí ẩn",
      "8 module bài bản kéo dài 1 tuần",
      "Hỗ trợ mọi thắc mắc Online/Offline trọn đời",
      "Kế hoạch 12 tháng, thiết lập kênh thương hiệu, hướng dẫn marketing hàng tuần",
      "Cung cấp từ giặt sấy, chăn ga đến giày, gấu bông. Nhiều nguồn thu",
      "App TinyClean thiết kế riêng cho tiệm giặt",
    ],
  },
  {
    name: "Nhượng quyền\nGiặt sấy khác",
    values: [
      "Từ 250 triệu",
      "Phí ẩn lớn (~100 triệu tính vào giá máy)",
      "1–2 buổi hoặc chỉ giao quy trình trên giấy",
      "Có chính sách hỗ trợ nhưng khó liên hệ",
      "Sơ sài, không có định hướng bài bản",
      "Tùy thương hiệu nhưng phần lớn chỉ giặt sấy",
      "Phần mềm bán hàng POS chung chung",
    ],
  },
  {
    name: "Giặt sấy\nTự động",
    values: [
      "Từ 300 triệu",
      "Phí nhượng quyền cao",
      "Rất ít hoặc không có",
      "Tự vận hành là chính",
      "Tự làm marketing",
      "Chủ yếu giặt sấy tự phục vụ",
      "Hệ thống thu tiền gắn với máy đắt đỏ",
    ],
  },
  {
    name: "Đơn vị lắp đặt\nmáy",
    values: [
      "Từ 130 triệu, chỉ có máy móc",
      "Không thu phí nhượng quyền",
      "Chỉ hướng dẫn thao tác máy khi bàn giao",
      "Chỉ hỗ trợ về máy móc trong một khoảng thời gian ngắn sau khi bàn giao máy",
      "Không hỗ trợ marketing",
      "Tự xây dựng",
      "Tự tìm phần mềm",
    ],
  },
];

const stickyCol =
  "sticky left-0 z-20 bg-background p-2 md:p-3 text-xs md:text-sm w-[130px] md:w-auto min-w-[130px] shadow-[4px_0_6px_-2px_rgba(0,0,0,0.08)]";

export function Comparison() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionTitle>
          So sánh với các <Grad>mô hình nhượng quyền giặt sấy khác</Grad>
        </SectionTitle>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0" style={{ minWidth: 820 }}>
            <thead>
              <tr>
                <th className={cx(stickyCol, "text-left font-semibold text-xanh-body")}>Tiêu chí</th>
                {models.map((m) => (
                  <th
                    key={m.name}
                    className={cx(
                      "p-2 md:p-3 text-center text-xs md:text-sm font-display font-bold whitespace-pre-line",
                      m.highlight ? "gradient-bg text-primary-foreground rounded-t-xl" : "text-foreground",
                    )}
                  >
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((c, ri) => (
                <tr key={c} className="border-b border-border/50">
                  <td className={cx(stickyCol, "text-foreground font-semibold align-top")}>{c}</td>
                  {models.map((m) => (
                    <td
                      key={m.name}
                      className={cx(
                        "p-2 md:p-3 text-left align-top text-xs md:text-sm leading-relaxed border-b border-border",
                        m.highlight ? "bg-primary/5 text-foreground font-semibold" : "text-xanh-body",
                      )}
                    >
                      {m.values[ri]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
