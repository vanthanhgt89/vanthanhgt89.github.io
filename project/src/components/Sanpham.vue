<template>
  <div class="container-fluid ">
    <div class="container-fluid banner">
      <div id="product">
      </div>

      <div id="go-down">
        <a href="#about" id="go-about"></a>
      </div>
    </div>
    <div class="container content">
      <div class="row nav-desktop">
        <div class="title">
          <div class="col-xs-2 col-sm-2 col-md-2">
          <button type="button" class="btn btn-basic menu-xs" data-slide="catalogues"><i class="fa fa-bars" aria-hidden="true"></i></button>
            <div class="menu">
              <span><i class="fa fa-bars" aria-hidden="true" ></i> sản phẩm</span>
            </div>
          </div>
          <div class="col-xs-10 col-sm-6 col-md-6">
            <div class="searchbar">
              <form action="" id="searchform">
                <input type="text" placeholder="Bố mẹ đang tìm kiếm gì cho bé ?" id="search"> <button><i class="fa fa-search" aria-hidden="true"></i></button>
              </form>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 sort">
           <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle text-box" type="button" data-toggle="dropdown">Sắp xếp theo giá 
              <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li v-for="item in prices" ><router-link to="detail-product"><input type="checkbox"> {{item.price}}</router-link></li>

              </ul>
            </div>
          </div>

           <div class="col-sm-2 col-md-2 sort">
           <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle text-box" type="button" data-toggle="dropdown">Sắp xếp theo tuổi
              <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li v-for="item in age" ><router-link to="detail-product"><input type="checkbox"> {{item}}</router-link></li>

              </ul>
            </div>
          </div>
        
        </div>
      </div>

      <div class="row">

        <div class="col-sm-2 col-md-2">
         
          <div class="list-catalogues">
            <ul>

              <li class="list-1">
               <router-link to="detail-product"> <strong>Đồ sơ sinh</strong></router-link>
               <ul>
                <li v-for="item in list1"><router-link to="detail-product">{{item}}</router-link></li>
              </ul>
            </li>

            <li class="list-2">
              <router-link to="detail-product"> <strong>Thời trang bé trai</strong></router-link>
              <ul>
                <li v-for="item in list2"><router-link to="detail-product">{{item}}</router-link></li>

              </ul>
            </li>

            <li class="list-3">
              <router-link to="detail-product"> <strong>Thời trang bé gái</strong></router-link>
              <ul>
                <li v-for="item in list3"><router-link to="detail-product">{{item}}</router-link></li>

              </ul>
            </li>


            <li class="list-4">
              <router-link to="detail-product"> <strong>Đồ chơi trẻ em</strong></router-link>

              <ul>
                <li v-for="item in list4"><router-link to="de">{{item}}</router-link></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
      <div class="col-sm-10 col-md-10">
        <div class="row product">
          <div class="col-xs-* col-sm-4 col-md-4"  >
            <Slider5></Slider5>
          </div>
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider6></Slider6>
          </div>
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider7></Slider7>
          </div>
          <div class=" col-xs-* col-sm-4 col-md-4"  >
            <Slider8></Slider8>
          </div>
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider9></Slider9>
          </div>
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider10></Slider10>
          </div>
          
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider11></Slider11>
          </div>
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider12></Slider12>
          </div>
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider13></Slider13>
          </div>
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider></Slider>
          </div>
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider2></Slider2>
          </div>
          <div class="col-xs-* col-sm-4 col-md-4" >
            <Slider3></Slider3>
          </div>

          
          </div>
          <ul class="pagination next-page">
            <li><router-link to=""><i class="fa fa-angle-double-left" aria-hidden="true"></i></router-link></li>
            <li><router-link to="">1</router-link></li>
            <li class="active"><router-link to="">2</router-link></li>
            <li><router-link to="">3</router-link></li>
            <li><router-link to="">4</router-link></li>
            <li><router-link to="">5</router-link></li>
            <li><router-link to=""><i class="fa fa-angle-double-right" aria-hidden="true"></i></router-link></li>
          </ul>
      </div>
    </div>
  </div>

</div>


</div>
</template>

