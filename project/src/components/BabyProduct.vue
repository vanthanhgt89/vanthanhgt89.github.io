<template>
  <div class="container">
    <div class="row" id="section1">
      <div class="box-title">
        <div class="title-left">
          <span class="">Đồ cho bé sơ sinh</span>
        </div>
        <div class="title-right">
          <router-link to="">Toàn bộ sản phẩm  <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
        </div>
      </div>

      <div class="col-xs-* col-sm-6 col-md-6">
       <div class="container-item1">
       <router-link to="Sanpham"> <img :src="sosinhImg[0].src" alt="sosinhImg[0].name" class="img-responsive"></router-link>
        <div class="name">
          <div class="text-l"></div>  
          <router-link to="Sanpham"><button class="btn btn-primary"> Xem toàn bộ sản phẩm</button></router-link>
        </div>
      </div>
    </div>
    <div class="col-xs-* col-sm-6 col-md-6">
     <div class="col-xs-* col-sm-4 col-md-4" v-for="item in data1">
       <div class="container-item-s">
        <router-link to="DetailProduct"><img :src="item.src" class="img-responsive" alt=""></router-link>
        <div class="info">
          <div class="title">
            <router-link to="">{{item.name}}</router-link>
          </div>
          <div class="price">
            <router-link to="DetailProduct"><ins>{{item.price}}</ins></router-link>
            <router-link to="DetailProduct"><del>{{item.priceDel}}</del></router-link>
          </div>
        </div>
        <div class="cart-s">
          <button class="btn btn-info couter-heart">Yêu thích <i class="fa fa-heart-o" aria-hidden="true"></i></button>
          <button class="btn btn-danger couter-cart" data-toggle="modal" data-target="#quickbuy">Mua hàng <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
        </div>
      </div>

    </div>
  </div>
</div>
<div class="row second-row" >
  <div class="col-sm-3 col-md-3" v-for="item in data2">
    <div class="container-item-l">
     <router-link to="DetailProduct"> <img :src="item.src" class="img-responsive" alt=""></router-link>
      <div class="info">
        <div class="title">
          <router-link to="">{{item.name}}</router-link>
        </div>
        <div class="price">
           <router-link to="DetailProduct"><ins>{{item.price}}</ins></router-link>
            <router-link to="DetailProduct"><del>{{item.priceDel}}</del></router-link>
        </div>
      </div>
      <div class="cart-l">
        <button class="btn btn-info couter-heart">Yêu thích <i class="fa fa-heart-o" aria-hidden="true"></i></button>
        <button class="btn btn-danger couter-cart" data-toggle="modal" data-target="#quickbuy">Mua hàng <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
</div>
</div>
</div>



</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        data1: [
        {src: require('../assets/sosinh/sua6.png'), name: 'Sữa Wyeth S-26 Promise Gold số 4 900g ', price: '220.000 đ', priceDel: '270.000đ', status: 'new'},
        {src: require('../assets/sosinh/sua1.png'), name: 'Sữa Wyeth S-26 Promil Gold số 2 900g ', price: '240.000 đ', priceDel: '290.000đ', status: 'new'},
        {src: require('../assets/sosinh/sua3.png'), name: 'Sữa Wakodo Lebens Kids số 3 850g', price: '265.000đ', priceDel: '370.000đ', status: 'new'}],
        data2: [
        {src: require('../assets/sosinh/xeday1.png'), name: 'Xe đẩy cho bé ', price: '1.550.000 đ', priceDel: '1.720.000đ', status: 'new'},
        {src: require('../assets/sosinh/giuongngu.png'), name: 'Giường, cũi gỗ cho bé ', price: '2.150.000 đ', priceDel: '2.570.000đ', status: 'new'},
        {src: require('../assets/sosinh/loidien.png'), name: 'Lôi điện cho bé', price: '1.320.000 đ', priceDel: '1.370.000đ', status: 'new'}, {src: require('../assets/sosinh/gherung.png'), name: 'Ghế rung Mastela màu hồng. ', price: '1.919.000 đ', priceDel: '2.700.000đ', status: 'new'}],
        sosinhImg: [
        {src: require('../assets/large-item/baby.png'), name: 'san pham 1', price: '200.000đ', priceDel: '270.000đ', status: 'new'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .row .box-title{
  height: 50px;
  line-height: 50px;
  margin: 30px 0;
  border-bottom: 2px solid orange;
  text-transform: capitalize;
}

.title-left{
  background: #F08113;
  width: 25%;
  float: left;
  color: white;
  padding: 0 10px
}

@media (min-width: 425px){
  .title-left{
    width: 40%;
  }
}
@media (min-width: 768px){
  .title-left{
    width: 25%;
  }
}


.title-right{
  float: right;
  padding: 0 15px;  
}

.title-right{
  color: black;
}
.container-item-s{
  position: relative;
  border: 1px solid rgba(85, 85, 85, 0.18);
  margin: auto;
  overflow: hidden;
}

.container-item-s >img{
  display: block;
}

@media (min-width: 768px){
  .container-item-s >img{
    height:86px;
  }
}
@media (min-width: 992px){
  .container-item-s >img{
    height:133px;
  }
}
@media (min-width: 1170px){
  .container-item-s >img{
    height:166px;
  }
}
.container-item1{
  border: 1px solid rgba(85, 85, 85, 0.18);
}
.name{
  position: absolute;
  top: 40%;
  color: red;
  left: 10%;
}
.text-l{
  font-size: 1.5em;
  margin: 20px 0;
  font-family: "Courgette", cursive;
  text-transform: capitalize;
}

.info{
  margin: 9px 0;
}

@media (min-width: 768px){
  .title{
    font-size: 0.5em;
  }
}
@media (min-width: 992px){
  .title{
    font-size: 0.6em;
  }
}
@media (min-width: 1170px){
  .title{
    font-size: 0.8em;
  }
}
.price{
  height: 20px;
}
.price >a >ins{
  font-size: 1em;
  color: red;
}

.price >a >del{
  font-size: 1em;
  color: black;
  }


@media (min-width: 768px){
  .price >a{
    font-size: 0.6em;
  }
}
@media (min-width: 992px){
  .price >a{
    font-size: 0.8em;
  }
}
@media (min-width: 992px){
  .price >a{
    font-size: 1em;
  }
}

.second-row{
  margin:20px 0;
}

.container-item-l{
  border:1px solid rgba(85, 85, 85, 0.18);
  position: relative;
}
.cart-s{
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(70px);
  opacity: 0;
  transition: all 0.5s linear;
}
.cart-l{
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(70px);
  opacity: 0;
  transition: all 0.5s linear;

}

.cart-s >button{
  width: 100%;

}
.cart-l >button{
  width: 46%;

}
.container-item-s:hover .cart-s{
  opacity: 1;
  transform: translateY(-5px);
}

.container-item-l:hover .cart-l{
  opacity: 1;
  transform: translateY(-5px);
}

.container-item:hover {
  opacity: 0.9;
}

@keyframes run{
  0% {transform: translateX(0px)}
  25% {transform: translateX(5px)}
  50% {transform: translateX(-5px)}
  75% {transform: translateX(3px)}
  100% {transform: translateX(0px)}
}
.container-item-s:hover a>img{
 animation: run 1s linear;
}

.container-item-l:hover a>img{
 animation: run 1s linear;

}
.container-item-s:hover .info{
  visibility: hidden;
}

.container-item-l:hover .info{
  visibility: hidden;
}




</style>
