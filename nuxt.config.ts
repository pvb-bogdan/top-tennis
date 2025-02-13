// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Top Racket Demo | Try Tennis Rackets Before You Buy',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'Demo a wide selection of tennis rackets with Top Racket Demo. No deposit, no fees, just real-world playtesting. Book your demo session today and find the perfect racket!' },
      { name: 'keywords', content: 'tennis rackets, racket demo, tennis, playtest, try before you buy, tennis equipment, tennis gear, demo session, racket selection, ERSA certified, tennis coach, stringing, tennis tips, racket reviews' },
      { name: 'author', content: 'Trip Solutions' },
      { property: 'og:title', content: 'Top Racket Demo | Try Tennis Rackets Before You Buy' },
      { property: 'og:description', content: 'Demo a wide selection of tennis rackets with Top Racket Demo. No deposit, no fees, just real-world playtesting. Book your demo session today and find the perfect racket!' },
      { property: 'og:image', content: 'an image when i have it' },
      { property: 'og:url', content: 'site when up' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Top Racket Demo | Try Tennis Rackets Before You Buy' },
      { name: 'twitter:description', content: 'Demo a wide selection of tennis rackets with Top Racket Demo. No deposit, no fees, just real-world playtesting. Book your demo session today and find the perfect racket!' },
      { name: 'twitter:image', content: 'an image when i have it' }
    ]
    }
  },
  css: ['~/assets/css/main.css'],
  alias: {
    "@": "/"
  },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
})
