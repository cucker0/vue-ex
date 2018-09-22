<template>
    <div>
      post
    </div>
</template>

<script>
  import qs from 'qs'

  export default {
    name: "Posts",
    data() {
      return {
      }
    },
    created(){
      // this.$axios.post('http://www.wwtliu.com/sxtstu/blueberrypai/login.php', qs.stringify({
      //   user_id:'iwen@qq.com',
      //   password:'iwen123',
      //   verification_code:'crfvw'
      // }))
      // this.$axios.post('http://www.wwtliu.com/sxtstu/blueberrypai/login.php', {
      //   user_id:'iwen@qq.com',
      //   password:'iwen123',
      //   verification_code:'crfvw'
      // })
      //   .then(function (res) {
      //     console.log(res.data);
      //   })
      //   .catch(error =>{
      //     console.log(error);
      //   })

      // const url = 'http://api.douban.com/v2/movie/top250'
      const url = this.HOST + '/v2/movie/top250'
      console.log(url);
      this.$axios.get(url,)
        .then(function (res) {
          console.log(res.data);
        })
        .catch(error =>{
          console.log(error);
        })

    }

  }
</script>

<style scoped>

</style>
