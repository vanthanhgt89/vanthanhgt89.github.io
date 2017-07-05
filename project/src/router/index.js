import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sanpham from '@/components/Sanpham'
import DetailProduct from '@/components/DetailProduct'
import Contact from '@/components/Contact'
import Introduce from '@/components/Introduce'
import Blog from '@/components/Blog'
import Saleoff from '@/components/Saleoff'
import Favorite from '@/components/Favorite'
import Cart from '@/components/Cart'
import ATMBank from '@/components/ATMBank'
import VisaCard from '@/components/VisaCard'
import Payment from '@/components/Payment'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Sanpham',
      name: 'Sanpham',
      component: Sanpham
    },
    {
      path: '/DetailProduct',
      name: 'DetailProduct',
      component: DetailProduct
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Saleoff',
      name: 'Saleoff',
      component: Saleoff
    },
    {
      path: '/Favorite',
      name: 'Favorite',
      component: Favorite
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/ATMBank',
      name: 'ATMBank',
      component: ATMBank
    },
    {
      path: '/VisaCard',
      name: 'VisaCard',
      component: VisaCard
    }
  ]
})
