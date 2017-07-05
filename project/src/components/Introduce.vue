<template>
  <div class="container-fluid">
    <div class="container-fluid banner">
      <div id="information">
      </div>

      <div id="go-down">
        <a href="#about" id="go-about"></a>
      </div>
    </div>



    <div class="container history">
      <div class="row">
         <button type="button" class="btn btn-basic menu-item" data-slide="introduce"><i class="fa fa-bars" aria-hidden="true"></i> DANH MỤC BÀI VIẾT</button>
        <div class="col-sm-3 col-md-3 nav-introduce">
        <ul>
          <li>
            <div class="nav-title">
              <h4>Tìm kiếm thông tin</h4>
            </div>
            <form action="" id="nav-form">
              <input type="text" placeholder="Tìm kiếm" id="search">
              <button type="button" class="btn" id="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>
          </li>
          <li>
            <div class="title">
              <h4>Giới thiệu về công ty</h4>
            </div>
          </li>
          <li v-for="item in list1" class="list1">{{item}}</li>
          <li>
            <div class="title">
              <h4>Hệ thống cửa hàng</h4>
            </div>
          </li>
          <li class="list2" v-for="item in list2">{{item}}</li>

        </ul>
         <div class="sale-right">
        <img src="../assets/quangcao/tiensan.png" alt="">
        <img src="../assets/quangcao/dinhduong.png" alt="">
      </div>
      </div>

        <div class="col-sm-9">

          <div class="box-title">
            <div class="title-left">
              <span >Về chúng tôi</span>
            </div>
          </div>


          <div class="content">
            <p> 
              Được thành lập vào năm 2006, Hệ thống cửa hàng Mẹ & Bé <strong> BaBy Store </strong> thuộc quyền quản lý của Công ty cổ phần <strong> BaBy Store </strong>, chuyên cung cấp các sản phẩm dành cho các mẹ (trong giai đoạn thai kỳ và giai đoạn hậu sản) và các bé (trong độ tuổi từ 0~6 tuổi).</p>
              <p> 
                Trải qua 11 năm hình thành và phát triển, <strong> BaBy Store </strong> là Hệ thống cửa hàng Mẹ & Bé uy tín nhất tại Việt Nam hiện nay. Tại Hà Nội, các cửa hàng của <strong> BaBy Store </strong> đã có mặt tại tất cả các Quận trung tâm của thành phố. Tại TP Hồ Chí Minh, <strong> BaBy Store </strong> đang tiếp tục mở rộng Hệ thống.</p>
              </div>   

              <div class="img-box">
                <img src="../assets/bg/bg-introduce2.jpg" alt="" class="img-responsive">
              </div>

            <div class="content">
              <p><strong> BaBy Store </strong> cung cấp các sản phẩm vô cùng đa dạng đáp ứng tất cả các nhu cầu cho Mẹ và Bé trong giai đoạn từ 0 đến 6 tuổi. Các sản phẩm của các thương hiệu uy tín trên thế giới như: Combi, Chicco, Fisher-price, Farlin, Hipp, DrBrown...đều được kiểm tra và chứng nhận an toàn cho sức khỏe của Mẹ & Bé</p>
              <p>
                <strong> BaBy Store </strong> chiếm được lòng tin của hơn 80.000 mẹ bầu bởi chúng tôi là Địa chỉ cung cấp đồ sơ sinh Số 1 tại Việt Nam hiện nay. <strong> BaBy Store </strong> là nhà nhập khẩu và phân phối trực tiếp các dòng sản phẩm cao cấp cho bé từ Thái Lan, Hồng Kông, Pháp, Tây Ban Nha... Đặc biệt <strong> BaBy Store </strong> có đội ngũ nhân viên tư vấn tại các quầy sơ sinh và tư vấn online là các y tá tốt nghiệp các trường đại học và cao đẳng chuyên nghành nhi - sản để cung cấp thông tin hữu ích nhất cho các mẹ.
              </p>
            </div>

            <div class="img-box-2">
              <img src="../assets/bg/1.jpg" alt="" class="img-responsive">
              <p>Với hơn 20.000 mặt hàng đa dạng về chủng loại và số lượng, <strong> BaBy Store </strong> sẵn sàng đáp ứng mọi nhu cầu của khách hàng</p>
            </div>
            <div class="content">
              <p>

                Các sản phẩm tại <strong> BaBy Store </strong> luôn được sắp xếp theo đúng chuẩn trưng bày của Hệ thống. Các nhóm sản phẩm được phân thành các khu vực như khu sơ sinh, khu trưng bày xe - nôi - cũi, quầy sữa thực phẩm cho bé .... nhằm giúp các mẹ dễ dàng lựa chọn các sản phẩm cần thiết nhất cho bé yêu của mình.
                <p><strong>Bé mặc:</strong> thời trang bé sơ sinh, thời trang dành cho bé từ 1 đến 6 tuổi </p>
                <p ><strong>Bé ăn:</strong> sữa, thực phẩm ăn dặm, bình sữa, dụng cụ ăn uống của bé</p>
                <p ><strong>Bé ngủ:</strong> nôi, giường cũi, ghế võng, dụng cụ phòng ngủ, túi ngủ, chăn gối</p>
                <p ><strong>Ra ngoài:</strong> xe địu, xe đẩy, xe tập đi, xe đạp….</p>
                <p ><strong>Vệ sinh:</strong> tã, khăn ướt, mỹ phẩm, giặt xả, dụng cụ tắm bé, vệ sinh bé</p>
                <p ><strong>Sức khoẻ:</strong> dụng cụ chăm sóc sức khoẻ, bảo vệ an toàn</p>
                <p ><strong>Đồ chơi:</strong> đồ chơi phát triển tư duy, đồ chơi vận động</p>
              </p>
              <p>
                <strong> BaBy Store </strong> luôn nhiệt tình đón nhận những ý kiến đóng góp từ phía Khách hàng thông qua đường dây nóng 1800 6886 để ngày càng cải tiến và nâng cao hơn nữa chất lượng phục vụ.
              </p>
            </div>
            <div class="img-box-2">
              <img src="../assets/bg/2.jpg" alt="" class="img-responsive">
            </div>
            <div class="content">
              <p><strong> BaBy Store </strong> còn là đơn vị tiên phong trong việc tổ chức các Lớp học tiền sản hoàn toàn miễn phí dành cho các mẹ bầu. Hơn 500 khóa học đã được tổ chức nhằm cung cấp các kiến thức, kỹ năng vô cùng cần thiết và bổ ích trong suốt thời kỳ mang thai và chăm sóc em bé sau sinh cho các mẹ bầu để vững tin đón bé yêu chào đời. Các Chuyên gia đến từ các Bệnh viện nhi sản danh tiếng tại Hà Nội (Bệnh viện Việt Pháp) và TP Hồ Chí Minh (Bệnh viện Từ Dũ) đã cung cấp kiến thức, hướng dẫn thực hành cho gần 40.000 ông bố bà mẹ trẻ trong các khóa học tại <strong> BaBy Store </strong>.</p>
            </div>
            <div class="img-box-3">
              <img src="../assets/bg/3.jpg" alt="" class="img-responsive">
              <p>Các buổi hội thảo tiền sản do <strong> BaBy Store </strong> tổ chức luôn thu hút đông đảo các mẹ bầu đến tham gia</p>
            </div>

            <div class="box-title">
              <div class="title-left">
                <span >Hệ thống cửa hàng</span>
              </div>

            </div>
            <div class="video">

              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/sKyUhOauKRw" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
            <div class="box-title">
              <div class="title-left">
                <span >Cam kết với khách hàng</span>
              </div>

            </div>
            <div class="col-sm-3 col-md-3 service-box">
              <div class=" sicon">
                <i class="fa fa-truck" aria-hidden="true"></i>
              </div>
              <h4>Giao hàng nhanh chóng</h4>
              <p>Cước vận chuyển thấp nhất</p>
            </div>   

            <div class="col-sm-3 col-md-3 service-box">
              <div class=" sicon">
                <i class="fa fa-credit-card" aria-hidden="true"></i>
              </div>
              <h4>Thanh toán nhanh gọn</h4>
              <p>Tuyệt đối an toàn</p>
            </div>   

            <div class="col-sm-3 col-md-3 service-box">
              <div class=" sicon">
                <img src="../assets/bgTab/guarantee1.png" alt="" class="icon-img">
              </div>
              <h4>Chất lượng tuyệt đối</h4>
              <p>Hoàn tiền 100% nếu không hài lòng</p>
            </div>   

            <div class="col-sm-3 col-md-3 service-box">
              <div class=" sicon">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
              </div>
              <h4>Uy đãi thành viên</h4>
              <p>Nhận ngay mã kích hoạt giảm giá</p>
            </div> 

            </div><!-- end content-->
            


        </div>
      </div>





    </div>
  </template>

  <script>
    export default {
      name: 'Introduce',
      mounted () {
        window.$('[data-slide="introduce"]').click(function () {
          window.$('.nav-introduce').animate({
            width: 'toggle'
          }, 350)
        })
      },
      data () {
        return {
          list1: ['Lịch sử thành lập', 'Văn hóa công ty', 'Thông tin tuyển dụng', 'Liên hệ với chúng tôi', 'Thông tin khuyến mãi'],
          list2: ['Hà Nội', 'TP Hồ Chí Minh', 'Đà Nẵng']
        }
      }
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
   .banner {
    position: relative;
    display: flex;
    background-image: url('../assets/banner/banner7.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 300px;

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
    background-color: white;
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

  #information {
    width: 55%;
    font-family: "Courgette", cursive;
    font-size: 3em;
    color: white;
    text-transform: capitalize;
    margin: auto;
  }

  @media (min-width: 1px) {
    #information {
      font-size: 0.8em;
    }
  }

  @media (min-width: 768px) {
    #information {
      font-size: 1.2em;
    }
  }

  @media (min-width: 992px) {
    #information {
      font-size: 2em;
    }
  }

  /* ====== style history ====== */
  .history{
    margin-top:50px;
  }
  .nav-introduce{
    border: 1px solid rgba(157, 157, 157, 0.57);
  }

  .nav-title{
    
    color: #F08113;
    margin-top: 20px;
    text-transform: uppercase;
  }

  #search{
    width: 70%;
    height: 34px;
    padding: 5px;
    border: 1px solid;
    border-radius:4px;
  }

  #submit{
    width: 20%;
    border: 1px solid;
    border-radius:4px;
  }

  .title{
    margin: 20px 0 ;
    border-top: 1px solid;
    border-bottom: 4px double;
    text-transform: uppercase;
  }
  .title >h4{
    padding: 5px 0;
    color: #F08113;
  }

  .list1{
    padding: 10px 0;
    text-align: left;
  }

  .list2{
    padding: 10px 0;
    text-align: left;
  }
  .row .box-title{
    text-transform: capitalize;
    height: 50px;
    line-height: 50px;
    margin: 30px 0;
    border-bottom: 2px solid orange;
  }

  .title-left{
    background: #F08113;
    float: left;
    color: white;
    padding: 0 15px;
    font-size: 1em;
  }
 

  .img-box{
    width: 80%;
    margin: auto;
  }

  .img-box >img{
    display: block;
    width: 100%;
    height: 300px;
  }

  .content{
    text-align: justify;
    margin: 50px 0 30px 0;
    font-size: 14px;
    text-indent: 30px;
  }

  .img-box-2{
    width: 50%;
    margin: auto;

  }

  .img-box-2 >img{
    width: 100%;
  }

  .img-box-2 >p{

   font-size: 11px;
   margin-top:10px;

 }

 .img-box-3{
  width: 40%;
  margin: auto;

}




