import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import LaenkarVue from './views/LaenkarVue.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: '/about',

      meta: { transition: 'zoom' }
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: LaenkarVue,
      path: '/laenkar'
    },
    {
      component: LaenkarVue,
      path: '/laenkar/:artikeltitel',
      meta: { transition: 'zoom' }
    },
    {
      component: HomeView,
      path: '/'
    }
  ]
})
