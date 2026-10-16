import { cx, scrollToForm } from "../lib";

/** Yellow "NHẬN TƯ VẤN NGAY" button that scrolls to the contact form. */
export function CtaButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={scrollToForm}
      className={cx("btn-cta px-8 py-4 rounded-lg text-base transition-transform hover:scale-105 shadow-lg", className)}
    >
      NHẬN TƯ VẤN NGAY
    </button>
  );
}
