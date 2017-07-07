<template>
  <div class="container contact">


    <div class="row map">
      <div class="col-xs-* col-sm-3 col-md-3">
        <div class="row item">
          <div class="col-xs-4 col-sm-2 contact-icon">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div class="col-xs-8 col-sm-10 contact">
            <h4>Địa chỉ: </h4>
            <p>Số 15 ngõ 15/53</p>
            <p>Quang Tiến - Đại Mỗ</p>
          </div>
        </div>

        <div class="row item">
          <div class="col-xs-4 col-sm-2 contact-icon">
            <i class="fa fa-comments-o" aria-hidden="true"></i>
          </div>
          <div class="col-xs-8 col-sm-10 contact">
            <h4>Liên hệ: </h4>
            <p><i class="fa fa-phone" aria-hidden="true"></i> 0988260505</p>
            <p><i class="fa fa-envelope-o" aria-hidden="true"></i> vanthanhgt89@gmail.com</p>
          </div>
        </div>

        <div class="row item">
          <div class="col-xs-4 col-sm-2 contact-icon">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </div>
          <div class="col-xs-8 col-sm-10 contact">
            <h4>Thời gian làm việc: </h4>
            <p>Thứ 2 - thứ 7: 8AM - 10PM </p>
            <p>CN: 9AM - 8PM</p>
          </div>
        </div>


      </div>
      <div class="col-xs-* col-sm-9 col-md-9">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.696878547986!2d105.75663621448187!3d21.004784493973258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134535d54e23509%3A0xa87351e94830b0!2zMTUgUXVhbmcgVGnhur9uLCBHaWFvIFF1YW5nLCDEkOG6oWkgTeG7lywgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1497926305102" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>

    <div class="row">

        <div class="col-sm-* title-contact">
          <h2>Liện hệ và góp ý</h2>
          <p>Gửi tin nhắn cho chúng tôi</p>
        </div>
         
         <div class="col-sm-* form-contact">
           <input type="text" id="author" placeholder="Họ và tên" name="author">
           <input type="text" id="email" placeholder="Email" name="email">
           <input type="text" id="comment" placeholder="Nội dung" name="comment">
           <button class="btn btn-primary submit">Gửi tin</button>
         </div> 

    </div>

    
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .map{
    margin-top:30px;
  }
  .item{
    margin-top:30px;
  }
  .contact-icon{
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6em;
    color: orange;
    border-right:1px solid black;
  }

  .title-contact{
    width: 25%;
    margin: 30px auto;
    border-top: 4px double rgba(51, 51, 51, 0.56);
    border-bottom: 4px double rgba(51, 51, 51, 0.56);
    text-align: center;
    text-transform: uppercase;
    color: #F08113;
  }
  @media (min-width: 1px){
    .title-contact{
      width: 70%;
    }
  }
  @media (min-width: 425px){
  .title-contact{
    width: 55%;
  }
}

@media (min-width: 768px){
  .title-contact{
    width: 40%;
  }
}

@media (min-width: 992px){
  .title-contact{
    width: 30%;
  }
}

  
  .contact{
    text-align: left;
    font-size: 0.8em;
    text-transform: capitalize;
  }
  input{
    display: block;
    float: left;
    padding: 10px;
    border: 1px solid rgba(51, 51, 51, 0.56);
    background: #f8f8f8;

  }

  .form-contact{
    text-align: center;
  }
  #author{
    width: 48%;
    height: 50px;
    margin-right:4%;
  }

  #email{
    width: 48%;
    height: 50px;
  }

  #comment{
    margin-top:15px;
    width: 100%;
    height: 150px;
  }

  .submit{
    margin-top:15px;
    width: 150px;
  }




</style>
