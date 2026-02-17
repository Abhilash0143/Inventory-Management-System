export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vite-pwa/nuxt'],

  css: ['primeicons/primeicons.css'],

  runtimeConfig: {
    public: {
      primevueTheme: 'lara',
    },
  },

  // You can keep this, but Vite proxy will solve dev requests reliably
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://192.168.50.6:4000',
        changeOrigin: true,
      },
    },
  },

  vite: {
    server: {
      allowedHosts: true,
      proxy: {
        '/api': {
          target: 'http://192.168.50.6:4000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Inbound Inventory',
      short_name: 'Inbound',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#111827',
      icons: [
        { src: 'icons/compassco icon.png', sizes: '192x192', type: 'image/png' },
        { src: 'icons/compassco icon.png', sizes: '512x512', type: 'image/png' },
      ],
    },
  },

  devtools: { enabled: false },
});
