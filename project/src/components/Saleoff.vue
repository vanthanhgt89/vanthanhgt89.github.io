<template>
  <div class="container">
      <div class="row">
        <div class="col-sm-6 " v-for="item in data1">
          <div class="container-item">
            <router-link to='detail-product'><img :src="item.src" alt="" class="img-responsive"></router-link>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Saleoff',
  data () {
    return {
      data1: [
        {
          src: require('../assets/sale/1.jpg')
        },
        {
          src: require('../assets/sale/2.png')
        },
        {
          src: require('../assets/sale/3.jpg')
        },
        {
          src: require('../assets/sale/4.jpg')
        },
        {
          src: require('../assets/sale/5.jpg')
        },
        {
          src: require('../assets/sale/6.jpg')
        },
        {
          src: require('../assets/sale/7.jpg')
        },
        {
          src: require('../assets/sale/8.png')
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-item{
  margin: 40px 0;
}
</style>
