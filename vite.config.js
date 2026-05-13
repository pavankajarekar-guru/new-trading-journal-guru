import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Trading Journal Guru',
        short_name: 'TJGuru',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone'
      }
    })

  ]
})
