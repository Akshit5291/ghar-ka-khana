// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all API requests starting with '/api' to the backend server
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

/*
WHY THIS PROXY IS THE BEST SOLUTION FOR DEVELOPMENT:

1. Eliminates CORS Issues: During development, your frontend (localhost:5173) and 
   backend (localhost:5000) are different origins. Browsers block cross-origin requests 
   by default (CORS policy). This proxy makes the browser think all requests are 
   coming from the same origin.

2. Simplifies API Calls: You can use relative paths ('/api/endpoint') instead of 
   full URLs ('http://localhost:5000/api/endpoint'), making your code cleaner and 
   easier to switch between development and production.

3. Automatic Rewriting: The proxy handles all the complexity of forwarding requests 
   and responses transparently.

4. Development-Only: This configuration only affects the development server. In 
   production, you'll need a different approach (like configuring your production 
   server or using environment variables for API base URLs).
*/