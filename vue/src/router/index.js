import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import New from '@/components/New'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
