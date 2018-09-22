<template>
  <div>
    <el-carousel :interval="4000" type="card" height="500px" initial-index="2" >
      <el-carousel-item v-for="(img, index) in imgs" :key="index">
        <img :src="img">
      </el-carousel-item>
    </el-carousel>
    <hr>

    <el-carousel indicator-position="outside" height="500px" interval="3000">
      <el-carousel-item v-for="(img, index) in imgs" :key="item">
        <img :src="img">
      </el-carousel-item>
    </el-carousel>


    <p></p>

  </div>
</template>

<script>
  export default {
    name: "banar",
    data(){
      return{
        imgs:[
          "https://img.alicdn.com/tfs/TB1adUBJamWBuNjy1XaXXXCbXXa-1130-500.jpg_q100.jpg_.webp",
          "//img.alicdn.com/tps/i4/TB14OOEyYSYBuNjSspfSuwZCpXa.jpg",
          "//img.alicdn.com/imgextra/i2/181/TB2eTWNprZnBKNjSZFKXXcGOVXa_!!181-0-luban.jpg_q100.jpg_.webp",
          "https://img.alicdn.com/simba/img/TB1gWyUkYArBKNjSZFLSuw_dVXa.jpg",
          "//img.alicdn.com/tps/i4/TB1jZnqpqQoBKNjSZJnwu1w9VXa.png"
        ]
      }
    }
  }
</script>

<style scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 1180px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }



  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__container img {
    width: 1180px;
    height: 500px;
  }


</style>
