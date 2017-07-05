<template>
  <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-9">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="6"></li>
                <li data-target="#myCarousel" data-slide-to="7"></li>
              </ol>

              <!-- Wrapper for slides -->
              <div class="carousel-inner">

                <div class="item active">
                  <img src="../assets/slider1/sale-05.jpg" style="width:100%;">
                </div>

                <div class="item">
                  <img src="../assets/slider1/sale-06.jpg" style="width:100%;">
                </div>

                <div class="item">
                  <img src="../assets/slider1/sale-07.png" style="width:100%;">
                </div>

                <div class="item">
                  <img src="../assets/slider1/sale-bn.jpg" style="width:100%;">
                </div>
                <div class="item">
                  <img src="../assets/slider1/sale-bn2.jpg" style="width:100%;">
                </div>
                <div class="item">
                  <img src="../assets/slider1/sale-bn3.jpg" style="width:100%;">
                </div>
                <div class="item">
                  <img src="../assets/slider1/sale.bn4.jpg" style="width:100%;">
                </div>

              </div>

            </div>

          </div>

          <div class="col-sm-3 col-md-3 post">
            <img src="../assets/quangcao/quangcao.jpg" alt="">
          </div>

        </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @media (min-width: 425px) {
    .post > img {
      display: none;
    }
  }
 @media (min-width: 768px) {
    .post > img {
      display: block;
      height: 159px;
    }
  }

  @media (min-width: 992px) {
    .post > img {
      height: 208px;
    }
  }

  @media (min-width: 1170px) {
    .post > img {
      height: 246px;;
    }
  }
  .container .row{
    margin:20px 0;
  }
  
 
</style>
