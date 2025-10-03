// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Must be imported

// This file explicitly tells Vite to use the Tailwind plugin.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- CRITICAL: Activates Tailwind processing
  ],
})