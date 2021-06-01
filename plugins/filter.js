import Vue from 'vue'
import moment from 'moment'
const filters = {
  filterDate(date, formats = 'YYYY-MM-DD') {
    if (!date) {
      return ''
    }
    return moment(date).format(formats)
  }
}
// 全局过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
