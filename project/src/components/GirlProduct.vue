<template>
  <div class="container">
    <div class="row">
      <div class="box-title">
        <div class="title-left">
          <span >Thời trang bé gái</span>
        </div>
        <div class="title-right">
          <router-link to="product">Toàn bộ sản phẩm  <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
        </div>
      </div>

      <div class="col-xs-* col-sm-7 col-md-7">
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-4" v-for="item in data1">
            <div class="container-item-s" >
              <router-link to="detail-product"><img :src="item.src" class="img-responsive" alt="item.name"></router-link>
              <div class="title-name">
                <a href="">{{item.name}}</a>
              </div>
              <div class="price-item">
                 <router-link to="detail-product"><ins>{{item.price}}</ins></router-link>
            <router-link to="detail-product"><del>{{item.priceDel}}</del></router-link>
              </div>
              <div class="effect"></div>
              <div class="cart-s">
                <button class="btn btn-info couter-heart">Yêu thích <i class="fa fa-heart-o" aria-hidden="true"></i></button>
                <button class="btn btn-danger couter-cart" data-toggle="modal" data-target="#quickbuy">Mua hàng <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-xs-* col-sm-5 col-md-5">
        <div class="row">
         <div class="container-item">
          <img :src="girlImg.src" alt="girlImg.name" class="img-responsive">
          <div class="effect-top"></div>
          <div class="effect-left"></div>

          <div class="title">
            <h3>
            Thời trang bé gái</h3>
            <div class="show">
               <router-link to="product"><button class="btn btn-primary"> Xem toàn bộ sản phẩm</button></router-link>
            </div>
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
        {src: require('../assets/girl/1.png'), name: 'Áo thun tay ngắn - T514', price: '155.000đ', priceDel: '155.000đ', status: 'new'},
        {src: require('../assets/girl/2.png'), name: 'Áo thun tay ngắn - T801 ', price: '150.000đ', priceDel: '155.000đ', status: 'new'},
        {src: require('../assets/girl/3.png'), name: 'Áo thun tay ngắn - T555', price: '160.000đ', priceDel: '155.000đ', status: 'new'},
        {src: require('../assets/girl/4.png'), name: 'Áo vải tay ngắn - T155', price: '110.000đ', priceDel: '155.000đ', status: 'new'},
        {src: require('../assets/girl/5.png'), name: 'Áo vải tay ngắn - T155', price: '120.000đ', priceDel: '155.000đ', status: 'new'},
        {src: require('../assets/girl/6.png'), name: 'Áo vải tay ngắn - T155', price: '130.000đ', priceDel: '155.000đ', status: 'new'}
        ],
        data2: [
        {src: require('../assets/girl/5tuoi10.jpg'), name: 'Áo thun tay ngắn - T514', price: '155.000đ', status: 'new'},
        {src: require('../assets/girl/5tuoi11.jpg'), name: 'Áo thun tay ngắn - T801 ', price: '150.000đ', status: 'new'}
        ],

        girlImg: {src: require('../assets/large-item/girl.jpg'), name: 'san pham 1', price: '200.000đ', status: 'new'}
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
  float: left;
  color: white;
  padding: 0 10px
}


.title-right{
  float: right;
  padding: 0 15px;  
  color: black;
}

@media (min-width: 1px){
  .title-right{
  padding: 0;  
  }
}
@media (min-width: 425px){
  .title-right{
  padding: 0 15px;  
  }
}


  .container-item{
    position: relative;
    overflow: hidden;
    border:1px solid rgba(85, 85, 85, 0.18);
  }


  .title{
    position: absolute;
    top: 40%;
    left: calc(50% - 90px);
    color: white;
    transform: translateY(30px);
  }
  .title >h3{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.7em;
   color: orange;

  }
 
  .show{
    position: absolute;
    top: 40%;
    left: calc(50% - 70px);
    color: white;
    transform: translateY(80px);
    opacity: 0;
  }

  .effect-top{
    position: absolute;
    content: "";
    width: 86%;
    height: 76%;
    top: 13%;
    z-index: 2;
    left: 7%;
    border-bottom: 2px solid #F08113;
    border-top: 2px solid #F08113;
    opacity: 0;
    transition: all 0.3s ease 0.3s;
  }

  .effect-left{
    position: absolute;
    content: '';
    border-left: 2px solid #F08113;
    border-right: 2px solid #F08113;
    width: 78%;
    height: 85%;
    top: 8%;
    left: 11%;
    z-index: 2;
    opacity: 0;
    transition: all 0.3s ease;

  }

  .container-item:hover{
    opacity: 0.9;
  }
  .container-item >img{
    transition: all 0.3s ease;
  }
  @media (min-width: 425px){
  .container-item >img{
    height: 300px;
  }
  }
  @media (min-width: 768px){
  .container-item >img{
    height: 426px;
  }
  }


   @media (min-width: 992px){
  .container-item >img{
    height: 423px;

  }
  }
   @media (min-width: 1170px){
  .container-item >img{
    height: 501px;

  }
  }

  .container-item:hover >img{
    transform: translateY(0);
  }

  .container-item:hover .effect-top{
    opacity: 1;
    
  }

  .container-item:hover .effect-left{
    opacity: 1;
  }

  .container-item:hover .show{
    transform: translateY(30px);
    opacity: 1;
    transition: all 0.3s ease;
  }

  .container-item-s{
    position: relative;
    text-align: center;
    overflow: hidden;
    border: 1px solid rgba(85, 85, 85, 0.18);
    margin-bottom: 20px;
  }

 .title-name >a{
  font-size: 0.8em;
 }

 .price >a >ins{
  font-size: 1em;
  color: red;
}

.price >a >del{
  font-size: 1em;
  color: black;
  }


  
  .container-item-s >img{
    display: block;
    margin: auto;
    z-index: 1;
    width: 80%;
  }
    
  .effect{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(238, 238, 238, 0.53);
    transform: rotate(45deg) translate(0,120%);
    transition: all 0.3s linear;
  }
  
  .cart-s{
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(70px);
  opacity: 0;
}

.cart-s >button{
  width: 100%;

}

.container-item-s:hover .cart-s{
  opacity: 1;
  transform: translateY(-5px);
  transition: all 0.3s linear;
}

.container-item-s:hover >img{
  transform:scale(1.1);
  transition: all 0.3s linear;
}

.container-item-s:hover .effect{
  transform:rotate(45deg) translate(0,-120%);
}



</style>
