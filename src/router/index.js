import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import Index from '@/components/pages/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'home',
        component: Index
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
