<template>
  <div class="container">
   <div class="row " id="about">
    <div class="col-xs-* col-sm-6 col-md-6 about-text">
      <h1 class="about-title text-center">Chúng tôi có gì?</h1>

      <p>Xuất phát từ tình yêu dành cho các bé thơ, sự cảm thông và chia sẻ với các mẹ trong suốt
        thời kỳ mang bầu và chăm sóc em bé, Hệ thống các cửa hàng <strong style="color:orange">Bibo Store</strong> đã ra đời với mong muốn
        đem đến một thế giới tiện ích cho các mẹ nơi các mẹ có thể mua sắm cho con yêu những sản phẩm an toàn,
        thuận tiện, đẹp mắt, nhanh chóng ...
      </p>

      <div class="row text-center">
        <router-link to="product">
          <button class="btn btn-primary btn-detail">Xem chi tiết</button>
        </router-link>
      </div>
    </div>
    <div class="col-xs-* col-sm-6 col-md-6 about-img">
      <div class='about-img-large'>
        <div class="about-img-item">
          <div class="about-shop">

        <router-link to="product">
            Mua ngay
        </router-link>

          </div>
        </div>
      </div>
     

    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #about {
  margin: 50px 0;
}

@media (min-width: 1px) {
  #about {
    margin: 10px 0;
  }
}

@media (min-width: 768px) {
  #about {
    margin: 50px 0;
  }
}

.about-title{
  margin-top:50px;
  text-transform: uppercase;
}

.about-text{
  position: relative;
}
.about-text > p {
  line-height: 30px;
  text-align: justify;
}

@media (min-width: 1px) {

  .about-text > p {
    font-size: 0.8em;
  }
  .about-title {
    font-size: 1.2em;
  }
}

@media (min-width: 768px) {
  .about-title {
    font-size: 2em;
  }

  .about-text > p {
    font-size: 0.8em;
  }
}

@media (min-width: 992px) {
  .about-text > p {
    font-size: 1em;
  }
}

.about-img {
  position: relative;
  margin-top: 30px;
  height: auto;
  display: flex;
}

.about-img-large {
  width: 60%;
  height: 331px;
  display: flex;
  background-image: url("../assets/boy/model1.jpg");
  background-repeat: repeat;
  background-position: 40% 0;
  background-attachment: fixed;
  border: 1px solid;
  border-radius: 50%;
  margin: auto;
  position: relative;
  overflow: hidden;
}

@media (min-width: 1px) {
  .about-img-large {
    height: 198px;
  }
}

@media (min-width: 425px) {
  .about-img-large {
    height: 232px;
  }
}


@media (min-width: 768px) {
  .about-img-large {
    height: 203px;
    background-size: 32%;
  }
}

@media (min-width: 992px) {
  .about-img-large {
    height: 269px;
    background-size: contain;
  }
}

@media (min-width: 1170px) {
  .about-img-large {
    height: 331px;
    background-size: initial;
  }
}

.about-img-item {
  position: absolute;
  content: '';
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;

}

.about-shop {
  width: 40%;
  height: 50px;
  border: 2px solid white;
  margin: auto;
  display: flex;
  border-radius: 5px;
}

.about-shop >a{
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .about-shop {
    display: none;
  }
}

@media (min-width: 992px) {
  .about-shop {
    display: flex;
  }
}

.about-shop:hover {
  border: 2px solid black;
  background: white;
}

.about-shop:hover > a {
  color: black;
}

.about-shop > a {
  display: block;
  margin: auto;
  color: white;
  text-align: center;
}

.btn-detail{
  width: 25%;
}
</style>
