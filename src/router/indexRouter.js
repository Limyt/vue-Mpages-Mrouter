import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../pages/index/Detail.vue'
import Propt from '../pages/index/propt.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Propt',
      component: Propt
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
