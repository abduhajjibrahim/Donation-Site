import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Donation-Site/",
  plugins: [react()], // or vue() depending on your project
})
