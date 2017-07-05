<template>
  <div class="container">
    <div class="row show-detail">
      <img src="../assets/quangcao/quangcao4.jpg" alt="" class="img-responsive">
      <div class="col-xs-* col-sm-6 col-md-6">
        <div class="container-item">
         <div id="carousel-10" class="carousel slide" data-ride="carousel" data-interval="false">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-10" data-slide-to="0" class="active">
              <img src="../assets/sp-slider/b-bo3/aothun1.jpg" alt="..." class="img-responsive thumbnail">
            </li>
            <li data-target="#carousel-10" :data-slide-to="index + 1 " v-for="(item,index) in data1">
              <img :src="item.src" alt="..." class="img-responsive thumbnail">
            </li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="../assets/sp-slider/b-bo3/1.jpg" id="zoom_03" >

            </div>
            <div class="item" v-for="(item,index) in data1">
              <img :src="item.src"  alt="item.name" >

            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="col-xs-* col-sm-6 col-md-6">
      <div class="summary">
        <div class="title">
          <h1>Bộ thun bé trai ngắn Lebe B126008 ({{size}}, {{color}})</h1>
        </div>


        <div class="comment">
          <span>Mã sản phẩm: 1866668 </span>
          <span>Thương hiệu: Lebe(Thái Lan)</span>
          <span class="star">Đánh giá sản phẩm:  
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>

          </span>

          <button class="btn btn-primary"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>Like</button>
          <button class="btn btn-primary">share</button>
        </div>

        <div class="description">
          <ul>
            <li>Dành cho bé từ 3 đến 9 tháng</li>
            <li>Chất liệu cotton mềm mại, thấm mồ hôi tốt</li>
            <li>Thiết kế đáng yêu cho bé ở nhà hay đi chơi</li>
          </ul>
        </div>

        <div class="price">
          <span><ins> 156.000 Đ (Đã có VAT)</ins> <del> 270.000 Đ</del></span>
        </div>


        <div class="choose">

          <div class="col-xs-* col-md-6 col-md-6 size">Size: 
            <button style="background:white" @click="changeSize(index)" v-for="(item,index) in 3">
            {{(index+1)*3 + 'M'}}</button>
          </div>


          <div class="col-xs-* col-md-6 col-md-6 color">Màu sắc: 
            <button style="background:green;color:green">3M</button>
            <button style="background:yellow;color:yellow" @click="changeColor">6M</button>
            <button style="background:white;color:white">9M</button>
          </div> 

        </div>

        <div class="quantity">
          <span>Số lượng: </span>
          <form action="" class="quanlity-product">
            <button class="decrease" @click="decrease">-</button>
            <input type="text" v-model="couter">
            <button class="increase" @click="increase">+</button>
          </form>
          <span>Còn hàng</span>  
        </div>

        <div class="submit">
          <button class="btn btn-warning">Mua hàng</button>
          <button class="btn btn-cart">Giỏ hàng <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
        </div>

        <div class="row info">
          <div class="col-xs-* col-sm-6 col-md-6">
            <span><i class="fa fa-volume-control-phone" aria-hidden="true"></i> 19008080</span>
            <span><i class="fa fa-map-marker" aria-hidden="true"></i> 5 Cửa hàng gần nhất</span>
          </div>

          <div class="col-xs-* col-sm-6 col-md-6">
            <span><i class="fa fa-refresh" aria-hidden="true"></i> Đổi hàng trong 15 ngày</span>
            <span><i class="fa fa-truck" aria-hidden="true"></i> Giao hàng toàn quốc</span>
            <span><i class="fa fa-money" aria-hidden="true"></i> Thanh toán khi nhận hàng</span>
          </div>
        </div>



      </div>

    </div>
  </div>

  <div class="row detail">
    <div class="col-sm-7 col-md-7">
      <ul class="nav nav-tabs tab-item">
        <li class="active"><a data-toggle="tab" href="#detail">Chi tiết</a></li>
        <li><a data-toggle="tab" href="#trademark">Thương hiệu</a></li>
        <li><a data-toggle="tab" href="#transport">Mua hàng và giao hàng</a></li>
        <li><a data-toggle="tab" href="#insurance">Bảo hành và đổi trả</a></li>
      </ul>

      <div class="tab-content tab-detail">
        <div id="detail" class="tab-pane fade in active">
          <p><strong>Bộ thun bé trai ngắn Lebe B126008</strong> Viền xanh đến từ thương hiệu Lebe (Thái Lan) với chất liệu cotton mềm mại, thấm hút mồ hôi, đường may kỹ lưỡng chắc chắn sẽ giúp bé thoải mái vận động. Bên cạnh đó, sản phẩm có kiểu dáng cá tính cùng họa tiết đáng yêu sẽ giúp bé thêm phần thời trang.</p>
          <img src="../assets/sp-slider/b-bo3/aothun1.jpg" alt="..." class="img">
          <h5 class="title-tab">ĐẶC ĐIỂM NỔI BẬT</h5>
          <p><strong>Chất liệu cotton mềm mại</strong> Sản phẩm được may từ vải cotton mềm mại cho phép bé thoải mái chơi đùa, vận động mà không cảm thấy khó chịu. Bên cạnh đó, chất liệu cotton không gây kích ứng da và có khả năng thấm hút mồ hôi tốt nên Mẹ không phải lo lắng bé yêu bị nổi rôm, tuyệt đối an toàn khi sử dụng.</p>
          <img src="../assets/sp-slider/b-bo3/aothun3.jpg" alt="..." class="img">
          <p><strong>Thiết kế thoải mái, đáng yêu</strong> Thiết kế thoải mái phối cùng họa tiết cá tính sẽ mang đến phong cách thoải mái và không kém phần thời trang cho bé gái của bạn. Ngoài ra, các đường nối, đường cuốn biên trên quần áo không bị nổi cộm gây khó chịu và ngứa da bé cho phép bé vận động dễ dàng.</p>
          <img src="../assets/sp-slider/b-bo3/aothun5.jpg" alt="..." class="img">

          

          <h5 class="title-tab">THÔNG TIN SẢN PHẨM</h5>
          <ul>
            <li><strong>Tên sản phẩm:</strong> Bộ thun bé trai ngắn Lebe B126008 Viền xanh</li>
            <li><strong>Thương hiệu:</strong> Lebe </li>
            <li><strong>Sản xuất tại:</strong> </li>
            <li><strong>Chất liệu:</strong> Cotton</li>
            <li><strong>Màu sắc:</strong> Viền xanh</li>
          </ul>
          <h5 class="title-tab">BẢO QUẢN SẢN PHẨM</h5>
          <ul>
           <li>Không giặt với nước nóng.</li>
           <li>Không dùng thuốc tẩy, hóa chất.</li>
           <li>Ủi ở nhiệt độ thấp 70˚C - 90˚C.</li>
           <li>Không giặt chung với quần áo sẫm màu.</li>
         </ul>
       </div>

       <div id="trademark" class="tab-pane fade">
        <img src="../assets/slider-logo/1.jpg" alt="">
        <p>Sản phẩm sản xuất tại Thái Lan</p>
      </div>
      <div id="transport" class="tab-pane fade">
        <h5 class="title-tab">1. Phạm vi giao hàng</h5>
        <div class="transport-detail">
          <h5 class="text-center"><strong>GIAO HÀNG TẬN NƠI TOÀN QUỐC 
            VỚI ĐƠN HÀNG TỪ 150.000 VNĐ</strong></h5> 
            <span><strong>Miễn phí đơn hàng nội thành</strong> với giá trị thanh toán đơn hàng từ 199.000 VNĐ</span>
            <span><strong>Miễn phí đơn hàng ngoại thành</strong> với giá trị thanh toán đơn hàng từ 399.000 VNĐ</span>
          </div>
          <h5 class="title-tab">3. Quy trình giao nhận hàng</h5>
          <table>
            <thead>
              <th>Khu vực</th>
              <th>Giá trị đơn hàng</th>
              <th>Cước phí vận chuyện</th>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">Nội thành
                  (Đơn hàng như quy định tại mục 1)</td>
                  <td>Từ 199.000 VNĐ</td>
                  <td>Từ 150.000 – Dưới 199.000 VNĐ</td>
                </tr>

                <tr>
                  <td>Miễn phí</td>
                  <td>20.000 VNĐ</td>
                </tr>

                <tr>
                  <td rowspan="2">Ngoại thành
                    (Đơn hàng không nằm trong quy định tại mục 1)</td>
                    <td>Từ 399.000 VNĐ</td>
                    <td>Từ 150.000 – Dưới 399.000 VNĐ</td>
                  </tr>

                  <tr>
                    <td>  
                      Miễn phí</td>
                      <td>Khách hàng chịu toàn bộ chi phí của đơn vị vận chuyển hàng hóa</td>
                    </tr>

                  </tbody>

                </table>
                <h5 class="title-tab">3. Quy trình giao nhận hàng</h5>
                <img src="../assets/quangcao/thanhtoan.jpg" alt="" class="img-responsive">

                <h5><strong>ĐƠN HÀNG NỘI THÀNH</strong></h5>
                <p>Khi nhận hàng, quý khách hàng cần lưu ý thực hiện:</p>
                <p>- Mở gói hàng và đối chiếu hàng hóa với Phiếu giao hàng.</p>
                <p>- Kiểm tra sản phẩm thực tế có đúng với sản phẩm mà Khách hàng đã đặt mua hay không.</p>
                <p>- Kiểm tra bao bì và sản phẩm có bị hư hại do quá trình vận chuyển hay không.</p>
                <p>
                  Nếu không hài lòng với 1 trong 3 điều trên, Khách hàng có thể yêu cầu Nhân viên giao hàng xác nhận và trả lại hàng.
                  Concung.com sẽ không chịu trách nhiệm giải quyết khiếu nại về việc thiếu hàng hoặc giao sai hàng của Khách hàng sau khi Khách hàng đã ký nhận và thanh toán.
                  Trong 15 ngày, quý khách được đổi hoặc trả hàng trong các trường hợp được quy định tại CHÍNH SÁCH ĐỔI TRẢ
                  Khách hàng nếu chọn hình thức "Thanh toán trực tiếp khi nhận hàng" thì thanh toán trực tiếp cho nhân viên giao hàng ngay sau khi nhận hàng.
                </p>

                <h5><strong>ĐƠN HÀNG NGOẠI THÀNH</strong></h5>
                <p>- Concung.com gửi hàng thông qua đơn vị vận chuyển và đảm bảo hàng hóa nguyên đai, nguyên kiện và mới 100%</p>
                <p>
                  - Nếu không hài lòng với kiện hàng đã giao, Khách hàng có thể trả lại hàng cho nhân viên nguyên đai, nguyên kiện như tình trạng ban đầu
                </p>
                <p>
                  - Trong 15 ngày, nếu không hài lòng với sản phẩm, quý khách có thể gọi đến tổng đài CSKH: 1900 8080  để được giải đáp thắc mắc.
                </p>
                <p>
                  - BABYSTORE không hỗ trợ phí vận chuyển các mặt hàng: tã, sữa, thực phẩm, khăn ướt, sản phẩm cồng kềnh không có thùng...
                </p>


              </div>
              <div id="insurance" class="tab-pane fade">
                <h5><strong>CHÍNH SÁCH BẢO HÀNH TẠI BABYSTORE.COM</strong></h5>
                <p>Tất cả sản phẩm được cung cấp tại Concung.com đều được bảo hành theo chế độ bảo hành của nhà sản xuất hoặc nhà phân phối chính thức tương ứng. Việc bảo hành tại chỗ hay mang đến trung tâm bảo hành phụ thuộc vào chính sách bảo hành cụ thể của từng dòng sản phẩm. Sẽ do Concung.com chịu trách nhiệm tiếp nhận và xử lý.
                  Nếu trường hợp khách hàng muốn bảo hành nhanh có thể trực tiếp mang sản phẩm đến nhà cung cấp để tự bảo hành.
                  Concung.com chỉ bảo hành những dòng sản phẩm có sử dụng pin hoặc điện. Vui lòng liên hệ nhân viên chăm sóc khách hàng (điện thoại 18006603) để cập nhật chế độ bảo hành của nhà sản xuất/ nhà phân phối áp dụng tại thời điểm khách hàng đặt mua. Những sản phẩm còn lại không có chính sách bảo hành.
                  Chế độ bảo hành áp dụng tại các cửa hàng của BABYSTORE.com trên toàn quốc.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-5 col-md-5">

              <div class="row">
              <div class="col-md-* title-more">
                <h3>XEM THÊM CHO BÉ</h3>
              </div>
                <div class="col-md-6" v-for="item in data2">
                  <div class="other-product">
                    <div class="container-item1">
                      <img :src="item.src" alt="item.name" class="img-responsive">
                      <h5 class="name">{{item.name}}</h5>
                      <h5 class="price">{{item.price}}</h5>
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
          name: 'DetailProduct',
          data () {
            return {
              data1: [
              {src: require('../assets/sp-slider/b-bo3/2.jpg'), name: 'Ô tô robot biến hình ', price: '450.000vnd', status: 'new'},
              {src: require('../assets/sp-slider/b-bo3/aothun3.jpg'), name: 'Áo thun tay ngắn - T555', price: '160.000vnd', status: 'new'}, {src: require('../assets/sp-slider/b-bo3/aothun4.jpg'), name: 'Áo thun tay ngắn - T555', price: '160.000vnd', status: 'new'}, {src: require('../assets/sp-slider/b-bo3/aothun5.jpg'), name: 'Áo thun tay ngắn - T555', price: '160.000vnd', status: 'new'}
              ],
              data2: [
              {src: require('../assets/boy/2-3tuoi01.jpg'), name: 'Ô tô robot biến hình ', price: '450.000vnd', status: 'new'},
              {src: require('../assets/boy/2-3tuoi02.jpg'), name: 'Ô tô robot biến hình ', price: '450.000vnd', status: 'new'},
              {src: require('../assets/boy/aothun1.jpg'), name: 'Ô tô robot biến hình ', price: '450.000vnd', status: 'new'},
              {src: require('../assets/boy/aothun2.jpg'), name: 'Áo thun tay ngắn - T555', price: '160.000vnd', status: 'new'}, {src: require('../assets/boy/aothun3.jpg'), name: 'Áo thun tay ngắn - T555', price: '160.000vnd', status: 'new'}, {src: require('../assets/boy/aosatnach1.jpg'), name: 'Áo thun tay ngắn - T555', price: '160.000vnd', status: 'new'}, {src: require('../assets/boy/aosatnach2.jpg'), name: 'Áo thun tay ngắn - T555', price: '160.000vnd', status: 'new'}, {src: require('../assets/boy/aothungantay.jpg'), name: 'Áo thun tay ngắn - T555', price: '160.000vnd', status: 'new'}
              ],
              couter: 1,
              color: 'Viền xanh',
              size: '3M'
            }
          },
          methods: {
            increase: function () {
              this.couter ++
            },
            decrease: function () {
              this.couter --
              if (this.couter <= 1) {
                this.couter = 1
              }
            },
            changeSize: function (index) {
              this.size = (index + 1) * 3 + 'M'
            },
            changeColor: function () {
              this.color = 'Viền vàng'
            }
          }
        }
      </script>

      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
       .show-detail{
        margin: 30px;
        border-bottom: 2px solid rgba(119, 119, 119, 0.48);
      }

      .carousel-indicators {
        position: absolute;
        width: 100%;
        bottom: -65px;
        z-index: 15;
        margin: 0;
        left: 0;
      } 

      .carousel-indicators >li{
        width:80px;
        height:80px;
      }

      @media (min-width: 425px){

       .carousel-indicators >li{
        width:45px;
        height:45px;
      }
    }
    @media (min-width: 768px){

     .carousel-indicators >li{
      width:45px;
      height:45px;
    }
  }

  @media (min-width: 768px){

   .carousel-indicators >li{
    width:80px;
    height:80px;
  }
}


