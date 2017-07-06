<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row blog">
        <button type="button" class="btn btn-basic menu-item" data-slide="my-slide"><i class="fa fa-bars" aria-hidden="true"></i> Menu</button>
        <div class="col-sm-3 col-md-3 nav-left">
          <ul>
            <li>
              <div class="user">
                <div class="col-xs-4 col-sm-4 img-box">
                  <img src="../assets/avarta.png" alt="">
                </div>
                <div class="col-xs-8 col-sm-8 info">
                  <h4>Tên tài khoản</h4>
                  <span>Chỉnh sửa tài khoản</span>
                </div>

              </div>

            </li>
            <li>
              <div class="title">
                <h4>Quản lý giao dịch</h4>
              </div>
            </li>

            <ul class="nav nav-pills nav-stacked">
              <li class="active"><a data-toggle="pill" href="#favorite">Sản phẩm yêu thích</a></li>
              <li><a data-toggle="pill" href="#cart">Đơn hàng</a></li>
              <li><a data-toggle="pill" href="#adress">Địa chỉ nhận hàng</a></li>
              <li><a data-toggle="pill" href="#history">Lịch sử giao dịch</a></li>
            </ul>
            



        </ul>
      </div>
      <div class="col-md-9">
       <div class="tab-content ">
        <div id="favorite" class="tab-pane fade in active">
          <h3>Sản phẩm yêu thích</h3>
          <div class="col-md-3" v-for="(item,index) in image">
          <div class="container-item">
            <img :src="item.src" alt="item.name" class="img-responsive thumbnail image">
            <div class="price">
            <ins>{{item.priceIns}}</ins><del>{{item.priceDel}}</del></i> 
            </div>              
            <p>{{item.name}}</p> 
            <div class="cart" >
             <button class="btn btn-danger" >Mua hàng</button>
           </div>
           <div class="delete">
             <button type="button" @click="hidden(index)" data-toggle="modal" data-target="#delete" ><i class="fa fa-trash" aria-hidden="true"></i></button>

           </div>

         </div>

       </div>

         
        </div>
        <div id="cart" class="tab-pane fade">
          <h3>Đơn hàng</h3>
          <table class="order-table">
          <thead>
           <th>Mã đơn</th>
            <th>Ngày đặt hàng</th>
            <th>Tổng tiền</th>
            <th>Tình trạng</th>
          </thead>

          <tbody>
            <tr class="row-item">
              <td>0100154</td>
              <td>05/06/2017</td>
              <td>1.500.000đ</td>
              <td class="order-status order-accept">Đã nhận hàng</td>
            </tr>

             <tr class="row-item">
              <td>0145540</td>
              <td>05/06/2017</td>
              <td >1.800.000đ</td>
              <td class="order-status order-transport">Đang vận chuyển</td>
            </tr>

             <tr class="row-item">
              <td>0235140</td>
              <td>05/06/2017</td>
              <td>1.200.000đ</td>
              <td class="order-status order-cancel">Hủy</td>
            </tr>
          </tbody>
           
          </table>
        </div>
        <div id="adress" class="tab-pane fade">
          <h3>Địa chỉ nhận hàng</h3>
          <form action="" class="form-group">
            <div class="form-item" v-for="item in list">
            <label for="email">{{item.name}} </label>
            <input class="input-register"  type="text" id="email"  :value="item.value" disabled>
            <button class="btn btn-primary btn-repair"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Chỉnh sửa</button>
            </div>
          <button class="btn btn-primary btn-save">Lưu thông tin</button>
          </form>
        </div>
        <div id="history" class="tab-pane fade">
          <h3>Lịch sử giao dịch</h3>
          <table class="order-table">
          <thead>
           <th>Mã đơn</th>
            <th>Ngày đặt hàng</th>
            <th>Tổng tiền</th>
            <th>Tình trạng</th>
          </thead>

          <tbody>
            <tr class="row-item" v-for="item in list1">
              <td>{{item.code}}</td>
              <td>{{item.date}}</td>
              <td>{{item.money}}</td>
              <td class="order-status">{{item.status}}</td>
            </tr>
           
          </tbody>
           
          </table>
        </div>
      </div>
    </div>
    
    <!-- end nav-blog-->

     
     <ul class="pagination">
      <li><a href="#"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a></li>
      <li><a href="#">1</a></li>
      <li class="active"><a href="#">2</a></li>
      <li ><a href="#">3</a></li>
      <li><a href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></li>


    </ul>

  </div>
</div>
</div>
</div>
</template>

