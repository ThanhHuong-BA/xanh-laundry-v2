export const PHONE_DISPLAY = "0868 430 549";
export const PHONE_TEL = "tel:0868430549";
export const ZALO_URL = "https://zalo.me/0868430549";

/** Resolve a file in public/images, respecting Vite's base path. */
export const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export function scrollToForm() {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
}

export const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(" ");
