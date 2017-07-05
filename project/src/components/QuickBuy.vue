<template>
 

  <!-- Modal -->
  <div class="modal fade" id="quickbuy" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <div class="header">
            <div class="box-img">
              <img src="../assets/topsale/sosinh1.jpg" alt="" class="img-responsive img-style">
            </div>
            <div class="summary">
              <h4 class="title">Áo thun bé trai Baby Store</h4>
              <div class="info-text">
              <span class="item">Màu sắc: Kem</span> 
              <span class="item">Size: 6M</span>
              <span class="item">Số lượng:   <button class="btn-couter" @click="decrease">-</button> 
              {{couter}} 
              <button class='btn-couter' @click="increase">+</button> </span>
              </div>
            <div class="price">
              <ins class="item2">180.000đ</ins> <del class="item2">270.000đ</del>
            </div>
              <span class="total">Thành tiền: <strong style="color:red">180.000đ</strong></span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <h4 class="title">Thông tin khách hàng</h4>
          <form action="" class="form-group">
            <input type="text" class="form-control info" placeholder="Họ và tên">
            <input type="text" class="form-control info" placeholder="Số điện thoại">
            <input type="text" class="form-control adress" placeholder="Địa chỉ">
         
            <router-link to="atm-bank">
            <button class="btn btn-basic" data-dismiss="modal" >Dùng thẻ ATM có internet Banking</button>
            </router-link>
            <router-link to="visa-card">
            <button class="btn btn-primary" data-dismiss="modal"  >Dùng thẻ Visa, Master
            </button></router-link>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      couter: 1
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width: 100%;
  display: flex;
}
.box-img{
  width: 20%;

}
.img-style{
  padding: 10px;
}
.summary{
  width: 80%;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
}
.title{
  width: 100%;
  color:#F8840B;
  text-align: left;
}
.info-text{
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #eceff1;
  border-top: 1px solid #eceff1;
}
.item{
  display: block;
  width: 31%;
  float: left;
}

.price{
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #eceff1;
}
.item2{
  display: block;
  width: 47%;
}

.total{
  padding: 10px 0;
}
.form-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 130px;
}

.info{
  width: 48%;
}


.btn-couter{
  background: none;
  border: none;
}

.btn-basic{
  background: #F8840B;
  width: 48%;
  color: white;
}

.btn-primary{
  width: 48%;
}
.btn-atm{
  background: #F8840B;
  color: white;
  width: 100%;
}
.form-group >a{
  width: 48%;
}
.form-group >a >button{
  width: 100%;
  padding: 10px 12px;
}

</style>
