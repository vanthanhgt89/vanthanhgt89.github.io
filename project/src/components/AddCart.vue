<template>
  <div class="container-fluid">
    <div class="container">
      <table class="mycart">
        <thead class="t-head">
          <th>Sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Màu sắc / Size</th>
          <th>đơn giá</th>
          <th>Số lượng</th>
          <th>thành tiền</th>
          <th>Xóa</th>
        </thead>
        <tbody class="t-body">
          <tr v-for="(item,index) in images" class="row-item">
            <td class="box-l"><img :src="item.src" alt="" class="img-responsive thumbnail"></td>
            <td class="box-l">{{item.name}}</td>
            <td class="box-s"></td>
            <td class="box-s price">{{item.priceIns}}</td>
            <td class="box-s">
              <form action="" class="quanlity-product">
                
                <input type="text" :value="changeValue" v-model="quanlity" :id="index">
                <label :for="index"><button class="decrease" @click="decrease">-</button><button class="decrease" @click="decrease(index)">-</button></label>
                <p>{{name}}</p>
                <!-- <button class="increase" @click="increase(quanlity)">+</button> -->
              </form>
            </td>
            <td class="box-s sumproduct">{{(sumTotal(index) * item.price)}}</td>
            <td class="box-s"><button class="delete" @click="clean(index)"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
          </tr>
          <tr class="total">
            <td colspan="2">
              <img src="../assets/logo/cart-icon.png" alt="">
              <div>
                <span>Miễn phí giao hàng cho đơn hàng trên 199.000₫ nội thành
                  và 399.000₫ đối với ngoại thành » xem chi tiết</span>
                  <span>15 ngày hoàn đổi sản phẩm</span>
                  <span>Gọi 1800 6609 để được hỗ trợ (từ 8:00 - 21:00)</span>
                </div>

              </td>
              <td colspan="2">a</td>
              <td colspan="4">
              <div class="sum">

                  <h4>Tổng tiền</h4>
                  <label class="tongtam">Tổng tạm: </label> <span>{{sum}}</span>
                  <label for="">Mã giảm giá:</label>
                </div>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

  <script>
    export default {
      name: 'Favorite',
      data () {
        return {
          list1: ['Tài khoản', 'Đơn hàng', 'Địa chỉ nhận hàng', 'Sản phẩm yêu thích '],
          list2: ['Thông tin tài khoản', 'Hộp thư', 'Hỏi đáp'],
          images: [
            {
              src: require('../assets/topsale/sosinh1.jpg'),
              name: 'Áo thun bé trai tay Baby Store B057032 Xanh',
              price: 155000,
              priceIns: '155.000đ',
              priceDel: '195.000đ'
            },
            {
              src: require('../assets/topsale/sosinh1.jpg'),
              name: 'Áo thun bé trai tay Baby Store B057032 Xanh',
              price: 155000,
              priceIns: '155.000đ',
              priceDel: '195.000đ'
            }
          ],
          quanlity: 1,
          couter: 1,
          sum: 0,
          name: ''
        }
      },
      methods: {
        clean: function (index) {
          this.images.splice(index, 1)
        },
        sumTotal: function (event) {
          return this.quanlity >= 1 ? this.quanlity : 1
        },
        nameKeyup: function (index) {
          this.name = event.target.value
        },
        decrease: function () {
          this.changeValue ++
        },
        changeValue: function () {
          return 1
        }
      }
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
   .mycart{
    width:100%;
    border: 1px solid;
    margin: 50px auto;
  }

  .t-head{
    text-transform: uppercase;
    background: #336699;
  }

  .t-head >th{
    text-align: center;
    padding: 20px 0;
    font-size: 0.8em;
    color: white;
  }

  .row-item >td{
    padding: 20px 0;
  }
  .box-l{
    width: 20%;
    height: 70px;
    text-align: left;
  }

  .box-l >img{
    display: block;
    height: 70px;
    margin: auto;
  }

  .box-s{
    width: 12%;
    height: 70px;
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
    width: 70px;
    padding: 5px;
  }

/*  .quanlity-product >button{
    background: none;
    text-align: center;
    font-weight: bold;
    border:none;
    width: 15px;
    height: 40px;
  }*/

  .delete{
    background: none;
    outline: none;
    border: none;
  }

  .total >td{
    background: lightblue;
    padding: 10px 0;
  }

  .total >td >img{
    display: block;
    float: left;
  }

  .total >td div>span{display: block;text-align: left;}
  
  .sum{
    text-align: left;
  }


</style>
