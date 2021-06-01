import Cookies from 'js-cookie'
/**
 * 工具函数
 */
const Utils = {}

/**
 * 邮箱验证
 * @param {String} email 邮箱名
 */
Utils.validateEmail = email => {
  if (!email) {
    return false
  }
  return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(email)
}

/**
 * url验证
 * @param {String} url url
 */
Utils.validateUrl = url => {
  if (!url) {
    return false
  }
  // eslint-disable-next-line no-useless-escape
  return /^((https|http):\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(
    url
  )
}

/**
 * 手机号验证
 * @param {String}} phone
 * @returns
 */
Utils.validatePhone = phone => {
  if (!phone) {
    return false
  }
  return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
    phone
  )
}

/**
 * 格式化时间
 * @param {Date} timestamp    时间对象
 * @param {String} formats      格式
 */
Utils.timestampToTime = (timestamp, formats) => {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  formats = formats || 'Y-m-d H:i:s'

  const zero = function (value) {
    if (value < 10) {
      return '0' + value
    }
    return value
  }

  // const myDate = timestamp * 1000 ? new Date(timestamp * 1000): new Date();
  const myDate = new Date(timestamp)

  const year = myDate.getFullYear()
  const month = zero(myDate.getMonth() + 1)
  const day = zero(myDate.getDate())

  const hour = zero(myDate.getHours())
  const minute = zero(myDate.getMinutes())
  const second = zero(myDate.getSeconds())

  return formats.replace(/Y|m|d|H|i|s/gi, function (matches) {
    return {
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minute,
      s: second
    }[matches]
  })
}

const TokenKey = 'fht-token'

Utils.getToken = () => {
  return Cookies.get(TokenKey)
}

Utils.setToken = token => {
  return Cookies.set(TokenKey, token)
}

Utils.removeToken = () => {
  return Cookies.remove(TokenKey)
}

Utils.setCookie = (key, value) => {
  return Cookies.set(key, value)
}

Utils.getCookie = key => {
  return Cookies.get(key)
}

/**
 * 存储localStorage
 */
Utils.setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
Utils.getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
Utils.removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export default Utils
