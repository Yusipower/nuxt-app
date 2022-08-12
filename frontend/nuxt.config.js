import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss'],
  meta: {
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap', rel: 'stylesheet' },
      { rel: 'icon', href: '/public/favicon-32x32.png' },
      { href: './assets/css/app,css', rel: 'stylesheet' },
    ]
  },
  script: [
    { src: './public/loader.js' }
  ],

  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
})