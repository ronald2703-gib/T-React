import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/T-React/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'icons.svg',
        'apple-touch-icon.png',
        'logo.png'
      ],
      manifest: {
        id: './',
        name: 'MOTUShonda | Comunidad XR & CRF',
        short_name: 'MOTUShonda',
        description: 'Comunidad off-road de Honda XR & CRF.',
        lang: 'es',
        scope: './',
        start_url: './',
        display: 'standalone',
        theme_color: '#1a1a1a',
        background_color: '#1a1a1a',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'pwa-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
})