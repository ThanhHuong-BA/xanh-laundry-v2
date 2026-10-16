import type { ReactNode } from "react";
import { cx } from "../lib";

/** Centered section heading (h2 + optional subtitle) used by most sections. */
export function SectionTitle({
  children,
  sub,
  light,
  subClassName,
}: {
  children: ReactNode;
  sub?: ReactNode;
  light?: boolean;
  subClassName?: string;
}) {
  return (
    <div className="text-center mb-14">
      <h2
        className={cx(
          "font-display text-3xl md:text-4xl font-extrabold mb-4",
          light ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {children}
      </h2>
      {sub && <p className={cx("text-xanh-body", subClassName)}>{sub}</p>}
    </div>
  );
}

export const Grad = ({ children }: { children: ReactNode }) => <span className="gradient-text">{children}</span>;
