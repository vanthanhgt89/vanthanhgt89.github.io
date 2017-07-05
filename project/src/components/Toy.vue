<template>
  <div class="container">
    <div class="row">
      <div class="box-title">
        <div class="title-left">
          <span class="">Đồ chơi trẻ em</span>
        </div>
        <div class="title-right">
          <router-link to="product">Toàn bộ sản phẩm  <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-* col-sm-3 col-md-3" v-for="item in data1">
        <div class="container-item-s" >
                <router-link to="detail-product"><img :src="item.src" class="img-responsive" alt="item.name"></router-link> 
                  <div class="title-name">
                  <router-link to=""> {{item.name}}</router-link> 
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
        {src: require('../assets/topsale/toy1.jpg'), name: 'Ô tô rô bốt biến hình', price: '155.000đ', priceDel: '155.000đ', status: 'new'},
        {src: require('../assets/topsale/toy3.jpg'), name: 'Máy bay mô hình', price: '150.000đ', priceDel: '155.000đ', status: 'new'},
        {src: require('../assets/topsale/toy4.jpg'), name: 'Búp bê tóc ngắn', price: '160.000đ', priceDel: '155.000đ', status: 'new'},
         {src: require('../assets/topsale/toy5.jpg'), name: 'Búp bê cô dâu', price: '110.000đ', priceDel: '155.000đ', status: 'new'}
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
    float: left;
    color: white;
    padding: 0 10px;
    width:25%;
  }

  .title-right{
    float: right;
    padding: 0 15px;
  }

  .title-right >a{
    color: black;
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

.container-item-s{
    position: relative;
    text-align: center;
    overflow: hidden;
    border: 1px solid rgba(85, 85, 85, 0.18);
    margin-bottom: 20px;
  }

  .title-item, .name-item, .price-item{
    text-transform: capitalize;
    padding: 5px 0;
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