<script>
  import Slider5 from '../components/Slider5'
  import Slider6 from '../components/Slider6'
  import Slider7 from '../components/Slider7'
  import Slider8 from '../components/Slider8'
  import Slider9 from '../components/Slider9'
  import Slider10 from '../components/Slider10'
  import Slider11 from '../components/Slider11'
  import Slider12 from '../components/Slider12'
  import Slider13 from '../components/Slider13'
  import Slider from '../components/Slider'
  import Slider2 from '../components/Slider2'
  import Slider3 from '../components/Slider3'
  export default {
    name: 'Sanpham',
    mounted () {
      window.$('[data-slide="catalogues"]').click(function () {
        window.$('.list-catalogues').animate({
          width: 'toggle'
        }, 350)
      })
    },
    data () {
      return {
        prices: [{price: 'Theo giá sản phẩm'}, {price: 'Từ cao đến thấp'}, {price: 'Từ thấp đến cao'}, {price: 'Dưới 200.000 VND'}, {price: 'Dưới 500.000 VND'}, {price: 'Dưới 1 triệu'}, {price: 'Dưới 2 triệu'}, {price: 'Trên 2 triệu'}],
        age: ['0 - 1 tuổi', '2 - 3 tuổi', '3 - 5 tuổi', '5 - 8 tuổi', '8 tuổi trở lên'],
        list1: ['Quần áo sơ sinh', 'Sữa cho bé', 'Lôi điện và ghế rung', 'Xe đẩy cho bé', 'Giường và cũi gỗ cho bé', 'Bỉm và tã giấy cho bé'],
        list2: ['Áo sơ mi', 'Quần jean', 'Quần kaki', 'Quần short', 'Quần áo ở nhà', 'Giày dép thời trang'],
        list3: ['Áo sơ mi', 'Quần jean', 'Chân váy', 'Chân liền', 'Quần jean', 'Quần áo ở nhà', 'Giày dép thời trang'],
        list4: ['Ô tô đồ chơi', 'Xe máy đồ chơi', 'Xe đạp', 'Đồ chơi xếp hình', 'Đồ chơi điểu khiển', 'Đồ chơi xếp hình', 'Sách truyện cho bé']
      }
    },
    components: {
      Slider5,
      Slider6,
      Slider7,
      Slider8,
      Slider9,
      Slider10,
      Slider11,
      Slider12,
      Slider13,
      Slider,
      Slider2,
      Slider3
    }
  }
</script>


<style scoped>

 .banner {
  position: relative;
  display: flex;
  background-image: url('../assets/banner/banner1.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 300px;

}

@media (min-width: 425px) {
  .banner {
    background-size: contain;
    height: 150px;

  }
}

@media (min-width: 768px) {
  .banner {
    background-size: cover;
    height: 175px;

  }
}

@media (min-width: 992px) {
  .banner {
    background-size: cover;
    height: 200px;

  }
}

@media (min-width: 1200px) {
  .banner {
    background-size: cover;
    height: 300px;
  }
}


#go-down {
  position: absolute;
  bottom: -22px;
  left: 50%;
  margin: 15px auto;
}

@media (min-width: 425px) {
  #go-down {
    bottom: -32px;
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

@media (min-width: 425px) {
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

#product {
  width: 55%;
  font-family: "Courgette", cursive;
  font-size: 2em;
  color: white;
  text-transform: capitalize;
  margin: auto;
}

@media (min-width: 425px) {
  #product {
    font-size: 0.8em;
  }
}

@media (min-width: 768px) {
  #product {
    font-size: 1.2em;
  }
}

@media (min-width: 992px) {
  #product {
    font-size: 1.5em;
  }
}

@media (min-width: 1170px) {
  #product {
    font-size: 2em;
  }
}

.content{
  margin: 10px auto;
  font-family: 'Robonto', Arial, sans-serif;
  text-align: left;
}

.title{
  height: 30px;
}



#search{
  width: 85%;
  height: 30px;
  font-size: 0.8em;
  border: 1px solid #204d74;
  padding: 5px;
  border-radius: 5px;

}

#searchform >button{
  width: 13%;
  height:30px;
  border-radius: 5px;
  border: 1px solid #204d74;
  background: rgba(252, 248, 227, 0.89);
  outline: none;
}


.text-box{
  height: 30px;
  background: none;
  color: black;
  width: 100%;
  padding: 0 12px;
}

.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {
  background: none;
  color: black;    
}
.menu{
  height: 30px;
  padding: 0 5px;
  background: red;
  color: white;
  font-size: 1.1em;
  text-transform: uppercase;
  line-height: 30px;
}
.list-catalogues{
  border: 1px solid rgba(85, 85, 85, 0.18);
}

.dropdown-menu{
  width: 100%;
}
.dropdown-menu-2{
  width: 70%;
}
.list-1, .list-2, .list-3, .list-4{
  padding: 10px;
  list-style-position: inside;
  font-size: 0.8em;
}
.list-1, .list-2, .list-3{

  border-bottom: 1px solid lightblue;
}



.list-1 >ul >li, .list-2 ul >li, .list-3 ul >li, .list-4 ul >li{
  padding: 5px;
}  


  .next-page{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width:425px){
    .menu{
      display: none;
    }
    .sort{
      display: none;
    }
    .menu-xs{
      display: block;
    }
     .list-catalogues{
      display: none;
    }
  }

  @media (min-width: 768px){
     .menu{
      display: block;
      font-size: 0.8em;
    }
     .menu-xs{
      display: none;
    }
    .sort{
      display: block;
    }
    .list-catalogues{
      display: block;
    }
   
    .dropdown >button{
      font-size: 0.5em;
    }
    .list-1, .list-2, .list-3, .list-4{
      font-size: 0.5em;
    }
  }

   @media (min-width: 992px){
    .menu{
      font-size: 1.1em;
    }

    .dropdown >button{
      font-size: 0.8em;
    }
    .list-1, .list-2, .list-3, .list-4{
      font-size: 0.8em;
    }
  }
</style>
