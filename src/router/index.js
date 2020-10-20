import Vue from 'vue'
import VueRouter from 'vue-router'
import travel from '../views/travel.vue'
import assistant from '../views/assistant.vue'
import bourn from '../views/bourn.vue'
import community from '../views/community.vue'
import homestay from '../views/homestay.vue'
import hotel from '../views/hotel.vue'
import kit from '../views/kit.vue'
import stor from '../views/stor.vue'
import login from '../views/login.vue'
import sign from '../views/sign.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/community',
    name: 'community',
    component: community
  },
  {
    path: '/sign',
    name: 'sign',
    component: sign
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    children: [
      {
        path: '/',
        component: resolve => require(['../components/alogin.vue'], resolve),
      },
      {
        path: 'b',
        component: resolve => require(['../components/note_login.vue'], resolve),
      }],
  },
  {
    path: '/homestay',
    name: 'homestay',
    component: homestay
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: hotel
  },
  {
    path: '/kit',
    name: 'kit',
    component: kit
  },
  {
    path: '/stor',
    name: 'stor',
    component: stor
  },
  {
    path: '/bourn',
    name: 'bourn',
    component: bourn
  },
  {
    path: '/assistant',
    name: 'assistant',
    component: assistant
  },
  {
    path: '/',
    name: 'travel',
    component: travel
  }
]

const router = new VueRouter({
  routes
})

export default router
