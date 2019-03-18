const pkg = require('./package')
const postcssSVG = require('postcss-svg')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "Preon | Functional CSS Library",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        href: 'https://fonts.googleapis.com/css?family=Heebo:100,400,500,700,800',
        rel: 'stylesheet'
      },
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css',
        rel: 'stylesheet'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/assets/scss/style.scss',
    '~/plugins/youtube.js',
    '~/plugins/syntax-highlighting.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    [
      'nuxt-sass-resources-loader', 
      [
        '@/assets/**/*.scss',
      ]
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
    extractCSS: {
      allChunks: true
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'postcss-encode-background-svgs': {},
        'postcss-svgo': {}
      }
    }
  }
}
