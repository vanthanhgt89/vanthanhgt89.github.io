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
              <img src="../assets/topsale/sosinh1.jpg" alt="" class="img-responsive">
            </div>
            <div class="summary">
              <h4 class="title">Áo thun bé trai Baby Store</h4>
              <span class="item">Màu sắc: Kem</span> 
              <span class="item">Size: 6M</span>
              <span class="item">Số lượng:  
              <button class="btn-couter" @click="decrease">-</button> 
              {{couter}} 
              <button class='btn-couter' @click="increase">+</button></span>
              <ins class="item2">180.000đ</ins> <del class="item2">270.000đ</del>
              <span ><strong>Thành tiền:</strong> 180.000đ</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <h4 class="title">Thông tin khách hàng</h4>
          <form action="" class="form-group">
            <input type="text" class="form-control info" placeholder="Họ và tên">
            <input type="text" class="form-control info" placeholder="Số điện thoại">
            <input type="text" class="form-control adress" placeholder="Địa chỉ">
            <button class="btn btn-basic" v-show="show">Thanh toán khi nhận hàng</button>
            <button class="btn btn-primary" v-show="show" @click="changeButton">Thanh toán bằng thẻ ATM
            </button>
            <router-link to="ATMBank">
            <button class="btn btn-basic" v-show="!show">Dùng thẻ ATM có internet Banking</button>
            </router-link>
            <router-link to="VisaCard">
            <button class="btn btn-primary" v-show="!show" >Dùng thẻ Visa, Master
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
      couter: 1,
      show: true
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
    changeButton: function () {
      this.show = false
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

.item{
  display: block;
  width: 31%;
}

.item2{
  display: block;
  width: 47%;
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
