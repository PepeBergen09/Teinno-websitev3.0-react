import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    
    // Define global constants that will be replaced at build time
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION || '3.0.0'),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
      __APP_ENV__: JSON.stringify(mode),
    },
    
    // Server configuration for development
    server: {
      port: 5173,
      host: true, // Allow external connections
      open: false, // Don't auto-open browser
    },
    
    // Preview server configuration
    preview: {
      port: 4173,
      host: true,
    },
    
    // Build configuration
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      minify: mode === 'production' ? 'esbuild' : false,
      
      // Rollup options
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor chunk for better caching
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
          },
        },
      },
    },
    
    // Environment variables prefix
    envPrefix: 'VITE_',
  }
})
