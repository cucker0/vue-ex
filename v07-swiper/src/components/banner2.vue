<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner.img">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div><!--左箭头-->
    <div class="swiper-button-next"></div><!--右箭头-->
  </div>
</template>

<script>
  export default {
    name: "banner2",
    created(){
      this.$axios.get('http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php')
        .then(res => {
          this.banners = res.data.banner
        })
        .catch(error =>{
          console.log(error);
        })
    },
    data() {
      return {
        banners: [
          // 'https://img.alicdn.com/tfs/TB1adUBJamWBuNjy1XaXXXCbXXa-1130-500.jpg_q100.jpg_.webp',
          // '//img.alicdn.com/tps/i4/TB14OOEyYSYBuNjSspfSuwZCpXa.jpg',
          // 'https://img.alicdn.com/simba/img/TB1gWyUkYArBKNjSZFLSuw_dVXa.jpg'
        ],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          // some swiper options...
          autoplay: {
            delay: 2000,//1秒切换一次
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
        }
      }
    },
    methods:{
      callback(){

      }
    }
  }
</script>

<style scoped>
.swiper-wrapper{
  width: 900px;
  height: 500px;
}
</style>
