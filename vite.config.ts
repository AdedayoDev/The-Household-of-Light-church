import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
     tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animation': ['framer-motion'],
          'vendor-icons': ['react-icons', 'lucide-react'],
          'vendor-ui': ['@hookform/resolvers', 'react-hook-form', 'zod'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