.container-item{
  position: relative;
  border:1px solid rgba(85, 85, 85, 0.18);
  margin: 20px 0;
  height: 580px;
}

@media (min-width: 425px){
  .container-item{
    height: 370px;
  }
}

@media (min-width: 992px){
  .container-item{
    height: 488px;
  }
}

@media (min-width: 1170px){
  .container-item{
    height: 580px;
  }
}

.summary{
  text-align: left;
}

.title >h1{
  font-size: 1.6em;
}

@media (min-width: 425px){
  .title >h1{
    font-size: 1.6em;

  }
}


.comment{
  padding: 10px 0;
  border-top: 2px solid rgba(119, 119, 119, 0.45);
  border-bottom: 2px solid rgba(119, 119, 119, 0.45);
}

.comment >span{
  display: inline-block;
  width: 49%;
} 

@media (min-width: 425px){
 .comment >span{
  font-size: 0.6em;
} 
}

@media (min-width: 992px){
 .comment >span{
  font-size: 0.8em;
} 
}

.comment .btn {
  padding: 0 12px;
}
.star{
  width: 70%!important;
}
@media (min-width: 425px){
  .comment .btn {
    padding: 0 6px;
    font-size: 0.6em
  }
}
@media (min-width: 992px){
  .comment .btn {
    font-size: 0.8em
  }
}
.fa-star{
  font-size: 1.8em;
  color: yellow;
}

