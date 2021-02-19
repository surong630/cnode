import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(ElementUI);
Vue.filter('formatTab',function(val) {
  if(val.top === true) {
    return '置顶'
  }else if(val.good === true) {
    return '精华'
  }else if(val.tab === 'share') {
    return '分享'
  }else if(val.tab === 'ask') {
    return '问答'
  }else {
    return '提问'
  }
})
Vue.filter('formatDay',function(val){
  if(!val) {return ''}
  let date = new Date(val)
  // 现在的时间-传入的时间 = 相差的时间(单位=毫秒)
  let time = new Date().getTime() - date.getTime()
  if(time < 0) {
    return ''
  }else if((time / 1000) < 30) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 1000) < 60) {
  return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
