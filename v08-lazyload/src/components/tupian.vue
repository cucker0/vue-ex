<template>
  <div>
    <img v-lazy="imgObj"/>
    <img v-lazy="imgUrl">
  </div>
</template>

<script>
  export default {
    name: "tupian",
    data(){
      return{
        imgObj: {
          src: 'http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner33.jpg',
          // error: require('../assets/img/error.jpg'),
          // loading:require('../assets/img/loading.gif')
        },
        imgUrl: 'http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner2.jpg',

      }
    }

  }
</script>

<style scoped>

</style>
