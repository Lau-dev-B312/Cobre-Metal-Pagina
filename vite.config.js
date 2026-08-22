import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Cobre-Metal-Pagina/',
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})
