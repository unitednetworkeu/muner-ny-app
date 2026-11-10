# MUNER NY – Guida di New York

Web app (PWA) per gli studenti MUNER NY: video sui luoghi di New York con schede di approfondimento e quiz, visite guidate ai musei (in arrivo). Italiano e inglese.

## Dove si modificano i contenuti
- `src/data/videos.ts` – i 9 video: testi IT/EN, date, quiz. Per collegare un video YouTube incolla il suo ID nel campo `youtubeId` (es. per `https://youtu.be/AbC123xyz` l'ID è `AbC123xyz`).
- `src/i18n.tsx` – i testi dell'interfaccia.

## Pubblicazione (Cloudflare Pages)
- Framework preset: Vite · Build command: `npm run build` · Output: `dist`
- Ogni caricamento su GitHub (branch `main`) viene pubblicato automaticamente.

## Sviluppo locale (facoltativo)
```
npm install
npm run dev
```
