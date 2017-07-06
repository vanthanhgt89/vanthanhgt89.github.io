<template>
  <div id="app">
    <getHeader></getHeader>
    <QuickBuy></QuickBuy>
    <router-view></router-view>
    <getFooter></getFooter>
  </div>
</template>


<script>
  import getHeader from './components/getHeader'
  import Home from './components/Home'
  import About from './components/About'
  import Banner from './components/Banner'
  import specialProduct from './components/specialProduct'
  import SaleBanner from './components/SaleBanner'
  import BabyProduct from './components/BabyProduct'
  import BoyProduct from './components/BoyProduct'
  import GirlProduct from './components/GirlProduct'
  import Toy from './components/Toy'
  import Slider from './components/Slider'
  import Slider2 from './components/Slider2'
  import Slider3 from './components/Slider3'
  import Slider4 from './components/Slider4'
  import Slider5 from './components/Slider5'
  import Slider6 from './components/Slider6'
  import Slider7 from './components/Slider7'
  import Slider8 from './components/Slider8'
  import Slider9 from './components/Slider9'
  import Slider10 from './components/Slider10'
  import Slider11 from './components/Slider11'
  import Slider12 from './components/Slider12'
  import Slider13 from './components/Slider13'
  import QuickBuy from './components/QuickBuy'
  import Sanpham from './components/Sanpham'
  import DetailProduct from './components/DetailProduct'
  import Contact from './components/Contact'
  import Introduce from './components/Introduce'
  import Blog from './components/Blog'
  import Saleoff from './components/Saleoff'
  import Favorite from './components/Favorite'
  import Cart from './components/Cart'
  import ATMBank from './components/ATMBank'
  import VisaCard from './components/VisaCard'
  import Payment from './components/Payment'
  import User from './components/User'
  import getFooter from './components/getFooter'
  export default {
    name: 'app',
    components: {
      getHeader,
      Home,
      About,
      Banner,
      specialProduct,
      SaleBanner,
      BabyProduct,
      BoyProduct,
      GirlProduct,
      Toy,
      Slider,
      Slider2,
      Slider3,
      Slider4,
      Slider5,
      Slider6,
      Slider7,
      Slider8,
      Slider9,
      Slider10,
      Slider11,
      Slider12,
      Slider13,
      QuickBuy,
      Sanpham,
      DetailProduct,
      Contact,
      Introduce,
      Blog,
      Saleoff,
      Favorite,
      Cart,
      ATMBank,
      VisaCard,
      Payment,
      User,
      getFooter
    }
}
</script>

<style>
#app {
  /*background: #ffe0b3;*/
  font-family:'Robonto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box
}

body {
  font-size: 16px;
  font-family: 'Robonto', Arial, sans-serif;
  position: relative;
}

*::before,
*::after {
  box-sizing: border-box;
}

ul, ol {
  list-style: none;
}

a {
  color: #222222;;
  text-decoration: none;
  outline: none;

}

a:hover,
a:focus {
  text-decoration: none !important;
}

input {
  border: none;
  outline: none;
}

.clear {
  clear: both;
}

 ins{
    text-decoration: none;
    display: block;
    float: left;
    color: red;
    width: 50%;
  }
  del{
    display: block;
    float: right;
  }
</style>
