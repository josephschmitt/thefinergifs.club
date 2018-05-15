module.exports = {
  head: {
    title: 'The Finer Gifs Club: Only the finest gifs from The Office (US)',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Return to another age: a time of ' +
          'refinement and civility and gifs. There is no paper, no plastic and no work talk ' +
          'allowed. It\'s very exclusive.'}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'manifest', href: '/site.webmanifest'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg'},
    ]
  },
  css: [
    '~~/node_modules/@vuikit/theme/dist/vuikit.min.css',
  ],
  loading: { color: '#3B8070' },
  router: {
    middleware: 'searchQuery',
  },
  plugins: [
    {src: '~/plugins/vuikit.js', ssr: false},
  ],
  modules: [
    ['@nuxtjs/google-analytics'],
  ],
  'google-analytics': {
    id: 'UA-38697886-2',
  },
  env: {
    CDN_BASE_URL: process.env.CDN_BASE_URL || 'https://cdn.thefinergifs.club',
    API_BASE_URL: process.env.API_BASE_URL || 'https://api.thefinergifs.club',
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
