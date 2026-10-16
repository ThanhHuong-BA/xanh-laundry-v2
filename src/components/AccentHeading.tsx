import { cx } from "../lib";

/** Card heading with a vertical gradient bar on the left (used by the Equipment, Gallery and Video cards). */
export function AccentHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className={cx("mb-6 pb-4 flex gap-4 border-b border-border", sub ? "items-start" : "items-center")}>
      <div className={cx("w-1 self-stretch gradient-bg rounded-full shrink-0", sub ? "min-h-[44px]" : "min-h-[28px]")} />
      <div>
        <h3 className="font-display font-extrabold text-foreground text-xl leading-tight">{title}</h3>
        {sub && <div className="text-xs text-xanh-body mt-1">{sub}</div>}
      </div>
    </div>
  );
}
