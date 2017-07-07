<template>
  <header>
    <div class="row menu__info">
      <div class="col-xs-5 col-sm-6 col-md-6 menu__info--item1">
        <span><i class="fa fa-volume-control-phone"></i>  0988260505 </span>
        <span><i class="fa fa-envelope-o"></i>  vanthanhgt89@gmail.com</span>
      </div>

      <div class="col-xs-7 col-sm-6 col-md-6 menu__info--item2">
        <div class="register" >
          <button  class="btn-login" data-toggle="modal" data-target="#myModal"> Đăng ký</button>
        </div>
        <div class="sign-in" >
          <button class="btn-login" data-toggle="modal" data-target="#myModal"><i class="fa fa-sign-in" aria-hidden="true"></i>Đăng nhập</button>
        </div>
        <div class="logged"> 
          <img src="../assets/avarta-s.png" alt="" class="img-responsive avarta-s"> 
          <div class="dropdown"> 
          <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">Bùi Văn Thanh</button> 
          <ul class="dropdown-menu"> 
            <router-link to='user'><li class="dropdown-text user-info">Quản lý tài khoản</li></router-link> 
            <li class="dropdown-text sign-out">Đăng xuất</li> </ul> </div> 
          </div>
        </div>
      </div>
      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog user-modal">
          <ul class="nav nav-tabs menu-login">
            <li class="active"><a data-toggle="tab" href="#login" class="text-center">Đăng nhập</a></li>
            <li><a data-toggle="tab" href="#register" class="text-center">Đăng ký</a></li>
          </ul>
          <div class="tab-content">
            <div id="login" class="tab-pane fade in active">
              <!-- Modal content-->
              <div class="modal-content myForm">

                <div class="modal-body">
                  <form action="">
                    <div class="form-group">
                      <label for="email">Email:</label>
                      <input type="email" class="form-control" id="email-register"
                      placeholder="Enter email" name="email">
                    </div>
                    <div class="form-group">
                      <label for="password">Password:</label>
                      <input type="password" class="form-control" id="password-register"
                      placeholder="Enter password" name="password">
                    </div>
                    <div class="checkbox">
                      <label class="text-color"><input type="checkbox" name="remember"> Ghi
                        nhớ tài khoản</label>
                      </div>
                      <router-link to="/">
                        <button  class="btn btn-primary get-sign" data-dismiss="modal">Đăng nhập
                        </button>
                      </router-link>
                      <div class="remember">
                        <label class="text-color"><i class="fa fa-question-circle-o"
                          aria-hidden="true"></i>Quên mật khẩu
                          ?</label>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer" id="login-icon">
                      <div class="col-md-* text-center login-face">
                        <a href="https://www.facebook.com/"><i class="fa fa-facebook-official"></i></a>
                      </div>
                      <div class="col-md-* text-center login-gmail">
                        <a href="https://accounts.google.com/signin"><i class="fa fa-google" aria-hidden="true"></i></a>
                      </div>
                    </div>
                  </div>
                </div>


                <div id="register" class="tab-pane fade">
                  <!-- Modal content-->
                  <div class="modal-content myForm">
                    <div class="modal-body ">
                      <form action="">
                        <div class="form-group">
                          <label for="email">Email:</label>
                          <input type="email" class="form-control" id="email"
                          placeholder="Enter email" name="email">
                        </div>
                        <div class="form-group">
                          <label for="password">Password:</label>
                          <input type="password" class="form-control" id="password"
                          placeholder="Enter password" name="password">
                        </div>
                        <div class="checkbox">
                          <label class="text-color"><input type="checkbox" name="remember">Hiển thị
                            mật khẩu</label>
                          </div>
                          <div class="form-group">
                            <label for="name">Họ và tên:</label>
                            <input type="text" class="form-control" id="name"
                            placeholder="Họ và tên" name="name">
                          </div>
                          <div class="form-group">
                            <label for="phone">Số điện thoại:</label>
                            <input type="text" class="form-control" id="phone"
                            placeholder="Số điện thoại" name="phone">
                          </div>
                          <button type="submit" class="btn btn-primary getsubmit">Đăng ký
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <!-- nav desktop-->
            <nav class="navbar navbar-default nav-sm">
              <div class="container nav-sm-wrap">
                <div class="col-sm-2 col-md-2 logo">
                  <router-link to="/"><img src="../assets/logo/thanhlogo.png"></router-link>
                </div>
                <div class="col-sm-10 col-md-10 menu">
                  <ul class="menu--item">
                    <li class="list item1"><router-link to="/">Trang chủ</router-link></li>
                    <li class="list item2"><router-link to="introduce">Giới thiệu</router-link ></li>
                    <li class="list item3 list-item">
                      <router-link to="" to="product">Sản phẩm<i class="fa fa-angle-down" aria-hidden="true"></i></router-link>

                      <div class="container product">
                        <div class="col-sm-3 col-md-3">
                          <div class="product-list">
                            <router-link  to="product"><img src="../assets/menu/menu-img1.jpg" alt=""></router-link >
                            </div>
                            <ul class="product-list">
                              <li><router-link to="" to="product">
                                <strong>Dành cho bé sơ sinh</strong>
                              </router-link to="product"></li>
                              <li><router-link to="product">Bỉm và tã giấy</router-link></li>
                              <li><router-link to="product">Sữa</router-link></li>
                              <li><router-link to="product">Kem hăm, dưỡng da, phấn rôm</router-link > </li>
                              <li><router-link to="product">Quần áo sơ sinh</router-link ></li>
                              <li><router-link to="product">Giường cũi gỗ cho bé</router-link ></li>
                              <li><router-link to="product">Lôi điện và ghế rung</router-link ></li>
                              <li></li>
                            </ul>
                          </div>
                          <div class="col-sm-3 col-md-3">
                            <div class="product-list">
                              <router-link to=""><img src="../assets/menu/menu-img2.jpg" alt=""></router-link>
                            </div>
                            <ul class="product-list">
                              <li><strong>Thời trang cho bé trai</strong></li>
                              <li><router-link to="product">Áo phông</router-link></li>
                              <li><router-link to="product">Áo sơ mi</router-link></li>
                              <li><router-link to="product">Quần jean</router-link></li>
                              <li><router-link to="product">Quần kaki</router-link></li>
                              <li><router-link to="product">Quần short</router-link></li>
                              <li><router-link to="product">Đồ mặc ở nhà</router-link></li>
                              <li><router-link to="product">Giầy dép thời trang</router-link></li>
                            </ul>
                          </div>
                          <div class="col-sm-3 col-md-3">
                            <div class="product-list">
                              <router-link to=""><img src="../assets/menu/menu-img3.jpg" alt=""></router-link>
                            </div>
                            <ul class="product-list">
                              <li><router-link to="product"><strong>Thời trang bé gái</strong></router-link></li>
                              <li><router-link to="product">Áo phông</router-link></li>
                              <li><router-link to="product">Áo sơ mi</router-link></li>
                              <li><router-link to="product">Chân váy</router-link></li>
                              <li><router-link to="product">Chân liền</router-link></li>
                              <li><router-link to="product">Quần jean</router-link></li>
                              <li><router-link to="product">Đồ mặc ở nhà</router-link></li>
                              <li><router-link to="product">Giầy dép thời trang</router-link></li>
                            </ul>
                          </div>

                          <div class="col-sm-3 col-md-3">
                            <div class="product-list">
                              <router-link to="product"><img src="../assets/menu/menu-img4.jpg" alt=""></router-link>
                            </div>
                            <ul class="product-list">
                              <li><router-link to="product"><strong>Đồ chơi cho bé</strong></router-link></li>
                              <li><router-link to="product">Ô tô </router-link></li>
                              <li><router-link to="product">Xe máy</router-link></li>
                              <li><router-link to="product">Xe đạp</router-link></li>
                              <li><router-link to="product">Đồ chơi xếp hình</router-link></li>
                              <li><router-link to="product">Đồ chơi điều khiển</router-link></li>
                              <li><router-link to="product">Đồ chơi giáo dục</router-link></li>
                              <li><router-link to="product">Sách truyện cho bé</router-link></li>
                            </ul>
                          </div>

                        </div>
                      </li>

                      <li class="list item4" data-toggle="tooltip"><router-link to="Blog">Blog</router-link>

                      </li>
                      <li class="list item5"><router-link to="contact">Liên hệ</router-link></li>
                      <li class="list item6"><router-link to="sale-off">Khuyến mãi</router-link></li>
                      <li>
                        <div class="icon-cart">
                          <router-link to="cart"> 
                            <button class="btn btn-danger">Giỏ hàng  <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                              <span class="couter1">0</span></button>
                            </router-link>
                            <router-link to="favorite"> 
                              <button class="btn btn-info">Yêu thích <i class="fa fa-heart-o" aria-hidden="true"></i>
                                <span class="couter2">0</span></button>

                              </button>
                            </router-link>
              
          </div>
        </li>

      </ul>

    </div>

  </div>


