/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  // `.container` is defined in index.css (fixed 1200px column), not Tailwind's breakpoint container.
  corePlugins: { container: false },
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "sans-serif"], display: ["Montserrat", "sans-serif"] },
      colors: {
        border: "hsl(0 0% 90%)",
        input: "hsl(0 0% 90%)",
        ring: "hsl(192 100% 50%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(0 0% 17%)",
        primary: { DEFAULT: "hsl(192 100% 50%)", foreground: "hsl(0 0% 100%)" },
        secondary: { DEFAULT: "hsl(165 100% 39%)", foreground: "hsl(0 0% 100%)" },
        destructive: { DEFAULT: "hsl(0 84.2% 60.2%)", foreground: "hsl(0 0% 100%)" },
        muted: { DEFAULT: "hsl(0 0% 96%)", foreground: "hsl(0 0% 40%)" },
        accent: { DEFAULT: "hsl(50 100% 50%)", foreground: "hsl(0 0% 17%)" },
        card: { DEFAULT: "hsl(0 0% 100%)", foreground: "hsl(0 0% 17%)" },
        xanh: {
          cyan: "hsl(192 100% 50%)",
          aqua: "hsl(181 100% 40%)",
          teal: "hsl(165 100% 39%)",
          yellow: "hsl(50 100% 50%)",
          navy: "hsl(234 66% 30%)",
          charcoal: "hsl(0 0% 17%)",
          "light-gray": "hsl(0 0% 96%)",
          body: "hsl(0 0% 30%)",
        },
      },
      borderRadius: { lg: "0.75rem", md: "calc(0.75rem - 2px)", sm: "calc(0.75rem - 4px)" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        progress: { from: { width: "0%" }, to: { width: "100%" } },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        progress: "progress 4s linear",
      },
    },
  },
  plugins: [],
};
