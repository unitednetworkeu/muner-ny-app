import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`   -> sito per Cloudflare Pages (PWA installabile e offline)
// `npm run preview:single` -> un unico file HTML per le anteprime di prova
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    mode === 'single'
      ? viteSingleFile()
      : VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png'],
          manifest: {
            name: 'MUNER NY – Guida di New York',
            short_name: 'MUNER NY',
            description: 'Video, schede e visite guidate per gli studenti MUNER NY',
            theme_color: '#0b2a4a',
            background_color: '#0b2a4a',
            display: 'standalone',
            start_url: '/',
            icons: [
              { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
              { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
            ],
          },
          workbox: {
            globPatterns: ['**/*.{js,css,html,svg,png,jpg,webp,mp3,json}'],
            maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
            // immagini e dati Open Access del Met: salvati sul telefono al primo caricamento
            runtimeCaching: [
              {
                urlPattern: /^https:\/\/(images|collectionapi)\.metmuseum\.org\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'met-open-access',
                  expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 180 },
                  cacheableResponse: { statuses: [0, 200] },
                },
              },
            ],
          },
        }),
  ],
}))
