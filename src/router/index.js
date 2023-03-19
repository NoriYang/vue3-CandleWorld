import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'Index',
        name: 'Index',
        component: () => import('../views/Home/Index.vue')
      },
      {
        path: 'productslist',
        name: 'ProductsList',
        component: () => import('../views/Home/ProductsList.vue')
      },
      {
        path: 'product/:productId',
        name: 'product',
        component: () => import('../views/Home/Product.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Dashboard/Products.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../components/Dashboard/Orders.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
