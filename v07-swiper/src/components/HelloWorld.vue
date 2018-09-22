<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>
      <img src="https://img.alicdn.com/tfs/TB1adUBJamWBuNjy1XaXXXCbXXa-1130-500.jpg_q100.jpg_.webp">
    </swiper-slide>
    <swiper-slide>
      <img src="//img.alicdn.com/tps/i4/TB14OOEyYSYBuNjSspfSuwZCpXa.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="//img.alicdn.com/tps/i4/TB1jZnqpqQoBKNjSZJnwu1w9VXa.png">
    </swiper-slide>
    <swiper-slide>
      <img src="//img.alicdn.com/imgextra/i2/181/TB2eTWNprZnBKNjSZFKXXcGOVXa_!!181-0-luban.jpg_q100.jpg_.webp">
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.alicdn.com/simba/img/TB1gWyUkYArBKNjSZFLSuw_dVXa.jpg">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          watchSlidesProgress:true,
          preventClicks:true,
          autoplay: {
            delay: 1000,//1秒切换一次
          },
          loop:true,
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          effect : 'coverflow',

        }

      }

    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
