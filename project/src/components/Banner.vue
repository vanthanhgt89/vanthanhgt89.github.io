<template>
  <div class="container-fluid">
     <div class="container-fluid banner">
      <div id="introduce">
      </div>
      <div id='shop'>
        <div class="shop-button">
          <a href="" class="shop">Mua ngay</a>
        </div>
      </div>
      <div id="go-down">
        <a href="#about" id="go-about"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /*=======banner style=======*/
  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    height: 155px;
    z-index: 2;
  }
  
   @media (min-width: 1px) {
    .banner {
      background-size: contain;
      height: 155px;
    }
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
  #go-down {
    position: absolute;
    bottom: -22px;
    left: 50%;
    margin: 15px auto;
  }

  @media (min-width: 1px) {
    #go-down {
      bottom: -10px;
    }
  }

  @media (min-width: 768px) {
    #go-down {
      bottom: -22px;
    }
  }

  #go-about {
    display: block;
    margin: 20px auto;
    width: 26px;
    height: 42px;
    border-radius: 26px;
    border: 2px solid white;
    position: relative;
    overflow: hidden;
  }

  @media (min-width: 1px) {
    #go-about {
      width: 16px;
      height: 26px;
    }
  }

  @media (min-width: 768px) {
    #go-about {
      width: 26px;
      height: 42px;
    }
  }

  #go-about::before {
    position: absolute;
    top: 5px;
    left: 52%;
    width: 5px;
    height: 5px;
    margin-left: -2px;
    content: '';
    animation: run 1.5s -1s cubic-bezier(.68, -.55, .265, 1.55) infinite;
    border-radius: 100%;
    background-color: #fff;
  }

  @keyframes run {
    from {
      top: 5px;
      opacity: 1
    }
    to {
      top: 50px;
      opacity: 0
    }
  }

  #shop {
    width: 50%;
    height: auto;
  }

  .shop-button {
    width: 80%;
    height: 50px;

  }

  .shop-button > a {
    display: inline-block;
    padding: 15px 20px;
    color: white;
    background-image: url("../assets/bgTab/rmbg.png");
    background-repeat: no-repeat;
    background-size: contain;
    text-transform: capitalize;
    font-size: 1.2em;
    margin-left: 5%;
  }

  @media (min-width: 1px) {
    .shop-button {
      width: 80%;
      height: 29px;
    }

    .shop-button > a {
      padding: 8px 20px;
      font-size: 0.8em;
    }
  }

  @media (min-width: 768px) {
    .shop-button {
      width: 80%;
      height: 39px;
    }

    .shop-button > a {
      padding: 8px 14px;
      font-size: 1em;
    }
  }

  @media (min-width: 992px) {
    .shop-button {
      height: 50px;
    }

    .shop-button > a {
      padding: 12px 27px;
      font-size: 1.2em;
    }
  }

  .shop-button > a:hover {
    background-image: url("../assets/bgTab/rmbg-hover.png");

  }

  #introduce {
    width: 55%;
    font-family: "Courgette", cursive;
    font-size: 2em;
    color: white;
    text-transform: capitalize;
    z-index: -1;
  }

  @media (min-width: 1px) {
    #introduce {
      font-size: 0.8em;
    }
  }

  @media (min-width: 768px) {
    #introduce {
      font-size: 1.2em;
    }
  }

  @media (min-width: 992px) {
    #introduce {
      font-size: 2em;
    }
  }

  @media (min-width: 1170px) {
    #introduce {
      font-size: 2.5em;
    }
  }

</style>