.description >ul{
  padding: 10px 0;
  font-size: 0.8em;
  border-bottom: 1px solid;
}


.price{
  padding: 10px 0;
}

.price span h3{
  display: inline-block;
}
ins{
  margin: 0 15px 0 15px;
  color: red;
  font-size: 1.1em;
  text-decoration: none;
}

@media (min-width: 425px){
  ins{
    font-size: 0.8em;
  }
}

@media (min-width: 768px){
  ins{
    font-size: 0.8em;
  }

  del{
    font-size: 0.8em;
  }
}

@media (min-width: 992px){
  ins{
    font-size: 1.1em;
  }

  del{
    font-size: 1.1em;
  }
}


.size, .color{
  padding-left: 0;
}

.size >button {
  margin-right: 5px;
}
.choose >span{
  padding: 10px 0;
  width: 50%;
  display: table-cell;
}

.quantity{
  padding: 10px 0;
}
.quanlity-product{
  display: inline-block;
  width: 80px;
  height: 40px;
  /*border: 1px solid rgba(119, 119, 119, 0.45);*/
}


.quanlity-product >input{
  display: inline-block;
  text-align: center;
  height: 30px;
  width: 30px;
  padding: 5px;
}

.quanlity-product >button{
  background: none;
  text-align: center;
  font-weight: bold;
  border:none;
  width: 15px;
  height: 40px;

}

