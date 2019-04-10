import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Personal from './views/Personal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    }
  ]
})
