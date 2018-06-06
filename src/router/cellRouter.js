import Router from 'vue-router'
import Vue from 'vue'
import Not from '../pages/cell/not.vue'
import Propt from '../pages/cell/propt.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Propt',
      component: Propt
    },
    {
      path: '/not',
      name: 'Not',
      component: Not
    }
  ]
})