</nav>
<!-- end nav desktop-->
<!-- nav mobile-->
<nav class="navbar navbar-default nav-phone">
  <button type="button" class="navbar-toggle" id="menu" data-toggle="collapse"
  data-target="#menu-phone"
  ><i class="fa fa-bars" aria-hidden="true"></i>
</button>
<router-link to=""><img src="../assets/logo/thanhlogo.png"></router-link>

<div class="collapse navbar-collapse" id="menu-phone">
  <ul class="menu--xs">
    <li class="list-xs"><router-link to="/">Trang chủ</router-link></li>
    <li class="list-xs"><router-link to="Introduce">Giới thiệu</router-link></li>
    <li class="list-xs"><router-link to="product">Sản phẩm</router-link></li>
    <li class="list-xs"><router-link to="Blog">Blog</router-link></li>
    <li class="list-xs"><router-link to="Contact">Liên hệ</router-link></li>
  </ul>
</div>
<div class="icon-cart-xs">
 <router-link to="cart"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
 </router-link>
 <router-link to="favorite"> <i class="fa fa-heart-o" aria-hidden="true"></i>
 </router-link>
 <router-link to="search"> <i class="fa fa-search" aria-hidden="true"></i>
 </router-link>
</div>
</nav>
    <!--end nav mobile-->
 


  </header>