.submit{
  padding: 10px 0;
}
.submit >button{
  width: 48%;
  border: none;
  height: 45px;
  font-size: 1em;
  text-transform: uppercase;
}

.btn-cart{
  background: #6CB33F;
  color: white;
}

.info{
  padding: 10px 0;
  border:1px solid #dedede;
  border-radius:4px;
}

.info > div >span{
  display: block;
  font-size: 0.8em;
}
.info >div>span>i{
  color: #EF689C;
}

@media (min-width: 768px){
  .info > div >span{
    display: block;
    font-size: 0.5em;
  }
}

@media (min-width: 992px){
  .info > div >span{
    display: block;
    font-size: 0.8em;
  }
}

.img{
  display: block;
  width: 70%;
  margin: auto;
}
.tab-item{
  margin-bottom: 10px;
}

.tab-detail{
  text-align: justify;
  padding: 10px;
  line-height: 28px;
  border: 1px solid rgba(119, 119, 119, 0.45);
}

.transport-detail{
  width: 50%;
  margin: auto;
  border: 1px solid rgba(119, 119, 119, 0.45);
  border-radius: 10px;
  padding: 10px;
}

.transport-detail >span{
  display: block;
  font-size: 0.8em;
  text-align: left;

}

.title-tab{
  color: #EA81B9
}

table, thead, tbody, tr, th, td{
  margin: auto;
  border:1px solid;
  padding:5px;
}
th{
  text-transform: uppercase;
  text-align: center;
}

th, td{
  width: 30%;
  font-size: 0.8em;
}

.other-product{
  border:1px solid rgba(0, 0, 0, 0.32);
  margin-bottom:10px;
}
.title-more{
  color: orangered;
}

.name{
  text-transform: capitalize;
  font-weight: bold;
}
.price{
  color: red;
  font-weight: bold;
  font-size: 1.2em;
}
</style>
