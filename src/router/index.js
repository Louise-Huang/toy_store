import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/foreStage/Dashboard.vue'
import Index from '@/components/foreStage/Index.vue'

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
