import sitemap from './config/sitemap'
const resolve = require('path').resolve

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '禾木美家_官网_家居定制_成都家具定制_hemumeijia',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        itemprop: 'name',
        content: '禾木美家_官网_家居定制_成都家具定制_hemumeijia'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '成都禾木美家定制家具有限公司是一家专业生产整体衣柜、衣帽 间、书柜、酒柜等多种系列的家居制品公司，同时也是集设计、 销售、服务于一体的一家综合性家居服务公司。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '禾木美家,家居定制,成都家居,hemumeijia,hemu'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/rem.js', type: 'text/javascript', charset: 'utf-8' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/index.css',
    'element-ui/lib/theme-chalk/reset.css',
    // 'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/reset.css',
    '@/assets/css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui/element-ui',
    '@/plugins/filter',
    '@/plugins/i18n',
    {
      src: '@/plugins/tongji',
      ssr: false
    }
    // { src: '@/plugins/wow', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxtjs/axios'],

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'http://hemumeijia.com/sitemap.xml'
  },

  sitemap: sitemap,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    analyze: true,
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    vendor: ['vue-i18n'], // webpack vue-i18n.bundle.js
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    // mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
    // base: process.env.NODE_ENV === 'production' ? './' : '/',
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    },
    middleware: 'i18n',
    extendRoutes(routes) {
      routes.push({
        name: 'custom',
        path: '*',
        redirect: '/'
      })
    }
  },
  server: {
    port: 5000
  },
  axios: {
    proxy: true,
    baseURL: 'http://localhost:8093/'
  },
  proxy: {
    '/business/': {
      target: 'http://127.0.0.1:8093/',
      pathRewrite: {
        '^/business/': ''
      }
    },
    '/public/': {
      target: 'http://127.0.0.1:8999/'
    }
  },
  generate: {
    dir: 'hemumeijia'
  }
}
