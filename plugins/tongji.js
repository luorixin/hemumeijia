export default ({ app: { router }, store }) => {
  router.afterEach((to, from) => {
    var _hmt = _hmt || []
    // ;(function () {
    //   document.getElementById('baidu_tj') &&
    //     document.getElementById('baidu_tj').remove()
    //   var hm = document.createElement('script')
    //   hm.src = 'https://hm.baidu.com/hm.js?xxxx'
    //   hm.id = 'baidu_tj'
    //   var s = document.getElementsByTagName('script')[0]
    //   s.parentNode.insertBefore(hm, s)
    // })()
    ;(function () {
      var bp = document.createElement('script')
      var curProtocol = window.location.protocol.split(':')[0]
      if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
      } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js'
      }
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(bp, s)
    })()
  })
}