</template>

<script>
  export default {
    name: 'getHeader',
    mounted () {
      window.$('.get-sign').click(function () {
        window.$('.sign-in, .register').css('display', 'none')
        window.$('.logged').css('display', 'flex')
      })
      window.$('.sign-out').click(function () {
        window.$('.sign-in, .register').css('display', 'block')
        window.$('.logged').css('display', 'none')
      })
    },
    data () {
      return {
        list1: ['Dành cho bé sơ sinh', 'Bỉm và tã giấy', 'Sữa', 'Kem hăm dưỡng da và phấn rôm', 'Quần áo sơ sinh', 'Giường và cũi gỗ', 'Lôi diện cho bé'],
        avarta: require('../assets/avarta.png'),
        couter1: 0,
        couter2: 0
      }
    },
    methods: {
      couter: function () {
        this.couter1++
        this.couter2++
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu__info {
    width: 100%;
    height: 30px;
    margin: auto;
    background-color:#F08113;
  }

  .menu__info--item1 {
    height: 30px;
    line-height: 30px;
    text-align: left;
    color: white;
  }

  .menu__info--item1 > span:first-child {
    margin-right: 10px;
  }

  @media (min-width: 1px) {
    .menu__info--item1{
      display: none;
    }
  }
   @media (min-width: 375px) {
    .menu__info--item1{
      display: inline-block;
    }
     .menu__info--item1 > span:last-child {
    display: none;
  }
  }

  @media (min-width: 768px) {
    .menu__info--item1 > span:last-child {
      display: inline-block;
    }
  }

  .menu__info--item2 {
    height: 30px;
    color: white;
  }

    @media (min-width: 1px) {
    .menu__info--item2{
      width: 100%;
    }
  }
    @media (min-width: 375px) {
    .menu__info--item2{
      width: 58% ;
    }
  }
    @media (min-width: 768px) {
    .menu__info--item2{
      width: 50% ;
    }
  }

  .sign-in, .register{
    float: right;
    line-height: 30px;
  }
  .register{
    margin-left:15px;
  }


  /*=== form register ===*/
  .user-modal {
    width: 300px;
    margin: auto;
    text-align: left;
  }
  .myForm{
    border: none;
    border-radius: 0;
  }
  @media (min-width: 768px) {
    .user-modal {
      width: 350px;
    }
  }

  @media (min-width: 992px) {
    .user-modal {
      width: 400px;
    }
  }

  #myModal {
    transform: translateY(50px);
    box-shadow: none;
  }

  #myModal > div > ul {
    border: none;
  }

  #myModal > div > ul > li {
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 0;
    background: #666666;
  }

  #myModal > div > ul > li > a {
    border: none;
    border-radius: 0;
    color: black;
    margin: 0;
  }

  #email, #password {
    background: #FAFFBD;
  }

  .menu-login > li {
    width: 50%;
  }

  .login {
    float: right;
  }

  .btn-login{
    background: none;
    border: none;
  }

  .login-item {
    border: none;
    background: none;
    box-shadow: none;
  }

  .login-item:hover {
    background: white;
  }

  #login > div > div.modal-body > form > div > label{
    float: left;
  }

  .get-sign {
    width: 100%;
  }

  .text-color {
    color: #00695C;
    display: block;
    text-align: left;
  }

  .remember {
    margin: 10px 0;
  }

  .fa-google,
  .fa-facebook-official {
    color: white;
    font-size: 2em;
  }

  #login-icon {
    justify-content: center;
  }

  .login-face {
    display: block;
    float: left;
    background: #3B5998;
    width: 48%;
    margin-right: 3%;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .login-gmail {
    display: block;
    float: left;
    background: #B94937;
    border-radius: 4px;
    width: 48%;

  }

  /*===============Menu nav ============*/
  /*=======Menu Desktop =====*/
  .nav-sm {
    display: block;
    border:none;
    margin-bottom: 0;
  }

  @media (max-width: 425px) {
    .nav-sm {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .nav-sm {
      margin-bottom: 0;
    }
  }
  .product{
    position: absolute;
    display: none;
    top: 65px;
    left: -500px;
    height: 300px;
    z-index: 999;
    background: white;
  }
  @media (min-width: 768px) {
    .product{
      left: -272px;
    }
  }

  @media (min-width: 992px) {
    .product{
      left: -350px;
    }
  }
  @media (min-width: 1170px) {
    .product{
      left: -500px;
    }
  }

 
  .product-list{
    width:100%;
  }
 /* div.product-list{
    margin-top:15px;
  }*/
  .product-list >a >img{
    display: block;
    width: 50%;
    /*margin:auto;*/
    height: 80px;
  }

  .product-list >li{
    width: 100%;
    height: 20px;
    text-align: left;
  }
  .product-list >li >a{
    font-size:0.8em!important;
    line-height: 20px;
  }
  .product-list >li >a:hover{
    color: orange;
  }

  .logo > a > img {
    display: inline-block;
    width: 75%;
    float: right;
  }
  @media (min-width: 768px){
    .logo > a > img {
      width: 100%;
    }
  }
  @media (min-width: 992px){
    .logo > a > img {
      width: 93%;
    }
  }
  @media (min-width: 1200px){
    .logo > a > img {
      width: 61%;
    }
  }
  .menu {
    height: 65px;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 992px){
    .menu{
      overflow: visible;
    }
  }

  .menu--item {
    width: 100%;
    height: 65px;
    line-height: 65px;
  }
  @media (min-width: 768px){
    .menu--item{
      margin-top:15px;
    }
  }
  @media (min-width: 992px){
    .menu--item{
      margin-top:13px;
    }
  }
  @media (min-width: 1170px){
    .menu--item{
      margin-top:0px;
    }
  }

  .list {
    float: left;
    line-height: 65px;
    width: 12%;
    text-align: center;
  }
  .list >a{
    color:white;
  }
  .item1{
    /* width: 12%; */
    height: 65px;
    position: relative;
    z-index: 1;
    background-image: url('../assets/bgMenu/m1bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px){
    .item1{
      background-size: contain;
    }
  }
  @media (min-width: 992px){
    .item1{
      background-size: cover;

    }
  }
  .item2{
    position: relative;
    left: -10px;
    z-index: 2;
    background-image: url('../assets/bgMenu/m2bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px){
    .item2{
      left: -7px;
      background-size: contain;
    }
  }
  @media (min-width: 992px){
    .item2{
      left: -10px;
      background-size: cover;

    }
  }
  .item3{
    position: relative;
    left: -20px;
    z-index: 3;
    background-image: url('../assets/bgMenu/m3bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px){
    .item3{
      left: -15px;
      background-size: contain;
    }
  }
  @media (min-width: 992px){
    .item3{
      left: -15px;
      background-size: cover;

    }
  }
  .item4{
    position: relative;
    left: -30px;
    z-index: 4;
    background-image: url('../assets/bgMenu/m4bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px){
    .item4{
      left: -18px;
      background-size: contain;
    }
  }
  @media (min-width: 992px){
    .item4{
      left: -23px;
      background-size: cover;
    }
  }
  .item5{
    position: relative;
    left: -35px;
    z-index: 5;
    background-image: url('../assets/bgMenu/m5bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px){
    .item5{
      left: -18px;
      background-size: contain;
    }
  }
  @media (min-width: 992px){
    .item5{
      left: -24px;
      background-size: cover;

    }
  }
  .item6{
    position: relative;
    left: -26px;
    z-index: 5;
    background-image: url('../assets/bgMenu/m6bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px){
    .item6{
      left: -18px;
      background-size: contain;
    }
  }
  @media (min-width: 992px){
    .item6{
      left: -24px;
      background-size: contain;

    }
  }
  @media (min-width: 1170px){
    .item6{
      background-size: cover;

    }
  }

  .icon-cart{
      position: absolute;
      top: 0;
      right: 0;
    }
  @media (min-width: 768px) {
    .list > a{
      font-size: 0.6em;
    }
    .icon-cart{
      font-size: 0.8em;
      top: 10px;
      right: 0;
    }

    .icon-cart a>button{
      padding: 2px ;
    }
  }
  @media (min-width: 992px) {
    .list >a{
      font-size: 1em;
    }
    .icon-cart{
      font-size: 1em;
      top: 10px;
      right: 7px;

    }
    .icon-cart a>button{
      padding: 5px 10px;
    }  
  }

  .list-item{
    position: relative;
  }

  .list-product{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height:300px;
    border: 1px solid black;
  }

  .menu--item .icon-cart {
    float: right;
  }

  .icon-cart > a {
    margin-left: 15px;
    font-size: 1.2em;
  }
 
  /*=======Menu Phone =====*/
  .nav-phone{
    position:relative;
    margin-bottom: 0;
    border: none;
    z-index: 88;
  }
  @media (min-width: 768px) {
    .nav-phone{
      display: none;
    }
  }
  .nav-phone >a >img{
    position: absolute;
    top: 0;
    left: 40%;
    display:block;
    margin:auto;
    width:18%;
  }
  #menu{
    float:left;
    margin-top:3vh;
    margin-left: 30px;
    border:none;
    background: none;
  }
  #menu-phone{
    position: absolute;
    top:100%;
    left: 0;
    width:50%
  }
  #menu-phone >ul >li{
    padding: 5px 10px;
  }

  .icon-cart-xs{
    float:right;
    margin-top:5vh;
  }

  .icon-cart-xs >a{
    margin-right: 10px;
  }

  .list-xs{
    text-align: left;
    font-weight: bold;
    background: white;
    text-transform: capitalize;
  }
  .btn-danger{
    position: relative;
  }
  .couter1{
    position: absolute;
    top:-10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background: #c9302c;
    color: white;
    border: 1px solid #c9302c;
    border-radius: 10px;
  }

  .btn-info{
    position: relative;
  }

    .couter2{
    position: absolute;
    top:-10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background: #5bc0de;
    color: white;
    border: 1px solid #5bc0de;
    border-radius: 10px;
  }

  /* div{ Ve tam giac
    width:0;
    height:0;
    border:4px solid transparent;
    border-top:none;
    border-bottom:4px solid black;
    } */

    .logged{
      width: 30%;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      display: none;
    }
    @media (min-width: 1px){
      .logged{
        right: 88px;
      }
    }
      @media (min-width: 768px){
      .logged{
        right: 50px;
      }
    }
    @media (min-width: 992px){
      .logged{
        right: 0px;
      }
    }
    .avarta-s{
      border-radius: 50%;
    }
    .dropdown-toggle{
      background: none;
      color: white;
      border:none;
    }
    .dropdown-text{
      color: black;
      padding: 5px 10px;
    }

    .sign-out, .user-info{
      cursor: pointer;
    }


</style>