<script>
  export default {
    name: 'Favorite',
    mounted () {
      window.$('[data-slide="my-slide"]').click(function () {
        window.$('.nav-left').animate({
          width: 'toggle'
        }, 350)
      })
    },
    data () {
      return {
        list: [
        {name: 'Email:', value: 'vanthanhgt89@gmail.com'},
        {name: 'Password:', value: '**********'},
        {name: 'Họ và tên:', value: 'Bùi Văn Thanh'},
        {name: 'Số điện thoại:', value: '12345678'},
        {name: 'Địa chỉ:', value: 'Đại Mỗ - Nam Từ Liêm - Hà Nội'},
        {name: 'Ngày sinh:', value: '06/11/1989'},
        {name: 'Giới tính:', value: 'Nam'}
        ],
        list1: [
        {code: 102151, date: '05/06/2017', money: '1.151.000đ', status: 'Đã nhận hàng'},
        {code: 102151, date: '05/04/2017', money: '1.510.000đ', status: 'Đang vận chuyển'},
        {code: 102151, date: '17/03/2017', money: '1.451.000đ', status: 'Hủy'},
        {code: 102151, date: '18/04/2017', money: '1.299.000đ', status: 'Đã nhận hàng'},
        {code: 102151, date: '25/06/2017', money: '1.011.000đ', status: 'Đã nhận hàng'}
        ],
        image: [
        {src: require('../assets/topsale/sosinh1.jpg'), name: 'Áo thun bé trai tay Baby Store B057032 Xanh', priceIns: '155.000đ', priceDel: '195.000đ', status: 'sale'},
        {src: require('../assets/topsale/sosinh2.jpg'), name: 'Áo thun bé trai tay Baby Store B057032 Xanh', priceIns: '155.000đ', priceDel: '200.000đ', status: 'sale'}
        ],
        show: 'show'
      }
    },
    methods: {
      hidden: function (index) {
        this.image.splice(index, 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .blog{
  margin: 50px auto;
  text-align: left;
}

.user{
  width: 100%;
  height: 84px;
  padding: 10px 0;
}

.img-box>img{
  border: 1px solid rgba(214, 135, 23, 0.8);
  border-radius: 50%;

}

.info >span{
  font-size: 0.7em;
}

.nav-left{
  border: 1px solid rgba(85, 85, 85, 0.64);
}

.nav-left >ul{
  overflow: hidden;
}

.title{
  margin: 20px 0 ;
  border-top: 1px solid;
  border-bottom: 4px double;
  text-transform: uppercase;
}
.title >h4{
  color: #F08113;
  padding: 5px 0;
}

.list1{
  padding: 5px 0;
  transform: translateX(-10px);
  transition: all 0.3s linear;
}
.list1:hover{
  transform: translateX(10px);
  color:#F08113;
}


h3{
  text-transform: uppercase;
  border-bottom: 2px solid orange;
}

@media (min-width: 375px){
  .menu-item{
    display: block;
  }

  .nav-left{
    display: none;
  }
}

@media (min-width: 768px){
  .menu-item{
    display: none;
  }
  .nav-left{
    display: block;
  }
}

.nav >li.active >a{
  background: #ef6c00;
}
.container-item{
  border: 1px solid rgba(85, 85, 85, 0.64);
  position: relative;
  text-align: left;
  padding: 5px;
}



.delete{
  position: absolute;
  top:0;
  left: 0;
}

.price{
  height: 25px;
}
ins{
  display: block;
  float: left;
  color: red;
  width: 50%;
}
del{
  display: block;
  float: right;
}

.container-item >p{
  font-size: 0.8em;
  text-align: justify;
}

.cart{
  display: flex;
  justify-content: flex-end;
}
.container-item >button{
  display: block;
}

.pagination{
  width: 100%;
  padding-top:50px;
  display: flex;
  justify-content: center;
}



.order-table{
  width:100%;

}

thead >th{
  text-align: center;
  padding: 10px;
  background: #ef6c00;
  color: white; 
}

.row-item{
  text-align: center;
}

.row-item >td{
  padding: 10px;
}


.order-accept{
  color: #e53935;
}
.order-transport{
  color: #fb8c00;
}

.order-cancel{
  color: #757575; 
}
label{
  padding: 10px;
  width: 30%;
}
.input-register{
  width: 50%;
  background: #f5f5f5;

}

.btn-repair{
  float: right!important;
  background: #ef6c00;
  border:1px solid #ef6c00;
}
.btn-save{
  background: #ef6c00;
  border:1px solid #ef6c00;
  display: block;
  margin: auto;
}


</style>
