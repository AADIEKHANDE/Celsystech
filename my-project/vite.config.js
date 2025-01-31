import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import daisyui from 'daisyui'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()],
    build: {
      rollupOptions: {
        external: ['react-scroll','typewriter-effect'],
      },
    },
    server: {
      host: true, // Ensure the server is accessible from any network
      allowedHosts: [
        '6dbd-2401-4900-57cd-4a8d-7578-330b-db70-1bb4.ngrok-free.app'
      ]
    },
})


