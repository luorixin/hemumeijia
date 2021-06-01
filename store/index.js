import Util from '../services/utils/util'
import moment from 'moment'

export const strict = false

const state = () => ({
  locales: ['en', 'zh-CN'],
  locale: 'zh-CN',
  currentMenu: 'index',
  hideHead: false
})

const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) > -1) {
      state.locale = locale
      Util.setCookie('locale', locale)
    }
  },
  SET_HIDEHEAD(state, hideHead) {
    state.hideHead = hideHead
  },
  SET_MENU(state, currentMenu) {
    state.currentMenu = currentMenu
  }
}

const actions = {
  async nuxtServerInit({ commit }, { app }) {
    console.log('init')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
