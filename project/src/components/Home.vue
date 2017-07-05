<template>
  <div class="wrap">
      <div class="container-fluid banner">
      <Banner></Banner>
      </div>
      <About></About>
      <specialProduct></specialProduct>
      <SaleBanner></SaleBanner>
      <BabyProduct></BabyProduct>
      <BoyProduct></BoyProduct>
      <GirlProduct></GirlProduct>
      <Toy></Toy>
  </div>
</template>

<script>
  import About from '../components/About'
  import Banner from '../components/Banner'
  import specialProduct from '../components/specialProduct'
  import SaleBanner from '../components/SaleBanner'
  import BabyProduct from '../components/BabyProduct'
  import BoyProduct from '../components/BoyProduct'
  import GirlProduct from '../components/GirlProduct'
  import Toy from '../components/Toy'
  export default {
    name: 'Home',
    components: {
      About,
      Banner,
      specialProduct,
      SaleBanner,
      BabyProduct,
      BoyProduct,
      GirlProduct,
      Toy
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  /* ===== product style  ==== */
.banner {
    background-image: url('../assets/banner/banner.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    height: 500px;
    
  }

  @media (min-width: 425px) {
    .banner {
      background-size: contain;
      height: 155px;

    }
  }

  @media (min-width: 768px) {
    .banner {
      background-size: contain;
      height: 280px;

    }
  }

  @media (min-width: 992px) {
    .banner {
      background-size: contain;
      height: 375px;

    }
  }

  @media (min-width: 1200px) {
    .banner {
      background-size: cover;
      height: 500px;
    }
  }


</style>
