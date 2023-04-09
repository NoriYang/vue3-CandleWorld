import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/Frontend/HomeView.vue'),
    children: [
      {
        path: '',
        name: 'FrontendIndex',
        component: () => import('../views/Frontend/Index.vue')
      },
      {
        path: 'about',
        name: 'FrontendAbout',
        component: () => import('../views/Frontend/About.vue')
      },
      {
        path: 'productslist/:sidebarTarget',
        name: 'FrontendProductLists',
        component: () => import('../views/Frontend/ProductLists.vue')
      },
      {
        path: 'product/:productId',
        name: 'FrontendProduct',
        component: () => import('../views/Frontend/Product.vue')
      },
      {
        path: 'favorite',
        name: 'FrontendFavorite',
        component: () => import('@/views/Frontend/Favorite.vue')
      },
      {
        path: 'shoppingcart',
        name: 'FrontendShoppingcart',
        component: () => import('@/views/Frontend/ShoppingCart.vue')
      },
      {
        path: 'checkorder',
        name: 'FrontendCheckOrder',
        component: () => import('@/views/Frontend/CheckOrder.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'FrontendCheckOut',
        component: () => import('@/views/Frontend/CheckOut.vue')
      }
    ]
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   redirect: '/home/productslist',
  //   component: Home,
  //   children: [
  //     {
  //       path: 'productslist/:sidebarTarget',
  //       name: 'ProductsList',
  //       component: () => import('../views/Home/ProductsList.vue')
  //     },
  //     {
  //       path: 'about',
  //       name: 'About',
  //       component: () => import('../views/Home/About.vue')
  //     },
  //     {
  //       path: 'product/:productId',
  //       name: 'product',
  //       component: () => import('../views/Home/Product.vue')
  //     },
  //     {
  //       path: 'favorite',
  //       name: 'Favorite',
  //       component: () => import('@/views/Home/Favorite.vue')
  //     },
  //     {
  //       path: 'shoppingcart',
  //       name: 'shoppingcart',
  //       component: () => import('@/views/Home/ShoppingCart.vue')
  //     },
  //     {
  //       path: 'checkorder',
  //       name: 'CheckOrder',
  //       component: () => import('@/views/Home/CheckOrder.vue')
  //     },
  //     {
  //       path: 'checkout/:orderId',
  //       name: 'CheckOut',
  //       component: () => import('@/views/Home/CheckOut.vue')
  //     }
  //   ]
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Dashboard/Login.vue')
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
        component: () => import('../views/Dashboard/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Dashboard/Coupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { left: 0, top: 0, behavior: 'smooth' }
  }
})

export default router
