import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    allowedHosts: ['ticker-tycoon-fe-fun.fly.dev'],
    proxy: {
      '/api': {
        //target: 'http://ticker-tycoon-be:8080',
        target: "https://ticker-tycoon-be-fun.fly.dev",
        changeOrigin: true,
        timeout: 180_000,
        proxyTimeout: 180_000,
      }
    }
  }
})
