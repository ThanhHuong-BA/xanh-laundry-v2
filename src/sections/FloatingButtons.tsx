import { MessageCircle, MessageSquare, Phone } from "lucide-react";
import { PHONE_TEL, ZALO_URL } from "../lib";

const buttons = [
  { href: PHONE_TEL, label: "Hotline", Icon: Phone, bg: "#00C896" },
  { href: "https://m.me/462300140571623", label: "Messenger", Icon: MessageCircle, bg: "#0084FF" },
  { href: ZALO_URL, label: "Zalo", Icon: MessageSquare, bg: "#0068FF" },
];

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {buttons.map(({ href, label, Icon, bg }) => {
        const external = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="group w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform relative"
            style={{ background: bg }}
          >
            <Icon className="h-6 w-6 text-white" />
            <span className="absolute right-full mr-3 whitespace-nowrap bg-foreground text-background text-xs font-display font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
              {label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
