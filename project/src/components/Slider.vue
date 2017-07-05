  <template>
    <div class="container-item">
      <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
          <li data-target="#carousel" data-slide-to="3"></li>
        </ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="../assets/toy/oto/otoslider1.jpg" alt="...">
          </div>
          <div class="item" v-for="item in data1">
            <img :src="item.src" alt="item.name">
          </div>
        </div>
      </div>
      <div class="info">
        <a href="" class="name">Ô tô robot biến hình</a>
        <a href="" class="price">450.000 VND </a>
      </div>
      <div class="cart-s">
        <button class="btn btn-info couter-heart">Yêu thích <i class="fa fa-heart-o" aria-hidden="true"></i></button>
        <button class="btn btn-danger couter-cart" data-toggle="modal" data-target="#quickbuy">Mua hàng <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
      </div>
    </div>




</template>

<script>
// import QuickBuy from '../components/QuickBuy'
  export default {
    name: 'Slider',
    data () {
      return {
        data1: [
        {src: require('../assets/toy/oto/otoslider2.jpg'), name: 'Ô tô robot biến hình ', price: '450.000vnd', status: 'new'},
        {src: require('../assets/toy/oto/otoslider3.jpg'), name: 'Áo thun tay ngắn - T555', price: '160.000vnd', status: 'new'},
        {src: require('../assets/toy/oto/otosslider4.jpg'), name: 'Áo vải tay ngắn - T155', price: '110.000vnd', status: 'new'}
        ]
      }
    }
    // components: {
    //   QuickBuy
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row{
    margin: 30px;
  }
  ol{
    bottom: -15px;
  }
  ol >li{
    background: #555555;

  }
  li.active{
    background: green;
  }
  
  .container-item{
    position: relative;
    border:1px solid rgba(85, 85, 85, 0.18);
    margin: 20px 0;
  }

  
  .info{
    text-align: center;
    width: 100%;
    margin: auto;

  }
  .info >a{
    display: block;
    margin: auto;
  }
  .name{
    font-size: 1em;
  }

  .price{
    font-size: 1.2em;
    color: red;
    font-weight: 0;
  }

  .cart-s{
    width: 100%;
    position: absolute;
    bottom: -40px;
    transform: translateY(10px);
    opacity: 0;
    transition: all 0.3s linear;
    display: flex;
    justify-content: center;
  }
  .cart-s >button{
    display: block;
  }


  .container-item:hover .cart-s{
    transform: translateY(-50px);
    opacity: 1;
  }

  .container-item:hover .info{
    visibility: hidden;
  }
  
  .container-item:hover{
    -webkit-box-shadow: 0px 9px 19px 0px rgba(48, 57, 60, 0.75);
    -moz-box-shadow:    0px 9px 19px 0px rgba(48, 57, 60, 0.75);
    box-shadow:         0px 9px 19px 0px rgba(48, 57, 60, 0.75);
  }

</style>
