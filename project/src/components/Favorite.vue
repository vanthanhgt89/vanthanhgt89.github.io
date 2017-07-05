<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row blog">
        <button type="button" class="btn btn-basic menu-item" data-slide="myslide"><i class="fa fa-bars" aria-hidden="true"></i> DANH MỤC BÀI VIẾT</button>
        <div class="col-sm-3 col-md-3 nav-left">
          <ul>
            <li>
              <div class="user">
                <div class="col-sm-4 img-box">
                  <!-- <img src="../assets/avarta.png" alt=""> -->
                </div>
                <div class="col-sm-8 info">
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
            <li v-for="item in list1" class="list1"><i class="fa fa-angle-right" aria-hidden="true"></i> {{item}}</li>
            <li>
              <div class="title">
                <h4>Quản lý tài khoản</h4>
              </div>
            </li>
            <li class="list2" v-for="item in list2"><i class="fa fa-angle-right" aria-hidden="true"></i> {{item}}</li>

          </ul>
        </div>
        <!-- end nav-blog-->

        <div class="col-sm-9 col-md-9">
          <h3>Sản phẩm yêu thích</h3>
          <div class="col-md-3" v-for="(item,index) in image">
            <div class="container-item">
              <img :src="item.src" alt="item.name" class="img-responsive thumbnail image">
              <div class="price"><ins>{{item.priceIns}}</ins><del>{{item.priceDel}}</del></i> </div>              
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
    data () {
      return {
        list1: ['Tài khoản', 'Đơn hàng', 'Địa chỉ nhận hàng', 'Sản phẩm yêu thích '],
        list2: ['Thông tin tài khoản', 'Hộp thư', 'Hỏi đáp', 'Sản phẩm yêu thích '],
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
  .img-box{
    background: url('../assets/avarta.png');
    background-size:cover;
    border-radius: 50%;
    height: 84px;

  }
  .img-box>img{
    width: 100%;
    height: 84px;
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

  .list2{
    padding: 5px 0;
    transform: translateX(-10px);
    transition: all 0.3s linear;
  }

  .list1:hover{
    transform: translateX(10px);
    color:#F08113;
  }
   .list2:hover{
    transform: translateX(5px);
    color: #F08113;
  }

  h3{
    text-transform: uppercase;
    border-bottom: 2px solid orange;
  }

  @media (min-width: 425px){
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
</style>
