import VueI18n from 'vue-i18n'
import Vue from 'vue'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enMessage from '~/locale/en.js'
import zhCNMessage from '~/locale/zh-CN.js'

Vue.use(VueI18n)

const messages = {
  en: Object.assign(enMessage, enLocale),
  'zh-CN': Object.assign(zhCNMessage, zhLocale)
}

// Create VueI18n instance with options

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh-CN',
    messages // set locale messages
  })
  // app.i18n.path = link => {
  //   if (app.i18n.locale === app.i18n.fallbackLocale) {
  //     return `/${link}`
  //   }
  //   return `/${app.i18n.locale}/${link}`
  // }
}
