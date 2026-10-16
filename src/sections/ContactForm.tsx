import { useState, type FormEvent, type ReactNode } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { PHONE_DISPLAY, cx, img } from "../lib";

type FormData = { name: string; phone: string; email: string; area: string; budget: string; hasSpace: string };
type Errors = Partial<Record<keyof FormData, string>>;

const empty: FormData = { name: "", phone: "", email: "", area: "", budget: "", hasSpace: "" };

function validate(f: FormData): Errors {
  const errs: Errors = {};
  if (!f.name.trim()) errs.name = "Vui lòng điền thông tin này";
  if (!f.phone.trim()) errs.phone = "Vui lòng điền thông tin này";
  else if (!/^(0[1-9][0-9]{8}|84[1-9][0-9]{8})$/.test(f.phone.replace(/\s/g, "")))
    errs.phone = "Số điện thoại không hợp lệ (VD: 0901234567)";
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) errs.email = "Email không hợp lệ";
  return errs;
}

/**
 * Hook point for the real lead pipeline (CRM, Google Sheet, email…).
 * The design has no backend, so this currently resolves immediately.
 */
async function submitLead(_data: FormData): Promise<void> {}

const inputCls = (err?: string) =>
  cx(
    "w-full border rounded-lg px-4 py-2.5 text-sm bg-background focus:ring-2 focus:ring-primary/30 outline-none",
    err ? "border-destructive" : "border-input",
  );
const selectCls =
  "w-full border border-input rounded-lg px-4 py-2.5 pr-8 text-sm bg-background focus:ring-2 focus:ring-primary/30 outline-none appearance-none";
const selectStyle = {
  backgroundImage:
    "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')",
  backgroundSize: "16px",
  backgroundPosition: "right 0.5rem center",
  backgroundRepeat: "no-repeat",
};

const Field = ({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-foreground mb-1">
      {label}
    </label>
    {children}
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

export function ContactForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (k: keyof FormData, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    await submitLead(form);
    setSubmitted(true);
  };

  const select = (k: keyof FormData, placeholder: string, options: string[]) => (
    <select id={`lead-${k}`} value={form[k]} onChange={(e) => setField(k, e.target.value)} className={selectCls} style={selectStyle}>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );

  return (
    <section id="contact-form" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={img("contact-bg.webp")} alt="" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Đăng ký nhận <span className="gradient-text">tư vấn miễn phí</span>
            </h2>
            <p className="text-white/80 mb-8">Đội ngũ XANH LAUNDRY sẽ liên hệ bạn trong vòng 24 giờ</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-display font-bold text-white">Hotline</p>
                  <p className="text-sm text-white/80">{PHONE_DISPLAY}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-display font-bold text-white">Zalo</p>
                  <p className="text-sm text-white/80">Chat qua Zalo</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="xanh-card p-8 text-center bg-white/95 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Cảm ơn bạn đã đăng ký tư vấn!</h3>
                <p className="text-xanh-body">Chúng tôi sẽ liên hệ bạn trong 24 giờ.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="xanh-card p-6 md:p-8 space-y-4 bg-white/95 backdrop-blur-sm">
                <Field id="lead-name" label="Họ và tên *" error={errors.name}>
                  <input
                    required
                    id="lead-name"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    className={inputCls(errors.name)}
                    placeholder="Nguyễn Văn A"
                    autoComplete="name"
                  />
                </Field>
                <Field id="lead-phone" label="Số điện thoại *" error={errors.phone}>
                  <input
                    required
                    type="tel"
                    id="lead-phone"
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className={inputCls(errors.phone)}
                    placeholder="0901 234 567"
                    autoComplete="tel"
                  />
                </Field>
                <Field id="lead-email" label="Email" error={errors.email}>
                  <input
                    type="email"
                    id="lead-email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className={inputCls(errors.email)}
                    placeholder="email@example.com"
                    autoComplete="email"
                  />
                </Field>
                <Field id="lead-area" label="Khu vực quan tâm">
                  {select("area", "Chọn khu vực", ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "Khác"])}
                </Field>
                <Field id="lead-budget" label="Vốn đầu tư dự kiến">
                  {select("budget", "Chọn mức vốn", ["100–150 triệu", "150–200 triệu", "200–300 triệu", "Trên 300 triệu"])}
                </Field>
                <Field id="lead-hasSpace" label="Bạn đã có mặt bằng chưa?">{select("hasSpace", "Chọn", ["Đã có", "Chưa có", "Đang tìm"])}</Field>
                <button
                  type="submit"
                  className="w-full btn-cta py-3.5 rounded-lg text-base transition-transform hover:scale-[1.02] shadow-lg"
                >
                  GỬI ĐĂNG KÝ — NHẬN TƯ VẤN TRONG 24H
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
