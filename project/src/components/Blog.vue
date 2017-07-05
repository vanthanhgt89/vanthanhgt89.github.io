<template>
<div class="container-fluid blog-content">
   <div class="container-fluid banner">
    <div id="blog">
    </div>

    <div id="go-down">
      <a href="#about" id="go-about"></a>
    </div>
  </div>


  <div class="container">
    <div class="row blog">
      <button type="button" class="btn btn-basic menu-item" data-slide="myslide"><i class="fa fa-bars" aria-hidden="true"></i> DANH MỤC BÀI VIẾT</button>
      <div class="col-sm-3 col-md-3 nav-left">
        <ul>
          <li>
            <div class="nav-title">
              <h4>Tìm kiếm bài viết</h4>
            </div>
            <form action="" id="nav-form">
              <input type="text" placeholder="Tìm kiếm" id="search">
              <button type="button" class="btn" id="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>
          </li>
          <li>
            <div class="title">
              <h4>Danh mục bài viết</h4>
            </div>
          </li>
          <li v-for="item in list1" class="list1">{{item}}</li>
          <li>
            <div class="title">
              <h4>Bài viết gần đây</h4>
            </div>
          </li>
          <li class="list2" v-for="item in list2">{{item}}</li>

        </ul>
      </div>
      <!-- end nav-blog-->


      <div class="col-sm-9 col-md-9">
        <div class="row">

          <div class="col-sm-6 col-md-6">
            <div class="container-item">
              <div class="img-box">
                <img src="../assets/blog/blog1.jpg" alt="">
              </div>
              <div class="text-left">
                <h4 class="title-blog">{{list2[0]}}</h4>
                <span>by Admin/</span>
                <p>Khi mang thai, hầu hết các bà mẹ đều băn khoăn: Ăn uống như thế nào để thai nhi phát triển tốt? Cần chế ..</p>
              </div>  

            </div>
            <div class="container-item">
              <div class="img-box">
                <img src="../assets/blog/blog2.jpg" alt="">
              </div>
              <div class="text-left">
                <h4 class="title-blog">{{list2[1]}}</h4>
                <span>by Admin/</span>
                <p>Tuần thứ 4 của thai kỳ là thời gian mà bạn có thể bắt đầu nhận ra được việc đã mang thai thông qua ...</p>
              </div>  

            </div>

            <div class="container-item">
              <div class="img-box">
                <img src="../assets/blog/blog3.jpg" alt="">
              </div>
              <div class="text-right">
               <h4 class="title-blog">{{list2[2]}}</h4>
               <span>by Admin/</span>
               <p>Sức khoẻ của mẹ trong thời gian mang thai là vô cùng quan trọng, vì nó có thể ảnh hưởng trực tiếp đến thai nhi, đặc biệt là trong 3 tháng đầu và 3 tháng cuối thai kỳ ...</p>
             </div>  

           </div>
         </div>


         <div class="col-sm-6 col-md-6">
          <div class="container-item">
            <div class="img-box">
              <img src="../assets/blog/blog4.jpg" alt="">
            </div>
            <div class="text-right">
             <h4 class="title-blog">{{list2[3]}}</h4>
             <span>by Admin/</span>
             <p>Sức khoẻ của mẹ trong thời gian mang thai là vô cùng quan trọng, vì nó có thể ảnh hưởng trực tiếp đến thai nhi, đặc biệt  để đảm bảo sức khoẻ cho mẹ ...</p>
           </div>  

         </div>

         <div class="container-item">
           <div class="img-box">
            <img src="../assets/blog/blog5.jpg" alt="">
          </div>
          <div class="text-right">
           <h4 class="title-blog">{{list2[4]}}</h4>
           <span>by Admin/</span>
           <p>Sức khoẻ của mẹ trong thời gian mang thai là vô cùng quan trọng, vì nó có thể ảnh  để đảm bảo sức khoẻ cho mẹ ...</p>
         </div>  

       </div>

       <div class="container-item">
        <div class="img-box">
          <img src="../assets/blog/blog6.jpg" alt="">
        </div>
        <div class="text-right">
         <h4 class="title-blog">{{list2[5]}}</h4>
         <span>by Admin/</span>
         <p>Không ai là hoàn hảo và hiển nhiên khi chúng ta trở thành những bậc cha mẹ  Sau đây là những bức ảnh mà tôi tin chắc rằng bạn phải cười lăn cười bò với những sự cố bất ngờ này. ...</p>
       </div>  


     </div>
   </div>
   <ul class="pagination">
    <li><a href="#">1</a></li>
    <li class="active"><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></li>
  </ul>
