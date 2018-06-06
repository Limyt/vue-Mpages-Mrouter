import Vue from 'vue'
import cell from './cell.vue'
import VueResource from 'vue-resource'
import router from '../../router/cellRouter.js'

// 引入element组件化框架
import ElementUI from 'element-ui'
// 引入样式文件
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#cell',
  router,
  components: { cell },
  template: '<cell/>'
})
