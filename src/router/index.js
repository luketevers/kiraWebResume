import Vue from 'vue'
import Router from 'vue-router'
import Resume from '../complete/resume'
import Portfolio from '../complete/portfolio'
import Whoami from '../complete/whoami'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'whoami',
      component: Whoami
    }, {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    }, {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
})