</div>   


</div>
<!-- end content blog -->
</div>
</div>
<!-- end blog-->

</div>
</template>

<script>
  export default {
    name: 'hello',
    mounted () {
      window.$('[data-slide="myslide"]').click(function () {
        window.$('.nav-left').animate({
          width: 'toggle'
        }, 350)
      })
    },
    data () {
      return {
        list1: ['Sức khỏe cho mẹ và bé', 'Dinh dưỡng cho bé', 'Phát triển kỹ năng cho trẻ', 'Chăm sóc trẻ', 'Mẹo hay', 'Góc nhìn', 'Tâm sự'],
        list2: ['Dinh dưỡng khi mang thai những điệu mẹ bầu cần biết', 'Mang thai tuần 4 và những điều cần biết', '27 Điều cần biết khi mang bầu', 'Mẹo chữa đâu mắt đỏ hay cho mẹ bầu', 'Bé hay đi nhón bằng đầu ngón chân mắc bệnh gì?', 'Cười rụng rốn với bộ ảnh: Cha mẹ không hoàn hảo']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blog-content{
    background: rgba(85, 85, 85, 0.18);
  }
 .banner {
  position: relative;
  display: flex;
  background-image: url('../assets/blog/blog7.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 400px;

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
    height: 400px;
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

#blog {
  width: 55%;
  font-family: "Courgette", cursive;
  font-size: 2em;
  color: white;
  text-transform: capitalize;
  margin: auto;
}

@media (min-width: 425px) {
  #blog {
    font-size: 0.8em;
  }
}

@media (min-width: 768px) {
  #blog {
    font-size: 1.2em;
  }
}

@media (min-width: 992px) {
  #blog {
    font-size: 2em;
  }
}



.blog{
  margin: 50px auto;
  text-align: left;
}

.nav-left{
  border: 1px solid rgba(157, 157, 157, 0.57);
}

.nav-title{
  color: rgba(51, 122, 183, 0.88);
  margin-top: 20px;
  text-transform: uppercase;
}

#search{
  width: 70%;
  height: 34px;
  padding: 5px;
  border: 1px solid;
  border-radius:4px;
}

#submit{
  width: 20%;
  border: 1px solid;
  border-radius:4px;
}

.title{
  color: rgba(51, 122, 183, 1);
  margin: 20px 0 ;
  border-top: 1px solid;
  border-bottom: 4px double;
  text-transform: uppercase;
}
.title >h4{
  padding: 5px 0;
}

.list1{
  padding: 10px 0;
}

.list2{
  padding: 10px 0;

}

.container-item{
  border-bottom: 3px solid rgba(85, 85, 85, 0.43);
  padding: 20px 0;
} 

.img-box{
  position: relative;
  width: 100%;
  height: 250px;
  z-index: -1;
}

.img-box >img{
  width: 100%;
  height: 250px;
  z-index: -1;
  border-radius: 20px;
}

.text-left{
  z-index: 999;
  padding: 10px;
  width: 80%;
  margin:-30px auto 0 auto;
  background: white;
  text-align: left;

}
.text-right{
  width: 80%;
  padding: 10px;
  margin: auto;
  margin:-30px auto 0 auto;
  background: white;
  text-align: left;

}

.title-blog{
 font-weight: bold;
 color: rgba(51, 122, 183, 0.88);
}


.pagination{
  padding-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
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

.container-item:hover{
 -webkit-box-shadow: 0px 9px 19px 0px rgba(48, 57, 60, 0.75);
 -moz-box-shadow:    0px 9px 19px 0px rgba(48, 57, 60, 0.75);
 box-shadow:         0px 9px 19px 0px rgba(48, 57, 60, 0.75);
}

</style>
