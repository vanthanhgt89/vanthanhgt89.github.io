<template>
  <div class="container">
    <div class="row " id="special-product">
      <div class="box-title">
        <div class="title">
          <span class="title-text">Sản phẩm bán chạy</span>
        </div>
      </div>


      <ul class="nav nav-pills">
        <li class="active" data-name='item1'><a data-toggle="pill" href="#item1">Toàn bộ sản phẩm</a></li>
        <li data-name='item2'><a data-toggle="pill" href="#item2">Đồ sơ sinh</a></li>
        <li data-name='item3'><a data-toggle="pill" href="#item3">Thời trang bé nam</a></li>
        <li data-name='item4'><a data-toggle="pill" href="#item4">Thời trang bé nữ</a></li>
        <li data-name='item5'><a data-toggle="pill" href="#item5">Đồ chơi</a></li>
      </ul>

      <div class="tab-content tab1">

        <div id="item1" class="tab-pane fade in active">
          <div id="slider1">
            <div class="slide" v-for="item in specialImg">
               <div class="container-item">
              <img v-bind:src="item.src" alt="item.name" class="img-responsive">
              <router-link to="detail-product" class="name"> {{item.name}}</router-link>
              <router-link to="detail-product" class="price"> {{item.price}}</router-link>
              <div v-if="item.status == 'new'" v-bind:class="tagStatus[0]"></div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagStatus[1]"></div>
              <div v-else=""></div>
              <div v-if="item.status == 'new'" v-bind:class="tagName[0]">{{item.status}}</div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagName[1]">{{item.salePercent}}</div>
              <div v-else=""></div>
              <div class="icon">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            </div>
          </div>
        </div> <!-- end item1 -->


         <div id="item2" class="tab-pane fade">
          <div class="slider1">
            <div class="slide" v-for="item in sosinhImg">
               <div class="container-item">
              <img v-bind:src="item.src" alt="item.name" class="img-responsive">
              <router-link to="detail-product" class="name"> {{item.name}}</router-link>
              <router-link to="detail-product" class="price"> {{item.price}}</router-link>
              <div v-if="item.status == 'new'" v-bind:class="tagStatus[0]"></div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagStatus[1]"></div>
              <div v-else=""></div>
              <div v-if="item.status == 'new'" v-bind:class="tagName[0]">{{item.status}}</div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagName[1]">{{item.salePercent}}</div>
              <div v-else=""></div>
              <div class="icon">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            </div>
          </div>
        </div> <!-- end item2 -->


         <div id="item3" class="tab-pane fade">
          <div class="slider1">
            <div class="slide" v-for="item in boyImg">
               <div class="container-item">
              <img v-bind:src="item.src" alt="item.name" class="img-responsive">
              <router-link to="detail-product" class="name"> {{item.name}}</router-link>
              <router-link to="detail-product" class="price"> {{item.price}}</router-link>
              <div v-if="item.status == 'new'" v-bind:class="tagStatus[0]"></div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagStatus[1]"></div>
              <div v-else=""></div>
              <div v-if="item.status == 'new'" v-bind:class="tagName[0]">{{item.status}}</div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagName[1]">{{item.salePercent}}</div>
              <div v-else=""></div>
              <div class="icon">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            </div>
          </div>
        </div> <!-- end item3 -->

         <div id="item4" class="tab-pane fade">
          <div class="slider1">
            <div class="slide" v-for="item in girlImg">
               <div class="container-item">
              <img v-bind:src="item.src" alt="item.name" class="img-responsive">
              <router-link to="detail-product" class="name"> {{item.name}}</router-link>
              <router-link to="detail-product" class="price"> {{item.price}}</router-link>
              <div v-if="item.status == 'new'" v-bind:class="tagStatus[0]"></div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagStatus[1]"></div>
              <div v-else=""></div>
              <div v-if="item.status == 'new'" v-bind:class="tagName[0]">{{item.status}}</div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagName[1]">{{item.salePercent}}</div>
              <div v-else=""></div>
              <div class="icon">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            </div>
          </div>
        </div> <!-- end item4 -->

         <div id="item5" class="tab-pane fade">
          <div class="slider1">
            <div class="slide" v-for="item in toyImg">
               <div class="container-item">
              <img v-bind:src="item.src" alt="item.name" class="img-responsive">
              <router-link to="detail-product" class="name"> {{item.name}}</router-link>
              <router-link to="detail-product" class="price"> {{item.price}}</router-link>
              <div v-if="item.status == 'new'" v-bind:class="tagStatus[0]"></div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagStatus[1]"></div>
              <div v-else=""></div>
              <div v-if="item.status == 'new'" v-bind:class="tagName[0]">{{item.status}}</div>
              <div v-else-if="item.status == 'sale'" v-bind:class="tagName[1]">{{item.salePercent}}</div>
              <div v-else=""></div>
              <div class="icon">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            </div>
          </div>
        </div> <!-- end item5 -->

    

  </div>
