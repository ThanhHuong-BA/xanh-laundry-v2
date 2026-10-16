# Xanh Laundry — franchise landing page

Production build of `project/Xanh Laundry v2.dc.html` (Claude Design handoff), built with Vite + React + TypeScript + Tailwind CSS 3.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Structure

- `src/sections/` — one component per page section, in page order (see `src/App.tsx`).
- `src/components/` — shared pieces (accent heading, CTA button, lightbox…).
- `src/lib.ts` — phone/Zalo constants, `img()` helper, `scrollToForm()`.
- `public/images/` — every image the page uses, renamed to ASCII file names.

## Things to wire up

- **Lead form** — `submitLead()` in `src/sections/ContactForm.tsx` is a no-op; connect it to the CRM / Sheet / email endpoint.
- **Opening videos** — fill `src` in `openingVideos` (`src/sections/Process.tsx`) with an `.mp4` URL or a YouTube embed URL.
- **Blog covers** — hot-linked from xanhlaundry.com (`src/sections/Blog.tsx`).
