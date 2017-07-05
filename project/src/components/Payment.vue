<template>
  <div class="container">
    <div class="row">
      <div class="adress">
        <div class="title">
          <h3>Thông tin khách hàng</h3>
        </div>

        <form action="" class="form-group payment-form">
          <input type="text" class="form-control author" placeholder="Họ và tên">
          <input type="text" class="form-control phone" placeholder="Số điện thoại">
          <input type="text" class="form-control adress" placeholder="Địa chỉ" >
          <select name="adress-item"  class="form-control adress-item">
            <option value="" v-for="list in list1">{{list}}</option>
          </select>

          <select name="adress-item"  class="form-control adress-item">
            <option value="" v-for="list in list2">{{list}}</option>
          </select>

          <select name="adress-item"  class="form-control adress-item">
            <option value="" v-for="list in list3">{{list}}</option>
          </select>

          <select name="adress-item"  class="form-control">
            <option value="" v-for="list in list4">{{list}}</option>
          </select>
        </form>

        <div class="title">
          <h3>Hình thức thanh toán</h3>
        </div>
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Thanh toán bằng ATM có Internet Banking</a>
              </h4>
            </div>
            <div id="collapse1" class="panel-collapse collapse in">
              <div class="panel-body">
                <div class="col-sm-3 col-md-2 bank-logo" v-for="image in images">
                  <img :src="image.src" alt="" class="img-resposive">
                </div>
                <div class="note"><p > * Đơn hàng sẽ được vận chuyển ngay sau khi bạn thanh toán thành công</p></div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Chuyển khoản qua ngân hàng</a>
              </h4>
            </div>
            <div id="collapse2" class="panel-collapse collapse">
              <div class="panel-body info-bank">
                <p>Bạn có thể đến bất kỳ ngân hàng nào ở Việt Nam (hoặc sử dụng Internet Banking) để chuyển tiền theo thông tin bên dưới:</p>
                <p>Số Tài Khoản:     <strong>0590107650007</strong></p>
                <p>Chủ tài khoản:   <strong>Bùi Văn Thanh</strong></p>
                <p>Ngân hàng:        <strong>Ngân hàng MB Chi nhánh Xã Đàn - Hà Nội</strong></p>
                <p>Tại mục Ghi chú khi chuyển khoản, bạn cần ghi kèm số điện thoại sau để Baby Store xác nhận thanh toán:</p>
                <p>0988260505</p>
                <div class="note"><p > * Đơn hàng sẽ được vận chuyển ngay sau khi bạn thanh toán thành công</p></div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Thu phí tại nhà</a>
              </h4>
            </div>
            <div id="collapse3" class="panel-collapse collapse">
              <div class="panel-body">
                <p>Dựa trên thông tin quý khách cung cấp chúng tôi sẽ thu phí tại nhà kèm chi phí vạn chuyển đơn hàng (Nếu có)  theo lựa chọn vận chuyển của quý khách</p>
              </div>
            </div>
          </div>
        </div> 

        <div class="title">
        <h3>Thông tin đơn hàng</h3>
        </div>
        <table class="info-cart">
          <tr v-for="image in imagesCart" class='item'>
            <td class="img"><img :src="image.src" alt="" class="img-responsive"></td>
            <td class="name" >{{image.name}}</td>
            <td class="price">{{image.total}}</td>
          </tr>
          <tr class="detail-price">
            <td colspan="2"><strong>Tạm tính:</strong> </td>
            <td class="text-center">295.000đ</td>
          </tr>
          <tr class="detail-price">
            <td colspan="2"><strong>Giảm giá:</strong> </td>
            <td class="text-center">50.000đ</td>
          </tr>
          <tr class="detail-price"> 
            <td colspan="2"><strong>Phí giao hàng:</strong> </td>
            <td class="text-center">0đ</td>
            
          </tr>
          <tr class="detail-price">
            <td colspan="2"><strong>Tổng tiền:</strong> </td>
            <td class="text-center"><strong>245.000đ</strong></td>
          </tr>
          <tr>
          <td class="register" colspan="3">  
          <button class="btn btn-primary">Đặt hàng</button>
          </td>  
          </tr>
        </table>







      </div>

    </div>

  </div>
  </template>

  <script>
    export default {
      name: 'Payment',
      data () {
        return {
          list1: ['Tỉnh / Thành phố', 'Hà Nội', 'Nam Định', 'TP. Hồ Chí Minh '],
          list2: ['Quận / Huyện', 'Thanh Xuân', 'Đống Đa'],
          list3: ['Phường / Xã', 'Nguyễn Du', 'Xuân Tiến'],
          list4: ['Chọn nhà vận chuyển', 'Giao hàng nhanh', 'Viettel', 'VNPT'],
          images: [
            {
              src: require('../assets/bank/logo-agribank.png')
            },
            {
              src: require('../assets/bank/logo-donga.png')
            },
            {
              src: require('../assets/bank/logo-eximbank.png')
            },
            {
              src: require('../assets/bank/logo-maritimebank.png')
            },
            {
              src: require('../assets/bank/logo-mb.png')
            },
            {
              src: require('../assets/bank/logo-scb.png')
            },
            {
              src: require('../assets/bank/logo-secombank.png')
            },
            {
              src: require('../assets/bank/logo-techcombank.png')
            },
            {
              src: require('../assets/bank/logo-tpbank.png')
            },
            {
              src: require('../assets/bank/logo-vib.png')
            },
            {
              src: require('../assets/bank/logo-vietcombank.png')
            },
            {
              src: require('../assets/bank/logo-vietinbank.png')
            }
          ],
          imagesCart: [
            {
              src: require('../assets/topsale/sosinh1.jpg'),
              name: 'Áo thun bé trai tay Baby Store B057032 Xanh',
              total: '150.000đ'
            },
            {
              src: require('../assets/topsale/sosinh1.jpg'),
              name: 'Áo thun bé trai tay Baby Store B057032 Xanh',
              total: '145.000đ'
            }
          ]
        }
      }
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .title >h3{
    text-transform: uppercase;
    color:rgba(7, 117, 171, 0.9)
  }
  .payment-form{
    width: 70%;
    margin: auto;
  }

  .payment-form .author {
    width: 48%;
    float: left;
    margin: 10px 4% 10px 0;
    padding: 10px;
  }

   .payment-form .phone {
    width: 48%;
    float: left;
    margin: 10px 0;
    padding: 10px;
  }

  .adress{
    padding: 10px;
  }

  .adress-item{
    width: 30%;
    margin: 10px 0;
    float: left;
  }

form > select:nth-child(5){
  margin: 10px 5%;
 }
  @media (min-width: 425px){
    .adress-item{
    width: 100%;
    }
    form > select:nth-child(5){
     margin: 0;
 }
  }
   @media (min-width: 768px){
    .adress-item{
    width: 30%;
    }
    form > select:nth-child(5){
  margin: 10px 5%;
 }
  }


#accordion{
  width: 70%;
  margin: auto;
}
.panel-heading{
  background: none;
}
.panel-title{
  text-align: left;
  background: none;
}

.bank-logo >img{
  height: 40px;
}
.note{
  color: red;
}

.info-bank{
  text-align: left;
}

.info-cart{
  width: 70%;
  margin: auto;
}

.info-cart >tr .img{
  width: 10%;
}
.info-cart >tr .img >img{
  width: 100%;
}

.item{
  padding: 10px;
  border-top: 1px solid #ddd;
}

.detail-price {
  text-align: left;
}
.detail-price >td{
  padding: 5px 0;
}
.register{
  text-align: right;
}

table > tr:nth-child(7) > td > button{
  width: 200px;
}

@media (min-width: 425px){
  .name, .price{
    font-size: 0.6em;
  }
}
@media (min-width: 768px){
  .name, .price{
    font-size: 1em;
  }
}
</style>
