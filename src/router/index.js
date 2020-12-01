import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'My Task',
    component: () => import('@/views/myTasks.vue')
  },
  {
    path: '/public',
    name: 'Public Task',
    component: () => import('@/views/publicTasks.vue')
  },
  {
    path: '/archived',
    name: 'Archived Task',
    component: () => import('@/views/archivedTasks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
