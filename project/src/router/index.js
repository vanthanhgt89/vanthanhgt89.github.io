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
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Sanpham',
      component: Sanpham
    },
    {
      path: '/detail-product',
      name: 'DetailProduct',
      component: DetailProduct
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/sale-off',
      name: 'Saleoff',
      component: Saleoff
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/atm-bank',
      name: 'ATMBank',
      component: ATMBank
    },
    {
      path: '/visa-card',
      name: 'VisaCard',
      component: VisaCard
    }
  ]
})
