import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포: /kdn20/ 경로 기준
export default defineConfig({
  plugins: [react()],
  base: '/kdn20/',
  build: {
    outDir: 'docs',
    sourcemap: false,
  },
  server: {
    host: true,
    port: 5175,
    open: true,
  },
})
