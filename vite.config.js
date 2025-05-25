import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/healthcare-dashboard/' // ⚠️ use your actual GitHub repo name
})
