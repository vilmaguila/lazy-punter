import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutContact from '../views/about/AboutContact.vue'
import AboutMission from '../views/about/AboutMission.vue'
import AboutVision from '../views/about/AboutVision.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'address',
        name: 'Address',
        component: AboutContact
      },
      {
        path: 'ethics',
        name: 'Ethics',
        components: {
          vision: AboutVision,
          mission: AboutMission
        } 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
