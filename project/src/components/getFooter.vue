<template>
  <footer>
    <div class="container-fluid register">
      <div class="title">
        <h1>Đăng ký nhận tin</h1>
        <form action="">
          <input type="text" placeholder="Email của bạn">
          <button type="submit" class="btn-submit">Submit <i class="fa fa-envelope-o" aria-hidden="true"></i></button>
        </form>
        <div class="icon">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          <i class="fa fa-google-plus-official" aria-hidden="true"></i>
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="container footer">
      <div class="row">
        <div class="col-xs-6 col-sm-3 col-md-3 list-item">
          <h4 class="title-footer">Thời gian mở cửa</h4>
          <ul>
            <li>Thứ 2 - thứ 6: 8AM - 10PM</li>
            <li>Thứ 7, CN: 9AM - 8PM</li>
          </ul>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-3 list-item">
         <h4 class="title-footer"><router-link to="introduce">Giới thiệu</router-link></h4>
         <ul>
          <li><router-link to="introduce">Về chúng tôi</router-link></li>
          <li><router-link to="introduce">Hệ thống cửa hàng</router-link></li>
          <li><router-link to="sale-off">Khuyến mãi</router-link></li>
          <li><router-link to="">Tuyển dụng</router-link></li>
          <li><router-link to="">Cam kết sản phẩm chính hãng</router-link></li>
        </ul>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3 list-item">
       <h4 class="title-footer"><router-link to="">Hướng dẫn hỗ trợ</router-link></h4>
       <ul>
        <li>Hướng dẫn mua hàng</li>
        <li>Vận chuyển - giao hàng</li>
        <li>Phương thức thanh toán</li>
        <li>Sử dụng mã giảm giá</li>
        <li>Hướng dẫn tạo tài khoản</li>
        <li>Phương thức đổi trả hàng</li>
      </ul>
    </div>
    <div class="col-xs-6 col-sm-3 col-md-3 list-item">
     <h4 class="title-footer">Chính sách mua hàng</h4>
     <ul>
      <li>Chính sách tích điểm</li>
      <li>Chính sách bán sỉ</li>
      <li>Chính sách bảo hành</li>
      <li>Bảo mật thông tin</li>
      <li>Sử dụng thông tin</li>
    </ul>
  </div>
</div>
</div>
<img src="../assets/back-top.png" alt="" class="back-top">
</footer>
</template>

<script>
  export default {
    name: 'getFooter',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    margin:50px auto 0;
    background: rgba(238, 238, 238, 0.5);
  }
  .register{
    height: 300px;
    background: url('../assets/bg/bg3.jpg');
    background-repeat:no-repeat;
    background-size: cover;
  }

  .title{
    margin-top: 50px;
    width: 100%;
  }
  .title h1{
    text-transform: capitalize;
    color: white;
    margin: 15px auto;
    padding: 10px;
  }

  li{
    font-size: 0.8em;
  }
  li{
    transform: translateX(0px);
    transition: all 0.3s linear;
  }
  li:hover {
    transform: translateX(10px);
    color: orange;
  }
  input{
    width: 40%;
    padding: 10px;
  }

  button{
    display: inline-block;
    padding: 8px;
    background: #155b98;
  }


  .icon{
    margin-top:10px;
    text-indent: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .icon .fa::before{
    display: block;
    font-size: 2.5em;
  }

  @media (min-width: 1px){
    input{
      font-size: 0.8em;
      width: 40%;
    }
    button{
      font-size: 0.8em;
    }
    .title-footer{
      font-size: 0.8em;
      border-bottom: 1px solid orange;
    }

    .title >h1{
      font-size: 1.4em;
    }

    .icon .fa::before{
      display: block;
      font-size: 1.6em;
    }
  } 


  @media (min-width: 768px){
    input{
      width: 30%;
      font-size: 0.8em;
    }
    button{
      font-size: 0.8em;
    }

    .icon .fa::before{
      display: block;
      font-size: 2em;
    }
     .title >h1{
      font-size: 2em;
    }
    .title-footer{
      font-size: 0.8em;
      font-weight: bold;
      border-bottom: 1px solid orange;
    }

  }
  .fa-facebook-official, .fa-google-plus-official, .fa-twitter-square, .fa-youtube-play{
    color: white;
  }

  .fa-facebook-official:hover{
    color: #3B5998;
  }
  .fa-google-plus-official:hover{
    color: #CA3725;
  }
  .fa-twitter-square:hover{
    color: #1EA1F3;
  }
  .fa-youtube-play:hover{
    color: #E72B20; 
  }
  
  .footer{
    margin: 50px auto 0;
  }
  .list-item{
    text-align: left;
  }
  
  .back-top{
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 60px;height: 60px;
    display: none;
  }
  .btn-submit{
    color: white;
  }

</style>