</div>
</div>
</template>

<script>
  export default {
    name: 'specialProduct',
    mounted () {
      window.$('#slider1').bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 5,
        slideMargin: 40,
        moveSlides: 3
      })
      window.$('.slider1').bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 5,
        slideMargin: 40
      })
      window.$('.bx-wrapper').css({
        'border': 'none',
        'box-shadow': 'none'
      })
      window.$('.bx-pager').css({
        'display': 'none'
      })
    },
    data () {
      return {
        tagStatus: ['tag-left', 'tag-right'],
        tagName: ['tag-name-left', 'tag-name-right'],
        sosinhImg: [
        {src: require('../assets/topsale/sosinh1.jpg'), name: 'Áo thun - T101', price: '70.000đ', status: 'new'},
        {src: require('../assets/topsale/sosinh2.jpg'), name: 'Áo thun - T106', price: '80.000đ', status: 'new'},
        {src: require('../assets/topsale/sosinh3.jpg'), name: 'Áo thun - T215', price: '130.000đ', status: 'new'},
        {src: require('../assets/topsale/sosinh4.jpg'), name: 'Áo thun - T301', price: '120.000đ', status: 'new'},
        {src: require('../assets/topsale/xeday3.jpg'), name: 'Xe đẩy - T161', price: '100.000đ', status: 'new'},
        {src: require('../assets/topsale/sua4.jpg'), name: 'Sữa - S26', price: '600.000đ', status: 'new'}
        ],
        boyImg: [
        {src: require('../assets/topsale/b-topsale1.jpg'), name: 'Áo thun ngắn tay', price: '120.000đ', status: 'new'},
        {src: require('../assets/topsale/b-topsale2.jpg'), name: 'Áo thun ngắn tay', price: '90.000đ', status: 'new'},
        {src: require('../assets/topsale/b-topsale3.jpg'), name: 'Áo thun ngắn tay', price: '70.000đ', status: 'new'},
        {src: require('../assets/topsale/b-topsale4.jpg'), name: 'Áo thun ngắn tay', price: '150.000đ', status: 'new'},
        {src: require('../assets/topsale/b-topsale5.jpg'), name: 'Áo thun ngắn tay', price: '169.000đ', status: 'new'},
        {src: require('../assets/topsale/b-topsale6.jpg'), name: 'Áo thun ngắn tay', price: '125.000đ', status: 'new'}
        ],
        girlImg: [
        {src: require('../assets/topsale/g-topsale1.jpg'), name: 'Áo thun ngắn tay', price: '149.000 đ', status: 'new'},
        {src: require('../assets/topsale/g-topsale2.jpg'), name: 'Áo thun ngắn tay', price: '149.000 đ', status: 'new'},
        {src: require('../assets/topsale/g-topsale3.jpg'), name: 'Áo thun ngắn tay', price: '149.000 đ', status: 'new'},
        {src: require('../assets/topsale/g-topsale8.jpg'), name: 'Áo thun ngắn tay', price: '149.000 đ', status: 'new'},
        {src: require('../assets/topsale/g-topsale5.jpg'), name: 'Áo thun ngắn tay', price: '149.000 đ', status: 'new'},
        {src: require('../assets/topsale/g-topsale6.jpg'), name: 'Áo thun ngắn tay', price: '149.000 đ', status: 'new'}
        ],
        toyImg: [
        {src: require('../assets/topsale/toy1.jpg'), name: 'Máy bay đồ chơi', price: '150.000đ', status: 'new'},
        {src: require('../assets/topsale/toy2.jpg'), name: 'Mô hình trượt xe', price: '25.000đ', status: 'new'},
        {src: require('../assets/topsale/toy3.jpg'), name: 'Máy bay đồ chơi', price: '48.000đ', status: 'new'},
        {src: require('../assets/topsale/toy4.jpg'), name: 'Búp bê đeo kính', price: '150.000đ', status: 'new'},
        {src: require('../assets/topsale/toy5.jpg'), name: 'Búp bê cô dâu', price: '145.000đ', status: 'new'},
        {src: require('../assets/topsale/toy6.jpg'), name: 'Cún bông tai dài', price: '59.000đ', status: 'new'}
        ],
        specialImg: [{
          src: require('../assets/topsale/g-topsale9.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: 'new'
        },
        {
          src: require('../assets/topsale/b-topsale3.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: 'sale',
          salePercent: '10%'
        }, {
          src: require('../assets/topsale/b-topsale2.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: 'sale',
          salePercent: '15%'
        }, {
          src: require('../assets/topsale/b-topsale1.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: 'sale',
          salePercent: '20%'
        }, {
          src: require('../assets/topsale/g-topsale1.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: ''
        }, {
          src: require('../assets/topsale/g-topsale2.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: 'new'
        }, {
          src: require('../assets/topsale/g-topsale3.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: 'sale',
          salePercent: '10%'
        }, {
          src: require('../assets/topsale/g-topsale8.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: 'new'
        }, {
          src: require('../assets/topsale/giuongngu.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: ''
        }, {
          src: require('../assets/topsale/xeday3.jpg'),
          name: 'Áo thun ngắn tay',
          price: '149.000 đ',
          status: 'new'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* ====== product good sell  ======*/
 .box-title {
  width: 100%;
}

.title {
  width: 50%;
  margin: auto;
}

.title-text {
  font-size: 2em;
  padding: 5px;
  border-top: 4px double;
  border-bottom: 4px double;
  text-transform: uppercase;
}

@media (min-width: 1px) {
  #special-product .nav {
    margin: 25px auto;
    display: none;
  }
  .title-text {
    font-size: 0.8em;
  }
}

@media (min-width: 425px) {
  .title-text {
    font-size: 1em;
  }
}

@media (min-width: 768px) {
  #special-product .nav {
    display: block;
  }
  .title-text {
    font-size: 1.5em;
  }
}

@media (min-width: 992px) {
  .title-text {
    font-size: 2em;
  }
}

#special-product .nav > li {
  left: 13%;
  position: relative;
}

#special-product .nav > li >a::before {
  position: absolute;
  color: orange;
  content: '|';
  top: 0;
  right: 0
}

@media (min-width: 768px) {
  #special-product .nav > li {
    left: 0%;
  }

  #special-product .nav > li > a {
    font-size: 0.8em;
  }
}

@media (min-width: 992px) {
  #special-product .nav > li {
    left: 3%
  }

  #special-product .nav > li > a {
    font-size: 1.1em;
  }
}

@media (min-width: 1170px) {
  #special-product .nav > li {
    left: 13%
  }
}

#special-product .nav > li > a {
  text-transform: uppercase;
  padding: 3px 15px;

}

#special-product > ul > li.active > a {
  background: none;
  color: orange;

}

.tab1 {
  margin: 30px 0;
  position: relative;
}



.container-item {
  border: 1px solid rgba(85, 85, 85, 0.18);
  position: relative;
  overflow: hidden;
}

.container-item > img {
  height: 220px;
  opacity: 0.8;
  transform: scale(0.8);
}

.tag-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-image: url('../assets/bgTab/sale.png');
}

.tag-name-right {
  text-transform: uppercase;
  color: #fff;
  font-size: 1.1em;
  position: absolute;
  top: 12px;
  right: 4px;
}

.tag-left {
  position: absolute;
  top: 0;
  left: 0;
  border-style: solid;
  border-color: transparent #336699 transparent;
  border-width: 0 50px 50px 0;
  transform: rotate(270deg);
}

.tag-name-left {
  color: #fff;
  font-size: 0.8em;
  position: absolute;
  transform: rotate(-45deg);
  top: 7px;
  left: 2px;
}

.container-item > a {
  display: block;
  text-align: center;
}

.name{
  text-transform: capitalize;
  font-size: 0.8em;
}
.price{
  font-weight: bold;
  color: red;
  font-size: 1.1em;
}

.icon {
  position: absolute;
  width: 13%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon .fa-heart-o {
  display: block;
  padding: 7px;
  margin: 15px 0;
  width: 30px;
  height: 30px;
  background: #808080;
  border-radius: 50%;
  color: white;
  transform: translateX(30px);
  opacity: 0;
  cursor: pointer;
}

.icon .fa-cart-arrow-down {
  color: white;
  display: block;
  padding: 7px;
  width: 30px;
  height: 30px;
  background: #808080;
  border-radius: 50%;
  opacity: 0;
  transform: translateX(30px);
  cursor: pointer;
}

.container-item:hover .fa-heart-o {
  opacity: 1;
  transform: translateX(-10px);
  transition: all 0.3s linear;
}

.container-item:hover .fa-cart-arrow-down {
  opacity: 1;
  transform: translateX(-10px);
  transition: all 0.3s linear 0.2s;
}

.container-item:hover >img{
  transform: scale(1);
  opacity: 1;
  transition: all 0.3s linear;
}
</style>
