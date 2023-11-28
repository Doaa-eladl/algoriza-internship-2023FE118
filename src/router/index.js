import { createRouter, createWebHistory } from 'vue-router'
import Defultlayout from '../../src/Layout/DefultLayout.vue'
import Loginlayout from '../../src/Layout/LoginLayout.vue'

import Hotel from '../views/Hotel.vue'
import Home from '../views/Home.vue'
import Mytrips from '../views/Mytrips.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Booking from '../views/Booking.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { Layout:Defultlayout }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { 
      Layout:Loginlayout,
      componentname:'login'
     }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { 
      Layout:Loginlayout,
      componentname:'login'
    }
  },
  {
    path: '/mytrips',
    name: 'mytrips',
    component: Mytrips,
    meta: { Layout:Defultlayout }
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: Hotel,
    meta: { Layout:Defultlayout }
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking,
    meta: { 
      Layout:Loginlayout,
      componentname:'booking'
     },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