.img-box-3 >img{
  width: 100%;
  height: 400px;
}
@media (min-width: 1px){
  .img-box-3{
   width: 60%;
 }

 .img-box-3 >img{
  width: 100%;
  height: 300px;
}
}

@media (min-width: 768px){
  .img-box-3{
   width: 40%;
 }
 .img-box-3 >img{
  width: 100%;
  height: 400px;
}
}

.img-box-3 >p{
 font-size: 11px;
 margin-top:10px;
}

.video{
  width: 70%;
  margin: auto;
}


.service{
  margin-top:50px;
}


.service-box{
 color: rgba(51, 51, 51, 0.84);
}

.sicon{
  width: 102px;
  height: 102px;
  margin: 17px auto 15px;
  border: 1px solid #dbdbdb;
  background: #fff;
  border-radius: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  box-shadow: 5px 5px 0px #f0f0f0;
  font-size: 40px;
  color: #1e1e1e;
  line-height: 102px;
  text-align: center;
  display: inline-block
}


.fa-heart-o, .fa-credit-card, .fa-truck, .icon-img  {
  transform: rotate(-45deg);
}

.icon-img{
  width: 50%;
}

.sicon:hover{
  color: white;
  background: #F08113;
}

.service-box:hover {
  color: #F08113;
}
@media (min-width: 425px){
  .menu-item{
    display: block;
  }

  .nav-introduce{
    display: none;
  }
}

@media (min-width: 768px){
  .menu-item{
    display: none;
  }
  .nav-introduce{
    display: block;
  }
}


</style>
