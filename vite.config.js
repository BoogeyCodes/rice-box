import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// '/' for local dev & root-domain hosts (Railway). Set VITE_BASE_PATH=/pizza-venue/ for a Pages sub-path.
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react()],
})
