<template>
  <div class="container-fluid">
    <div class="wrap">
      <div class="order-info">
        <div class="company">
          <h5><strong>Đơn vị</strong></h5>
          <h4>BaByStore</h4>
        </div>
        <div class="name">
          <h5><strong>Đơn hàng</strong></h5>
          <h4 style="color:#999">Thanh toán đơn hàng 110010 số tiền 150.000 đ</h4>
        </div>
        <div class="payment">
          <h5><strong>Tổng tiền</strong></h5>
          <h4 style="color:orange">150.000 VNĐ</h4>
        </div>
      </div>
      <!--end order-info-->

      <div class="select-bank">
        <div class="curren-select" v-show="show">
          <h4 class="title">Thẻ ATM nội địa thanh toán gần đây</h4>
          <div class="img-box-1">
          <img src="../assets/bank/logo-agribank.png" alt="">
          </div>
        </div>
        <div class="allbank" v-show="show">
          <h4 class="title">Thẻ ATM nội địa / Internet Banking</h4>
          <div class="img-box" v-for="image in images">
            <img :src="image.src" alt="" class="img-responsive thumbnail" @click='showDetail'>
          </div>
          <div class="cancel">
            <span>Hủy giao dịch</span>
          </div>
        </div>
        <div class="pay" v-show="!show"> 
          <form action="" class="form-group">
            <input type="text" class="form-control" placeholder="Tên chủ thẻ">
            <input type="text" class="form-control" placeholder="Số thẻ">
            <input type="text" class="form-control" placeholder="Ngân hàng">
            <h4><strong>Tổng tiền:</strong> <span style="color:orange">150.000 VNĐ</span></h4>
            <button class="btn btn-submit">Thanh toán</button>
          </form>
          <div class="img-box-2">
          <img src="../assets/bank/card.jpg" alt="">
          </div>
           <div class="cancel">
            <span>Hủy giao dịch</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ATMBank',
  data () {
    return {
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
        },
        {
          src: require('../assets/bank/logo-vietinbank.png')
        },
        {
          src: require('../assets/bank/logo-vietinbank.png')
        },
        {
          src: require('../assets/bank/logo-vietinbank.png')
        },
        {
          src: require('../assets/bank/logo-vietinbank.png')
        }
      ],
      show: true
    }
  },
  methods: {
    showDetail: function () {
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-fluid{
    background: #EAEAEA;

  }
  .wrap{
    width: 60%;
    margin:30px auto 0 auto;
  }

  .order-info{
    width:100%;
    display: flex;
    justify-content: space-between;
    background: white;
  }

  .company, .payment{
    width: 23%;
    padding: 10px 0;
  }
  .name{
    width: 50%;
    border-left: 1px  dashed #ccc;
    border-right: 1px  dashed #ccc;
    padding: 10px 0;
  }

  .allbank{
    width: 100%;
  }

  .select-bank{
    text-align: left;
    padding: 10px;
    border: 10px solid white;
    background: #DCF8F9;
    margin: 30px 0;
  }
  .current-select{
    width: 100%;
    border: 1px solid;
  }

   .img-box-1{
    width: 25%;
    margin: 10px 0;
  }
  .img-box-1 >img{
    width: 70%;
    height: 50px;
    display: block;
    margin: auto;
    cursor: pointer;
  }

  .allbank{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .title{
    width: 100%;
  }
  .img-box{
    width: 25%;
    margin: 10px 0;
  }
  .img-box >img{
    width: 70%;
    height: 50px;
    display: block;
    margin: auto;
    cursor: pointer;
  }

  .cancel{
    width: 30%;
    margin: auto;
    text-align: center;
  }
  .pay{
    display: flex;
    flex-wrap: wrap;
  }
  .form-group{
    width: 40%;
  }
  .form-control{
    margin: 10px 0;
  }
  .img-box-2{
    width: 60%;
  }
  .img-box-2 >img{
    display: block;
    margin: auto;
  }

  .btn-submit{
    width: 100%;
    background: orange;
    color: white;
    text-transform: uppercase;
  }

</style>
