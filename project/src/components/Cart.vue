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
              <button class="decrease" @click="decrease(index)">-</button>
              <span>{{quanlity[index].couter}}</span>   
              <button class="increase" @click="increase(index)">+</button>
            </td>
            <td class="box-s sumproduct">{{moneyItem(index)}}</td>
            <td class="box-s"><button class="delete" @click="clean(index)"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
          </tr>
        </tbody>
      </table>

      <div class="row info">
        <div class="col-xs-* col-sm-6">
        <div class="col-xs-* col-sm-6 col-md-6 service">
          <span><i class="fa fa-volume-control-phone" aria-hidden="true"></i> 19008080</span>
          <span><i class="fa fa-map-marker" aria-hidden="true"></i> 5 Cửa hàng gần nhất</span>
        </div>

        <div class="col-xs-* col-sm-6 col-md-6 service">
          <span><i class="fa fa-refresh" aria-hidden="true"></i> Đổi hàng trong 15 ngày</span>
          <span><i class="fa fa-truck" aria-hidden="true"></i> Giao hàng toàn quốc</span>
          <span><i class="fa fa-money" aria-hidden="true"></i> Thanh toán khi nhận hàng</span>
        </div>
      </div>

      <div class="col-xs-* col-sm-6 total">
        <div class="title-table">
          <h3>Tổng tiền</h3>
        </div>
        <table id='submit'>
          <tr>
            <th>Tạm tính:</th>
            <td>{{firstTotal() + 'đ'}}</td>
          </tr>
          <tr>
            <th>Mã giảm giá:</th>
            <td><input type="text" class="form-control" v-model="sale"></td>
          </tr>
          <tr>
            <th>Giảm giá:</th>
            <td>{{codeSale() + 'đ'}}</td>
          </tr>
          <tr>
            <th>Tổng tiền:</th>
            <td>{{total() + 'đ'}}</td>
          </tr>

        </table>  
        <div class="submit-form">
         <router-link to="payment">
          <button class="btn btn-primary next">Thanh toán <i class="fa fa-angle-right" aria-hidden="true"></i></button>
        </router-link>
      </div>
    </div>
      </div>







  </div>
</div>
</template>

<script>
  export default {
    name: 'Cart',
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
        quanlity: [{couter: 1}, {couter: 1}],
        sale: ''
      }
    },
    methods: {
      clean: function (index) {
        this.images.splice(index, 1)
      },
      increase: function (index) {
        this.quanlity[index].couter ++
      },
      decrease: function (index) {
        this.quanlity[index].couter --
        if (this.quanlity[index].couter < 1) {
          this.quanlity[index].couter = 1
        }
      },
      moneyItem: function (index) {
        var number = this.images[index].price * this.quanlity[index].couter
        number.toString().replace('', /\./g)
        return number + 'đ'
      },
      firstTotal: function () {
        var total = 0
        for (var i = 0; i < this.images.length; i++) {
          total += this.images[i].price * this.quanlity[i].couter
        }
        return total
      },
      codeSale: function () {
        if (!this.sale) {
          return this.firstTotal()
        }
        return this.firstTotal() * Number(this.sale)
      },
      total: function () {
        if (!this.sale) {
          return this.firstTotal()
        }
        return this.firstTotal() - this.codeSale()
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .mycart{
  width:100%;
  margin: 50px auto;

}

.t-head{
  text-transform: uppercase;
  background: #F08113;
}

.t-head >th{
  text-align: center;
  padding: 20px 0;
  font-size: 0.8em;
  color: white;
}
.row-item{
  border-bottom: 1px solid rgba(0, 0, 0, 0.23);
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

.box-s >button{
  background: none;
  text-align: center;
  font-weight: bold;
  border:none;
  width: 15px;
  height: 40px;
}

.delete{
  background: none;
  outline: none;
  border: none;
}

.sub-table{
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 30px;
}
.sum{
  text-align: left;
  background: rgba(7, 117, 171, 0.15);
  padding: 15px;
}
.sum >span{

  display: inline-block;
  margin-right: 20px;
}

#submit{
  width: 100%;
}
.title-table >h3{
  color: orange;
  text-align: left;
  text-transform: uppercase;
}



#submit >tr >th{
  padding: 6px;
  width: 50%;
}
#submit >tr >td{
  width: 50%;
  padding: 6px;
  text-align: right;
}


.next{
  transform: translateX(10px);
  transition: all 0.3s linear;
}

.next:hover{
  transform: translateX(0);
}

.submit-form{
  width: 100%;
  text-align: right;
}

.submit-form >a >button{
  width: 150px;
  border-color: #F08113;
  background: #F08113;
  text-transform: uppercase;
}
.service>span{
  display: block;
  text-align: left;
  padding: 10px 0;
}

.service >span >i{
  color: orange;
}




</style>
